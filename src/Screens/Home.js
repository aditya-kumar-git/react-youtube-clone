import React from "react"
import "../Style/style.css"
import YoutubeIcon from "../Components/YoutubeIcon"
import CategoryBlock from "../Components/CategoryBlock"
import { connect } from "react-redux"
import { homeTechAc, homeComedyAc, homeGameAc } from "../Redux/Actions"
import SearchBar from "../Components/SearchBar"
import gsap from "gsap"

class Home extends React.Component {
  componentDidMount() {
    if (this.props.techVideos.length === 0) {
      this.props.homeTechAc()
    }
    if (this.props.comedyVideos.length === 0) {
      this.props.homeComedyAc()
    }
    if (this.props.gameVideos.length === 0) {
      this.props.homeGameAc()
    }

    var tl = gsap.timeline()

    tl.from(`.mainLogo`, { duration: 1, y: "100%", opacity: 0, delay: 1 })
    tl.from(`.Banner`, { duration: 1, height: "100vh" })
    tl.from(`.searchForm`, { duration: 1, y: "100%", opacity: 0 })
  }
  componentDidUpdate() {
    if (this.props.changePage === "search") {
      this.props.changePageAction("home")
    }
  }

  render() {
    var renderORnot = () => {
      if (
        this.props.techVideos.length !== 0 &&
        this.props.comedyVideos.length !== 0 &&
        this.props.gameVideos.length !== 0
      ) {
        return (
          <div>
            <CategoryBlock name="Tech" data={this.props.techVideos} />
            <CategoryBlock name="Comedy" data={this.props.comedyVideos} />
            <CategoryBlock name="Gaming" data={this.props.gameVideos} />
          </div>
        )
      }
    }

    // !RETURN
    return (
      <div className="Home">
        <div className="Banner">
          {/* //!LOGO */}
          <YoutubeIcon />
        </div>
        <SearchBar />

        {/* //@CATEGORY VODEOS */}

        {renderORnot()}
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {
  homeTechAc,
  homeGameAc,
  homeComedyAc,
})(Home)

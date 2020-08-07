import React from "react"
import YoutubeIcon from "../Components/YoutubeIcon"
import SearchBar from "../Components/SearchBar"
import { connect } from "react-redux"

class VideoPlayer extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }

  render() {
    var { fullVideo } = this.props

    var renderVIDEO = () => {
      return (
        <div className="vidDetail">
          <iframe
            allowFullScreen
            title="Video"
            className="videoPlayer"
            src={`https://www.youtube.com/embed/${this.props.match.params.id}`}
          ></iframe>
          <div className="videoDetailText">{this.props.match.params.name}</div>
        </div>
      )
    }

    return (
      <div>
        <div className="Banner">
          {/* //!LOGO */}
          <YoutubeIcon />
        </div>
        <SearchBar />

        {renderVIDEO()}
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(VideoPlayer)

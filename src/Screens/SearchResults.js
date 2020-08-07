import React from "react"
import YoutubeIcon from "../Components/YoutubeIcon"
import SearchBar from "../Components/SearchBar"
import SearchVideoBlock from "../Components/SearchVideoBlock"
import { connect } from "react-redux"

class SearchResults extends React.Component {
  render() {
    var renderVideos = () => {
      if (this.props.searchVideos.length !== 0) {
        return this.props.searchVideos.map((x) => {
          return <SearchVideoBlock key={x.etag} allData={x} />
        })
      } else {
        return null
      }
    }

    return (
      <div>
        <div className="Banner">
          {/* //!LOGO */}

          <YoutubeIcon />
        </div>
        <SearchBar />

        {/* //!SEARCH RESULS */}

        {renderVideos()}
      </div>
    )
  }
}

var mapToState = (state) => {
  return state
}

export default connect(mapToState)(SearchResults)

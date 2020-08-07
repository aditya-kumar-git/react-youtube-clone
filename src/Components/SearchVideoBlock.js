import React from "react"
import { Link } from "react-router-dom"

class SearchVideoBlock extends React.Component {
  render() {
    var { allData } = this.props

    var channelORvideo = () => {
      if (allData.id.kind === "youtube#video") {
        return (
          <Link to={`/player/${allData.id.videoId}/${allData.snippet.title}`}>
            <div className="searchVideoCon">
              <div className="searchELE">
                <img
                  className="searchVideo "
                  src={allData.snippet.thumbnails.high.url}
                  alt={allData.snippet.title}
                />
              </div>
              <div className="searchVideoConData">
                <div className="searchTitle">{allData.snippet.title}</div>
                <div className="searchChannelTitle">
                  {allData.snippet.channelTitle}
                </div>
                {/* //@DESCP */}
                <div className="searchDesc">{allData.snippet.description}</div>
              </div>
            </div>
          </Link>
        )
      } else {
        return (
          <div className="searchVideoCon">
            <img
              className="searchChannel "
              src={allData.snippet.thumbnails.high.url}
              alt={allData.snippet.title}
            />
            <div className="searchTitle searchTitleChannel searchVideoConData">
              {allData.snippet.title}
            </div>
          </div>
        )
      }
    }

    return <div className="searchVideoBlock">{channelORvideo()}</div>
  }
}

export default SearchVideoBlock

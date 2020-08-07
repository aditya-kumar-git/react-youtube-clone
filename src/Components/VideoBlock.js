import React from "react"
import { Link } from "react-router-dom"

class VideoBlock extends React.Component {
  render() {
    var { allData } = this.props

    return (
      <Link to={`/player/${allData.id.videoId}/${allData.snippet.title}`}>
        <div className="videoBlock">
          <img
            src={allData.snippet.thumbnails.high.url}
            alt={allData.snippet.title}
            className="videoBlockVID"
          />

          <div className="videoBlockTXT">{allData.snippet.title}</div>
        </div>
      </Link>
    )
  }
}

export default VideoBlock

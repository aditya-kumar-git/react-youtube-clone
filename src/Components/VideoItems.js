import React from "react"
import "./videoItem.css"

class VideoItem extends React.Component {
  constructor(props) {
    super(props)
    this.channelLogoref = React.createRef()
  }
  componentDidMount() {
    if (this.props.data.id.kind === "youtube#channel") {
      this.channelLogoref.current.style.borderRadius = "50%"
    }
  }
  render() {
    return (
      <div
        onClick={() => {
          if (this.props.data.id.kind === "youtube#channel") {
            console.log("It's a channel")
          } else {
            this.props.onVideoSelect(this.props.data)
          }
        }}
        className="videoItem"
      >
        <div className="thumbnail">
          <img
            ref={this.channelLogoref}
            src={this.props.data.snippet.thumbnails.medium.url}
            alt=""
          />
        </div>
        <div className="videoInfo">
          <div className="infoContiner">
            <div className="title">{this.props.data.snippet.title}</div>
            <div className="channeltitle">
              {this.props.data.snippet.channelTitle}
            </div>
            <div className="descp">{this.props.data.snippet.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItem

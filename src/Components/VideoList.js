import React from "react"
import VideoItem from "./VideoItems"

class VideoList extends React.Component {
  state = {
    renderedList: [],
  }
  componentDidUpdate(preProp) {
    if (preProp !== this.props) {
      this.setState({
        renderedList: this.props.videos.map((videoDetails) => {
          return (
            <VideoItem
              onVideoSelect={this.props.onVideoSlect}
              data={videoDetails}
              key={videoDetails.etag}
            />
          )
        }),
      })
    }
  }
  /*
	state = {
		videolistVideos: []
	}
	componentDidUpdate(preProp) {
		if (preProp !== this.props) {
			this.setState({
				videolistVideos: this.props.videos.map((x) => {
					return (
						<div key={x.etag}>
							<img src={x.snippet.thumbnails.high.url} alt="" />
							<div>{x.snippet.title}</div>
						</div>
					)
				})
			})
		}
	}
	*/
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        {this.state.renderedList}
      </div>
    )
  }
}

export default VideoList

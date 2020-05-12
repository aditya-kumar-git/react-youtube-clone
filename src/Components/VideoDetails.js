import React from "react"

class VideoDetails extends React.Component {
	render() {
		if (this.props.data != null) {
			return (
				<div className="vidDetail">
					<iframe
						allowFullScreen
						title="Video"
						className="videoPlayer"
						src={`https://www.youtube.com/embed/${this.props.data.id.videoId}`}
					></iframe>
					<div className="videoDetailText">{this.props.data.snippet.title}</div>
				</div>
			)
		} else {
			return <div></div>
		}
	}
}
export default VideoDetails

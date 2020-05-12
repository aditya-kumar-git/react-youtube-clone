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
					this.props.onVideoSelect(this.props.data)
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
						<div style={{ fontSize: "1.6vw", fontWeight: "bold" }}>
							{this.props.data.snippet.title}
						</div>
						<div
							style={{
								fontSize: "0.8vw",
								color: "white",
								fontWeight: "lighter"
							}}
						>
							{this.props.data.snippet.channelTitle}
						</div>
						<div style={{ fontSize: "1vw" }}>
							{this.props.data.snippet.description}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VideoItem

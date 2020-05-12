import React from "react"
import SearchBar from "./SearchBar"
import VideoDetails from "./VideoDetails"

import VideoList from "./VideoList"
import Axios from "axios"
var KEY = "AIzaSyBHbfi4UpUO42TGI0moBHvN5fjNEc6YM28"
class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	}
	onTermSubmit = async (term) => {
		var apiReq = await Axios.get(
			"https://www.googleapis.com/youtube/v3/search",
			{
				params: {
					q: term,
					part: "snippet",
					maxResults: 10,
					key: KEY
				}
			}
		)

		console.log(apiReq.data.items)

		this.setState({
			videos: apiReq.data.items
		})

		if (this.state.selectedVideo) {
			this.setState({
				selectedVideo: null
			})
		}
	}
	onVideoSelect = (video) => {
		console.log(video)
		this.setState({
			selectedVideo: video
		})
	}

	render() {
		return (
			<div>
				<SearchBar FormSubmit={this.onTermSubmit} />
				<VideoDetails data={this.state.selectedVideo} />
				<VideoList
					style={{ backgroundColor: "#181818" }}
					videos={this.state.videos}
					onVideoSlect={this.onVideoSelect}
				/>
			</div>
		)
	}
}

export default App

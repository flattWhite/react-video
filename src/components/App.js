import React from "react";
import SearchBar from "./SearchBar.js";
import youtube from "../apis/youtube.js";
import VideoDetail from "./VideoDetail.js";
import VideoList from "./VideoList.js";

class App extends React.Component {
	state = { videos: [] };

	onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term
			}
		});

		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoDetail />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;

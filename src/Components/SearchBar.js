import React from "react"

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}
	state = {
		searchTerm: ""
	}
	onInputChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}
	onFormSubmit = (event) => {
		event.preventDefault()
		//console.log(this.inputRef.current.value)
		this.props.FormSubmit(this.state.searchTerm)
	}
	render() {
		return (
			<div
				style={{
					margin: "none",
					backgroundColor: "#202020",
					padding: "10px",
					color: "white",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: "0px 5px 10px black"
				}}
			>
				<div style={{ fontSize: "4vw" }}>YouTube</div>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "10px",
						borderRadius: "10px",
						width: "40vw"
					}}
					onSubmit={this.onFormSubmit}
					action=""
				>
					<input
						style={{
							borderRadius: "5px",
							backgroundColor: "black",
							color: "white",
							border: "none",
							height: "3vh",
							padding: "5px",
							outline: "none"
						}}
						placeholder="Search"
						ref={this.inputRef}
						onChange={this.onInputChange}
						value={this.state.searchTerm}
						type="text"
						name=""
						id=""
					/>
				</form>
			</div>
		)
	}
}

export default SearchBar

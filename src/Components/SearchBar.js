import React from "react"
import { connect } from "react-redux"
import { searchChange, searchResult } from "../Redux/Actions"
import { Link } from "react-router-dom"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this._searchBar = React.createRef()
  }
  state = {
    toSearch: false,
  }

  render() {
    return (
      <form
        className="searchForm"
        onSubmit={(x) => {
          x.preventDefault()
        }}
      >
        <input
          ref={this._searchBar}
          value={this.props.inputValue}
          onChange={(x) => {
            if (x.target.value !== " ") {
              return this.props.searchChange(x.target.value)
            }
          }}
          className="searchBar"
        />
        {/* //!SEARCH BUTTON */}
        <Link to="/search">
          <div
            className="searchButton"
            onClick={() => {
              this.props.searchResult(this._searchBar.current.value)
            }}
          >
            <svg viewBox="0 0 512.005 512.005">
              <path
                d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
              S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
              c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
              M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
              />
            </svg>
          </div>
        </Link>
      </form>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {
  searchChange,
  searchResult,
})(SearchBar)

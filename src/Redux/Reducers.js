const { combineReducers } = require("redux")

var techVideos = (iniState = [], action) => {
  switch (action.type) {
    case `TECH`:
      return action.payload

    default:
      return iniState
  }
}
var comedyVideos = (iniState = [], action) => {
  switch (action.type) {
    case `COMEDY`:
      return action.payload

    default:
      return iniState
  }
}
var gameVideos = (iniState = [], action) => {
  switch (action.type) {
    case `GAME`:
      return action.payload

    default:
      return iniState
  }
}

// !SEARCH BAR

var inputValue = (iniState = "", action) => {
  switch (action.type) {
    case `SEARCH`:
      return action.payload

    default:
      return iniState
  }
}

//! SEARCH RESULTS

var searchVideos = (iniState = [], action) => {
  switch (action.type) {
    case `SERCHRESULT`:
      return action.payload

    default:
      return iniState
  }
}

//!FULLSCREEN VIDEO

var fullVideo = (iniState = [], action) => {
  switch (action.type) {
    case "FULL":
      return action.payload

    default:
      return iniState
  }
}

var allReducers = combineReducers({
  techVideos,
  comedyVideos,
  gameVideos,
  searchVideos,
  inputValue,
  fullVideo,
})

export default allReducers

const { default: Axios } = require("axios")
var KEY = "AIzaSyDwd0DXPCN5K9Jq63sY8HLPMuxx7sKaXlI"

export var homeTechAc = () => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: "tech", part: "snippet", maxResults: 10, key: KEY },
      })

      // console.log(output.data.items)
      dispatch({
        type: "TECH",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export var homeComedyAc = () => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: "comedy", part: "snippet", maxResults: 10, key: KEY },
      })

      // console.log(output.data.items)
      dispatch({
        type: "COMEDY",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export var homeGameAc = () => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: "gaming", part: "snippet", maxResults: 10, key: KEY },
      })

      // console.log(output.data.items)
      dispatch({
        type: "GAME",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export var searchChange = (x) => {
  return {
    type: "SEARCH",
    payload: x,
  }
}

export var searchResult = (searchData) => {
  return async (dispatch) => {
    try {
      var output = await Axios({
        url: "https://www.googleapis.com/youtube/v3/search",
        params: { q: searchData, part: "snippet", maxResults: 10, key: KEY },
      })

      // console.log(output.data.items)
      dispatch({
        type: "SERCHRESULT",
        payload: output.data.items,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

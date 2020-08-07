import React from "react"
import ReactDOM from "react-dom"
import Home from "../src/Screens/Home"
import SearchResults from "../src/Screens/SearchResults"
import VideoPlayer from "../src/Screens/VideoPlayer"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import myStore from "./Redux/Store"
import { BrowserRouter, Route } from "react-router-dom"
ReactDOM.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <React.StrictMode>
        {/* <Home /> */}
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchResults} />
        <Route path="/player/:id/:name" component={VideoPlayer} />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from "react"
import VideoBlock from "./VideoBlock"

class CategoryBlock extends React.Component {
  render() {
    var renderThis = () => {
      return this.props.data.map((x) => {
        if (x.id.kind !== "youtube#channel") {
          return <VideoBlock key={x.etag} allData={x} />
        } else {
          return null
        }
      })
    }

    //!RETURN
    return (
      <div>
        {/* //@ CATEGORY NAME */}

        <div className="catTitle">{this.props.name}</div>
        <div className="divider"></div>
        <div className="catVideos">{renderThis()}</div>
      </div>
    )
  }
}

export default CategoryBlock

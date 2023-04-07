import React from "react"

export default function Images(props) {
    return (
        <div className="image-frame">
            <img src={require(`../images/${props.data.image}`)} alt="gallery" />
        </div>
    )

}
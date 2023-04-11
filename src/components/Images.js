import React from "react"

export default function Images(props) {
    const [zoomImage, setZoomImage] = React.useState(false)
    function handleZoomImage() {
        setZoomImage(prevState => !prevState)
    }

    return (
        <div className={zoomImage ? "image-frame-zoom" : "image-frame"} 
            onMouseEnter={handleZoomImage} onMouseLeave={handleZoomImage}>
            <img src={require(`../images/${props.data.image}`)} alt="gallery" />
            <p className="view-image-message">Click to view image</p> 
            
        </div>
    )

}
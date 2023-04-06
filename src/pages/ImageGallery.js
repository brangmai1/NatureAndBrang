import React from "react";
//import Header from "../components/Header";
import Images from '../components/Images';
import TravellingData from "../components/TravellingData";
import Footer from "../components/Footer"

export default function ImageGallery() {
    const images = TravellingData.map( data => 
        <Images key = {data.id} data = {data} />
    )
    return (
        <div className = "image-gallery-page">
            <h1>Image Gallery</h1>
            <div className="image-gallery-grid">            
                {images}
            </div>
            <Footer />
        </div>
        
    )
}
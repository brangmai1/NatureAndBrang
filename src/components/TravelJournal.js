import React from "react";
import locationIcon from "../images/icons/location-icon.webp"

export default function TravelJournal(props) {
    return (
        <div className="travel-journal">
            <div className="journal-left">
                <img className="travel-image" src={require(`../images/${props.data.image}`)} alt="location"></img>
                <section className="location-info">
                    <img className="location-info--icon" src={locationIcon}alt="location-icon"></img>
                    <h5 className="location-info--country">{props.data.location}</h5>
                    <a className="location-info--map" href={props.data.googleMap} target="_blank" rel="noreferrer">View on Google Maps</a>
                </section>
            </div>            
            <section  className="travel-memo">
                <h2>{props.data.placeName}</h2>
                <h5>{props.data.date}</h5>
                <p>{props.data.note}</p>
            </section>            
        </div>

    )
}
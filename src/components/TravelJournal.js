import React from "react";
import locationIcon from "../images/location-icon.webp"

export default function TravelJournal(props) {
    return (
        <div className="travel-journal">
            <img className="travel-image" src={require(`../images/${props.data.image}`)} alt="location"></img>
            <article className="travel-info">
                <section className="location-info">
                    <img className="location-info--symbol" src={locationIcon}alt="location-icon"></img>
                    <h5 className="location-info--country">{props.data.location}</h5>
                    <a className="location-info--map" href="https://www.google.com" target="_blank">View on Google Maps</a>
                </section>
                <section  className="travel-memo">
                    <h2>{props.data.placeName}</h2>
                    <h5>{props.data.date}</h5>
                    <p>{props.data.note}</p>
                </section>
            </article>

        </div>

    )
}
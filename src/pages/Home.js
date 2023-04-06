import React from 'react'
import '../styles/App.css';
//import Header from "../components/Header";
import PhotoGrid from "../components/PhotoGrid";
import TravelJournal from '../components/TravelJournal';
import TravellingData from "../components/TravellingData";
import Footer from '../components/Footer';

export default function Home(){
    const travellingData = TravellingData.map( data => 
      <TravelJournal 
        key={data.id}
        data = {data}
      />)
    return (
      <div className="App">
        {/* <Header /> */}
        <PhotoGrid />
        { travellingData }
        <Footer />
      </div>
    );
}
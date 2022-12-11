import './App.css';
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import TravelJournal from './components/TravelJournal';
import TravellingData from "./components/TravellingData";

function App() {
  const travellingData = TravellingData.map( data => 
    <TravelJournal 
      key={data.id}
      data = {data}
    />)
  return (
    <div className="App">
      <Header />
      <PhotoGrid />
      { travellingData }
    </div>
  );
}

export default App;

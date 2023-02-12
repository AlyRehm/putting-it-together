
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={ "Alyson" }
        lastName={ "Rehm" }
        currentAge={ 34 }
        hairColor={ "Ash Brown" } />

      <PersonCard 
        firstName={ "Andrew" }
        lastName={ "Sanders" }
        currentAge={ 33 }
        hairColor={ "Dirty Blonde" } />

      <PersonCard 
        firstName={ "Callie" }
        lastName={ "Anne" }
        currentAge={ 12 }
        hairColor={ "White with Black Spots" } />

      <PersonCard 
        firstName={ "Panda" }
        lastName={ "Pony" }
        currentAge={ 13 }
        hairColor={ "Black & White Paint" } />
    </div>
  );
}

export default App;

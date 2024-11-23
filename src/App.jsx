import React ,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route,Router} from 'react-router-dom'
import UserForm from './UserForm'
import Header from './Header'
import Results from './Results'
import { UserProvider } from './UserContext'
import ReactDOM from 'react-dom'; 
import Question from './Question'
function App() {
  const [count, setCount] = useState(0);
  const[currentQuestionIndex,setQuestionIndex]=useState(0); 
const[answers,setAnswers]=useState([]);
const[element,setElement]=useState('');
const[userName,setUserName]=useState('');

const[artwork,setArtwork]=useState(null);
  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },{
      question:"What's your favorite animal?",
      options:['Tiger 🐅','Elephant 🐘','Dolphin 🐬','Panda 🐼'],
    },{
      question:'What is your favorite element?',
      options:['Fire 🔥','Water 💧','Earth 🌍','Air 🌬️']
   
    },{
      question:'what is your favourite season?',
      options:['Summer ☀️','Winter ❄️','Spring 🌸','Autumn 🍂']

    }
  ];
  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  
  };
  const elements = {
    "Fire 🔥": "Fire",
    "Water 💧": "Water",
    "Earth 🌍": "Earth",
    "Air 🌬️": "Air",
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
   "Yellow 🟡":'Air',
    "Green 🟢": "Earth",
    "Tiger 🐅": "Fire",
    "Elephant 🐘": "Earth",
    "Dolphin 🐬": "Water",
    "Panda 🐼": "Air",
    "Summer ☀️": "Fire",
    "Winter ❄️": "Water",
    "Spring 🌸": "Earth",
    "Autumn 🍂": "Air"
  }
  function handleAnswer(answer){
    setAnswers([...answers, answer]);
    setQuestionIndex(currentQuestionIndex + 1);
  };
  function determineElement(answers) {
    const counts = {};
    answers.forEach(function(answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function(a, b) {
      return counts[a] > counts[b] ? a : b
    });
  };
  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        setArtwork(keywords[selectedElement]);
       async function fetchArtwork() {
          const response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${selectedElement}`
          );
          const data = await response.json();
          const objectIDs = data.objectIDs;
          if (objectIDs.length) {
            const randomObjectID =
              objectIDs[Math.floor(Math.random() * objectIDs.length)];
            const artworkResponse = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`
            );
            const artworkData = await artworkResponse.json();
            setArtwork(artworkData);
          } else {
            setArtwork(null);
          }
        } 
      }
    },
    [currentQuestionIndex]
  );
  return (
    <div className='App'>
    <Header/>
   <UserProvider>
   
   <Routes>
  <Route path="/" element={<UserForm />} />
  <Route
    path="/quiz"
    element={
      currentQuestionIndex < questions.length ? (
        <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} onAnswer={handleAnswer} />
      ) : (
        <Results element={element}  />
      )
    }
  />
</Routes>
    </UserProvider>
    </div>
  )
}

export default App

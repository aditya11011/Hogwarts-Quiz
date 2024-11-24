import React from "react";
const[answers,setAnswers]=useState([]);
const[element,setElement]=useState('');

export default function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map(function (option) {
        return (
          <button
            key={option}
            onClick={function () {
              onAnswer(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
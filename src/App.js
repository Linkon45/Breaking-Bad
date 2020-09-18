import React, { useState, useEffect } from 'react';
import './App.css';
import ShowData from './ShowData';

function App() {

  const [search, setSearch] = useState('');
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    getData();
  }, [search]);


  const getData = async () => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${search}`);
    const data = await response.json();
    console.log(data);
    setCharacter(data);
  }


  const searchUpdate = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={searchUpdate}></input>
      <button>Search</button>


      {character.map(char => (
        <ShowData
        name={char.name}
        nickname={char.nickname}
        status={char.status}
        img={char.img}
        birthday={char.birthday}
        key={char.char_id}
        />
      ))}


    </div>
  );
}

export default App;

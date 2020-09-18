import React, { useState, useEffect } from 'react';
import './App.css';
import ShowData from './ShowData';
import logo from './img/logo.png'

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

      <header className="center">
        <img src={logo}></img>
      </header>

      <section className="search">
        <form>
          <input type="text" className="form-control" placeholder="Search Characters" autofocus onChange={searchUpdate}></input>
        </form>

      </section>


      <section className="cards">
        {character.map(char => (
          <ShowData
            name={char.name}
            nickname={char.nickname}
            portrayed={char.portrayed}
            status={char.status}
            img={char.img}
            birthday={char.birthday}
            key={char.char_id}
          />
        ))}
      </section>



    </div>
  );
}

export default App;

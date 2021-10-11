import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import Form from './Form';
import CharacterList from './CharacterList';

// Fichero src/components/App.js

// import { Link, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const filteredCharacter = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  // Funcion que coge el nombre del input y podamos filtrar
  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
    console.log(ev.currentTarget.value);
  };
  // const renderCharacters = () => {
  //   return data;
  // };
  return (
    <div>
      <h1>
        Harry Potter y animales fantásticos<span> wiki</span>
      </h1>
      <Form searchName={searchName} handleSearchName={handleSearchName} />
      <ul>
        <h2>Listado de personajes</h2>
        <CharacterList data={filteredCharacter} searchName={searchName} />
        <li>
          Tarjeta que incluirá:
          <p>Nombre</p>
          <p>
            Descripción del personaje con su año de nacimiento y muerte ( y si
            muere por causa natural o asesinado por algún mago)
          </p>
          <p>
            Descripción física: especie, género, estatura, color de pelo, color
            de ojos, color de piel
          </p>
          <p>Foto</p>
          <p>Mascota si tenia</p>
          <p>Casa de hogwarts o de magia</p>
          <p>Patronus</p>
        </li>
      </ul>
      {/* <Route path='/contacto'></Route> */}
      {/* <nav>
        <ul>
          <li>
            <Link to='/'></Link>
          </li>
          <li>
            <Link to='/contacto'></Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default App;

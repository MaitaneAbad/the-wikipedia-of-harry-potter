import '../styles/App.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import Form from './Form';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import FormButton from './FormButton';
import QuizHat from './QuizHat';

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

  const routeData = useRouteMatch('/quiz/:id');
  const buttonId = routeData !== null ? routeData.params.id : '';
  const selectedButton = data.find((data) => data.id === parseInt(buttonId));
  // const routeDataCharacter = useRouteMatch('/character/:id');
  // const characterId = routeDataCharacter !== null ? routeData.params.id : '';
  // const characterDetail = data.find(
  //   (data) => data.id === parseInt(characterId)
  // );

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
      <Header />
      <Switch />
      <Route exact path='/quiz/'>
        <QuizHat quiz={selectedButton} />
      </Route>
      {/* <Route path='/character/:id'>
        <CharacterDetail character={characterDetail} />
      </Route> */}
      <Route exact path='/'>
        <Form searchName={searchName} handleSearchName={handleSearchName} />
        <CharacterList data={filteredCharacter} searchName={searchName} />
        <FormButton data={filteredCharacter} />
        {/* <li>
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
        </li> */}
        {/* <NotFoundPage />*/}
      </Route>
      <Switch />
      <Footer />
    </div>
  );
};

export default App;

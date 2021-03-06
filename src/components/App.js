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
import CharacterDetail from './CharacterDetail';
import SoundMusic from './SoundMusic.js';
import ls from '../services/localStorage.js';

const App = () => {
  const [data, setData] = useState(ls.get('data', []));
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    ls.set('data', data);
  }, [data]);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  const routeDataCharacter = useRouteMatch('/character/:id');
  const characterId =
    routeDataCharacter !== null ? routeDataCharacter.params.id : '';
  const characterDetail = data.find(
    (data) => data.id === parseInt(characterId)
  );

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
      <SoundMusic />
      <Switch>
        <Route path='/quiz'>
          <QuizHat />
          <Footer />
        </Route>
        <Route path='/character/:id/'>
          <CharacterDetail character={characterDetail} />
        </Route>
        <Route exact path='/'>
          <main className='main'>
            <Form searchName={searchName} handleSearchName={handleSearchName} />
            <CharacterList data={filteredCharacter} searchName={searchName} />
            <FormButton data={filteredCharacter} id='quiz' />
            <Footer />
          </main>
        </Route>
      </Switch>
    </div>
  );
};

export default App;

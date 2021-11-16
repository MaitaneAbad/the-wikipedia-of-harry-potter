import '../styles/layout/formHat.scss';
import FirstQuestion from './quiz/FirstQuestion';
import SecondQuestion from './quiz/SecondQuestion';
import ThirdQuestion from './quiz/ThirdQuestion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CharacterDetail = (props) => {
  const [classroom, setClassroom] = useState(' ');
  const [pet, setPet] = useState(' ');
  const [invention, setInvention] = useState('');

  const handlePet = (ev) => {
    setPet(ev.target.value);
  };

  const handleclassroom = (ev) => {
    setClassroom(ev.target.value);
  };

  // Creamos la función manejadora
  const handleInvention = (ev) => {
    // En la que guardamos el valor del input en size con setSize
    setInvention(ev.target.value);
  };

  return (
    <main>
      <Link to='/' className='characterDetail'>
        <p>Volver atrás</p>
      </Link>
      <form className='formHat'>
        <FirstQuestion handlePet={handlePet} pet={pet} />
        <SecondQuestion
          handleclassroom={handleclassroom}
          classroom={classroom}
        />
        <ThirdQuestion
          handleInvention={handleInvention}
          invention={invention}
        />
      </form>
    </main>
  );
};
export default CharacterDetail;

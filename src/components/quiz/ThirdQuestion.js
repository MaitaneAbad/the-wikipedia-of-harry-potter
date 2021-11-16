import { useState } from 'react';
import '../../styles/layout/formHat.scss';
const ThirdQuestion = () => {
  const [invention, setInvention] = useState('');
  // Creamos la función manejadora
  const handleInvention = (ev) => {
    // En la que guardamos el valor del input en size con setSize
    setInvention(ev.target.value);
  };
  return (
    <>
      <p>3ª</p>
      {/* <img src={classroom} /> */}
      <label htmlFor='invention'>
        ¿Cuál te parece el mejor invento de sortilegios Weasley?
      </label>
      <label htmlFor='invention1'>
        Turrón de hemorragia nasal
        <input
          className='input'
          type='radio'
          id='invention1'
          name='invention'
          value='Turrón de hemorragia nasal'
          onChange={handleInvention}
        />
      </label>
      <label htmlFor='invention2'>
        Orejas extensibles
        <input
          className='input'
          type='radio'
          id='invention2'
          name='invention'
          value='Orejas extensibles'
          onChange={handleInvention}
        />
      </label>
      <label htmlFor='invention3'>
        Pantano portátil
        <input
          className='input'
          type='radio'
          id='invention3'
          name='invention'
          value='Pantano portátil'
          onChange={handleInvention}
        />
      </label>
      <label htmlFor='invention4'>
        Filtro de amor
        <input
          className='input'
          type='radio'
          id='invention4'
          name='invention'
          value='Filtro de amor'
          onChange={handleInvention}
        />
      </label>
    </>
  );
};
export default ThirdQuestion;

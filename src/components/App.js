import '../styles/App.scss';

// Fichero src/components/App.js

// import { Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>
        {' '}
        Harry Potter y animales fantásticos<span> wiki</span>{' '}
      </h1>
      <form>
        <label>
          Buscador:
          <input
            type='text'
            placeholder='Ej. Minerva McGonagall
'
          />
        </label>
      </form>
      <ul>
        <h2>Listado de personajes</h2>
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
          <p>Casa de hogwarts</p>
          <p>Hechizos favoritos</p>
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

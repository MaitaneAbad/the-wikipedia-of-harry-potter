import owl from '../../images/owl.jpg';
import rat from '../../images/rat.jpg';
import toad from '../../images/toad.jpg';
import cat from '../../images/cat.jpg';
import img from '../../images/admitido.gif';

const FirstQuestion = (props) => {
  return (
    <>
      <p>1ª</p>
      <label>
        <img src={img} />
        Si fueras admitido en Howarts... ¿Que mascota elegirias?
      </label>
      <button>
        <img
          className='img'
          src={owl}
          alt='imagen de una lechuza'
          title='imagen de una lechuza'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={rat}
          alt='imagen de una rata'
          title='imagen de una rata'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={cat}
          alt='imagen de una gato'
          title='imagen de una gato'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={toad}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
    </>
  );
};
export default FirstQuestion;

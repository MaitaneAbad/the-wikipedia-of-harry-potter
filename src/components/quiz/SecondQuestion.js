import classroom from '../../images/class.gif';
import defence from '../../images/defence.gif';
import herbology from '../../images/herbology.gif';
import divination from '../../images/divination.gif';
import magicalCriatures from '../../images/magicalCreatures.gif';
import potions from '../../images/potions.gif';

const SecondQuestion = () => {
  return (
    <>
      <p>2ª</p>
      <img src={classroom} />
      <label>¿Cuál sería tu clase favorita?</label>
      <button>
        <img
          className='img'
          src={defence}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={herbology}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={divination}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={magicalCriatures}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
      <button>
        <img
          className='img'
          src={potions}
          alt='imagen de una sapo'
          title='imagen de una sapo'
        ></img>
      </button>
    </>
  );
};
export default SecondQuestion;

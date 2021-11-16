import '../styles/layout/formHat.scss';
import FirstQuestion from './quiz/FirstQuestion';
import SecondQuestion from './quiz/SecondQuestion';
import ThirdQuestion from './quiz/ThirdQuestion';
import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
  return (
    <main>
      <Link to='/' className='characterDetail'>
        <p>Volver atrás</p>
      </Link>
      <form>
        <FirstQuestion />
        <SecondQuestion />
        <ThirdQuestion />
      </form>
    </main>
  );
};
export default CharacterDetail;

import { Link } from 'react-router-dom';
import recorder from '../images/recorder.png';
const CharacterCard = (props) => {
  return (
    <div>
      <Link
        to={`/character/${props.characterData.id}`}
        className='sectionList__list--characterLi__link'
      >
        <img
          className='sectionList__list--characterLi__link--img'
          src={props.characterData.img}
          alt={`Foto de: ${props.characterData.name}`}
          title={`Foto de: ${props.characterData.name}`}
        />

        <div className='sectionList__list--characterLi__link--containerData'>
          <h2 className='sectionList__list--characterLi__link--containerData__name'>
            {props.characterData.name}
          </h2>
          <img
            className='sectionList__list--characterLi__link--paragraph'
            src={recorder}
            title='Para más informacion, pinche la recordadora'
            alt='Para más informacion, imagen de una recordadora'
          />
        </div>
      </Link>
    </div>
  );
};
export default CharacterCard;

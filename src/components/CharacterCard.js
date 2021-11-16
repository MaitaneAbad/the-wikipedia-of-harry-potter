import '../styles/layout/characterList.scss';
import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  const listChildren = props.characterData.children.map((children) => {
    return (
      <li key={children}>
        <p>{children}</p>
      </li>
    );
  });
  return (
    <Link to={`./character/${props.characterData.id}`}>
      <h2>{props.characterData.name}</h2>
      <h3>Nickname</h3>
      <p>{props.characterData.nickName}</p>
      <img
        className='imgApi'
        src={props.characterData.img}
        alt={`Foto de: ${props.characterData.name}`}
        title={`Foto de: ${props.characterData.name}`}
      />
      <h3>Marital Status</h3>
      <p>{props.characterData.maritalStatus}</p>
      <h3>Blood</h3>
      <p>{props.characterData.blood}</p>
      <h3>Children</h3>
      <ul className='childrenData'>{listChildren}</ul>
      <h3>Description</h3>
      <p>{props.characterData.descriptionBreed}</p>
      <p>{props.characterData.descriptionGenres}</p>
      <p>{props.characterData.descriptionHairColour}</p>
      <p>{props.characterData.descriptionEyesColour}</p>
      <h3>Howarts house:</h3>
      <p>
        {props.characterData.howartsHouse === '' ? (
          <span> Desconocido</span>
        ) : (
          <span> {props.characterData.howartsHouse}</span>
        )}
      </p>
      <h3>Patronus:</h3>
      <p>{props.characterData.patronus}</p>
    </Link>
  );
};
export default CharacterCard;

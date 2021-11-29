import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  const listChildren = props.characterData.children.map((children) => {
    return (
      <li
        className='sectionList__list----characterLi__childrens--childList'
        key={children}
      >
        <p className='sectionList__list----characterLi__childrens--childList__name'>
          {children}
        </p>
      </li>
    );
  });
  return (
    <Link to={`./character/${props.characterData.id}`}>
      <h2 className='sectionList__list--characterLi__name'>
        {props.characterData.name}
      </h2>
      <h3 className='sectionList__list--characterLi__nickName'>Nickname</h3>
      <p className='sectionList__list--characterLi__nickName--nick'>
        {props.characterData.nickName}
      </p>
      <img
        className='sectionList__list--characterLi__img'
        src={props.characterData.img}
        alt={`Foto de: ${props.characterData.name}`}
        title={`Foto de: ${props.characterData.name}`}
      />
      <h3 className='sectionList__list--characterLi__status'>Marital Status</h3>
      <p className='sectionList__list--characterLi__statusMarital'>
        {props.characterData.maritalStatus}
      </p>
      <h3 className='sectionList__list--characterLi__sectionBlood'>Blood</h3>
      <p className='sectionList__list--characterLi__Blood'>
        {props.characterData.blood}
      </p>
      <h3 className='sectionList__list--characterLi__sectionChildren'>
        Children
      </h3>
      <ul className='sectionList__list--characterLi__childrens'>
        {listChildren}
      </ul>
      <h3 className='sectionList__list--characterLi__sectionDescription'>
        Description
      </h3>
      <p className='sectionList__list--characterLi__breed'>
        {props.characterData.descriptionBreed}
      </p>
      <p className='sectionList__list--characterLi__genre'>
        {props.characterData.descriptionGenres}
      </p>
      <p className='sectionList__list--characterLi__hairColour'>
        {props.characterData.descriptionHairColour}
      </p>
      <p className='sectionList__list--characterLi__eyesColour'>
        {props.characterData.descriptionEyesColour}
      </p>
      <h3 className='sectionList__list--characterLi__sectionHouse'>
        Howarts house:
      </h3>
      <p className='sectionList__list--characterLi__house'>
        {props.characterData.howartsHouse === '' ? (
          <span> Desconocido</span>
        ) : (
          <span> {props.characterData.howartsHouse}</span>
        )}
      </p>
      <h3 className='sectionList__list--characterLi__sectionPatronus'>
        Patronus:
      </h3>
      <p className='sectionList__list--characterLi__patronus'>
        {props.characterData.patronus}
      </p>
    </Link>
  );
};
export default CharacterCard;

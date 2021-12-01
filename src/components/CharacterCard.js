import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  const listChildren = props.characterData.children.map((children) => {
    return (
      <li
        className='sectionList__list--characterLi__link--containerData__childrens--childList'
        key={children}
      >
        <p className='sectionList__list--characterLi__link--containerData__childrens--childList__name'>
          {children}
        </p>
      </li>
    );
  });
  return (
    <Link
      to={`./character/${props.characterData.id}`}
      className='sectionList__list--characterLi__link'
    >
      <div className='sectionList__list--characterLi__container'>
        <img
          className='sectionList__list--characterLi__link--img'
          src={props.characterData.img}
          alt={`Foto de: ${props.characterData.name}`}
          title={`Foto de: ${props.characterData.name}`}
        />
      </div>
      <div className='sectionList__list--characterLi__link--containerData'>
        <h2 className='sectionList__list--characterLi__link--containerData__name'>
          {props.characterData.name}
        </h2>
        <h3 className='sectionList__list--characterLi__link--containerData__nickName'>
          Nickname
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__nickName--nick'>
          {props.characterData.nickName}
        </p>
        {/* <h3 className='sectionList__list--characterLi__link--containerData__status'>
          Marital Status
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__statusMarital'>
          {props.characterData.maritalStatus}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionBlood'>
          Blood
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__Blood'>
          {props.characterData.blood}
        </p>
        <h3 className='sectionList__list--characterLi__link--link--containerData__sectionChildren'>
          Children
        </h3>
        <ul className='sectionList__list--characterLi__link--containerData__childrens'>
          {listChildren}
        </ul>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionDescription'>
          Description
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__breed'>
          {props.characterData.descriptionBreed}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__genre'>
          {props.characterData.descriptionGenres}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__hairColour'>
          {props.characterData.descriptionHairColour}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__eyesColour'>
          {props.characterData.descriptionEyesColour}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionHouse'>
          Howarts house:
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__house'>
          {props.characterData.howartsHouse === '' ? (
            <span> Desconocido</span>
          ) : (
            <span> {props.characterData.howartsHouse}</span>
          )}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionPatronus'>
          Patronus:
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__patronus'>
          {props.characterData.patronus}
        </p> */}
      </div>
    </Link>
  );
};
export default CharacterCard;

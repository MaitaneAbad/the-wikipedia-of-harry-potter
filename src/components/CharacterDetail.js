import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const CharacterDetail = (props) => {
  console.log(props);
  // const listChildren = props.character.children.map((children) => {
  //   return (
  //     <li
  //       className='sectionList__list--characterLi__link--containerData__childrens--childList'
  //       key={children}
  //     >
  //       <p className='sectionList__list--characterLi__link--containerData__childrens--childList__name'>
  //         {children}
  //       </p>
  //     </li>
  //   );
  // });
  if (props.character !== undefined) {
    return (
      <main>
        <Link to='/' className='characterDetail'>
          <p>Volver atrás</p>
        </Link>
        <img
          className='sectionList__list--characterLi__link--containerData__img'
          src={props.character.img}
          alt={`Foto de: ${props.character.name}`}
          title={`Foto de: ${props.character.name}`}
        />
        {/* <h3 className='sectionList__list--characterLi__link--containerData__nickName'>
            Nickname
          </h3> 
          <p className='sectionList__list--characterLi__link--containerData__nickName--nick'>
            {props.characterData.nickName}
          </p>*/}
        <h3 className='sectionList__list--characterLi__link--containerData__status'>
          Marital Status
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__statusMarital'>
          {props.character.maritalStatus}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionBlood'>
          Blood
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__Blood'>
          {props.character.blood}
        </p>
        <h3 className='sectionList__list--characterLi__link--link--containerData__sectionChildren'>
          Children
        </h3>
        <ul className='sectionList__list--characterLi__link--containerData__childrens'>
          {/* {listChildren} */}
        </ul>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionDescription'>
          Description
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__breed'>
          {props.character.descriptionBreed}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__genre'>
          {props.character.descriptionGenres}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__hairColour'>
          {props.character.descriptionHairColour}
        </p>
        <p className='sectionList__list--characterLi__link--containerData__eyesColour'>
          {props.character.descriptionEyesColour}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionHouse'>
          Howarts house:
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__house'>
          {props.character.howartsHouse === '' ? (
            <span> Desconocido</span>
          ) : (
            <span> {props.character.howartsHouse}</span>
          )}
        </p>
        <h3 className='sectionList__list--characterLi__link--containerData__sectionPatronus'>
          Patronus:
        </h3>
        <p className='sectionList__list--characterLi__link--containerData__patronus'>
          {props.character.patronus}
        </p>
      </main>
    );
  } else {
    <p>papaFrita</p>;
    return <PageNotFound />;
  }
};
export default CharacterDetail;

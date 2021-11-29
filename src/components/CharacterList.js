import CharacterCard from './CharacterCard';
import '../styles/layout/characterList.scss';

const CharacterList = (props) => {
  const list = props.data.map((characterData) => {
    return (
      <li className='sectionList__list--characterLi' key={characterData.id}>
        <CharacterCard characterData={characterData} />
      </li>
    );
  });
  return (
    <div className='sectionList'>
      {props.data.length !== 0 ? (
        <ul className='sectionList__list'>{list}</ul>
      ) : (
        <p className='sectionList__notSearch'>{`El personaje ${props.searchName} no exite, quizás deberías usar el mapa del merodeador.`}</p>
      )}
    </div>
  );
};
export default CharacterList;

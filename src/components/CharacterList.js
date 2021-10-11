import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const list = props.data.map((characterData) => {
    return (
      <li className='characterLi' key={characterData.id}>
        <CharacterCard characterData={characterData} />
      </li>
    );
  });
  return (
    <>
      {props.data.length !== 0 ? (
        <ul className='list'>{list}</ul>
      ) : (
        <p>{`El personaje ${props.searchName} no exite, quizás deberías usar el mapa del merodeador.`}</p>
      )}
    </>
  );
};
export default CharacterList;

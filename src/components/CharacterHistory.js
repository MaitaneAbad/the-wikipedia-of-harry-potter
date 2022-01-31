const CharacterHistory = (props) => {
  return (
    <>
      <p className='characterDetail__containerHistory--list__paragraph'>
        {props.characterHistory + '.'}
      </p>
    </>
  );
};
export default CharacterHistory;

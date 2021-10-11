import '../styles/layout/characterList.scss';
const CharacterCard = (props) => {
  //   const listPets = props.data.petName.map((characterPet) => {
  //     return (
  //       <li key={characterPet}>
  //         <p>{characterPet.name}</p>
  //       </li>
  //     );
  //   });
  return (
    <>
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
      <p className='childrenData'>{props.characterData.children}</p>
      <h3>Description</h3>
      <p>{props.characterData.descriptionBreed}</p>
      <p>{props.characterData.descriptionGenres}</p>
      <p>{props.characterData.descriptionHairColour}</p>
      <p>{props.characterData.descriptionEyesColour}</p>
      <h3>Howarts house</h3>
      <p>{props.characterData.howartsHouse}</p>
      <h3>Patronus</h3>
      <p>{props.characterData.patronus}</p>
      <h3>Pet</h3>
      {/* <p>{props.characterData.status}</p> */}
    </>
  );
};
export default CharacterCard;

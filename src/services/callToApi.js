const callToApi = () => {
  return fetch(`https://maitaneabad.github.io/api-harry-potter/api/data.json`)
    .then((response) => response.json())

    .then((json) => {
      const characters = json.characters.map((data) => {
        return {
          id: data.id,
          name: data.figure,
          nickName: data.nickname,
          maritalStatus: data.maritalStatus,
          blood: data.blood,
          descriptionBreed: data.physicalDescription.breed,
          descriptionGenres: data.physicalDescription.genres,
          descriptionHairColour: data.physicalDescription.hairColour,
          descriptionEyesColour: data.physicalDescription.eyesColour,
          img: data.img,
          howartsHouse: data.howartsHouse,
          patronus: data.patronus,
          history: data.history.split('. '),
        };
      });
      console.log(characters);
      return characters;
    });
};

export default callToApi;

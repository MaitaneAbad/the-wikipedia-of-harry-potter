import '../styles/layout/formHat.scss';
import FirstQuestion from './quiz/FirstQuestion';
import SecondQuestion from './quiz/SecondQuestion';
import ThirdQuestion from './quiz/ThirdQuestion';
import FourQuestion from './quiz/FourQuestion';
import FiveQuestion from './quiz/FiveQuestion';
import SixQuestion from './quiz/SixQuestion';
import SevenQuestion from './quiz/sevenQuestion';
import EightQuestion from './quiz/EightQuestion';
import NineQuestion from './quiz/NineQuestion';
import TenQuestion from './quiz/TenQuestion';
import ButtonResponse from './quiz/ButtonResponse';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const CharacterDetail = (props) => {
  const [classroom, setClassroom] = useState(' ');
  const [pet, setPet] = useState(' ');
  const [invention, setInvention] = useState('');
  const [spell, setSpell] = useState('');
  const [teacher, setTeacher] = useState('');
  const [sweet, setSweet] = useState('');
  const [object, setObject] = useState('');
  const [protect, setProtect] = useState('');
  const [qualitie, setQualitie] = useState('');
  const [transport, setTransport] = useState('');

  const handlePet = (ev) => {
    setPet(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'lechuza':
        props.cunning += 1;
        props.witness += 1;
        props.intelligence += 1;
        props.justice += 1;
        props.console.log('lechuza', props.cunning);
        break;
      case 'rata':
        props.cunning += 1;
        props.competition += 1;
        props.hardWork += 1;
        props.loyality += 1;
        props.ambition += 1;
        break;
      case 'gato':
        props.bravery += 1;
        props.friendship += 1;
        props.ambition += 1;
        props.loyality += 1;
        break;
      case 'sapo':
        props.friendship += 1;
        props.justice += 1;
        props.hardWork += 1;
        props.honour += 1;
        props.cunning += 1;
        break;

      default:
        break;
    }
  };
  const handleclassroom = (ev) => {
    setClassroom(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'defensa contra las artes oscuras':
        props.witness += 1;
        props.cunning += 1;
        props.ambition += 1;
        props.bravery += 1;
        props.honour += 1;
        props.intelligence += 1;
        props.justice += 1;
        break;
      case 'pociones':
        props.ambition += 1;
        props.intelligence += 1;
        props.hardWork += 1;
        props.cunning += 1;
        props.witness += 1;
        break;
      case 'cuidado de criaturas mágicas':
        props.bravery += 1;
        props.friendship += 1;
        props.hardWork += 1;
        props.loyality += 1;
        break;
      case 'herbología':
        props.friendship += 1;
        props.witness += 1;
        props.hardWork += 1;
        props.intelligence += 1;
        break;
      case 'adivinación':
        props.cunning += 1;
        props.competition += 1;
        props.ambition += 1;
        break;
      default:
        break;
    }
    console.log(props.ambition);
  };

  const handleInvention = (ev) => {
    setInvention(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Turrón de hemorragia nasal':
        props.bravery += 1;
        break;
      case 'Orejas extensibles':
        props.cunning += 1;
        props.intelligence += 1;
        props.ambition += 1;
        break;
      case 'Pantano portátil':
        props.hardWork += 1;
        props.bravery += 1;
        break;
      case 'Filtro de amor':
        props.friendship += 1;
        props.justice += 1;
        props.cunning += 1;
        break;
      default:
        break;
    }
  };
  const handleSpell = (ev) => {
    setSpell(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Imperio':
        props.cunning += 1;
        props.witness += 1;
        props.ambition += 1;
        break;
      case 'Bombarda':
        props.bravery += 1;
        props.honour += 1;
        props.justice += 1;
        break;
      case 'Obliviate':
        props.intelligence += 1;
        props.competition += 1;
        props.cunning += 1;
        break;
      case 'Desmaius':
        props.justice += 1;
        props.loyality += 1;
        break;
      case 'Expecto Patronum':
        props.friendship += 1;
        props.hardWork += 1;
        props.honour += 1;
        break;
      case 'Accio':
        props.competition += 1;
        props.ambition += 1;
        props.cunning += 1;
        props.justice += 1;
        break;
      default:
        break;
    }
  };
  const handleTeacher = (ev) => {
    setTeacher(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Rubeus hagrid':
        props.bravery += 1;
        props.friendship += 1;
        props.loyality += 1;
        break;
      case 'Minerva McGonagall':
        props.intelligence += 1;
        props.honour += 1;
        props.justice += 1;
        props.cunning += 1;
        props.ambition += 1;
        break;
      case 'Albus Dumbledore':
        props.bravery += 1;
        props.ambition += 1;
        props.intelligence += 1;
        props.cunning += 1;
        break;
      case 'Ojoloco Moody':
        props.witness += 1;
        props.justice += 1;
        props.hardWork += 1;
        props.ambition += 1;
        break;
      case 'Severus Snape':
        props.cunning += 1;
        props.ambition += 1;
        props.witness += 1;
        break;
      case 'Remus Lupin':
        props.bravery += 1;
        props.friendship += 1;
        props.honour += 1;
        break;
      case 'Sybill Trelawney':
        props.witness += 1;
        props.competition += 1;
        props.ambition += 1;
        break;
      default:
        break;
    }
  };
  const handleSweet = (ev) => {
    setSweet(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Zumo de calabaza':
        props.friendship += 1;
        break;
      case 'Ranas de chocolate':
        props.intelligence += 1;
        break;
      case 'Babosas de gelatina':
        props.loyality += 1;
        break;
      case 'Grageas Bertie Bott':
        props.bravery += 1;
        break;
      default:
        break;
    }
  };
  const handleObject = (ev) => {
    setObject(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Giratiempos':
        props.ambition += 1;
        props.hardWork += 1;
        props.cunning += 1;
        break;
      case 'Poción Felix Felicis':
        props.justice += 1;
        props.loyality += 1;
        props.friendship += 1;
        props.ambition += 1;
        break;
      case 'Recordadora':
        props.justice += 1;
        props.honour += 1;
        break;
      case 'Mapa del merodeador':
        props.witness += 1;
        props.cunning += 1;
        props.ambition += 1;
        break;
      case 'Capa de invisibilidad':
        props.cunning += 1;
        props.witness += 1;
        props.ambition += 1;
        break;
      default:
        break;
    }
  };
  const handleProtect = (ev) => {
    setProtect(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Hermione':
        props.ambition += 1;
        props.friendship += 1;
        props.honour += 1;
        props.intelligence += 1;
        props.justice += 1;
        props.loyality += 1;
        break;
      case 'Dumbledore':
        props.honour += 1;
        props.loyality += 1;
        props.competition += 1;
        props.ambition += 1;
        props.cunning += 1;
        break;
      case 'Sirius':
        props.justice += 1;
        props.honour += 1;
        props.friendship += 1;
        props.loyality += 1;
        break;
      case 'Snape':
        props.cunning += 1;
        props.ambition += 1;
        props.competition += 1;
        props.witness += 1;
        break;
      case 'McGonagall':
        props.intelligence += 1;
        props.competition += 1;
        props.hardWork += 1;
        props.bravery += 1;
        props.ambition += 1;
        break;
      default:
        break;
    }
  };
  const handleQualities = (ev) => {
    setQualitie(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Ambición, astucia y determinación':
        props.ambition += 1;
        props.cunning += 1;
        props.hardWork += 1;
        break;
      case 'Osadía, valentía y lealtad':
        props.bravery += 1;
        props.loyality += 1;
        props.friendship += 1;
        break;
      case 'Originalidad, ingenio e inteligencia':
        props.witness += 1;
        props.intelligence += 1;
        props.competition += 1;
        break;
      case 'Honestidad, trabajo duro y paciencia':
        props.honour += 1;
        props.hardWork += 1;
        props.justice += 1;
        break;
      default:
        break;
    }
  };
  const handleTransport = (ev) => {
    setTransport(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Escoba':
        props.hardWork += 1;
        props.honour += 1;
        props.bravery += 1;
        break;
      case 'Coche volador':
        props.ambition += 1;
        props.witness += 1;
        props.friendship += 1;
        props.competition += 1;
        break;
      case 'Thestral':
        props.intelligence += 1;
        props.bravery += 1;
        props.loyality += 1;
        props.witness += 1;
        break;
      case 'Polvos Flu':
        props.witness += 1;
        props.competition += 1;
        props.intelligence += 1;
        break;
      case 'Hipogrifo':
        props.friendship += 1;
        props.bravery += 1;
        props.loyality += 1;
        props.justice += 1;
        props.competition += 1;
        break;
      default:
        break;
    }
  };
  const handleButton = () => {
    console.log('hola mundo', props.cunning);
    console.log(props.bravery, props.friendship, props.honour);
    let gryffindorPoints = props.bravery + props.friendship + props.honour;
    let slytherinPoints = props.cunning + props.ambition;
    let ravenclawPoints =
      props.intelligence + props.competition + props.witness;
    let hufflepuffPoints = props.justice + props.loyality + props.hardWork;
    console.log(gryffindorPoints);
    let housesPoints = {
      gryffindorPoints,
      slytherinPoints,
      ravenclawPoints,
      hufflepuffPoints,
    };
    console.log(housesPoints);
    let houseIndex = 4;
    let winnerHousePoints = 0;
    // housesPoints.forEach((item) => {
    //   console.log(item);
    //   // if (item > winnerHousePoints) {
    //   //   winnerHousePoints ===
    //   // }
    // });
  };
  const handlePrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <main>
      <Link to='/' className='characterDetail'>
        <p>Volver atrás</p>
      </Link>
      <form onSubmit={handlePrevent} className='formHat'>
        <FirstQuestion handlePet={handlePet} pet={pet} />
        <SecondQuestion
          handleclassroom={handleclassroom}
          classroom={classroom}
        />
        <ThirdQuestion
          handleInvention={handleInvention}
          invention={invention}
        />
        <FourQuestion handleSpell={handleSpell} spell={spell} />
        <FiveQuestion handleTeacher={handleTeacher} teacher={teacher} />
        <SixQuestion handleSweet={handleSweet} sweet={sweet} />
        <SevenQuestion handleObject={handleObject} object={object} />
        <EightQuestion handleProtect={handleProtect} protect={protect} />
        <NineQuestion handleQualities={handleQualities} qualitie={qualitie} />
        <TenQuestion handleTransport={handleTransport} transport={transport} />
        <ButtonResponse handleButton={handleButton} />
      </form>
    </main>
  );
};
export default CharacterDetail;

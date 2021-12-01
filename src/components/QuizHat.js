import '../styles/layout/formHat.scss';
import bus from '../images/nightBus.gif';
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

  // atributos para contadores de la capa oculta de la red neuronal
  const [bravery, setBravery] = useState(0);
  const [friendship, setFriendship] = useState(0);
  const [honour, setHonour] = useState(0);
  const [cunning, setCunning] = useState(0); //astucia
  const [ambition, setAmbition] = useState(0);
  const [witness, setWitness] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [justice, setJustice] = useState(0);
  const [competition, setCompetition] = useState(0);
  const [loyality, setLoyality] = useState(0);
  const [hardWork, setHardWork] = useState(0);

  const handlePet = (ev) => {
    setPet(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'lechuza':
        setCunning(cunning + 1);
        setWitness(witness + 1);
        setIntelligence(intelligence + 1);
        setJustice(justice + 1);

        break;
      case 'rata':
        setCunning(cunning + 1);
        setCompetition(competition + 1);
        setHardWork(hardWork + 1);
        setHardWork(friendship + 1);
        setAmbition(ambition + 1);
        break;
      case 'gato':
        setBravery(bravery + 1);
        setFriendship(friendship + 1);
        setAmbition(ambition + 1);
        setHardWork(hardWork + 1);
        break;
      case 'sapo':
        setFriendship(friendship + 1);
        setJustice(justice + 1);
        setHardWork(hardWork + 1);
        setHonour(honour + 1);
        setCunning(cunning + 1);
        break;

      default:
        break;
    }
  };
  // console.log(intelligence);
  // console.log(cunning);
  // console.log(ambition);
  // console.log(hardWork);
  // console.log(honour);
  // console.log(justice);
  // console.log(witness);
  // console.log(bravery);
  // console.log(competition);
  // console.log(friendship);
  // console.log(loyality);

  const handleclassroom = (ev) => {
    setClassroom(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'defensa contra las artes oscuras':
        setWitness(witness + 1);
        setCunning(cunning + 1);
        setAmbition(ambition + 1);
        setBravery(bravery + 1);
        setHonour(honour + 1);
        setIntelligence(intelligence + 1);
        setJustice(justice + 1);
        break;
      case 'pociones':
        setAmbition(ambition + 1);
        setIntelligence(intelligence + 1);
        setHardWork(hardWork + 1);
        setCunning(cunning + 1);
        setWitness(witness + 1);
        break;
      case 'cuidado de criaturas mágicas':
        setBravery(bravery + 1);
        setFriendship(friendship + 1);
        setHardWork(hardWork + 1);
        setHardWork(hardWork + 1);
        break;
      case 'herbología':
        setFriendship(friendship + 1);
        setWitness(witness + 1);
        setHardWork(hardWork + 1);
        setIntelligence(intelligence + 1);
        break;
      case 'adivinación':
        setCunning(cunning + 1);
        setCompetition(competition + 1);
        setAmbition(ambition + 1);
        break;
      default:
        break;
    }
    console.log(ambition);
  };

  const handleInvention = (ev) => {
    setInvention(ev.target.value);
    const value = ev.target.value;
    switch (value) {
      case 'Turrón de hemorragia nasal':
        setBravery(bravery + 1);
        break;
      case 'Orejas extensibles':
        setCunning(cunning + 1);
        setIntelligence(intelligence + 1);
        setAmbition(ambition + 1);
        break;
      case 'Pantano portátil':
        setHardWork(hardWork + 1);
        setBravery(bravery + 1);
        break;
      case 'Filtro de amor':
        setFriendship(friendship + 1);
        setJustice(justice + 1);
        setCunning(cunning + 1);
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
        setCunning(cunning + 1);
        setWitness(witness + 1);
        setAmbition(ambition + 1);
        break;
      case 'Bombarda':
        setBravery(bravery + 1);
        setHonour(honour + 1);
        setJustice(justice + 1);
        break;
      case 'Obliviate':
        setIntelligence(intelligence + 1);
        setCompetition(competition + 1);
        setCunning(cunning + 1);
        break;
      case 'Desmaius':
        setJustice(justice + 1);
        setHardWork(hardWork + 1);
        break;
      case 'Expecto Patronum':
        setFriendship(friendship + 1);
        setHardWork(hardWork + 1);
        setHonour(honour + 1);
        break;
      case 'Accio':
        setCompetition(competition + 1);
        setAmbition(ambition + 1);
        setCunning(cunning + 1);
        setJustice(justice + 1);
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
        setBravery(bravery + 1);
        setFriendship(friendship + 1);
        setHardWork(hardWork + 1);
        break;
      case 'Minerva McGonagall':
        setIntelligence(intelligence + 1);
        setHonour(honour + 1);
        setJustice(justice + 1);
        props.cunning += 1;
        setAmbition(ambition + 1);
        break;
      case 'Albus Dumbledore':
        setBravery(bravery + 1);
        setAmbition(ambition + 1);
        setIntelligence(intelligence + 1);
        setCunning(cunning + 1);
        break;
      case 'Ojoloco Moody':
        setWitness(witness + 1);
        setJustice(justice + 1);
        setHardWork(hardWork + 1);
        setAmbition(ambition + 1);
        break;
      case 'Severus Snape':
        setCunning(cunning + 1);
        setAmbition(ambition + 1);
        setWitness(witness + 1);
        break;
      case 'Remus Lupin':
        setBravery(bravery + 1);
        setFriendship(friendship + 1);
        setHonour(honour + 1);
        break;
      case 'Sybill Trelawney':
        setWitness(witness + 1);
        setCompetition(competition + 1);
        setAmbition(ambition + 1);
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
        setFriendship(friendship + 1);
        break;
      case 'Ranas de chocolate':
        setIntelligence(intelligence + 1);
        break;
      case 'Babosas de gelatina':
        setHardWork(hardWork + 1);
        break;
      case 'Grageas Bertie Bott':
        setBravery(bravery + 1);
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
        setAmbition(ambition + 1);
        setHardWork(hardWork + 1);
        setCunning(cunning + 1);
        break;
      case 'Poción Felix Felicis':
        setJustice(justice + 1);
        setHardWork(hardWork + 1);
        setFriendship(friendship + 1);
        setAmbition(ambition + 1);
        break;
      case 'Recordadora':
        setJustice(justice + 1);
        setHonour(honour + 1);
        break;
      case 'Mapa del merodeador':
        setWitness(witness + 1);
        setCunning(cunning + 1);
        setAmbition(ambition + 1);
        break;
      case 'Capa de invisibilidad':
        setCunning(cunning + 1);
        setWitness(witness + 1);
        setAmbition(ambition + 1);
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
        setAmbition(ambition + 1);
        setFriendship(friendship + 1);
        setHonour(honour + 1);
        setIntelligence(intelligence + 1);
        setJustice(justice + 1);
        setHardWork(hardWork + 1);
        break;
      case 'Dumbledore':
        setHonour(honour + 1);
        setHardWork(hardWork + 1);
        setCompetition(competition + 1);
        setAmbition(ambition + 1);
        setCunning(cunning + 1);
        break;
      case 'Sirius':
        setJustice(justice + 1);
        setHonour(honour + 1);
        setFriendship(friendship + 1);
        setHardWork(hardWork + 1);
        break;
      case 'Snape':
        setCunning(cunning + 1);
        setAmbition(ambition + 1);
        setCompetition(competition + 1);
        setWitness(witness + 1);
        break;
      case 'McGonagall':
        setIntelligence(intelligence + 1);
        setCompetition(competition + 1);
        setHardWork(hardWork + 1);
        setBravery(bravery + 1);
        setAmbition(ambition + 1);
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
        setAmbition(ambition + 1);
        setCunning(cunning + 1);
        setHardWork(hardWork + 1);
        break;
      case 'Osadía, valentía y lealtad':
        setBravery(bravery + 1);
        setHardWork(hardWork + 1);
        setFriendship(friendship + 1);
        break;
      case 'Originalidad, ingenio e inteligencia':
        setWitness(witness + 1);
        setIntelligence(intelligence + 1);
        setCompetition(competition + 1);
        break;
      case 'Honestidad, trabajo duro y paciencia':
        setHonour(honour + 1);
        setHardWork(hardWork + 1);
        setJustice(justice + 1);
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
        setHardWork(hardWork + 1);
        setHonour(honour + 1);
        setBravery(bravery + 1);
        break;
      case 'Coche volador':
        setAmbition(ambition + 1);
        setWitness(witness + 1);
        setFriendship(friendship + 1);
        setCompetition(competition + 1);
        break;
      case 'Thestral':
        setIntelligence(intelligence + 1);
        setBravery(bravery + 1);
        setHardWork(hardWork + 1);
        setWitness(witness + 1);
        break;
      case 'Polvos Flu':
        setWitness(witness + 1);
        setCompetition(competition + 1);
        setIntelligence(intelligence + 1);
        break;
      case 'Hipogrifo':
        setFriendship(friendship + 1);
        setBravery(bravery + 1);
        setLoyality(loyality + 1);
        setJustice(justice + 1);
        setCompetition(competition + 1);
        break;
      default:
        break;
    }
  };
  const handleButton = () => {
    let gryffindorPoints = bravery + friendship + honour;
    let slytherinPoints = cunning + ambition;
    let ravenclawPoints = intelligence + competition + witness;
    let hufflepuffPoints = justice + loyality + hardWork;
    let housesPoints = [
      gryffindorPoints,
      slytherinPoints,
      ravenclawPoints,
      hufflepuffPoints,
    ];
    console.log(housesPoints);
    let winnerHousePoints = 0;
    // const winner = housesPoints.map((data) => {
    //   if (data.length === 9 || data.lenght > 9) {
    //     console.log('es mayor que 8');
    //   }
    // });
    // console.log(winner);
    for (let i = 0; i < housesPoints.length; i++) {
      console.log(housesPoints[i]);
      console.log(winnerHousePoints);
      // if (housesPoints[i] > winnerHousePoints) {
      //   winnerHousePoints = housesPoints[i];
      //   console.log('estoy dentro el for y me da el numero más alto');
      // }
      console.log(winnerHousePoints);
    }
  };

  const handlePrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <main>
      <Link to='/'>
        {/* <p>Volver atrás</p> */}
        <div className='imgBack'>
          <img
            className='imgBack__img'
            src={bus}
            alt='Autobus noctámbulo para volver atrás'
            title='Autobus noctámbulo para volver atrás'
          />
          {/* <i className='imgBack__icon fas fa-undo-alt'></i> */}
        </div>
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

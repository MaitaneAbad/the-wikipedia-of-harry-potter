import '../styles/layout/formHat.scss';
import bus from '../images/nightBus.gif';
import gryffindor from '../images/gryffindor.png';
import slytherin from '../images/slytherin.png';
import ravenclaw from '../images/ravenclaw.png';
import hufflepuff from '../images/hufflepuff.png';
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

  const [gryffindorHTML, setGryffindorHTML] = useState('hidden');
  const [slytherinHTML, setSlytherinHTML] = useState('hidden');
  const [ravenclawHTML, setRavenclawHTML] = useState('hidden');
  const [hufflepuffHTML, setHufflepufHTML] = useState('hidden');
  const [textRequired, setTextRequired] = useState('hidden');
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
    console.log(ev.target.id);
    console.log(value);
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
    console.log(value);
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
        setJustice(competition + 1);

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
    indexHouse();
  };
  let gryffindorPoints = bravery + friendship + honour;
  let slytherinPoints = cunning + ambition;
  let ravenclawPoints = intelligence + competition + witness;
  let hufflepuffPoints = justice + loyality + hardWork;
  console.log(hufflepuffPoints);
  let housesPoints = [
    gryffindorPoints,
    slytherinPoints,
    ravenclawPoints,
    hufflepuffPoints,
  ];
  console.log(housesPoints);
  function indexHouse() {
    console.log(housesPoints);
    let winnerHousePoints = 0;
    let winnerHouseIndex = 0;

    for (let i = 0; i < housesPoints.length; i++) {
      if (housesPoints[i] > winnerHousePoints) {
        winnerHousePoints = housesPoints[i];
        winnerHouseIndex = i + 1;
      }
    }
    console.log(winnerHouseIndex);
    switch (winnerHouseIndex) {
      case 0:
        console.log('Comprueba que el test está completo');
        setTextRequired('');
        break;
      case 1:
        console.log('gryffindor');
        setGryffindorHTML('');
        setTextRequired('hidden');
        break;
      case 2:
        console.log('slytherin');
        setSlytherinHTML('');
        setTextRequired('hidden');
        break;
      case 3:
        console.log('ravenclaw');
        setRavenclawHTML('');
        setTextRequired('hidden');
        break;
      case 4:
        console.log('hufflepuf');
        setHufflepufHTML('');
        setTextRequired('hidden');
        break;
      default:
        break;
    }
  }

  const handlePrevent = (ev) => {
    ev.preventDefault();
  };

  function backPage() {
    setGryffindorHTML('hidden');
    setRavenclawHTML('hidden');
    setSlytherinHTML('hidden');
    setHufflepufHTML('hidden');
    window.location.reload();
  }

  return (
    <>
      <Link to='/'>
        <div className='imgBack'>
          <img
            className='imgBack__img'
            src={bus}
            alt='Autobus noctámbulo para volver atrás'
            title='Autobus noctámbulo para volver atrás'
          />
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
        <TenQuestion
          handleTransport={handleTransport}
          transport={transport}
        />{' '}
        <ButtonResponse handleButton={handleButton} />
      </form>
      <section>
        <article className={gryffindorHTML}>
          <div className={`modalGryffindor ${gryffindorHTML}`}>
            <div className='modalGryffindor__window'>
              <div className='modalGryffindor__window--content'>
                <header className='modalGryffindor__window--content__header'>
                  <h2 className='modalGryffindor__window--content__header--title'>
                    Gryffindor
                  </h2>
                  <span
                    className='modalGryffindor__window--content__header--close'
                    onClick={backPage}
                  >
                    <i class='fas fa-times-circle'></i>
                  </span>
                </header>
                <div className='modalGryffindor__window--content__detail'>
                  <img
                    className='modalGryffindor__window--content__detail--img'
                    src={gryffindor}
                    alt='Autobus noctámbulo para volver atrás'
                    title='Autobus noctámbulo para volver atrás'
                  />
                  <p className='modalGryffindor__window--content__detail--paragraph'>
                    Tienes coraje y valentía. Un buen miembro de Gryffindor
                    tiene gran osadía, temple y caballerosidad. Son capaces de
                    todo por defender en lo que creen y nunca se dan por
                    vencidos. También son capaces de romper las reglas si es
                    necesario y les encantan los retos, cuanto más difíciles,
                    mejor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article className={slytherinHTML}>
          <div className={`modalSlytherin ${slytherinHTML}`}>
            <div className='modalSlytherin__window'>
              <div className='modalSlytherin__window--content'>
                <header className='modalSlytherin__window--content__header'>
                  <h2 className='modalSlytherin__window--content__header--title'>
                    Slytherin
                  </h2>

                  <span
                    className='modal__window--content__header--close'
                    onClick={backPage}
                  >
                    <i class='fas fa-times-circle'></i>
                  </span>
                </header>
                <div className='modalSlytherin__window--content__detail'>
                  <img
                    className='modalSlytherin__window--content__detail--img'
                    src={slytherin}
                    alt='Autobus noctámbulo para volver atrás'
                    title='Autobus noctámbulo para volver atrás'
                  />
                  <p className='modalSlytherin__window--content__detail--paragraph'>
                    Posees determinación, ambición, un cierto desdén por las
                    normas, astucia, aspiraciones de grandeza y hambre de poder.
                    Tiendes a dudar antes de actuar, con el fin de sopesar todos
                    los posibles resultados antes de decidir exactamente lo que
                    se debe hacer y, una vez que lo averiguas, lo consigues,
                    dándote igual los medios para lograrlo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article className={ravenclawHTML}>
          <div className={`modalRavenclaw ${ravenclawHTML}`}>
            <div className='modalRavenclaw__window'>
              <div className='modalRavenclaw__window--content'>
                <header className='modalRavenclaw__window--content__header'>
                  <h2 className='modalRavenclaw__window--content__header--title'>
                    Ravenclaw
                  </h2>
                  <span
                    className='modalRavenclaw__window--content__header--close'
                    onClick={backPage}
                  >
                    <i class='fas fa-times-circle'></i>
                  </span>
                </header>
                <div className='modalRavenclaw__window--content__detail'>
                  <img
                    className='modalRavenclaw__window--content__detail--img'
                    src={ravenclaw}
                    alt='Autobus noctámbulo para volver atrás'
                    title='Autobus noctámbulo para volver atrás'
                  />
                  <p className='modalRavenclaw__window--content__detail--paragraph'>
                    La casa Ravenclaw premia el aprendizaje, la sabiduría, el
                    ingenio, y el intelecto de sus miembros. Los Ravenclaw
                    también se enorgullecen de ser originales en sus ideas y
                    métodos. No es raro encontrar a estudiantes de Ravenclaw que
                    practiquen diferentes tipos de magia que otras casas podrían
                    tratar de evitar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article className={hufflepuffHTML}>
          <div className={`modalHufflepuff ${hufflepuffHTML}`}>
            <div className='modalHufflepuff__window'>
              <div className='modalHufflepuff__window--content'>
                <header className='modalHufflepuff__window--content__header'>
                  <h2 className='modalHufflepuff__window--content__header--title'>
                    Hufflepuff
                  </h2>

                  <span
                    className='modalHufflepuff__window--content__header--close'
                    onClick={backPage}
                  >
                    <i class='fas fa-times-circle'></i>
                  </span>
                </header>
                <div className='modalHufflepuff__window--content__detail'>
                  <img
                    className='modalHufflepuff__window--content__detail--img'
                    src={hufflepuff}
                    alt='Autobus noctámbulo para volver atrás'
                    title='Autobus noctámbulo para volver atrás'
                  />
                  <p className='modalHufflepuff__window--content__detail--paragraph'>
                    Eres justo, leal y trabajador. Los hufflepuff son buenas
                    personas y suelen caer bien a todo el mundo. Son pacientes,
                    tolerantes y siempre harán todo de forma honrada, sin hacer
                    trampas y respetando las reglas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <article className={textRequired}>
        <p>Comprueba que el test esté completo</p>
      </article>
    </>
  );
};
export default CharacterDetail;

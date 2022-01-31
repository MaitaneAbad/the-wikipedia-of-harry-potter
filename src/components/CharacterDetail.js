import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import '../styles/layout/characterDetail.scss';
import bus from '../images/nightBus.gif';
import CharacterHistory from './CharacterHistory';

const CharacterDetail = (props) => {
  const historyCharacter = props.character.history.map(
    (characterHistory, i) => {
      return (
        <li className='' key={i}>
          <CharacterHistory characterHistory={characterHistory} />
        </li>
      );
    }
  );

  if (props.character !== undefined) {
    window.scrollTo(0, 0);
    return (
      <section className='characterDetail'>
        <Link to='/'>
          <img
            className='characterDetail--link'
            src={bus}
            alt='Autobus noctámbulo para volver atrás'
            title='Autobus noctámbulo para volver atrás'
          />
        </Link>
        <div className='characterDetail--section'>
          <img
            className='characterDetail--section__img'
            src={props.character.img}
            alt={`Foto de: ${props.character.name}`}
            title={`Foto de: ${props.character.name}`}
          />
          <section className='characterDetail--section__detail'>
            <div className='characterDetail--section__detail--sectionName'>
              <p className='characterDetail--section__detail--sectionName__title'>
                {props.character.name}
              </p>
            </div>
            <div className='characterDetail--section__detail--sectionNickname'>
              <article className='characterDetail--section__detail--sectionNickname__container'>
                Alias
                <p className='characterDetail--section__detail--sectionNickname__container--title'>
                  {props.character.nickName}
                </p>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionStatus'>
              <article className='characterDetail--section__detail--sectionStatus__container'>
                Estado civil
                <p className='characterDetail--section__detail--sectionStatus__container--title'>
                  {props.character.maritalStatus}
                </p>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionBlood'>
              <article className='characterDetail--section__detail--sectionBlood__container'>
                Estatus de sangre{' '}
                <p className='characterDetail--section__detail--sectionBlood__container--title'>
                  {props.character.blood}
                </p>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionDescription'>
              <article className='characterDetail--section__detail--sectionDescription__container'>
                <p className='characterDetail--section__detail--sectionDescription__container--title'>
                  Descripción física
                </p>
                <article className='characterDetail--section__detail--sectionDescription__container--characteristics'>
                  <div className='characterDetail--section__detail--sectionDescription__container--characteristics__container'>
                    Especie
                    <p className='characterDetail--section__detail--sectionDescription__container--characteristics__container--breed'>
                      {props.character.descriptionBreed}
                    </p>
                  </div>
                  <div className='characterDetail--section__detail--sectionDescription__container--characteristics__container'>
                    Género
                    <p className='characterDetail--section__detail--sectionDescription__container--characteristics__container--genres'>
                      {props.character.descriptionGenres}
                    </p>
                  </div>
                  <div className='characterDetail--section__detail--sectionDescription__container--characteristics__container'>
                    Color de pelo
                    <p className='characterDetail--section__detail--sectionDescription__container--characteristics__container--hair'>
                      {props.character.descriptionHairColour}
                    </p>
                  </div>
                  <div className='characterDetail--section__detail--sectionDescription__container--characteristics__container'>
                    Color de ojos
                    <p className='characterDetail--section__detail--sectionDescription__container--characteristics__container--eyes'>
                      {props.character.descriptionEyesColour}
                    </p>
                  </div>
                </article>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionHouse'>
              <article className='characterDetail--section__detail--sectionHouse__container'>
                Casa
                <p className='characterDetail--section__detail--sectionHouse__container--option'>
                  {props.character.howartsHouse === '' ? (
                    <span className='characterDetail--section__detail--sectionHouse__container--option__title'>
                      {' '}
                      Desconocido
                    </span>
                  ) : (
                    <span className='characterDetail--section__detail--sectionHouse__container--option__title'>
                      {' '}
                      {props.character.howartsHouse}
                    </span>
                  )}
                </p>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionPatronus'>
              <article className='characterDetail--section__detail--sectionPatronus__container'>
                Patronus
                <p className='characterDetail--section__detail--sectionPatronus__container--title'>
                  {props.character.patronus}
                </p>
              </article>
            </div>
          </section>
        </div>
        <article className='characterDetail__containerHistory'>
          <h3 className='characterDetail__containerHistory--title'>
            Conóceme un poco más:
          </h3>
          <ul className='characterDetail__containerHistory--list'>
            {historyCharacter}
          </ul>
        </article>
        <Footer />
      </section>
    );
  } else {
    window.scrollTo(0, document.body.scrollHeight);
    return <PageNotFound />;
  }
};
export default CharacterDetail;

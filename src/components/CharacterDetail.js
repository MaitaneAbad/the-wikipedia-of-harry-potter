import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import '../styles/layout/characterDetail.scss';

const CharacterDetail = (props) => {
  if (props.character !== undefined) {
    return (
      <section className='characterDetail'>
        <Link to='/' className='characterDetail--link'>
          <p>Volver atrás</p>
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
                Conocido también
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
                Blood{' '}
                <p className='characterDetail--section__detail--sectionBlood__container--title'>
                  {props.character.blood}
                </p>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionDescription'>
              <article className='characterDetail--section__detail--sectionDescription__container'>
                Description
                <article className='characterDetail--section__detail--sectionDescription__container--characteristics'>
                  <p className='characterDetail--section__detail--sectionDescription__container--characteristics__breed'>
                    {props.character.descriptionBreed}
                  </p>
                  <p className='characterDetail--section__detail--sectionDescription__container--characteristics__genres'>
                    {props.character.descriptionGenres}
                  </p>
                  <p className='characterDetail--section__detail--sectionDescription__container--characteristics__hair'>
                    {props.character.descriptionHairColour}
                  </p>
                  <p className='characterDetail--section__detail--sectionDescription__container--characteristics__eyes'>
                    {props.character.descriptionEyesColour}
                  </p>
                </article>
              </article>
            </div>
            <div className='characterDetail--section__detail--sectionHouse'>
              <article className='characterDetail--section__detail--sectionHouse__container'>
                Howarts house:{' '}
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
                Patronus:
                <p className='characterDetail--section__detail--sectionPatronus__container--title'>
                  {props.character.patronus}
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    );
  } else {
    return <PageNotFound />;
  }
};
export default CharacterDetail;

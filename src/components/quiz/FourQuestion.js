import leviosa from '../../images/leviosa.gif';
import obliviate from '../../images/obliviate.gif';
import accio from '../../images/accio.gif';
import desmaius from '../../images/desmaius.gif';
import bombarda from '../../images/bombarda.gif';
import expecto from '../../images/patronum.gif';
import imperio from '../../images/imperio.gif';

const FourQuestion = (props) => {
  return (
    <fieldset className='formHat__fourQuestion'>
      {/* <p className='formHat__secondQuestion--number'>2ª</p> */}
      <div className='formHat__fourQuestion--fieldsetQuestion'>
        <img
          className='formHat__fourQuestion--fieldsetQuestion__img'
          src={leviosa}
          alt='imagen de una hechizo leviosa'
        />
        <label htmlFor='spell'>
          <p className='formHat__fourQuestion--fieldsetQuestion__question'>
            ¿Qué hechizo encuentrás más útil?
          </p>
        </label>
      </div>
      <div className='formHat__fourQuestion--fieldsetInputs'>
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellAccio'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellAccio'
            name='spell'
            value='Accio'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={accio}
            alt='imagen de defensa contras las artes oscuras'
            title='imagen de de defensa contras las artes oscuras'
          ></img>
          <p>Accio</p>
        </label>
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellExpecto'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellExpecto'
            name='spell'
            value='Expecto Patronum'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={expecto}
            alt='imagen de pociones'
            title='imagen de pociones'
          ></img>
          <p>Expecto patronum</p>
        </label>
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellDesmaius'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellDesmaius'
            name='spell'
            value='Desmaius'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={desmaius}
            alt='imagen de cuidado de criaturas mágicas'
            title='imagen de cuidado de criaturas mágicas'
          ></img>
          <p>Desmaius</p>
        </label>{' '}
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellObliviate'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellObliviate'
            name='spell'
            value='Obliviate'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={obliviate}
            alt='imagen de herbología'
            title='imagen de herbología'
          ></img>
          <p>Obliviate</p>
        </label>
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellBombarda'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellBombarda'
            name='spell'
            value='Bombarda'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={bombarda}
            alt='imagen de adivinación'
            title='imagen de adivinación'
          ></img>
          <p>Bombarda</p>
        </label>
        <label
          className='formHat__fourQuestion--fieldsetInputs__label'
          htmlFor='spellImperio'
        >
          <input
            required=''
            className='formHat__fourQuestion--fieldsetInputs__label--option'
            type='radio'
            id='spellImperio'
            name='spell'
            value='Imperio'
            onChange={props.handleSpell}
          />
          <img
            className='formHat__fourQuestion--fieldsetInputs__label--img'
            src={imperio}
            alt='imagen de adivinación'
            title='imagen de adivinación'
          ></img>
          <p>Imperio</p>
        </label>
      </div>
      {/* <p className='formHat__fourQuestion--response'>
        Tu respuesta seleccionada es: {props.spell}
      </p> */}
    </fieldset>
  );
};
export default FourQuestion;

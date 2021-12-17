import sybill from '../../images/sybill.jpg';
import lupin from '../../images/lupin.jpg';
import snape from '../../images/snape.jpg';
import dumbledore from '../../images/dumbledore.jpg';
import mcgonagall from '../../images/mcgonagall.jpg';
import ojoloco from '../../images/ojoloco.jpg';
import hagrid from '../../images/hagrid.jpg';
import teachers from '../../images/teachers.jpg';
const FiveQuestion = (props) => {
  return (
    <fieldset className='formHat__fiveQuestion'>
      <div className='formHat__fiveQuestion--fieldsetQuestion'>
        <img
          className='formHat__fiveQuestion--fieldsetQuestion__img'
          src={teachers}
          alt='imagen de una hechizo leviosa'
        />
        <label htmlFor='teacher'>
          <p className='formHat__fiveQuestion--fieldsetQuestion__question'>
            ¿Tu profesor preferido?
          </p>
        </label>
      </div>
      <div className='formHat__fiveQuestion--fieldsetInputs'>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherSybill'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherSybill'
            name='teacher'
            value='Sybill Trelawney'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={sybill}
            alt='imagen de Sybill Trelawney'
            title='imagen de Sybill Trelawney'
          ></img>
          <p>Sybill trelawney</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherLupin'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherLupin'
            name='teacher'
            value='Remus Lupin'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={lupin}
            alt='imagen de Remus Lupin'
            title='imagen de remus Lupin'
          ></img>
          <p>Remus lupin</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherSnape'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherSnape'
            name='teacher'
            value='Severus Snape'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={snape}
            alt='imagen de Severus Snape'
            title='imagen de Severus Snape'
          ></img>
          <p>Severus snape</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherOjoloco'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherOjoloco'
            name='teacher'
            value='Ojoloco Moody'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={ojoloco}
            alt='imagen de Ojoloco Moody'
            title='imagen de Ojoloco Moody'
          ></img>
          <p>Ojoloco moody</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherDumbledore'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherDumbledore'
            name='teacher'
            value='Albus Dumbledore'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={dumbledore}
            alt='imagen de Albus Dumbledore'
            title='imagen de Albus Dumbledore'
          ></img>
          <p>Albus Dumbledore</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherMcgonagall'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherMcgonagall'
            name='teacher'
            value='Minerva McGonagall'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={mcgonagall}
            alt='imagen de Minerva McGonagall'
            title='imagen de Minerva McGonagall'
          ></img>
          <p>Minerva mcgonagall</p>
        </label>
        <label
          className='formHat__fiveQuestion--fieldsetInputs__label'
          htmlFor='teacherHagrid'
        >
          <input
            required=''
            className='formHat__fiveQuestion--fieldsetInputs__label--option'
            type='radio'
            id='teacherHagrid'
            name='teacher'
            value='Rubeus hagrid'
            onChange={props.handleTeacher}
          />
          <img
            className='formHat__fiveQuestion--fieldsetInputs__label--img'
            src={hagrid}
            alt='imagen de Rubeus Hagrid'
            title='imagen de Rubeus Hagrid'
          ></img>
          <p>Rubeus hagrid</p>
        </label>
      </div>
      {/* <p className='formHat__fiveQuestion--response'>
        Tu respuesta seleccionada es: {props.teacher}
      </p> */}
    </fieldset>
  );
};
export default FiveQuestion;

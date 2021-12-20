const ButtonResponse = (props) => {
  return (
    <input
      type='submit'
      value='Revelio'
      className='formHat__buttonRevelio'
      onClick={props.handleButton}
    />
  );
};
export default ButtonResponse;

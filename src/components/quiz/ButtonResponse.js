const ButtonResponse = (props) => {
  return (
    <input
      type='button'
      value='Revelio'
      className='button'
      onClick={props.handleButton}
    />
  );
};
export default ButtonResponse;

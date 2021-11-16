import { Link } from 'react-router-dom';

const FormButton = (props) => {
  return (
    <Link to={'/quiz/'}>
      <form>
        <input type='button' value='Quiz' />
      </form>
    </Link>
  );
};
export default FormButton;

import '../styles/layout/searchName.scss';
import FilterByname from './FilterByName';

const Filters = (props) => {
  console.log(props.searchName);
  return (
    <form className='form'>
      <FilterByname
        searchName={props.SearchName}
        handleSearchName={props.handleSearchName}
      />
    </form>
  );
};
export default Filters;

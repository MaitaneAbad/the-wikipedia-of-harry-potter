import FilterByname from './FilterByName';

const Filters = (props) => {
  console.log(props.searchName);
  return (
    <form>
      <FilterByname
        searchName={props.SearchName}
        handleSearchName={props.handleSearchName}
      />
    </form>
  );
};
export default Filters;

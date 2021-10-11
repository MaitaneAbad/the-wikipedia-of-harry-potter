const FilterByname = (props) => {
  return (
    <>
      <label>Buscador: </label>
      <input
        type='text'
        placeholder='Ej. Minerva McGonagall'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
    </>
  );
};
export default FilterByname;

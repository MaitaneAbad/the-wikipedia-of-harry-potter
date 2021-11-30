const FilterByname = (props) => {
  return (
    <div className='form__formSearch'>
      <label className='form__formSearch--label'>Busca el personaje: </label>
      <input
        className='form__formSearch--input'
        type='text'
        placeholder='Ej. Minerva McGonagall...'
        name='name'
        id='name'
        value={props.searchName}
        onChange={props.handleSearchName}
      />
    </div>
  );
};
export default FilterByname;

import '../styles/layout/searchName.scss';

const FilterByname = (props) => {
  return (
    <div className='formSearch'>
      <label className='formSearch__label'>Busca el personaje: </label>
      <input
        className='formSearch__input'
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

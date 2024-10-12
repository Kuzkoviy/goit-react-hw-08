import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch()
  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div className={css.container}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="search"
        className={css.search}
        onChange={handleSearch}
      />
    </div>
  );
};
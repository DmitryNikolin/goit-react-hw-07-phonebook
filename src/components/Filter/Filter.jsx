import { useDispatch, useSelector } from 'react-redux';

import { filterSearch } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import PropTypes from 'prop-types';

import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterSearch(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <h2>Search</h2>
      <label>
        <input
          type="name"
          value={filter}
          onChange={handleChange}
          placeholder="Enter name for Search"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

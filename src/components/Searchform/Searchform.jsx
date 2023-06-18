import React, { useState } from 'react';
import styles from './Searchform.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const [prevSearchName, setPrevSearchName] = useState('');

  const handleChangeName = e => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      alert('Write a search query');
      return;
    }
    if (searchName === prevSearchName) {
      return;
    }
    onSubmit(searchName);
    reset();
  };

  const reset = () => {
    setSearchName('');
    setPrevSearchName(searchName);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChangeName}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchName}
      />
      <button className={styles.button} type="submit">
        <span className={styles.buttonLabel}>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

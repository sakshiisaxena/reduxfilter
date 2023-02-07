import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from './actions';

const SearchBar = ({ searchTerm, updateSearchTerm }) => {
  const handleChange = (event) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search fruits"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = {
  updateSearchTerm
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

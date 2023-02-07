import React from 'react';
import { connect } from 'react-redux';

const List = ({ items, searchTerm }) => {
  const filteredFruits = items
    .filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort();

  return (
    <ul>
      {filteredFruits.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(List);
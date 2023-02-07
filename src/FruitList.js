import React from 'react';
import { connect } from 'react-redux';

const FruitList = ({ fruits, searchTerm }) => {
  const filteredFruits = fruits
    .filter((fruit) =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort();

  return (
    <ul>
      {filteredFruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  fruits: state.fruits,
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(FruitList);
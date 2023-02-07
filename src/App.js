import React from 'react';
import SearchBar from './SearchBar';
import FruitList from './FruitList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <div>
    <Provider store={store}>
    <SearchBar />
    <FruitList />
    </Provider>
  </div>
);

export default App;
const initialState = {
    searchTerm: '',
    fruits: [
      'apple',
      'banana',
      'cherry',
      'date',
      'elderberry',
      'fig',
      'grape',
      'honeydew'
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.searchTerm
        };
      default:
        return state;
    }
  };
  
  export default reducer;
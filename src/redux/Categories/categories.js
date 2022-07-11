const CHECK_STATUS = './Categories/categories';

const CategoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const categories = (category) => ({ type: CHECK_STATUS, category });

export default CategoryReducer;

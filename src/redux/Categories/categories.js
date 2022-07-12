const CHECK_STATUS = './Categories/CHECK_STATUS';

const CategoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const categories = () => ({ type: CHECK_STATUS });

export default CategoryReducer;

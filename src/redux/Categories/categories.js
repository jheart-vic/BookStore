const CHECK_STATUS = './Categories/categories'

const CategoryReducer = (state = [], action) => {
   switch(action.type) {
    case CHECK_STATUS:  'Under construction'
    default: state
   }
  
}

 export const categories =  (category) => ({type: CHECK_STATUS, category});

export default CategoryReducer;
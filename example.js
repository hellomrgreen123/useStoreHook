import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    SAVE_FILTER: (initialState, curState) => {
      const savedFilterSettings = { ...curState };
     
    
      return {filters: savedFilterSettings};
    },
    TOGGLE_FILTERS:(initialState,curState)=>{
      const filterStatus = !curState.isFiltersOn
      return{isFiltersOn:filterStatus}
    }
  };

  initStore(actions, {
    filters: {
      isGlutenFree: false,
      isLactoseFree: false,
      isVegan: false,
      isVegetarian: false,
    },
    isFiltersOn:false
  });
};

export default configureStore;

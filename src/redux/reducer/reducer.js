//_______________________________ S T O R E ____________________________________
const initialState = {
   allCountries: [],
   someCountries: [],
   allActivities: [],
   idCountry: [],
};
//_______________________________ S T O R E ____________________________________

/*Este es el reducer.*/
function rootReducer(state = initialState, action) {
   switch (action.type) {
      default:
         return state;
   }
}

export default rootReducer;

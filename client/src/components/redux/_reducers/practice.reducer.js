import { Constants } from "../_constants/constants";

const initialState = {
  practiceId: null,
  practiceType: null,
};

/**
 * Reducer for the practice state.
 *
 * @param {object} state The current practice state.
 * @param {object} action The action object.
 * @returns {object} The new practice state.
 */
const practiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_PRACTICE_ID:
      return {
        ...state,
        practiceId: action.payload,
      };
    case Constants.SET_PRACTICE_TYPE:
      return {
        ...state,
        practiceType: action.payload,
      };
    default:
      return state;
  }
};

export default practiceReducer;
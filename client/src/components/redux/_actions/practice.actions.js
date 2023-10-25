import { Constants } from "../_constants/constants";

/**
 * Creates an action to set the practice ID.
 *
 * @param {number} id The practice ID to set.
 * @returns {object} An action object with the type `SET_PRACTICE_ID` and the payload `id`.
 */
export const setPracticeId = (id) => {
  return {
    type: Constants.SET_PRACTICE_ID,
    payload: id,
  };
};

/**
 * Creates an action to set the practice type.
 *
 * @param {string} type The practice type to set.
 * @returns {object} An action object with the type `SET_PRACTICE_TYPE` and the payload `type`.
 */
export const setPracticeType = (type) => {
  return {
    type: Constants.SET_PRACTICE_TYPE,
    payload: type,
  };
};

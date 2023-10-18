import { Constants } from "../_constants/constants";

/**
 * Action creator for setting the user data.
 *
 * @param {object} user - An object containing user data.
 * @returns {object} An action object to dispatch the user data.
 */
export const setUser = (user) => {
  return {
    type: Constants.SET_USER,
    payload: user,
  };
};

/**
 * Sets the user's role.
 * 
 * @param role {string} The user's new role.
 * @returns {object} An action object with the type Constants.SET_ROLE_USER and the payload role.
 */
export const setRoleUser = (role) => {
  return {
    type: Constants.SET_ROLE_USER,
    payload: role,
  };
};

/**
 * Action creator for setting the user's login status.
 *
 * @param {boolean} LoggedIn - A boolean indicating the user's login status.
 * @returns {object} An action object to dispatch the login status.
 */
export const setLoggedIn = (LoggedIn) => {
  return {
    type: Constants.SET_LOGGED_IN,
    payload: LoggedIn,
  };
};
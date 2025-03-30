import axios from "../../utils/axios"; // Adjust the path as necessary
import { loadPerson, removePerson } from "../reducers/personSlice"; // Adjust the path as necessary

export const asyncloadPerson = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/person/${id}`);
    const personDetails = response.data;

    // Dispatch the action to load person details into the Redux store
    dispatch(loadPerson(personDetails));
  } catch (error) {
    console.error("Error fetching person details:", error);
  }
};

// Action to remove person details from the store
export const clearPerson = () => (dispatch) => {
  dispatch(removePerson());
};

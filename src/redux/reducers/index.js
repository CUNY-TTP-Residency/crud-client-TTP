import axios from 'axios';
import { GOT_ALL_CAMPUSES, GOT_ALL_STUDENTS } from './actions';


// Initial state.
const initialState = {
    campuses: [],
    students: [],
};

// Action creators
const gotAllCampuses = (payload) => ({
    type: GOT_ALL_CAMPUSES,
    payload,
});

const gotAllStudents = (payload) => ({
    type: GOT_ALL_STUDENTS,
    payload,
})

// Thunks
export const getAllCampuses = () => {
    console.log("Thunking"); // Testing
    return async (dispatch) => {
        try{
            console.log("We are getting all campuses now.")
            const campuses = await axios.get('http://localhost:8080/api/campuses');
            console.log(campuses);
            dispatch(gotAllCampuses(campuses.data.campuses));
        }catch(error){ console.error(error) }
    };
};

export const getAllStudents = () => {
    console.log("Thunking"); // Testing
    return async (dispatch) => {
        try{
            console.log("We are getting all students now.")
            const students = await axios.get('http://localhost:8080/api/students');
            console.log(students);
            dispatch(gotAllStudents(students.data.students));
        }catch(error){ console.error(error) }
    };
};

const rootReducer = (state = initialState, action) => {
    console.log('REDUCER IS PROCESSING DISPATCHED ACTION');
    console.log('state', state);
    console.log('action', action);
    switch (action.type) {
      case GOT_ALL_CAMPUSES:
        return { ...state, campuses: action.payload };
      case GOT_ALL_STUDENTS:
        return { ...state, students: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
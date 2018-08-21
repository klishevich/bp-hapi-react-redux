// ACTION TYPES
export const COURSES_TYPES = {
  // FETCH COURSES LIST
  FETCH_COURSES_SAGA: 'FETCH_COURSES_SAGA',
  FETCH_COURSES_START: 'FETCH_COURSES_START',
  FETCH_COURSES_SUCCESS: 'FETCH_COURSES_SUCCESS',
  FETCH_COURSES_ERROR: 'FETCH_COURSES_ERROR',

  // FETCH COURSE
  FETCH_COURSE_SAGA: 'FETCH_COURSE_SAGA',
  FETCH_COURSE_START: 'FETCH_COURSE_START',
  FETCH_COURSE_SUCCESS: 'FETCH_COURSE_SUCCESS',
  FETCH_COURSE_ERROR: 'FETCH_COURSE_ERROR',

  // CREATE ITEM
  CREATE_COURSE_SAGA: 'CREATE_COURSE_SAGA',
  CREATE_COURSE_START: 'CREATE_COURSE_START',
  CREATE_COURSE_SUCCESS: 'CREATE_COURSE_SUCCESS',
  CREATE_COURSE_ERROR: 'CREATE_COURSE_ERROR',

  // FETCH ITEM
  FETCH_COURSE_SAGA: 'FETCH_COURSE_SAGA',
  FETCH_COURSE_START: 'FETCH_COURSE_START',
  FETCH_COURSE_SUCCESS: 'FETCH_COURSE_SUCCESS',
  FETCH_COURSE_ERROR: 'FETCH_COURSE_ERROR',

  // UPDATE ITEM
  UPDATE_COURSE_SAGA: 'UPDATE_COURSE_SAGA',
  UPDATE_COURSE_START: 'UPDATE_COURSE_START',
  UPDATE_COURSE_SUCCESS: 'UPDATE_COURSE_SUCCESS',
  UPDATE_COURSE_ERROR: 'UPDATE_COURSE_ERROR',

  // DELETE ITEM
  DELETE_COURSE_SAGA: 'DELETE_COURSE_SAGA',
  DELETE_COURSE_START: 'DELETE_COURSE_START',
  DELETE_COURSE_SUCCESS: 'DELETE_COURSE_SUCCESS',
  DELETE_COURSE_ERROR: 'DELETE_COURSE_ERROR'
};

// ACTION CREATORS
// Postfix AC stands for Action Creator
export function fetchCoursesSagaAC() {
  return {
    type: COURSES_TYPES.FETCH_COURSES_SAGA
  };
}

export function fetchCoursesSuccessAC(courses) {
  return {
    type: COURSES_TYPES.FETCH_COURSES_SUCCESS,
    payload: {
      courses
    }
  };
}

export function fetchCourseSagaAC(id) {
  return {
    type: COURSES_TYPES.FETCH_COURSE_SAGA,
    payload: {
      id
    }
  };
}

export function fetchCourseSuccessAC(course) {
  return {
    type: COURSES_TYPES.FETCH_COURSE_SUCCESS,
    payload: {
      course
    }
  };
}

export function createCourseAC(data) {
  return {
    type: COURSES_TYPES.CREATE_COURSE_SAGA,
    payload: {
      name: data.name,
      code: data.code,
      comment: data.comment
    }
  };
}

export function createCourseSuccessAC(course) {
  return {
    type: COURSES_TYPES.CREATE_COURSE_SUCCESS,
    payload: course
  };
}

export function deleteCourseAC(id) {
  return {
    type: COURSES_TYPES.DELETE_COURSE_SAGA,
    payload: id
  };
}

export function deleteCourseSuccessAC(id) {
  return {
    type: COURSES_TYPES.DELETE_COURSE_SUCCESS,
    payload: id
  };
}

export function updateCourseAC(id, course) {
  return {
    type: COURSES_TYPES.UPDATE_COURSE_SAGA,
    payload: { id, course }
  };
}

export function updateCourseSuccessAC(course) {
  return {
    type: COURSES_TYPES.UPDATE_COURSE_SUCCESS,
    payload: course
  };
}

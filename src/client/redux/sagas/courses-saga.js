import { put, takeEvery, select, call } from 'redux-saga/effects';
import {
  COURSES_TYPES,
  fetchCoursesSuccessAC,
  fetchCourseSuccessAC,
  createCourseSuccessAC,
  deleteCourseSuccessAC,
  updateCourseSuccessAC
} from '../actions/courses-actions';

import { selectCourses } from '../selectors/courses-selectors';
import axios from '../../axios-instance-browser';

// worker Saga: will be fired on FETCH_COURSES_SAGA actions
function* fetchCourses() {
  const currentCourses = yield select(selectCourses);
  if (currentCourses.length === 0) {
    // TODO obtain method and url from settings
    const method = 'GET';
    const url = '/api/courses';
    try {
      const res = yield call(axios, { method, url });
      const coursesData = res.data;
      yield put(fetchCoursesSuccessAC(coursesData));
    } catch (error) {
      // TODO add FAILURE ACTIONS
      console.log(error, 'error');
    }
  }
}

// Starts fetchCourses on each dispatched `FETCH_COURSES_SAGA` action.
// eslint-disable-next-line
export function* watchFetchCourses() {
  yield takeEvery(COURSES_TYPES.FETCH_COURSES_SAGA, fetchCourses);
}

function* fetchCourse(action) {
  const list = yield select(selectCourses);
  if (list.length === 0) {
    const method = 'GET';
    const url = `/api/courses/${action.payload.id}`;
    try {
      const res = yield call(axios, { method, url });
      const courseData = res.data;
      yield put(fetchCourseSuccessAC(courseData));
    } catch (error) {
      console.log(error);
    }
  }
}

export function* watchFetchCourse() {
  yield takeEvery(COURSES_TYPES.FETCH_COURSE_SAGA, fetchCourse);
}

function* addCourse(action) {
  const courseData = action.payload;
  const method = 'POST';
  const url = '/api/courses';
  try {
    const res = yield call(axios, { method, url, data: courseData });
    yield put(createCourseSuccessAC(res.data));
    // TODO to update list after addCourse / deleteCourse just call fetchCoursesSagaAC
    // yield* fetchCourses();
  } catch (error) {
    console.log(error, 'error on add course post request');
  }
}

export function* watchAddCourse() {
  yield takeEvery(COURSES_TYPES.CREATE_COURSE_SAGA, addCourse);
}


function* deleteCourse(action) {
  const id = action.payload;
  const method = 'DELETE';
  const url = `/api/courses/${id}`;
  try {
    yield call(axios, { method, url });
    yield put(deleteCourseSuccessAC(id));
  } catch (error) {
    console.log(error, 'error on delete course request');
  }
}

export function* watchDeleteCourse() {
  yield takeEvery(COURSES_TYPES.DELETE_COURSE_SAGA, deleteCourse);
}


function* updateCourse(action) {
  const id = action.payload.id;
  const method = 'PATCH';
  const url = `/api/courses/${id}/edit`;
  try {
    const res = yield call(axios, { method, url, data: action.payload });
    yield put(updateCourseSuccessAC(res.data));
  } catch (error) {
    console.log(error, 'error on update course request');
  }
}

export function* watchUpdateCourse() {
  yield takeEvery(COURSES_TYPES.UPDATE_COURSE_SAGA, updateCourse);
}

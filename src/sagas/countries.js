import { call, put, takeLatest } from "redux-saga/effects";

import { fetch_countries_api } from "../api/webApi.js";
import { fetchCountriesResult } from "../actions/countries.js";
import { CountriesActionTypes as ActionTypes } from "../types/ActionTypes.js";

function* fetchCountriesSaga(action) {
  try {
    const { searchQuery } = action;

    const response = yield call(fetch_countries_api, searchQuery);
    yield put(fetchCountriesResult(false, response.data));
    //TODO: call the api here
  } catch (e) {
    yield put(fetchCountriesResult(true));
    //TODO: catch the errors here
  }
}

export default [takeLatest(ActionTypes.fetch_countries, fetchCountriesSaga)];

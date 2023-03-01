import { all } from "redux-saga/effects";

import countriesSaga from "./countries";

export default function* rootSaga() {
  yield all([...countriesSaga]);
}

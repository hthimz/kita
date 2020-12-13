import { all, takeEvery, takeLatest ,call, put} from 'redux-saga/effects';
import Immutable, { fromJS } from "immutable";
import Api from "../../Utils/request";
import { actionCreator } from "../../Utils/actionHelper";
import { createSelector } from "reselect";


export const SET_DATA = "SET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const GET_GROUP_DATA_CALL = "app/Shared/GET_GROUP_DATA_CALL";
export const UPDATE_KYC_CALL = "app/Shared/UPDATE_KYC_CALL";



export function getGroupDataApiCall(payload) {
  return actionCreator(GET_GROUP_DATA_CALL, payload);
}
export function setGroupData(payload) {
  return actionCreator(SET_DATA, payload);
}


export default function GroupBuyReducer(state = fromJS({}), action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA: {
      return fromJS(payload);
    }
    case UPDATE_DATA: {
      return state.mergeDeep(payload);
    }
  }
  return state;
}



export const GroupBuySelector = (state) => state.GroupBuyReducer;

export const payload =createSelector(GroupBuySelector, (g) =>
g.get("payload", ""));

export const cards =createSelector(payload, (g) =>
JSON.parse(JSON.stringify(g)));

export function* GroupBuySaga() {
    yield all([
      takeLatest(GET_GROUP_DATA_CALL, getGroupBuyData),
    ]);
  }

  export function* getGroupBuyData({payload}){
    try {
      const  {data}  = yield call(getKitaDetailApi,payload);
      const {message} = data;
      if (message == "Success") {
        yield put(setGroupData(data));
        yield call(payload.resolve);
      } else {
        yield call(payload.reject, { _error: (data && data.message) || "Error" });
      }
    } catch (e) {
      console.error(
        "// Could not finish call successfully ",
        e
      );
      yield call(payload.reject);
    }
  }



  export function getKitaDetailApi() {
    return Api.get(`/v1/group/test`);
  }
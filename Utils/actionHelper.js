/**
 * Action Helper
 * @param type
 * @param payload
 * @returns {{type: *, payload: *}}
 */
export function actionCreator(type, payload) {
    return {type, payload};
  }
  
import {memoizedSelectorCreator} from "simple-selectors";
import {connect} from "react-redux";
import shallowEquals from "shallow-equals";
import isPlainObject from "lodash.isplainobject";

function shallowish(maxDepth = 1) {
    return function eq(a, b, currentDepth = 0) {
      if (a === b) return true;
      if (currentDepth >= maxDepth) return false;
      if ((Array.isArray(a) && Array.isArray(b)) || (isPlainObject(a) && isPlainObject(b))) {
        return shallowEquals(a, b, (a, b) => eq(a, b, currentDepth + 1));
      }
      return false;
    };
  }

export const createSelector = memoizedSelectorCreator(shallowish(2));

export function connectSelector(mapStateSelector, mapDispatchToProps, mergeProps, options) {
  return function connectWrapper(WrappedComponent) {
    return connect(
      () => createSelector(mapStateSelector),
      typeof mapDispatchToProps === 'function' ? () => mapDispatchToProps : mapDispatchToProps,
      mergeProps,
      options
    )(WrappedComponent);
  };
}
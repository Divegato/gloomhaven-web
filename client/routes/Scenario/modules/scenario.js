// ------------------------------------
// Constants
// ------------------------------------
export const SCENARIO_INCREMENT = 'SCENARIO_INCREMENT'
export const SCENARIO_DOUBLE_ASYNC = 'SCENARIO_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: SCENARIO_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: SCENARIO_DOUBLE_ASYNC,
          payload: getState().scenario
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SCENARIO_INCREMENT]: (state, action) => state + action.payload,
  [SCENARIO_DOUBLE_ASYNC]: (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { hand: [{ card: 1, name: 'Test 1' }, { card: 2, name: 'Test 2' }] }
export default function scenarioReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

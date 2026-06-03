export const func = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        const {dispatch, getState} = store
        action(dispatch,getState)
    }else {
        next(action)
    }
}
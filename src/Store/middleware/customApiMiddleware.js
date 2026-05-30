export const apiCall = (store) => (next) => (action) => {
    const {dispatch,getState} = store
    const BASE_URL = 'https://fakestoreapi.com'
    if(action.type === 'api/makeApiCall') {
        next(action)
        const {url,onStart,onSuccess,onError} = action.payload
        dispatch({type: onStart})
        fetch(`${BASE_URL}/${url}`)
        .then(res => res.json())
        .then(data => dispatch({type: onSuccess,payload: data}))
        .catch((error) => dispatch({type: onError}))
    }else {
        next(action)
    }
}

//api action creator function
export const makeApiCall = (payload) => {type: 'api/makeApiCall' , payload}
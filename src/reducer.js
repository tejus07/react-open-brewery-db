const reducer = (state, action) => {
    switch (action.type) {
        case "GET_BREWERIES":
            return {
                ...state,
                isLoading: false,
                breweries: action.payload.breweries
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload.query
            }
        default:
            return state;

    }
}

export default reducer;
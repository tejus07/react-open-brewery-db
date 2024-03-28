import React, {useContext, useEffect, useReducer} from "react";
import reducer from "./reducer";
import * as OpenBreweryDBService from "./services/OpenBreweryDBService";

const initialState = {
    isLoading: true,
    query: "",
    page: 1,
    perPage: 50,
    breweries: []
}
const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getBreweries = async () => {
        try {
            dispatch({type: "SET_LOADING"})
            const response = await OpenBreweryDBService.getBreweries(state.query.trim().replaceAll(' ', '_'), state.page, state.perPage);
            console.log(response.data);
            dispatch({
                type: "GET_BREWERIES",
                payload: {
                    breweries: response.data,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const searchBreweries = (searchQuery) => {
        dispatch({type: "SEARCH_QUERY", payload: {query: searchQuery}});
    }

    useEffect(() => {
        getBreweries()
    }, [state.query]);
    return <AppContext.Provider value={{...state, searchBreweries}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useGlobalContext};
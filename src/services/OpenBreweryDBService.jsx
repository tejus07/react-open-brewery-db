import axios from "axios";

const baseURL = "https://api.openbrewerydb.org/v1/";

export const getBreweries = async (searchQuery, page, perPage) => {
    let params = {
        page,
        per_page: perPage,
        ...searchQuery ? {query: searchQuery} : {}
    }
    let URL = searchQuery ? `${baseURL}breweries/search` : `${baseURL}breweries`;
    return await axios.get(URL, {params});
}
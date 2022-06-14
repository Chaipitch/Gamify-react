import axios from "axios";
import { searchGameURL } from "../api";

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchData = await axios.get(searchGameURL(game_name))
    dispatch({
        type: 'SEARCH_GAMES',
        payload: {
            searched: searchData.data.results,
        }
    })
}
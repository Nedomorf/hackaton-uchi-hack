import {api} from "../../api";

const SET_SEARCH_INFO = 'SET_SEARCH_INFO/searchReducer';
const SET_IS_FEATCHING = 'SET_IS_FEATCHING/searchReducer';

let initialState = {
    isFetching: null,
    searchInfo: [],
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_INFO: {
            return {
                ...state,
                searchInfo:action.info
            }
        }
        case SET_IS_FEATCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return  state
    }
}

const setSearchInfo = (info) => ({type:SET_SEARCH_INFO, info});
const setIsFetching = (isFetching) => ({type:SET_IS_FEATCHING, isFetching})

export const setSearchInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getAll(query);
        dispatch(setSearchInfo(info));
    dispatch(setIsFetching(false));
}



export default SearchReducer;

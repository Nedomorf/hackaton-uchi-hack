import {api} from "../../api";

const SET_SEARCH_INFO = 'SET_SEARCH_INFO/searchReducer';
const SET_IS_FEATCHING = 'SET_IS_FEATCHING/searchReducer';
const SET_IMG_INFO = 'SET_IMG_INFO/searchReducer'
const SET_VIDEO_INFO = 'SET_VIDEO_INFO/searchReducer';
const SET_EXEL_INFO = 'SET_EXEL_INFO/searchReducer';
const SET_PDF_INFO = 'SET_PDF_INFO/searchReducer';
const SET_WORD_INFO = 'SET_WORD_INFO/searchReducer';
const SET_PPT_INFO = 'SET_PPT_INFO/searchReducer';

let initialState = {
    isFetching: null,
    searchInfo: [],
    imgInfo:[],
    videoInfo: [],
    exelInfo: [],
    pdfInfo: [],
    wordInfo:[],
    pptInfo:[],

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
const setVideoInfo = (info) => ({type:SET_VIDEO_INFO, info});
const setImgInfo = (info) => ({type:SET_IMG_INFO, info});
const setExelInfo = (info) => ({type:SET_EXEL_INFO, info});
const setPDFInfo = (info) => ({type:SET_PDF_INFO, info});
const setWordInfo = (info) => ({type:SET_WORD_INFO, info});
const setPPTInfo = (info) => ({type:SET_PPT_INFO, info});
const setIsFetching = (isFetching) => ({type:SET_IS_FEATCHING, isFetching})

export const setSearchInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getAll(query);
        dispatch(setSearchInfo(info));
    dispatch(setIsFetching(false));
}
export const setVideoInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getVideo(query);
        dispatch(setVideoInfo(info));
    dispatch(setIsFetching(false));
}
export const setImgInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getImg(query);
        dispatch(setImgInfo(info));
    dispatch(setIsFetching(false));
}
export const setExelInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getXls(query);
        dispatch(setExelInfo(info));
    dispatch(setIsFetching(false));
}
export const setPdfInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getPdf(query);
        dispatch(setPDFInfo(info));
    dispatch(setIsFetching(false));
}
export const setWordInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getWord(query);
        dispatch(setWordInfo(info));
    dispatch(setIsFetching(false));
}
export const setPPTInfoThunk = (query) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let info = await api.getPPT(query);
        dispatch(setPPTInfo(info));
    dispatch(setIsFetching(false));
}



export default SearchReducer;

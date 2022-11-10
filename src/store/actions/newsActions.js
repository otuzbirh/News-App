import {GET_NEWS, NEWS_ERROR} from '../types'
import axios from 'axios'

export const getNews = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f44c512ec55841cfa048d39894c57d13`)
        dispatch( {
            type: GET_NEWS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: NEWS_ERROR,
            payload: console.log(e),
        })
    }

}
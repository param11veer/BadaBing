import axios from "../../utils/axios";
import { loadmovie, removemovie } from "../reducers/movieslice";

export const asyncloadmovie = (id) => async(dispatch, getState) => {
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`/movie/${id}/translations`);
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data,
            similar: similar.data,
            translations: translations.data,
            videos: videos.data.results.find((m) => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
        };
        dispatch(loadmovie(theultimatedetails));
        console.log(theultimatedetails);
        
    }catch(error){
        console.log(error);
    }
}



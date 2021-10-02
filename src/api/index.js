import axios from "axios";

const instance = axios.create({
    baseURL:'https://google-search3.p.rapidapi.com/api/v1/',
    headers: {
        'x-rapidapi-key': '2778c87ed2msh5c4417723cdc2a4p1cac73jsn3821cffbf09f'
    }
})

export const api = {
    getAll(query) {
        return instance.get(`search/q=${query}&num=100`).then(res => {
            return res.data.results
        })
    },
    getImg(query) {
        return instance.get(`images/q=${query}`).then(res => {
            console.log(res)
        })
    },
    getVideo(query) {
        return instance(`search/q=Site%3Ayoutube.com+${query}&num=100`).then(res => {
            console.log(res)
        })
    },
    getXls(query) {
        return instance(`search/q=filetype%3Axls+${query}&num=100`).then(res => {
            console.log(res)
        })
    },
    getPdf(query) {
        return instance(`search/q=filetype%3Apdf+${query}&num=100`).then(res => {
            console.log(res)
        })
    },
    getWord(query) {
        return instance(`search/q=filetype%3Adoc+${query}&num=100`).then(res => {
            console.log(res)
        })
    },
    getPPT(query) {
        return instance(`search/q=filetype%3Appt+${query}&num=100`).then(res => {
            console.log(res)
        })
    }
}
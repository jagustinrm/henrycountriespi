
import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT"
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const FILTER_BY_NAME  = "FILTER_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_ORDER = "GET_ORDER"
// const RUTA_GET = "http://localhost:3001/country"
// const RUTA_POST = "http://localhost:3001/activity"



export function getCountries () {
    return async function (dispatch){
        try {
            let aux = await axios.get('/country')
            return dispatch({
                type: GET_COUNTRIES,
                payload: aux.data  })
            } catch (error) {
                console.log(error)
            }
        }
}

export function getDetails (id) {
    return function (dispatch){

        axios.get(`/country/${id}`)
        .then(resp => {
            return dispatch({
                type: GET_BY_ID,
                payload: resp.data })
        })
        .catch((resp) => {
            console.log(resp)
        })

    }
}

export function orderBy (payload) {
    try {
     return {
        type: GET_ORDER,
        payload 
    }
    } catch (error) {
        console.log(error);
      
    }
}
export function filterContinent (payload) {
   try {
    return {
        type: FILTER_CONTINENT,
        payload 
        }
    } catch (error) {
        console.log(error);
      }
}

export function filterActivity (payload) {
    try {
        return {
            type: FILTER_ACTIVITY,
            payload 
        }
    } catch (error) {
        console.log(error);
      }

}

export function filterNameSearch (payload) {
    return async function (dispatch){
        try {
            let aux = await axios.get(`/country?name=${payload}`)
            return dispatch({
                type: FILTER_BY_NAME,
                payload: aux.data 
               })
        } catch (error) {
            console.log(error);
          }

        }
        
}

export const createActivity = (activity) => { 
    return async function (){
        try {
        let respuesta = await axios.post('/activity', activity)

        return respuesta
    } catch (error) {
        console.log(error);
        return "Error"
    }
    }

};




// export function getCountries () {
//     return async function (dispatch){
//         return await fetch(RUTA_GET)
//         .then(response => response.json())
//         .then(json => dispatch ({type: GET_COUNTRIES, payload: json}))
// }}


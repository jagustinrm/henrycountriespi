import {CREATE_ACTIVITY,GET_BY_ID, FILTER_BY_NAME, GET_COUNTRIES,GET_ORDER, FILTER_CONTINENT, FILTER_ACTIVITY} from "./actions"

const initialState = {
    paisesModif: [],
    paises: [],
    detalle: {},
    filterCont: 'False',
    filterActi: 'False'
}   

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_COUNTRIES:
            return { 
                ...state,
                paises: action.payload,
                paisesModif: action.payload,
                filterCont: 'False',
                filterActi: 'False',
                detalle: {},
        }

        case CREATE_ACTIVITY:   
            return { 
                ...state,
                   }
        case FILTER_CONTINENT:
            const allcountries = state.paisesModif
            let filterState = ""
            let filterContinent
            if ( state.filterActi !== 'False') {   
                let filtroNuevo = allcountries.filter(p => p.activities.find(a => a.name === state.filterActi) ) 
                if (action.payload === "continente") {
                    filterContinent = filtroNuevo
                    filterState = 'False'
                } else {
                    filterContinent = filtroNuevo.filter(c => c.continents === action.payload) 
                    filterState = action.payload
                }
         } else {
                if (action.payload === "continente") {
                    filterContinent = allcountries
                    filterState = 'False'
                } else {
                    filterContinent = allcountries.filter(c => c.continents === action.payload) 
                    filterState = action.payload
                } 
            }
            return {
                    ...state,
                    paises: filterContinent,
                    filterCont: filterState
                    } 

        case FILTER_ACTIVITY:
             const allActivities = state.paisesModif
             let filterActivity = 0
             let filterStateAct = ""
             if (state.filterCont !== 'False') {
                let filtronuevo = allActivities.filter(c => c.continents === state.filterCont) 

                if (action.payload === "activity") {
                    filterActivity = filtronuevo
                    filterStateAct = 'False'
                } else {
                    filterActivity = filtronuevo.filter(p => p.activities.find(a => a.name === action.payload) ) 
                    filterStateAct= action.payload
                }
            } else {
                if (action.payload === "activity") {
                    filterActivity = allActivities
                    filterStateAct = 'False'
                } else {
                    filterActivity = allActivities.filter(p => p.activities.find(a => a.name === action.payload) ) 
                    filterStateAct = action.payload
                }
            }
          return {
                        ...state,
                        paises: filterActivity,
                        filterActi: filterStateAct
                    }   
                               
        case GET_BY_ID:
            return {
                ...state,
                detalle: action.payload
            }
        case GET_ORDER:

            const order  = state.paises
            switch (action.payload ) {
                case 'ASC':
    order.sort( function (a,b) {
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;                    
    if(b.name.toLowerCase() > a.name.toLowerCase()) return -1    
    return 0;})
    break;
                case 'DESC':
    order.sort( function ( a, b) {
    if(a.name.toLowerCase() > b.name.toLowerCase())return -1;
    if(b.name.toLowerCase() > a.name.toLowerCase())return 1
    return 0;    })
                    break;
                 case 'population':
                        order.sort( function ( a, b) {
                            if(a.population > b.population) return -1;
                            if(b.population > a.population)return 1
                            return 0;
                        })
                        break;
                     default: return state  
    }
                 return { 
                        ...state,
                       paises: [...order]
                   }     


         case   FILTER_BY_NAME:
                    return { 
                        ...state,
                        paises: action.payload,
       }             

        default: return state        
    }
 }

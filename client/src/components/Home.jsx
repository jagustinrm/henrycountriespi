import React, {useEffect} from 'react';
import Card from "./Card";
import Paginado from "./Paginado";
import {useSelector, useDispatch} from 'react-redux';
import {getCountries, filterContinent, filterNameSearch, filterActivity,  orderBy} from  '../redux/actions'
import styles from '../CSS/Home.module.css';
import {Link} from "react-router-dom"
import imagen from "../imagenes/LogoHC.png"

export default function Home() {

const dispatch = useDispatch()
const estadoPaises = useSelector(state => state.paises)
const estadoContinentes = useSelector(state => state.paisesModif)


useEffect(() => {
    dispatch(getCountries())
}, [dispatch]) //le paso como dependencia el dispatch para que renderize siempre


// *************** Handlers **********************
function handleFilter (e) {
e.preventDefault();
dispatch(filterContinent(e.target.value))
setCurrentPage(1)
}
function handleFilterC (e) {
e.preventDefault();
dispatch(filterActivity(e.target.value))
setCurrentPage(1)
 }
 function handleOrder(e) {
e.preventDefault();
dispatch(orderBy(e.target.value))
}
function handleRefresh(e) {
e.preventDefault();
window.location.reload()
    }   
// *************** Handlers **********************


// ******************** FILTER BY NAME **************

 const [nameSearch, setnameSearch] = React.useState({name: ""})

 function handleName (e) {
    setnameSearch({
        ...nameSearch,
        [e.target.name]:e.target.value
 }) 
    dispatch(filterNameSearch(e.target.value))
    setCurrentPage(1)
}
// ******************** FILTER BY NAME **************

// *****************PAGINADO*******************
const [currentPage, setCurrentPage] = React.useState(1)
const countriesPerPage = 10

let indexOfLastCountry = currentPage * countriesPerPage
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
if (currentPage === 1) {indexOfLastCountry = indexOfLastCountry - 1}
const currentCountries = estadoPaises.slice(indexOfFirstCountry,indexOfLastCountry )

const paginado = (pageNumber) => {
     setCurrentPage(pageNumber)
}
// *****************PAGINADO*******************


let arrayContinents = []
estadoContinentes.length && estadoContinentes.map(paises => {

    if (!arrayContinents.includes(paises.continents)) {
        arrayContinents.push(paises.continents)
    }
    return arrayContinents
})

let arrayActivities = []
let allActivities= []
estadoContinentes.length && estadoContinentes.map(paises => { 
    paises.activities.length && paises.activities.map(e => {return allActivities.push(e)} )
    return allActivities
}   )

allActivities.length && allActivities.map(a => {
        if (!arrayActivities.includes(a.name)) {
            arrayActivities.push(a.name)
        }
        return arrayActivities
    })


    return (
        <div className={styles.background}>
            <div>  
                <a href="/" className={styles.topTitle}>
                 <img className={styles.imgTop} src= {imagen} alt="o" />   
                {/* <h1 className={styles.h1} > Countries</h1> */}
                </a>
                <div className={styles.top}> 
                    <div>
                        <Link to='/'>
                        <button className = {styles.btn}>Landing page</button>
                        </Link>
                    </div>
                    <div>
                        
                        <button className = {styles.btn} onClick= {e => handleRefresh(e)}>Refresh</button>
                    </div>
                    <div>
                        <input placeholder="Search..."  className= {styles.input} type="text" name = "name" value={nameSearch.name} onChange= {e => handleName(e)}></input>
                    </div>

                    <div className={styles.filtros}>
                        <select className = {styles.select} name="continents" id="lang" onChange= {e => handleFilter(e)}>
                        <option value="continente"> Continent </option>
                    {
                        arrayContinents.length && arrayContinents.map(cont => {
                           
                            return  <option  key = {cont}  value={cont}>{cont} </option>
                        })  }
                        </select>
            
                        <select className = {styles.select} name="activities" id="lang" onChange= {e => handleFilterC(e)}>
                        <option value="activity"> Activity</option>
                        {
                            arrayActivities.length && arrayActivities.map(act => {
                                return  <option key = {act}  value={act}>{act} </option>
                            })
                        }
                        </select>
 {/*        ORDENAMIENTO        */}
                        
                        
                        <select className = {styles.select} name="order" id="lang" onChange= {e => handleOrder(e)}>
                            <option value="ASC"> A a Z</option>
                            <option value="DESC"> Z a A</option>
                            <option value="population"> Población </option>
                        </select>
                        
 {/*        ORDENAMIENTO        */}
                    </div>
                    <Link to='/activity/create'>
                    <button className = {styles.btn}>Create Activity</button>
                    </Link>

 {/*        CARDS        */}

                    <div className= {styles.contentPadre}>
                        <div className= {styles.content}>
                            <div className={styles.containers}>                   
                                {currentCountries.length? currentCountries.map((c) => {
                                return (
                                <div>
                                    <Link to={'/country/'+ c.id}>        
                                    <Card  name={c.name} flags= {c.flags} continents= {c.continents} key= {c.id} />
                                    </Link>
                                </div>
                                ) }) :  <div className={styles.text}> THERE ARE NO COUNTRIES</div> 
                                } 
                            </div>
                        </div>
                    </div>  
                </div> 
  {/*        CARDS        */}

                <div className= {styles.contentPadre}> 
                    <Paginado
                    countriesPerPage={countriesPerPage}
                    allCountries = {estadoPaises.length}
                    paginado = {paginado}
                    currentPage = {currentPage}
                    />
                </div>
            </div>    
        </div>
    )
}
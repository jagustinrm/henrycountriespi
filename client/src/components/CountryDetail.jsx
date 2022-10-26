import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDetails} from  '../redux/actions'
import styles from '../CSS/CountryDetail.module.css';
import {Link} from 'react-router-dom'
const CountryDetail = (props) => {

  const id = props.match.params.id;
  const dispatch = useDispatch();
  const getDetail = useSelector((state) => state.detalle)

  useEffect(() => {
    dispatch(getDetails(id));

  }, [id, dispatch]);
  

  return (
    <div className= {styles.background}>
      <div>
      {getDetail.id? 
      <div className= {styles.content2}>
        <div className= {styles.contentDetail}>
            <h1 className= {styles.title}>{getDetail.name}</h1>
          <div>
            <img className= {styles.img} src= {getDetail.flags} alt= "flags"/>
        </div>
          <div className= {styles.text}>
            <div >
              <h6>CONTINENT: {getDetail.continents} </h6>
            </div>
            <div><h6>CAPITAL: {getDetail.capital}</h6> </div> 
            <div><h6>SUBREGION: {getDetail.subregion} </h6> </div> 
            <div><h6>AREA: {getDetail.area} Km2</h6> </div> 
            <div><h6>POPULATION: {getDetail.population} </h6> </div> 
          </div>
        </div>
  {/* ACTIVIDADES  */}
        
              {getDetail.activities && getDetail.activities.length > 0 && 
                getDetail.activities.map(a => {
                  return(
                  <div className= {styles.contentActiv} > 
                  <div className= {styles.text}>
                    <div><h6>ACTIVITY: {a.name} </h6> </div>
                    <div><h6>DIFFICULTY: {a.difficulty} </h6> </div>
                    <h6>SEASON: {a.season} </h6> 
                    <h6>DURATION: {a.duration} </h6> 
                  </div>    
                  </div>
                  ) 
                }
                )
              }
      </div> : <div className={styles.text}> THERE ARE NO COUNTRIES</div> 
      }

        
{/* ACTIVIDADES  */}
        
        <Link to='/home'>
          <button className = {styles.btn} name= "Back" > Home </button>
          </Link>
        </div>
    </div>
  );
};
  
  
  export default CountryDetail;
  






















// export default function CountryDetails() {

// const dispatch = useDispatch()
// const estadoPaises = useSelector(state => state.paises)

// useEffect(() => {
//     dispatch(getDetails(id))
// }, [dispatch]) //le paso como dependencia el dispatch para que renderize siempre

//     return (
//         <div>
               
//             {estadoPaises.length && estadoPaises.map(pais => {
//                return (
//                 <div>
//                 <Card name={pais.name} flags= {pais.flags} continents= {pais.continents} />
                
//                 </div>
//                )
//      })}

//          </div>
//     )
// }
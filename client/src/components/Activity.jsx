import React, {useEffect} from 'react';
import * as actions from "../redux/actions";
import styles from '../CSS/Activity.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const CreateActivity = () => {
  
const dispatch=useDispatch()
  // ***********LISTA PAISES ***********************
const estadoPaises = useSelector(state => state.paisesModif)
   
useEffect(() => {
    dispatch(actions.getCountries())
}, [dispatch]) 

// ***********LISTA PAISES ***********************


  const initialState ={
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  }
  const [input, setInput] = React.useState(initialState)
  const [errors, setErrors] = React.useState(initialState);

// ******************** CONTROL***********************   
let regularExpre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

  function validate(input) {
    let errors = {};
    if (regularExpre.test(input.name)) {
      errors.name = 'Correct';
    } else {errors.name = 'a-z only';}
    return errors
  }
// ******************** CONTROL***********************   

function handleOnChange (e){ 
    if (e.target.name === "countries") {
      if (input.countries.length && input.countries.includes(e.target.value))
      {       return null}
      else {
        setInput({
          ...input,
          [e.target.name]: input.countries.concat(e.target.value)
        })
      } 
    } else {
      setInput({
        ...input,
        [e.target.name]:e.target.value,
         
    })}
  let objError = validate({...input, [e.target.name]: e.target.value})
  setErrors(objError) 
}


const handleOnSubmit = (e)=>
  {
    e.preventDefault();
    dispatch(actions.createActivity(input))
    setInput(initialState)
    setErrors(initialState)
    window.alert("Activity created!");
  }

  const handleDelete = (e)=>
  { 
    const delet = input.countries.filter(c => c !== e.target.value) 
    e.preventDefault();
    setInput({
        ...input,
        countries: delet,
    })
  }


  return (
    <div className={styles.background}> 
      <form className= {styles.contentPadre} onSubmit={(event)=> handleOnSubmit(event)}>
        <div className= {styles.content}>
        <h1 className={styles.h1} > CREATE ACTIVITY </h1>
          <div className= {styles.flex} > 
            <label className={styles.h1}>Name: </label>
            <input className= {styles.input} value={input.name} type="text" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required  placeholder="name..."  name= "name" onChange= {handleOnChange}></input>
            {errors.name && <p className={styles.text} >{errors.name} </p>}
          </div> 
        <br/>
          <div> 
            <label className={styles.h1}>Duration: </label>
            <input className= {styles.input} value= {input.duration} type="text" placeholder="duration..."  name= "duration" onChange= {handleOnChange}></input>
            <br/>
          </div>
          <div> 
            <label className={styles.h1}>Difficulty: </label>
            <select  className = {styles.select}  name="difficulty" id="lang"  onChange= {handleOnChange}  >
            <option value= "DEFAULT"> Difficulty </option>
            <option > 1 </option>
            <option > 2 </option>
            <option > 3 </option>
            <option > 4 </option>
            <option > 5 </option>
            </select>
           {/* <input className= {styles.input} type="text" placeholder="difficulty..."  name= "difficulty" onChange= {handleOnChange}></input> */}
          </div>
        
          <div>
            <label className={styles.h1}>Season: </label>
            <select className = {styles.select}  name="season" id="lang" placeholder="season..." onChange= {handleOnChange}  >
            <option value= "DEFAULT"> Season </option>
            <option > Summer </option>
            <option > Winter </option>
            <option > Autumn </option>
            <option > Spring </option>
            </select>
            {/* <input className= {styles.input} type="text" placeholder="season..."  name= "season" onChange= {handleOnChange}></input> */}
            <br/> 
          </div> 
        {/* **************** Countries*/}
        <div>
        <div className= {styles.contentPadre}>
          <label className={styles.h1}> Country: </label>
            <select className = {styles.select}  name="countries" id="lang"  onChange= {handleOnChange} >
            <option value= "DEFAULT" > Country </option>
            {estadoPaises.length && estadoPaises.map(pais => {
              return  <option key={pais.id} value={pais.id}>{pais.name} </option>
            })}
            </select>
            <div> 
              { 
               estadoPaises.length && input.countries.map(idc => {
              let result = estadoPaises.map(pais => {
              if (idc === pais.id) {
                const result = <button value= {pais.id} className={styles.text} key={pais.id} onClick= {e => handleDelete(e)}> {pais.name} </button>
                return result
              }
              return null
              })
              return result 
              })}   
            </div>
          </div>
        </div>
         {/* **************** Countries*/}
         <br/>  
          <Link to='/home'>
          <button className = {styles.btn} name= "Back" > Home </button>
          </Link>
          {input.name?
          <button className = {styles.btn} type="submit" name= "Create Activity" >Create Activity</button>
          :<button disabled className = {styles.btndis} type="submit" name= "Create Activity" >Create Activity</button>
          }
        </div>
       </form>
    </div>
  );
};

export default CreateActivity;

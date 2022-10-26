import React from "react"
import styles from '../CSS/Card.module.css';

export default function Cards({name, flags, continents}) {
return (
    <div className={styles.card}>
        <div>
            <div className= {styles.pinYTitulo}> 
            <div href="#" className= {styles.title}>{name} </div>
            </div>
        <div>
            <img src= {flags} alt= "flags" className={styles.img}/>
        </div>
        <div>
            <div href="#" className= {styles.card_text}>{continents} </div>
        </div>
    </div>
    </div>

)
}
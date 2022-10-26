import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../CSS/LandingPage.module.css';
import imagen from "../imagenes/LogoHC.png"




export default function LandingPage() {
return (
    <div className={styles.background}>
        <div className= {styles.contentPadre}>
        <a href="/" className={styles.topTitle}>
        <img className={styles.img} src= {imagen} alt="o" />   
        {/* <h1 className={styles.h1}> Countries</h1>     */}
        </a>    
        <div className= {styles.content}>
        <Link to='/home'>
        <button className = {styles.btn}>Go!</button>
        </Link>
        </div>
        </div>
    </div>
)
}
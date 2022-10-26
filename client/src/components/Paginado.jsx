import React from 'react';
import styles from '../CSS/Paginado.module.css';


export default function Paginado ({countriesPerPage, allCountries, paginado, currentPage}) {
    const pageNumbers = []
    const calculo = allCountries/countriesPerPage + 1
    for (let i = 1; i< Math.ceil(calculo); i++) {
        pageNumbers.push(i)
    }


    return (
         <div className={styles.content} >
            <ul  >
            <button  className={styles.btn} onClick= {e => currentPage > 1? paginado(currentPage -1): paginado(currentPage)}> Back </button>
               
                {pageNumbers &&  pageNumbers.map(number => {
                    if (number !== currentPage)
                    {
                    if (number < currentPage + 3 && number > currentPage - 3) {                    return (  
                        <button key= {number} className={styles.btn} onClick={() => paginado(number)}>{number} </button>
                    )}
                    } else {
                        return (  
                            <button key= {number} className={styles.btnSelected} onClick={() => paginado(number)}>{number} </button>
                            )
                    }
                    return null;
                }
                )  
                }
                 <button  className={styles.btn} onClick= {e => currentPage + 1 < calculo? paginado(currentPage + 1): paginado(currentPage)}> Next </button>
   
            </ul>

         </div>
    )
}
const axios = require('axios');
const {Activity, Country} = require('../db.js')
const URL ='https://restcountries.com/v3/all'

const getApiCountries = async () => {
    const apiUrl = await axios.get(URL)
    const countries = await apiUrl.data?.map(c => {
        if (c.capital && c.name.common && c.flags && c.continents) {
         Country.create ({
            id: c.cca3,
            name: c.name.common,
            capital: c.capital[0],
             subregion: c.subregion,
             flags: c.flags[0],
             population: c.population,
             continents: c.continents[0],
             area: c.area,
             
        }) }
    })
    return countries
}

const getDbInfo = async () => {
    return await Country.findAll(
        {
            include: {
                model: Activity,
            },
            order:  [['name', 'ASC']],
        })}

const getAllCountries = async () => {
    const apiInfo = await getApiCountries()
    const dbInfo = await getDbInfo()
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}

module.exports = {
    getApiCountries,
    getDbInfo,
    getAllCountries,
};
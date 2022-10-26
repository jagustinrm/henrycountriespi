const { Router } = require('express');
const router = Router();
const {Activity} = require('../db.js')
 
router.post("/", async (req, res) => {
    try {
        let { name, difficulty,  duration,  season, countries} = req.body;
        if (!name || !countries ) {
            res.status(400).send("Faltan datos")
        } else {
            let nuevo = await Activity.create({name,difficulty, duration, season})
            let arr = []
            for (let i = 0; i < countries.length; i++) {
                arr[i] = await nuevo.addCountry(countries[i])
            }
            res.status(202).send("Actividad creada")
        }

    } catch (error ){
        console.log(error)    
        return res.status(404).send(error.message)
    }
})

router.delete("/delete", async (req, res) => {
     let {id} = req.body
try {
    await Activity.destroy({where:{id: id}})
    return res.status(200).json("actividad borrada")
} catch (error ){
    console.log(error)    
    return res.status(404).send(error.message)
}
}
)


router.patch("/edit", async (req, res) => {
    const {id, name} = req.body
    try {
        await Activity.update(
                {name:name},
                {where: {id: id} }
        );
        res.status(200).json("Se editó correctamente")
    } catch (error ){
        res.status(404).send(error.message)
    }
})




module.exports = router;

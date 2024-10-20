import express from 'express'
import NavbarModel from '../../models/NavbarModel.mjs'


const Router = express.Router()


Router.post('/NavbarPostWork', async (req, res) => {
    try {
        const getdata = await NavbarModel.create(req.body)
        console.log("Navbar data get", getdata)
        res.send({ message: "Your Navbar Image Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/NavbarGetWork", async (req, res) => {
    try {
        const dataFind = await NavbarModel.find()
        console.log("User data get", dataFind)
        res.send({ message: "your data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await NavbarModel.findByIdAndUpdate(userId, updateData)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data updated")
        res.send({ message: "data updated", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;
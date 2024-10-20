
import express from 'express'
import conatactSchema from '../../models/ContactModel.mjs'


const Router = express.Router()


Router.post('/ContactPostWork', async (req, res) => {
    try {
        const getdata = await conatactSchema.create(req.body)
        console.log("data Conatact  get", getdata)
        res.send({ message: "Your Contact Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/ContactGetWork", async (req, res) => {
    try {
        const dataFind = await conatactSchema.find()
        console.log("data  Contact Save..", dataFind)
        res.send({ message: "You are receiving Data", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const result = await conatactSchema.findByIdAndDelete(userId)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Contact Deleted")
        res.send({ message: "your conatct data has deleted", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;
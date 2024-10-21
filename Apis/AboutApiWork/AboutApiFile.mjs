import express from 'express'
import AboutSchema from '../../models/AboutModel.mjs'


const Router = express.Router()


Router.post('/AboutPostWork', async (req, res) => {
    try {
        const getdata = await AboutSchema.create(req.body)
        console.log("About data get", getdata)
        res.send({ message: "Your About Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/get", async (req, res) => {
    try {
        const dataFind = await AboutSchema.find()
        console.log("About data get", dataFind)
        res.send({ message: "your About data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await AboutSchema.findByIdAndUpdate(userId, updateData)
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
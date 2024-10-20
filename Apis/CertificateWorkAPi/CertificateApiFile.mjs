
import express from 'express'
import certificateSchema from '../../models/CertificateModel.mjs'


const Router = express.Router()


Router.post('/CertificatePostWork', async (req, res) => {
    try {
        const getdata = await certificateSchema.create(req.body)
        console.log("data Certificate get", getdata)
        res.send({ message: "Your Certificate Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/CertificateGetWork", async (req, res) => {
    try {
        const dataFind = await certificateSchema.find()
        console.log("your data CErtificate get", dataFind)
        res.send({ message: "your Certificate data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await certificateSchema.findByIdAndUpdate(userId, updateData)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Certificate updated")
        res.send({ message: "Your Certificate data updated", result })
    } catch (error) {
        console.error(error)
    }

})

Router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const result = await certificateSchema.findByIdAndDelete(userId)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Certificate Deleted")
        res.send({ message: "your Certificate data has deleted", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;
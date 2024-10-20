import express from 'express'
import GraphicSchema from '../../models/GraphicProtfolioModel.mjs'


const Router = express.Router()


Router.post('/GraphicProtfolioPostWork', async (req, res) => {
    try {
        const getdata = await GraphicSchema.create(req.body)
        console.log("data Graphic Protfolio Save", getdata)
        res.send({ message: "Your Graphic Protfolio Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/graphicGetWork", async (req, res) => {
    try {
        const dataFind = await GraphicSchema.find()
        console.log("your data Graphic protfolio get", dataFind)
        res.send({ message: "your Graphic protfolio data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.get('/:id', async (req, res) => {

    const dataId = req.params.id
    const dataResult = await GraphicSchema.findById(dataId)
    console.log("Singal Data Get", dataResult)
    res.send({ message: "Your Singal Data Get", Data :[dataResult] })

})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await WebSchema.findByIdAndUpdate(userId, updateData)
        if (!result) {
            res.status(404).json({ error: "person not found" })
        }
        console.log("data Web Protfolio updated")
        res.send({ message: "Your Web Protfolio data updated", result })
    } catch (error) {
        console.error(error)
    }

})

Router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const result = await GraphicSchema.findByIdAndDelete(userId)
        if (!result) {
            res.status(404).json({ error: "person not found" })
        }
        console.log("data Graphic Protfolio Deleted")
        res.send({ message: "your Graphic data has deleted", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;
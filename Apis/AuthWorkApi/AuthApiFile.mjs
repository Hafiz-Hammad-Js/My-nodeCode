import express from 'express'
import Auth from '../../models/AuthModel.mjs'


const Router = express.Router()

Router.post('/register', async (req, res) => {
    try {
        const registerData = await Auth.create(req.body)
        console.log("Data Save", registerData)
        res.send({ message: "You Are Register" })
    } catch (error) {
        res.status(500).json({error :"it is error"})
        console.error(error)
    }
})

Router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // User ka login time set karna
    const loginTime = new Date();

    //Step 1: Check if email exists in db
    const user = await Auth.findOne({ email });

    if (!user) {
        res.send({ message: "Email doesn't exist" });
        return;
    }

    //Step 2: Compare Password
    const isCorrectPwd = user.comparePassword(password);

    console.log(isCorrectPwd);
    if (!isCorrectPwd) {
        res.send({ message: 'Invalid Password' });
        return;
    }

    //Step 3: Generate Token
    const token = user.generateToken();

    res.send({ message: "Logged in successfully", token });

})

export default Router;
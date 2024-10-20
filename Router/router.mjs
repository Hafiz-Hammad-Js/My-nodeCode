import express from 'express'
import Header from '../Apis/HeaderApiWork/HeaderApiWork.mjs';
import Navbar from '../Apis/NavbarApiWork/NavbarApi.mjs';
import About from '../Apis/AboutApiWork/AboutApiFile.mjs';
import Exprience from '../Apis/ExprienceWorkAPi/ExperienceApiFile.mjs';
import Certificate from '../Apis/CertificateWorkAPi/CertificateApiFile.mjs';
import WebProtfolio from '../Apis/WebProtfolioApiWork/WebProtfolioApi.mjs';
import Graphic from '../Apis/GraphicApiWork/GraphicApiFileWork.mjs';
import Contact from '../Apis/ContactApiWork/ContactApiFile.mjs';
import Auth from '../Apis/AuthWorkApi/AuthApiFile.mjs';

const Router = express.Router()


Router.use('/Header', Header)
Router.use('/Navbar', Navbar)
Router.use('/About', About)
Router.use('/Exprience', Exprience)
Router.use('/Certificate', Certificate)
Router.use('/Web', WebProtfolio)
Router.use('/Graphic', Graphic)
Router.use('/Contact', Contact)
Router.use('/Auth', Auth)


export default Router;
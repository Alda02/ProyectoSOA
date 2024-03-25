// routes/index.js
import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'First Website with Node two'}))

router.get('/about', (req, res) => res.render('about', { title: 'About Me'}))

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact page'}))

router.get('/login', (req, res) => res.render('login', { title: 'Login'}))

router.get('/register', (req, res) => res.render('register', { title: 'Register'}))

router.get('/mainScreen', (req, res) => res.render('mainScreen', { title: 'Store page'}))

router.get('/cart', (req, res) => res.render('cart', { title: 'NHAN Shopping Cart'}))

export default router

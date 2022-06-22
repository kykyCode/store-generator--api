const router = require('express').Router();
const ViewController = require('../controllers/viewController')
const {PrismaClient} = require('@prisma/client')
const SubdomainsMiddleware = require('../middlewares/subdomains')



router.get('/', SubdomainsMiddleware.subdomains , ViewController.home);
router.get('/products', SubdomainsMiddleware.subdomains , ViewController.products);
router.get('/products/:id', SubdomainsMiddleware.subdomains , ViewController.product);


module.exports = router;
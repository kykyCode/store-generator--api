const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const AuthController = require('../controllers/authController')
const UserController = require('../controllers/userController')
const AddressController = require('../controllers/addressController')
const StoreController = require('../controllers/storeController')
const CustomizationController = require('../controllers/customizationController')
const AuthMiddleware = require('../middlewares/auth')
const ProductController = require('../controllers/productController')


const prisma = new PrismaClient()


router.get('/', async (req, res, next)=>{
    return res.send({response: 'api here'})
});

//app
router.post('/register', AuthController.register);
router.post('/login',AuthController.login);
router.post('/logout', AuthController.logout)
router.get('/users/:id', UserController.show)
router.put('/users/:id', UserController.update)
router.post('/addresses', AddressController.create)
router.put('/addresses/:id', AddressController.update)
router.post('/stores', StoreController.create)
router.post('/customizations', CustomizationController.create)
router.put('/customizations/:id', CustomizationController.update)
router.get('/login', AuthController.isLogged)
router.post('/products', ProductController.create)

router.get('/image', StoreController.sendFile)

router.get('/example-data', AuthMiddleware.authenticate, (req, res)=>{
    res.send({name: 'tomek', surname:'jendraszewski'});
})

/*router.post('/auth/refresh', async(req, res)=>{
    const refreshToken = req.body.token;
    
    if(!refreshToken){
        return res.status(401)
    }

    try{
        const refreshTokenFromDatabase = null
        
    }
})
*/


module.exports = router;
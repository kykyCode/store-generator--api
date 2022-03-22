const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const AuthController = require('../controllers/authController')
const UserController = require('../controllers/userController')
const AddressController = require('../controllers/addressController')
const StoreController = require('../controllers/storeController')
const CustomizationController = require('../controllers/customizationController')
const AuthMiddleware = require('../middlewares/auth')


const prisma = new PrismaClient()


router.get('/', async (req, res, next)=>{
    
});

//APP
router.post('/register', AuthController.register);
router.post('/login',AuthController.login);
router.post('/logout', AuthController.logout)
router.get('/users/:id', UserController.show)
router.put('/users/:id', UserController.update)
router.post('/addresses', AddressController.create)
router.put('/addresses/:id', AddressController.update)
router.post('/stores', StoreController.create)
router.post('/customizations', CustomizationController.create)


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


router.get('/products', async (req, res, next)=>{
    try{
        const products = await prisma.product.findMany({
            include: {Category :true}
        });
        res.json(products);
    }catch(error){
        next(error);
    }
});

router.get('/products/:id', async (req, res, next)=>{
    try{
        const {id} = req.params;
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(product == null){
            res.status(404).send({error: 'Resource not found', status: 404});
        }
        res.json(product)
    }catch(err){
        next(err);
    }
});

router.post('/products' ,async (req, res, next)=>{
    try{
         const data = req.body;
         const product = await prisma.product.create({
             data: req.body
         })
        res.send(data);
    }catch(error){
        next(error)
    }
});

router.post('/customizations', async(req, res, next)=>{
    try{
        const data = req.body;
        await prisma.customization.create({
            data: {
                logo:req.body.navigation.logo,
                navigation_color:req.body.navigation.color,
                contact:req.body.navigation.contact,
                about:req.body.navigation.about,
                columns:req.body.main.columns,
                main_color:req.body.main.color,
                primaryBtn_color:req.body.general.primaryBtnText,
                primaryBtn_background:req.body.general.primaryBtnColor,
                secondaryBtn_color:req.body.general.secondaryBtnText,
                secondaryBtn_border:req.body.general.secondaryBtnColor,
                footer_text:req.body.footer.text,
                radius:req.body.general.radius,
                facebook:req.body.footer.facebook,
                instagram:req.body.footer.instagram,
                youtube:req.body.footer.youtube,
                tiktok:req.body.footer.tiktok,
                facebookUrl:req.body.footer.facebookUrl,
                instagramUrl:req.body.footer.instagramUrl,
                youtubeUrl:req.body.footer.youtubeUrl,
                tiktokUrl:req.body.footer.tiktokUrl,
                footer_color:req.body.footer.color
            }
        })
        res.send(data);
    }catch(error){
        next(error);
    }
})



router.delete('/products/:id', async (req, res, next)=>{
    res.send({message: 'Ok api is working'});
});

router.patch('/products/:id', async (req, res, next)=>{
    res.send({message: 'Ok api is working'});
});

router.get('/users', async(req, res, next)=>{
    const user = await prisma.user.findUnique({
        where: {
          email: 'miki123@gmail.com',
        },
        include: {
            Address: true, // All posts where authorId == 20
          },
      });
    if(user){
        res.send(user);
    }
})

router.put('/users', async(req, res, next)=>{
    const user = await prisma.user.update({
        where: {
            email: 'miki123@gmail.com',
          },    
        data :req.body
      });
    if(user){
        res.send(user);
    }
})


module.exports = router;
const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/', async (req, res, next)=>{
    
});

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

router.post('/products', async (req, res, next)=>{
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

router.delete('/products/:id', async (req, res, next)=>{
    res.send({message: 'Ok api is working'});
});

router.patch('/products/:id', async (req, res, next)=>{
    res.send({message: 'Ok api is working'});
});

module.exports = router;
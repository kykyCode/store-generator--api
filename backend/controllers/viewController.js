const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function home(req, res, next){
    res.render('pages/index', {store: res.locals.store, subdomain: res.locals.subdomain});
}

async function products(req, res, next){
    try{
        const products = await prisma.product.findMany({
            where: {
                storeId: res.locals.store.id
            }  
        })
        res.render('pages/products', {store: res.locals.store, subdomain: res.locals.subdomain, products: products});
    }catch(err){
        console.log(err)
    }
}

async function product(req, res, next){
    try{
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                variants: true,
            }  
        })
        res.render('pages/product', {store: res.locals.store, subdomain: res.locals.subdomain, product: product,});
    }catch(err){
        console.log(err)
    }
}

async function login(req, res, next){
    //
}

async function register(req, res, next){
    //
}
async function checkout(req, res, next){
    //tutaj view
}

module.exports = {
    home,
    products,
    product
}
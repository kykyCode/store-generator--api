const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function create(req, res, next){
    let sizes = req.body.sizes;
    let colors = req.body.colors;
    let variants_array = []
    sizes.forEach(size => {
        colors.forEach(color=>{
            let tempObj = {
                color: color,
                size: size,
            }
            variants_array.push(tempObj);
        })
    });
    try{
        const product = await prisma.product.create({
            data: {
                ...req.body.data,
                variants: {
                    create: variants_array
                }
            }
            
        })
        res.send(product);
    }catch(err){
        console.log(err);
        res.send(err)
    }
}

module.exports = {
    create,
}



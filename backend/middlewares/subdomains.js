const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function subdomains(req, res, next){
    if(req.subdomains.length === 0){
        return res.send({response: "Invalid subdomain."})
      }
      try{
        const store = await prisma.store.findUnique({
          where: {
            name: req.subdomains[0]
          },
          include: {
            customization: true,
            address: true,
          },
        })
        if(store){
            res.locals.store = store;
            res.locals.subdomain =  req.subdomains[0];
            next();
        }else{
          return res.send({response: "Invalid subdomain."})
        }
      }catch(err){
        console.log(err)
      }
}

module.exports  = { subdomains }
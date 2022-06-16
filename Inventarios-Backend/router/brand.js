const{ Router } = require('express');
const Brand = require('../models/Brand');
const router = Router();

router.get('/',async function(req, res){
    const brands = await Brand.find();
    res.send(brands);
});
router.post('/', async function(req, res){
    try{
        console.log(req.body);

        const brandExist = await Brand.findOne({name: req.body.name});
        if(brandExist){
            return res.status(400).send('Brand already exists');
        }
    
        let brand = new Brand();
        brand.name = req.body.name;
        brand.status = req.body.status;
        brand.date_created = new Date();
        brand.date_updated = new Date();

        brand = await brand.save();
        res.send(brand);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});
router.put('/brandId', async function(req, res){
    const brand = await Brand.findById(req.params.brandId);
    if(!brand){
        return res.status(400).send('Brand not found');
    }
    brand.name = req.body.name;
    brand.status = req.body.status;
    brand = await brand.save();
    res.send(brand);
    
    
});

module.exports = router;
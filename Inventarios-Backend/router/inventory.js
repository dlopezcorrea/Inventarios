const{ Router } = require('express');
const Inventory = require('../models/Inventory');
const { body } = require('express-validator');

const router = Router();

router.get('/', async function(req, res){
    try{
        const inventories = await Inventory.find().populate([
            {
                path: 'user', select: 'name email status'
            },
            {
                path: 'brand', select: 'name status'
            },
            {
                path: 'equipment_type', select: 'name status'
            },
            {
                path: 'equipment_status', select: 'name status'
            }
        ]);
        res.send(inventories);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});
router.post('/',body('serial').not().isEmpty().withMessage('Serial is required'), async function(req, res){
    try{
        const inventoriesExistSerial = await Inventory.findOne({serial: req.body.serial});
        if(inventoriesExistSerial){
            return res.status(400).send('Inventory with that serial already exists');
        }   
            let inventory = new Inventory();
            inventory.serial = req.body.serial;
            inventory.model = req.body.model;
            inventory.description = req.body.description;
            inventory.color = req.body.color;
            inventory.photo = req.body.photo;
            inventory.transaction_date = req.body.transaction_date;
            inventory.price = req.body.price;
            inventory.user = req.body.user._id;
            inventory.brand = req.body.brand._id;
            inventory.equipment_type = req.body.equipment_type._id;
            inventory.equipment_status = req.body.equipment_status._id;
            inventory.date_created = new Date();
            inventory.date_updated = new Date();
            inventory = await inventory.save();
            res.send(inventory);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});
router.put('/:inventoryId', async function(req, res){
    try{
        let inventory = await Inventory.findById(req.params.inventoryId);
        if(!inventory){
            return res.status(400).send('Inventory not found');
        }
        const inventoriesExistSerial = await Inventory.findOne({serial: req.body.serial, _id:{$ne: inventory._id}});
        if(inventoriesExistSerial){
            return res.status(400).send('Inventory with that serial already exists');
        }
            inventory.serial = req.body.serial;
            inventory.model = req.body.model;
            inventory.description = req.body.description;
            inventory.color = req.body.color;
            inventory.photo = req.body.photo;
            inventory.transaction_date = req.body.transaction_date;
            inventory.price = req.body.price;
            inventory.user = req.body.user._id;
            inventory.brand = req.body.brand._id;
            inventory.equipment_type = req.body.equipment_type._id;
            inventory.equipment_status = req.body.equipment_status._id;
            inventory.date_updated = new Date();
            inventory = await inventory.save();

            res.send(inventory);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});

module.exports = router;
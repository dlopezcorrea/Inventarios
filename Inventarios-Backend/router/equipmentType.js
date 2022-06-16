const{ Router } = require('express');
const EquipmentType = require('../models/EquipmentType');
const router = Router();

router.get('/', async function(req, res){
    const equipmentType = await EquipmentType.find();
    res.send(equipmentType);
});
router.post('/', async function(req, res){
    try{
        console.log(req.body);

        const equipmenttypeExist = await EquipmentType.findOne({name: req.body.name});
        if(equipmenttypeExist){
            return res.status(400).send('Equipment Type already exists');
        }
    
        let equipment_type = new EquipmentType();
        equipment_type.name = req.body.name;
        equipment_type.status = req.body.status;
        equipment_type.date_created = new Date();
        equipment_type.date_updated = new Date();

        equipment_type = await equipment_type.save();
        res.send(equipment_type);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});
router.put('/equipmentTypeId', async function(req, res){
    const equipmentType = await EquipmentType.findById(req.params.equipmentTypeId);
    if(!equipmentType){
        return res.status(400).send('Equipment Type not found');
    }
    equipmentType.name = req.body.name;
    equipmentType.status = req.body.status;
    equipmentType = await equipmentType.save();
    res.send(equipmentType);
});

module.exports = router;
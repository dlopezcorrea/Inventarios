const{ Router } = require('express');
const EquipmentStatus = require('../models/EquipmentStatus');
const router = Router();

router.get('/',async function(req, res){
    const equipmentStatus = await EquipmentStatus.find();
    res.send(equipmentStatus);
});

router.post('/', async function(req, res){
    try{
        console.log(req.body);

        const equipmentstatusExist = await EquipmentStatus.findOne({name: req.body.name});
        if(equipmentstatusExist){
            return res.status(400).send('Equipment Status already exists');
        }
    
        let equipment_status = new EquipmentStatus();
        equipment_status.name = req.body.name;
        equipment_status.status = req.body.status;
        equipment_status.date_created = new Date();
        equipment_status.date_updated = new Date();

        equipment_status = await equipment_status.save();
        res.send(equipment_status);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});

router.put('/', async function(req, res){
    const equipmentStatus = await EquipmentStatus.findById(req.params.equipmentStatusId);
    if(!equipmentStatus){
        return res.status(400).send('Equipment Status not found');
    }
    equipmentStatus.name = req.body.name;
    equipmentStatus.status = req.body.status;
    equipmentStatus = await equipmentStatus.save();
    res.send(equipmentStatus);
    
});

module.exports = router;
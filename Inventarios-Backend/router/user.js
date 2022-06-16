const{ Router } = require('express');
const router = Router();
const User = require('../models/User');

router.post('/', async function(req, res){
    try{
        console.log(req.body);

        const userExists = await User.findOne({email: req.body.email});
        if(userExists){
            return res.status(400).send('User already exists');
        }

        const errors = validarInventory(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
    
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.status = req.body.status;
        user.date_created = new Date();
        user.date_updated = new Date();

        user = await user.save();
        res.send(user);
    } catch(error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
});
router.get('/', async function(req, res){
    const users = await User.find();
    res.send(users);
});
router.put('/userId', async function(req, res){
    const user = await User.findById(req.params.userId);
    if(!user){
        return res.status(400).send('User not found');
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.status = req.body.status;
    user = await user.save();
    res.send(user);
});



module.exports = router;
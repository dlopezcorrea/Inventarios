const{ Schema, model, models} = require('mongoose');

const InventorySchema = Schema({
    serial:{
        type: String,
        required: true,
        unique: true,
    },
    model:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    transaction_date:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    equipment_type:{
        type: Schema.Types.ObjectId,
        ref: 'EquipmentType',
        requiered: true,
    },
    equipment_status:{
        type: Schema.Types.ObjectId,
        ref: 'EquipmentStatus',
        requiered: true,
    },
    date_created:{
        type: Date,
        default: Date.now,
        required: true,
    },
    date_updated:{
        type: Date,
        default: Date.now,
        required: true,
    },

});
module.exports = model('Inventory', InventorySchema);
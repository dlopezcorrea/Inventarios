const validarInventory = (req) => {
    const validation = [];

    if(!req.body.serial){
        validation.push('Serial is required');
    }
    if(!req.body.model){
        validation.push('Model is required');
    }
    if(!req.body.description){
        validation.push('Description is required');
    }
    if(!req.body.color){
        validation.push('Color is required');
    }
    if(!req.body.photo){
        validation.push('Photo is required');
    }
    if(!req.body.transaction_date){
        validation.push('Transaction date is required');
    }
    if(!req.body.price){
        validation.push('Price is required');
    }
    if(!req.body.user){
        validation.push('User is required');
    }
    if(!req.body.brand){
        validation.push('Brand is required');
    }
}
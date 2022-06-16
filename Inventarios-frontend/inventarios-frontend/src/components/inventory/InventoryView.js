import React, { useState, useEffect} from 'react';
import { getInventory} from '../../services/inventoryService';
import { InventoryCard } from './InventoryCard';
import { NewInventory } from './NewInventory';


export const InventoryView = () => {

    const [inventory, setInventory] = useState([]);
    const[ open, setOpen ] = useState(false);

    const listInventory = async () =>{
      try{
        const { data } = await getInventory();
        console.log(data);
        setInventory(data);
      }catch(error){
        console.log(error);
      }
    }

    useEffect(() => { listInventory(); }, []);

    const handleOpen = () => {
      setOpen(!open)
    }

  return (
    <div className='container'>
       <div className='mt-2 mb-2 row row-col1 row-cols-md-4 g-4'>
            {
              inventory.map((inventory) => {
                return <InventoryCard key={inventory._id} inventory={ inventory }/>
              })
           }
       </div>
      { 
        open ?      
        <NewInventory handleOpen = { handleOpen } listInventory = { listInventory }/>
        :
        <button className='btn btn-primary fab' onClick={ handleOpen }>Add</button>
       }
    </div>
  )
}

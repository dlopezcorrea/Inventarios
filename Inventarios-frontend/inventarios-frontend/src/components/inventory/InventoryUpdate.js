import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getInventoryById, putInventory } from '../../services/inventoryService';
import { getUser } from '../../services/userService'
import { getBrand } from '../../services/brandService'
import { getStatus } from '../../services/statusService'
import { getType } from '../../services/typeService'
import Swal from 'sweetalert2';

export const InventoryUpdate = () => {

    const { inventoryId = ''} = useParams();
    const [inventory, setInventory] = useState({});
    const[ formValues, setFormValues ] = useState({});
    const[ users, setUsers ] = useState([]);
    const[ brands, setBrands ] = useState([]);
    const[ types, setTypes ] = useState([]);
    const[ status, setStatus ] = useState([]);
    const { serial = '', model = '', description ='', color = '', photo = '', transaction_date = '', price = '', user, brand, equipment_type, equipment_status} = formValues;

    const listUsers = async () =>{
      try{
          const { data } = await getUser();
          console.log(data);
          setUsers(data);
      }catch(error){
          console.log(error);
      }}
  useEffect(()=>{
      
          listUsers();
      }
  ,[]);

  const listBrands = async () =>{
      try{
          const {data} = await getBrand();
          setBrands(data);
      }catch(error){
          console.log(error);
      }}
  useEffect(()=>{
     
      listBrands();
     }
  ,[]);


  const listTypes = async () =>{
      try{
          const {data} = await getType();
          setTypes(data);
      }catch(error){
          console.log(error);
      }
    }
  
  useEffect(()=>{
      listTypes();
   },[]);


   const listStatus = async () =>{
      try{
          const {data} = await getStatus();
          setStatus(data);
      }catch(error){
          console.log(error);
      }
      
     }
  useEffect(()=>{
      listStatus();
  },[]);

    useEffect(() => {
        const getInventory = async () => {
            try {
                Swal.fire({
                    allowOutsideClick: false,
                    text: 'Loading...',
                });
                Swal.showLoading();
                const { data } = await getInventoryById(inventoryId);
                console.log(data);
                setInventory(data);
                Swal.close();
                }catch(error){
                    console.log(error);
                    Swal.close();
                }
        }
        getInventory();
    }, [ inventoryId ]);

    useEffect(() => {
     
        setFormValues({
          serial: inventory.serial,
          model: inventory.model,
          description: inventory.description,
          color: inventory.color,
          photo: inventory.photo,
          transaction_date: inventory.transaction_date,
          price: inventory.price,
          user: inventory.user,
          brand: inventory.brand,
          equipment_type: inventory.equipment_type,
          equipment_status: inventory.equipment_status
        })

    },[inventory]);

    const handleOnChange = ({ target }) => {
      const { name, value } = target;
      setFormValues({
          ...formValues,
          [name]: value
      })
  }

    const handleOnSubmit = async(e) => {
      e.preventDefault();
      const inventory = {serial, model, description, color, photo, transaction_date, price, user: {_id: user}, brand: {_id: brand}, equipment_type:{_id: equipment_type}, equipment_status: {_id: equipment_status}}
      console.log(inventory);
      try{
        Swal.fire({
            allowOutsideClick: false,
            text: 'Loading...',
        });
        Swal.showLoading();
        const {data} = await putInventory( inventoryId, inventory);
        console.log(data);
        Swal.close();
    }catch(error){
        console.log(error);
        console.log(error.response.data);
        Swal.close();
        let message;
        if(error && error.response && error.response.data){
            message = error.response.data;
        }else{
            message = 'Something went wrong, please verify your inputs.';
        }
        Swal.fire('Error', message, 'error');
    }
    }


  return (
    <div className='container-fluid mt-3 mb-2'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'> Active detail</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={ inventory.photo } className='img-fluid' alt='...'/>
            </div>
            <div className='col-md-9'>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='row'>
                    <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Serial</label>
                        <input type="text" required value = { serial }name='serial' onChange={(e) => handleOnChange(e)} className="form-control"/>
                    </div>
                    </div>
                    <div className='col'>
                    <label className="form-label">Model</label>
                        <input type="text" required value={model} name='model' onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div>
                    <div className='col'>
                    <label className="form-label">Description</label>
                        <input type="text" required value={description} name="description"  onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div> 
                    <div className='col'>
                    <label className="form-label">Color</label>
                        <input type="text" required value={color} name='color' onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Photo</label>
                        <input type="url" required value={photo} name='photo' onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div>
                    </div>
                    <div className='col'>
                    <label className="form-label">Transaction Date</label>
                        <input type="date" required value={transaction_date} name='transaction_date' onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div>
                    <div className='col'>
                    <label className="form-label">Price</label>
                        <input type="number" required value={price} name="price" onChange={(e) => handleOnChange(e)}  className="form-control"/>
                    </div>
                    <div className='col'>
                    <label className="form-label">User</label>
                    <select className="form-select" required onChange={(e) => handleOnChange(e)} name='user' value={user}>
                        <option value=''>--Select--</option>
                        {
                            users.map(({_id, name})=> {
                                return <option key={_id } value ={ _id }> { name } </option>
                            })
                        }
                    </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Brand</label>
                        <select className="form-select" required onChange={(e) => handleOnChange(e)} name='brand' value={brand}>
                        <option value=''>--Select--</option>
                        {
                            brands.map(({_id, name})=> {
                                return <option key={ _id } value ={ _id }> { name } </option>
                            })
                        }
                    </select>
                    </div>
                    </div>
                    <div className='col'>
                    <label className="form-label">Equipment Type</label>
                    <select className="form-select" required onChange={(e) => handleOnChange(e)} name='equipment_type' value={equipment_type}>
                        <option value=''>--Select--</option>
                        {
                            types.map(({_id, name})=> {
                                return <option key={_id } value ={ _id }> { name } </option>
                            })
                        }
                    </select>
                    </div>
                    <div className='col'>
                    <label className="form-label">Equipment Status</label>
                    <select className="form-select" required onChange={(e) => handleOnChange(e)} name='equipment_status' value={equipment_status}>
                        <option value=''>--Select--</option>
                        {
                            status.map(({_id, name})=> {
                                return <option key={_id } value ={ _id }> { name } </option>
                            })
                        }
                    </select>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-primary'>Save</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
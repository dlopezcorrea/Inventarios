import React, { useState, useEffect} from 'react';
import { getUser } from '../../services/userService';
import { postUser } from '../../services/userService';
import Swal from 'sweetalert2';

export const UserView = () => {

  const[ user, setUser ] = useState([]);
  const[ formValues, setFormValues ] = useState({});
  const { name = '', email= '' , status} = formValues;

  const listUser = async () =>{
      try{
          const {data} = await getUser();
          setUser(data);
      }catch(error){
          console.log(error);
      }
      
     }
  useEffect(()=>{
      listUser();
  },[]);

  const handleOnChange = ({ target }) => {
      const { name, value } = target;
      setFormValues({
          ...formValues,
          [name]: value
      })
  }

  const handleOnSubmit = async (e) => {
      const user = { name, email , status: {_id: status}};
      try{
          Swal.fire({
                allowOutsideClick: false,
                text: 'Loading...',
          });
            Swal.showLoading();
          const { data } = await postUser(formValues);
          console.log(user.data);
          console.log(data);
          listUser();
          Swal.close();
      } catch(error){
          console.log(error);
          Swal.close();
      }
  }
  return (
    <div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <div className='sidebar-header'>
                    <h3>Users</h3>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <hr/>
            </div>
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className='row'>
                <div className='col'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" required value = { name }name='name' onChange={(e) => handleOnChange(e)} className="form-control"/>
                </div>
                </div>
                <div className='col'>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" required value = { email }name='email' onChange={(e) => handleOnChange(e)} className="form-control"/>
                </div>
                </div>
                <div className='col'>
                <label className="form-label">Status</label>
                <select className="form-select" required onChange={(e) => handleOnChange(e)} name='status' value={status}>
                    <option value=''>--Select--</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
                </div>
            </div>
            <div className='row'>
                <div className='row'>
                    <div className='col'>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                </div>
            </div>
        </form>
        <div className='container-fluid mt-4'>
        <table className="table">
          <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Date created</th>
              <th scope="col">Date updated</th>
              </tr>
          </thead>
          <tbody>
              {
                  user.map((user) => {
                      return <tr>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.status}</td>
                          <td>{user.date_created}</td>
                          <td>{user.date_updated}</td>
                          <td>
                              <button
                              
                              className='btn btn-success btn-sm'>Edit</button>
                          </td>
                      </tr>
              })}
          </tbody>
      </table>
   </div>
      
    </div>
</div>
  )
}
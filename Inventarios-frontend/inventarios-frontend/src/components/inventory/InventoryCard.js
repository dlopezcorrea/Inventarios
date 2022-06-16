import React from 'react'
import { Link } from 'react-router-dom'

export const InventoryCard = (props) => {

    const { inventory } = props;
  return (
                     <div className='col'>
                          <div className="card">
                            <img src={ inventory.photo } className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Specs</h5>
                              <hr/>
                              <p className="card-text">{ `Description: ${inventory.description}` }</p>
                              <p className="card-text">{ `Brand: ${inventory.brand.name}` }</p>
                              <p className="card-text">{ `Serial: ${inventory.serial}` }</p>
                              <p className="card-text">{ `User: ${inventory.user.name}` }</p>
                              <p className="card-text">
                                <Link to={`inventory/edit/${inventory._id}`}>More...</Link>
                              </p>
                            </div>
                          </div>
                       </div>
  )
}

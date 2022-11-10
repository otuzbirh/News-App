import React from 'react'
import './Filter.css'
import IconSearch from './../../assets/images/arrow-down-long.png'

function Filter({ handleChange}) {

  
  return (
    <div className='filter'>
    {/* <h1 className='title'>Search</h1> */}
    <div className='inputDiv'>
    <input className='input' 
           name='value'  
           onChange={handleChange}
           type="text" 
           placeholder='Search...' />
    <button className='filter-btn'> <img src={IconSearch} />  </button>
    {/* <div className='show-results'>
      {searchResults}
    </div> */}
    </div>
    </div>
  )
}



export default Filter
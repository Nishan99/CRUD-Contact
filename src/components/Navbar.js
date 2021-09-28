import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
   return(
   
<nav className="navbar navbar-expand-lg  mb-5 py-2">
 
  <div className="container">
    
   <h3 className='text-white'>
     <Link to='/' className='navbar-title'>
     Contact Book
     </Link>
     </h3>

   
   

  

     

      <div className="d-flex align-items-center">
        
        <button type="button" className="btn btn-primary bg-danger me-3">
          <Link to='/new_user' className='btn-add-navbar'>
         Add Contact
          
          </Link>
        </button>
       
      </div>
   
 
  </div>

</nav>

   )
}

export default Navbar

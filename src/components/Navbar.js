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

   
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

  
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>

      <div className="d-flex align-items-center">
        
        <button type="button" className="btn btn-primary bg-danger me-3">
          <Link to='/new_user' className='btn-add-navbar'>
         Add Contact
          
          </Link>
        </button>
       
      </div>
    </div>
 
  </div>

</nav>

   )
}

export default Navbar

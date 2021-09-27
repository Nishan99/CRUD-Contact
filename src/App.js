import React from 'react'
import Contact from './components/Contact'
import NewContact from './components/NewContact'
import EditContact from './components/EditContact'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
      <Navbar/>  
      <Switch>
          <Route path='/' exact component={Contact}/>
          <Route path='/new_user' component={NewContact}/>
          <Route path='/edit_user/:id' component={EditContact}/>
        </Switch> 
      </Router>
 
    </div>
  )
}

export default App

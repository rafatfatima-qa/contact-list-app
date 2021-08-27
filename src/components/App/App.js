import React, {useEffect, useState} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './App.css';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function showAge(age) {
  alert(age)   

}

function App() {
  const [userDetails, setuserDetails] = useState([])   
    
useEffect(() => {
  fetch ('https://randomuser.me/api/?results=5')
  .then (results => results.json())
  .then (data =>{
      setuserDetails(data.results);
      console.log(data.results)
      console.log(userDetails)      
  })
}, [])


return(
<div className="wrapper">

   {userDetails.map((user) => (
    <ContactCard
    key = {user.name.first}
    
    fname = {user.name.first}
    lname = {user.name.last}
    image = {user.picture.large}
    gender = {user.gender} 
    email = {user.email}
    age = {user.dob.age}
    showAge = {showAge}
    />
      ))}
  
</div>
);}

export default App;
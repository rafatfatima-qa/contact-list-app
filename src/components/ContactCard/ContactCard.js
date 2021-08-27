import React from 'react';
import './ContactCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ContactCard({
  fname,
  lname,
  image,
  gender,
  email,
  age,
  showAge,
}) {
  return (
     <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src = {image}text = "contact-img"/>
      <Card.Body>
      <Card.Title>Name: {fname} {lname}</Card.Title>
      <Card.Title>Gender: {gender}</Card.Title>
      <Card.Title>Email: {email}</Card.Title>
      <Button variant="primary" size="sm"  onClick = {() => showAge(age)}>Toggle Age</Button>
      </Card.Body>
     </Card>
   
  );
}
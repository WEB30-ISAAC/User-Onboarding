import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import User from './User'

import axios from 'axios'
import yup from 'yup'


const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,

}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name must be atleast 4 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Valid email is required')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters long')
    .required('Password is Required'),
  // tos: yup
  //   .string
})

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>New User Regristration</h1>

        <Form/>

        <User/>

      </header>
    </div>
  );
}


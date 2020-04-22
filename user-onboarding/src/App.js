import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import User from './User'

import axios from 'axios'
import * as yup from 'yup'


const url = 'https://reqres.in/api/users'
console.log(url)

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  tos: false,

}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  tos: false,
}

const formSchema = yup.object().shape({
  first_name: yup
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
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUsers = () => {
    axios.get(`${url}`)
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    getUsers();
  }, []);

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        console.log(res)
        setUsers([...users, res.user])
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.first_name,
      email: formValues.email,
      password: formValues.password,
      tos: formValues.tos
    } //more work needs to be done here//

    setFormValues(initialFormValues)
    postUser(newUser)
  }

  const onInputChange = evt => {
    const name = evt.target.first_name
    const value = evt.target.value


    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
      });

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  // const onCheckboxChange = evt => {
  //   const { name } = evt.target
  //   const isChecked = evt.target.checked

  //   setFormValues({
  //     ...formValues,

  //   })
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>New User Regristration</h1>

        <Form
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={formDisabled}
          errors={formErrors}
        />

        {
          users.map(user => {
            return(
              <User key={user.id} details={user}/>
            )
          })
        }

      </header>
    </div>
  );
}


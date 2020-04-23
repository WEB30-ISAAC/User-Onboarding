import React from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='container'>
            <h2>User Form</h2>
            <div className='errors'>
                <p>{errors.first_name}</p>
                <p>{errors.last_name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.tos}</p>
            </div>

            <label>First Name:&nbsp;
                <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>

            <label>Last Name:&nbsp;
                <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                />
            </label>

            <label>Email:&nbsp;
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>

            <label>Password:&nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>

            <label>
                <input
                    checked={values.tos}
                    onChange={onCheckboxChange}
                    name='tos'
                    type="checkbox" 
                /> Accept Terms of Service     
            </label>

            <button onClick={onSubmit} disabled={disabled}>submit</button>

        </form>

    )
};

export default Form;
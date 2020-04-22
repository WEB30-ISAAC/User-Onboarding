import React from 'react';

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='user container'>
            <h2>User Form</h2>
            <div className='errors'>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
            </div>

            <label>Name:&nbsp;
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
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

            {/* <label>Terms of Service:&nbsp;
                <input
                    value={values.tos}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label> */}

            <button onClick={onSubmit} disabled={disabled}>submit</button>

        </form>

    )
};

export default Form;
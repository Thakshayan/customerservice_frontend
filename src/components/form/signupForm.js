
import React, { useState } from 'react';

const SignUpForm = props => {
  // set the default state of the form
  const [values, setValues] = useState();

  useState(()=>{
    console.log(values)
  },[values])

  // update the state when a user types in the form
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      {/* Display the appropriate form header */}
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      {/* perform the mutation when a user submits the form */}
      <form
        onSubmit={event => {
          event.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {props.formType === 'signup' && (
          <React.Fragment>
            <div className="input-group mb-4">
            <input
              required
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={onChange}
            />
            </div>
          </React.Fragment>
        )}
        <div className="input-group mb-4">
        <input
          required
          type="email"
          id="email"
          className="form-control"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        </div>
        <div className="input-group mb-4">
        <input
          required
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={onChange}
        />
        </div>
        <button className="btn btn-primary shadow-2 mb-4" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;



{/* <div className="form-group text-left">
<div className="checkbox checkbox-fill d-inline">
    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked=""/>
    <label for="checkbox-fill-1" className="cr"> Save Details</label>
</div>
</div>
<div className="form-group text-left">
<div className="checkbox checkbox-fill d-inline">
    <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
    <label for="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
</div> */}


   
import React from "react";
import { Form, Field } from "react-final-form";
import Input from '../utils/input';


 const onSubmit = values => {
  return new Promise(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, 0, 2));
      resolve();
    }, 1000);
  });
}; 

const Register = () => (
  <Form
    onSubmit={onSubmit}
    
     render={({ handleSubmit, values, submitting }) => (
       <form onSubmit={handleSubmit}>

          <h1>Register</h1>
        <div>

        <div>
            <Field  type="text" placeholder="Name"  
                name="name"
                component={Input}
                labelName="Name"
               // validate={required}
              />
        </div>
          


        <div>
            <Field  type="text" placeholder="email"  
                name="email"
                component={Input}
                labelName="Email"
               // validate={required}
              />
        </div>
    
           
         <div>
            <Field  type="text" placeholder="Password"  
                name="Password"
                component={Input}
                labelName="password"
               // validate={required}
              />  
         </div>
            


        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

export default Register;
import React from 'react'
 
/* reduxForm is the same function as we are using 
till now using connect function and make sure that we 
call some action creator and store data.

Field is a built-in react component to which 
we are going to show on screen. */

import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
  
  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  /* This is helper functoin for Field's component props
  which holds formProps param by-default and this is object.
  Currently we are destructing our input object from formProps.
  */
  renderInput = ({input, label,meta}) => {
    const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input {...input}  autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render () {
    return (
      /* this.props.handleSubmit() auto call the preventDefault
       */
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        {/* name props in field is for manage the form field
            and it is required props for field and all the props are send
            to helper function by component */}
        
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className="ui button primary" >Submit</button>
      </form>)
  }
}

const validate = formValues => {
  const errors = {};
  if(!formValues.title){
    errors.title = "no title!!!";
  }

  if(!formValues.description){
    errors.description = "no description!!!";
  }
  return errors;
};

/* reduxForm returns a function and we 
immediately pass that function to class StreamCreate */
export default reduxForm({
    form: 'streamForm',
    validate
  })(StreamForm)
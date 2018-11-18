import './Form.scss';
import React from 'react';
import TextField from "material-ui/TextField";

export default class Form extends React.Component  {
   constructor() {
    super();
    this.state = {
      input:'',
    };
  }

  validate = (targetValue, fieldName) => {
    let isError = false;
    const errors = {
          isDisabled: false
    };

    if (targetValue.length === 0) {
      isError = true;
      errors[fieldName+'Error'] = "Please fill field";
      errors.isDisabled = true;
    }

    if (fieldName ==='phone' && targetValue.length < 10) {
      isError = true;
      errors[fieldName+'Error'] = "Phone number needs to be atleast 10 characetrs long";
      errors.isDisabled = true;
    }

    if (fieldName === 'special' && targetValue.length > 500) {
      errors[fieldName+'Error'] = "text is limited to 500 characters";
    }

    if (fieldName === 'email' && targetValue.indexOf("@")=== -1) {
      isError = true;
      errors['emailError'] = "requires valid email";
      errors.isDisabled = true;
    }

    this.setState({
      ...this.state,
      ...errors
    })

    return isError;
  }

  handleFieldChange= (targetValue, fieldName) =>  {
    const err = this.validate(targetValue, fieldName);
    if (!err) {
      let errorField = fieldName+'Error';
      this.setState( {
        ...this.state,
        [errorField]: "",
        isDisabled: false,
      } )
    } 
  }

  render() {
    console.log('state:', this.state)
    /* Submitting this information will save it into a JSON file */
    return (
			<div className="modal-overlay-div">
				<div className="modal">
          <div className="container">
          <img src="snappy.png"></img>
          <TextField name="first-name" 
                     floatingLabelText="First Name"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'firstName')}
                     errorText={this.state.firstNameError}
                    />

          <TextField  name="last-name"
                      floatingLabelText="Last Name"
                      onChange={(ev)=>this.handleFieldChange(ev.target.value, 'lastName')} 
                      errorText={this.state.lastNameError}
                      />

          <TextField name="address"
                     floatingLabelText="Address (floor, apartment, etc.)"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'address')}
                     errorText={this.state.addressError}
                    />

          <TextField name="city" 
                     floatingLabelText="City"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'city')}
                     errorText={this.state.cityError}>
          </TextField>
        </div>
        <div className="container">
          <TextField name="state" 
                     floatingLabelText="State"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'state')}
                     errorText={this.state.stateError}>
          </TextField>
          <TextField name="email" 
                     floatingLabelText="Email"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'email')}
                     errorText={this.state.emailError}>
          </TextField>
          <TextField name="phone" 
                     floatingLabelText="Phone"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'phone')}
                     errorText={this.state.phoneError}>
          </TextField>
          <TextField name="special" 
                     floatingLabelText="Special Notes"
                     onChange={(ev)=>this.handleFieldChange(ev.target.value, 'special')}
                     errorText={this.state.specialError}>
          </TextField>
        </div>
        <button className="save">SUBMIT</button>
				</div>
			</div>
    );
  }
}
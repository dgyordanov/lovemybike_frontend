import React from 'react';
import TextFieldGroup from './TextFieldGroup'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.onSubmit}>
              <h1>Login</h1>

             

              <TextFieldGroup
                field="identifier"
                label="Username / Email"
                value=''            
               />

              <TextFieldGroup
                field="password"
                label="Password"
                value=''
                
                onChange={this.onChange}
                type="password"
                />

              <div className="form-group"><button className="btn btn-primary btn-lg" >Login</button></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;


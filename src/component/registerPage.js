import React from 'react';
import '../support/css/registerPage.css'

class Register extends React.Component {
    render () {
        return (
          <div className='wrap'>
            <div className='boxRegister'>
              <h1>Register</h1>
              <form className='form'>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputUsername">Username</label>
                    <input type="username" style={{textAlign:'center'}} className="form-control" id="inputUsername"  />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" style={{textAlign:'center'}} className="form-control" id="inputPassword" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="text" style={{textAlign:'center'}} className="form-control" id="inputEmail"/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" style={{textAlign:'center'}} className="form-control" id="phone" />
                </div>
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        )
    }
}

export default Register
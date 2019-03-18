    import React from 'react';
import '../support/css/loginPage.css'


class Login extends React.Component {

    render() {
        return (
            <div className='wrap'>
                <div className="box">
                    <h1>Login</h1> 
                    <input type="text" name placeholder="Username" />
                    <input type="password" name placeholder="Password" />
                    <input type="submit" name defaultValue="Login" />
                </div>
            </div>
            
        )
    }

}

export default Login

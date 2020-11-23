import React from 'react'
import '../style/Login.css'

class Login extends React.Component {
    render() {
        return(
            <section>
                <div>
                    <h1>Login Here</h1>
                    <form>
                        <input type='text' placeholder='Username'></input>
                        <input type='password' placeholder='Password'></input>
                        <input type='submit' value='Login'/>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login
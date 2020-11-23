import React from 'react'
import NavBar from '../components/NavBar'
import '../style/HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
            <div className='home-head-wrapper'>
                <div>
                    {/* Will have to change "User" to be dynamic later */}
                    <h1 className='welcome'>WELCOME, USER!</h1>
                    <div>
                        <NavBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage

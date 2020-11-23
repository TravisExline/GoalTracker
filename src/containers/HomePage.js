import React from 'react'
import '../style/HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                {/* Will have to change "User" to be dynamic later */}
                <h1 className='welcome'>WELCOME, USER!</h1>
            </div>
        )
    }
}

export default HomePage

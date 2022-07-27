import React from 'react';


class AnimalPage extends React.Component {
    render(){
        return(
            <div className='container'>
                <header>
                    <ul>
                        <li onClick={(e) => this.props.handleLogout(e)}>Log Out</li>
                    </ul>
                </header>
                <h1>Welcome to Animals</h1>
                <div className='animals'>
                    <ul className='animals-list'>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                    </ul>
                    <ul className='animals-list'>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                        <li className='animals-item'>
                            <img src='https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png' alt='Cat'/>
                            <p className='item-name'>Cat</p>
                        </li>
                    </ul>
                </div>
                <footer>
                    <p>VTVT ©2022 Created by VTVT</p>
                </footer>
            </div>

        )
    }
}
export default AnimalPage;
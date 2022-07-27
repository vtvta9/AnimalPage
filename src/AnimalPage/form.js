import React from 'react';
import "../App.css";
class Form extends React.Component {
    render(){
        return(
            <div className="form">
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                        <div className="button-container">
                        <input type="submit" />
                    </div>
                    {this.props.error !== '' ? <span className="error">{this.props.error}</span> : ''}
                </form>
            </div>
            
        )
    }
}
export default Form;
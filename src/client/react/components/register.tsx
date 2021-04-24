import * as React from 'react';

class Register extends React.Component<{ register: boolean }, { user: string, pass: string, display: boolean }> {
    constructor (props) {
        super(props);

        this.state = {
            user: ``,
            pass: ``,
            display: false
        };
    }

    turnOn = () => {
        this.setState({ display: true });
    }

    turnOff = () => {
        this.setState({ display: false });
    }

    changeUsername = (event) => {
        this.setState({
            user: event.target.value,
            pass: this.state.pass
        });
    }

    changePassword = (event) => {
        this.setState({
            user: this.state.user,
            pass: event.target.value
        });
    }

    render = () => (Element) => {
        return (
            this.props.register
                ? (
                    <div className="register-menu">
                        {/* <center> */}
                        <h3>Create an account!</h3>
                        <br />

                        <input className="overlay-input" type="text" onChange={this.changeUsername} placeholder="Username" maxLength={16} style={{ margin: 8 }} />
                        <input className="overlay-input" type="password" onChange={this.changePassword} placeholder="Password" maxLength={32} style={{ margin: 8 }} />

                        <br />
                        <button className="register" onClick={this.register}>Register!</button>
                        
                        <br />
                        <br />
                        
                        By registering, you agree to follow our terms of service and abide by our privacy policy.
                        
                        <a href="legal/privacy_policy.pdf" > Privacy Policy | </a>
                        <a href="legal/tos.pdf">Terms of Service</a>
                        <br/>
                        
                        <br />
                        Remember, never give your password to anyone!!
                        {/* </center> */}
                    </div>
                )
                : null
        );
    }
}

export default Register;

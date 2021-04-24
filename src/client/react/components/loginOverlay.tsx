import * as React from 'react';
import socket from '../../utils/socket';

class LoginOverlay extends React.Component<{ display: boolean }, { user: string, pass: string, seed: number }> {
    constructor (props) {
        super(props);

        this.state = {
            user: ``,
            pass: ``,
            seed: Math.random()
        };
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

    registerR = () => {
        socket.connect();
        socket.emit(`lore`, { team: `red` });
    }

    registerB = () => {
        socket.connect();
        socket.emit(`lore`, { team: `blue` });
    }

    registerG = () => {
        socket.connect();
        socket.emit(`lore`, { team: `green` });
    }

    // Insert language swappers here.

    render = () => (Element) => {
        const buttonOrder = (this.state.seed < 0.66)
            ? ((this.state.seed < 0.33)
                ? (
                    <div>
                        <button id="registerR" onClick={this.registerR}>Join Alien Team!</button>
                        <button id="registerB" onClick={this.registerB}>Join Human Team!</button>
                        <button id="registerG" onClick={this.registerG}>Join Cyborg Team!</button>
                    </div>
                )
                : (
                    <div>
                        <button id="registerG" onClick={this.registerG}>Join Cyborg Team!</button>
                        <button id="registerR" onClick={this.registerR}>Join Alien Team!</button>
                        <button id="registerB" onClick={this.registerB}>Join Human Team!</button>
                    </div>
                ))
            : (
                <div>
                    <button id="registerB" onClick={this.registerB}>Join Human Team!</button>
                    <button id="registerG" onClick={this.registerG}>Join Cyborg Team!</button>
                    <button id="registerR" onClick={this.registerR}>Join Alien Team!</button>
                </div>
            );

            return !this.props.display
                ? null
                : (
                <div>
                    <div className="overlay-menu">
                        <div className="container">
                            <div className="guests">
                                <h3>New Players</h3>
                                    {buttonOrder}
                            </div>
                            <div className="video">
                                {/*
                            <center><h3>Featured Video!</h3>
                                {video}
                                <br /><a href="youtubers/">Have a channel?</a></center>
                            */}
                                    <img src="img/harrlogo.png" alt="Logo" width="340"/>
                            </div>
                            <div className="login">
                                <h3>Returning Players</h3>
                                    <input className="overlay-input" type="text" id="usernameid" onChange={this.changeUsername} placeholder="Username" />
                                    <input className="overlay-input" type="password" id="passid" onChange={this.changePassword} placeholder="Password" />
                                    <button className="overlay-button" id="loginButton" onClick={this.login}>Login</button>
                            </div>
                        </div>
                    </div>

                    <div className="discord">
                        <a href="legal/privacy_policy.pdf"> Privacy Policy | </a>
                        <a href="legal/tos.pdf"> Terms of Service </a><br/>

                        {/* <a onClick={this.langEng}>Eng | </a>
                        <a onClick={this.langEsp}>Esp | </a>
                        <a onClick={this.langTki}>Tki | </a>
                        <a onClick={this.langChn}>Chn</a> */}
                    </div>
                </div>);
    }
}

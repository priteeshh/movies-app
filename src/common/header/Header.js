import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import PropTypes from 'prop-types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center'} }>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children : PropTypes.node.isRequired
}
class Header extends Component { 
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: '',
            password: '',
            userNameRequired: 'displayNone',
            passwordRequired: 'displayNone',
            firstName: '',
            lastName: '',
            email: '',
            rpassword:'',
            contactNumber:'',
            firstNameRequired: 'displayNone',
            lastNameRequired: 'displayNone',
            emailRequired: 'displayNone',
            registerPasswordRequired: 'displayNone',
            contactNumberRequired: 'displayNone'
        };
    }
    modalHandler = () => {
        this.setState({ modalIsOpen: true });
        this.setState({ username: '' })
        this.setState({ password: '' })
        this.setState({userNameRequired : 'displayNone'})
        this.setState({passwordRequired : 'displayNone'})
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
        this.setState({ value: 0 })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value: value })
        this.setState({ username: '' })
        this.setState({ password: '' })
        this.setState({userNameRequired : 'displayNone'})
        this.setState({passwordRequired : 'displayNone'})
        this.setState({firstNameRequired : 'displayNone'})
        this.setState({lastNameRequired : 'displayNone'})
        this.setState({emailRequired : 'displayNone'})
        this.setState({registerPasswordRequired : 'displayNone'})
        this.setState({contactNumberRequired : 'displayNone'})
    }
    loginHandler = () =>{
        this.state.username === '' ? this.setState({userNameRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})
        this.state.password === '' ? this.setState({passwordRequired : 'displayFormHelperText'}) : this.setState({passwordRequired : 'displayNone'})

    }
    userNameChangeHandler = (e) =>{
        this.setState({username: e.target.value})
    }
    passwordChangeHandler = (e) =>{
        this.setState({password: e.target.value})
    }
    registerChangeHandler = (e) =>{
        // console.log(e.target.value);
        e.target.id === 'firstName' && this.setState({firstName: e.target.value}) 
        e.target.id === 'lastName' && this.setState({lastName: e.target.value})
        e.target.id === 'email' && this.setState({email: e.target.value})
        e.target.id === 'password' && this.setState({rpassword: e.target.value}) 
        e.target.id === 'contactNumber' && this.setState({contactNumber: e.target.value}) 
    }
    registerHandler = () =>{
        this.state.firstName === '' ? this.setState({firstNameRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})
        this.state.lastName === '' ? this.setState({lastNameRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})
        this.state.email === '' ? this.setState({emailRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})
        this.state.rpassword === '' ? this.setState({registerPasswordRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})
        this.state.contactNumber === '' ? this.setState({contactNumberRequired : 'displayFormHelperText'}) : this.setState({userNameRequired : 'displayNone'})

    }
    render() {
        return (
            <div className="header">
                <header className="app-header">
                    <img src={logo} className="app-logo " alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.modalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                    onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    {this.state.value === 0 && 
                    <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username">username</InputLabel>
                        <Input id="username" type="text" username= {this.state.username} onChange={this.userNameChangeHandler}></Input>
                        <FormHelperText className={this.state.userNameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="password">password</InputLabel>
                        <Input id="password" type="password" password= {this.state.password} onChange={this.passwordChangeHandler}></Input>
                        <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.loginHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 && 
                    <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input id="firstName" type="text" onChange={this.registerChangeHandler}></Input>
                        <FormHelperText className={this.state.firstNameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input id="lastName" type="text" onChange={this.registerChangeHandler}></Input>
                        <FormHelperText className={this.state.lastNameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="text" onChange={this.registerChangeHandler}></Input>
                        <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" onChange={this.registerChangeHandler}></Input>
                        <FormHelperText className={this.state.registerPasswordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
                        <Input id="contactNumber" type="number" onChange={this.registerChangeHandler}></Input>
                        <FormHelperText className={this.state.contactNumberRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.registerHandler}>Register</Button>
                    </TabContainer>}


                </Modal>
            </div>
        );
    }
}
export default Header;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BookShow.css';
import { render } from '@testing-library/react';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home.js';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';




class BookShow extends Component {
    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: "",
            tickets: 0,
            availableTickets: 20,
            unitPrice: 500,
            locationRequired: 'displayNone',
            languageRequired: 'displayNone',
            showDateRequired: 'displayNone',
            showTimeRequired: 'displayNone',
            ticketsRequired: 'displayNone'
        }
    }
    backBtnHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'))
    }
    locationChangeHandler = (e) => {
        this.setState({ location: e.target.value });
    }
    languageChangeHandler = (e) => {
        this.setState({ language: e.target.value });
    }
    showDateChangeHandler = (e) => {
        this.setState({ showDate: e.target.value });
    }
    showTimeChangeHandler = (e) => {
        this.setState({ showTime: e.target.value });
    }
    ticketsChangeHandler = (e) => {
        console.log(e.target.value);
        this.setState({ tickets: e.target.value });
    }
    bookShowButtonHandler = () =>{
        this.state.location === '' ? this.setState({ locationRequired: 'displayFormHelperText' }) : this.setState({ locationRequired: 'displayNone' })
        this.state.language === '' ? this.setState({ languageRequired: 'displayFormHelperText' }) : this.setState({ languageRequired: 'displayNone' })
        this.state.showDate === '' ? this.setState({ showDateRequired: 'displayFormHelperText' }) : this.setState({ showDateRequired: 'displayNone' })
        this.state.showTime === '' ? this.setState({ showTimeRequired: 'displayFormHelperText' }) : this.setState({ showTimeRequired: 'displayNone' })
        this.state.tickets === 0 ? this.setState({ ticketsRequired: 'displayFormHelperText' }) : this.setState({ ticketsRequired: 'displayNone' })

    }
    render() {
        return (
            <div>
                <Header />
                <div className="back">
                    <Typography onClick={this.backBtnHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                    <div>
                        <Card className="cardStyle">
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    Book Show
                                </Typography>
                                <FormControl className="formControl">
                                    <InputLabel htmlFor="location">Choose Location</InputLabel>
                                    <Select
                                        value={this.state.location}
                                        onClick={this.locationChangeHandler}>
                                        {location.map(loc => (
                                            <MenuItem key={"loc" + loc.id} value={loc.location}>
                                                {loc.location}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.locationRequired}><span className="red">required</span></FormHelperText>
                                </FormControl><br /><br />
                                <FormControl className="formControl">
                                    <InputLabel htmlFor="language">Choose Language</InputLabel>
                                    <Select
                                        value={this.state.language}
                                        onClick={this.languageChangeHandler}>
                                        {language.map(loc => (
                                            <MenuItem key={"loc" + loc.id} value={loc.language}>
                                                {loc.language}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.languageRequired}><span className="red">required</span></FormHelperText>
                                </FormControl><br /><br />
                                <FormControl className="formControl">
                                    <InputLabel htmlFor="chooseDate">Choose Show Date</InputLabel>
                                    <Select
                                        value={this.state.showDate}
                                        onClick={this.showDateChangeHandler}>
                                        {showDate.map(loc => (
                                            <MenuItem key={"loc" + loc.id} value={loc.showDate}>
                                                {loc.showDate}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl><br /><br />
                                <FormHelperText className={this.state.showDateRequired}><span className="red">required</span></FormHelperText>
                                <FormControl className="formControl">
                                    <InputLabel htmlFor="chooseTime">Choose Show Time</InputLabel>
                                    <Select
                                        value={this.state.showTime}
                                        onClick={this.showTimeChangeHandler}>
                                        {showTime.map(loc => (
                                            <MenuItem key={"loc" + loc.id} value={loc.showTime}>
                                                {loc.showTime}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText className={this.state.showTimeRequired}><span className="red">required</span></FormHelperText>
                                </FormControl><br /><br />
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="tickets">Tickets: ( {this.state.availableTickets} available )</InputLabel>
                                    <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                                    <FormHelperText className={this.state.ticketsRequired}><span className="red">required</span></FormHelperText>
                                </FormControl><br /><br />
                                <Typography>
                                    Unit Price: Rs. {this.state.unitPrice}
                                </Typography>
                                <br />
                                <Typography>
                                    Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                                </Typography>
                                <br /><br />
                                <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                    BOOK SHOW
                            </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShow;
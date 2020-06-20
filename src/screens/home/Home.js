import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Details from '../details/Details.js'
import Header from '../../common/header/Header.js'
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData.js';
import genres from '../../common/genres.js'
import artists from '../../common/artists.js'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Checkbox, ListItemText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});
class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieName: '',
            genres: [],
            artists: []
        }
    }
    filterChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });

    }
    genreChangeHandler = (e) => {
        this.setState({ genres: e.target.value });
    }
    artistChangeHandler = (e) => {
        this.setState({ artists: e.target.value });
    }
    movieDetailHandler = (movie) =>{
        ReactDOM.render(
            <Details movieId={movie}/>,
          document.getElementById('root'));
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movies => (
                        <GridListTile key={movies.id}>
                            <img src={movies.poster_url} className="movie-poster" alt={movies.title} />
                            <GridListTileBar title={movies.title}></GridListTileBar>
                        </GridListTile>
                    )
                    )}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cols={4} cellHeight={350} className={classes.gridListMain}>
                            {moviesData.map(movies => (
                                <GridListTile key={movies.id} onClick={() => this.movieDetailHandler(movies.id)} className="released-movie-grid-item">
                                    <img src={movies.poster_url} alt={movies.title} />
                                    <GridListTileBar title={movies.title} subtitle={<span>Release Date: {new Date(movies.release_date).toDateString()}</span>}></GridListTileBar>
                                </GridListTile>
                            )
                            )}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color='textSecondary'>
                                        Find Movies By:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={this.filterChangeHandler} />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genere</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreChangeHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="artists">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="artists" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistChangeHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name) > -1} />
                                                <ListItemText primary={artist.first_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField 
                                        id="releaseDateStart"
                                        label="Relaease date Start"
                                        type="date"
                                        default = ""
                                        InputLabelProps={{shrink: true}}
                                        />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField 
                                        id="releaseDateEnd"
                                        label="Relaease date End"
                                        type="date"
                                        default = ""
                                        InputLabelProps={{shrink: true}}
                                        />
                                </FormControl><br/><br/>
                                <Button variant="contained" color="primary" className="applyBtn">Apply</Button>

                            </CardContent>
                        </Card>
                    </div>

                </div>


            </div>
        );
    }
}
export default withStyles(styles)(Home);

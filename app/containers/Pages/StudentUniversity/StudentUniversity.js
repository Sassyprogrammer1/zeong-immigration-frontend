import React, { useState, useEffect } from 'react';
import api from '../../../api/baseUrl/BaseUrl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid"
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom"
import { Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseRequest, getUniversity } from '../../../redux/actions/universityAction';
// import Button from '@mui/material/Button'

// import Grid from '../../Layouts/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    cursor: "pointer",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(4)


  },
  card: {
    // maxWidth: 345,
    marginTop: theme.spacing(4),
  },
  media: {
    height: 180,
  },
  productNotFound: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4)

  }
}));

function StudentUniversity() {

  const classes = useStyles();

  const dispatch = useDispatch()
  // Selector

  const { university, loading } = useSelector((state) => state.universityReducer)
  const [searchval, setsearch] = useState("")

  const handleChange = (e) => {
    setsearch(e.target.value)
  }

  useEffect(() => {
    // dispatch(getUniversity(searchval))

  }, [])


  const handleSubmit = () => {
    dispatch(getUniversity(searchval))
  }



  return (


    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>
            Search University
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={searchval}
              onChange={(e) => handleChange(e)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          <div></div>
        </Toolbar>
      </AppBar>
      <div className={classes.cardContainer}>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={4}


        >
          {/* {university.length <= 0 && loading === false ? (<Paper className={classes.productNotFound} elevation={1}> <Typography gutterBottom variant="h5" component="h2">
            Search University
          </Typography></Paper>) : (<></>)} */}
          {loading ? (
            <><div>
              <Skeleton variant="text" />
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="rect" width={210} height={118} />
            </div><div>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
              </div><div>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
              </div></>
          ) : (
            <>
              {university?.map((uni) => {

                return (
                  <Grid item lg={4} md={4} sm={8} key={uni._id}>
                    <Paper elevation={2}>
                      <Card className={classes.Card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {uni._source.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" >
                              {uni._source.address}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Phone Numner:  {uni._source.phoneNumber}

                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Email:  {uni._source.admissionEmail}

                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              tuitionRange:  {uni._source.tuitionRange}

                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Country:  {uni._type}

                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <a href={`${uni._source.websiteURL}`} target="_blank" style={{
                            margin: "1rem",
                            textDecoration: "none",
                            color: 'blue'
                          }}>
                            <Button size="small" color="primary">
                              website
                            </Button>
                          </a>

                          <Link to={`/app/dashboard/${uni._id}/student-course`} style={{
                            margin: "1rem",
                            textDecoration: "none",
                            color: 'blue'
                          }}>
                            <Button size="small" color="primary" onClick={() => dispatch(getCourseRequest(uni?.inner_hits))} >
                              See courses
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>
                )
              })}
            </>

          )}




        </Grid>



      </div>



    </div >
  );
}

export default StudentUniversity;

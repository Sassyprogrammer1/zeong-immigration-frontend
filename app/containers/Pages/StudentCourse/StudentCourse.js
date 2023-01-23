import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgApi from 'enl-api/images/photos';
import CourseCard from '../../../components/CardPaper/CourseCard';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getCourseRequest } from '../../../redux/actions/universityAction';
import { useSelector } from 'react-redux';

// card import
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function StudentCourse(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id, "id")
  // Slector

  const { "courses.major.minor": { hits } } = useSelector((state) => state.universityReducer.courses)

  return (
    <div>
      { }
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={3}
      >
        {hits?.hits?.map((course, index) => (

          <Grid item md={4} key={index}>
            <Paper elevation={1}>
              <Card className={classes.root}>
                <CardHeader
                  // avatar={
                  //   <Avatar aria-label="recipe" className={classes.avatar}>

                  //   </Avatar>
                  // }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  // title={course._source.courseName}
                  subheader={`${course._source.importantTag[0]} | ${course._source.importantTag[1]}`}
                />
                <CardMedia
                  className={classes.media}
                  image="https://media.istockphoto.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=0&k=20&c=kFR__hBLIM-0PW6k4lSqAQJGo-ukLu-bbsOQk_V6edA="
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {course._source.courseName}
                  </Typography>
                  {/* {course?._source?.requirement?.map((details, index) => (
                    <>
                      <Typography key={index} variant={index === 0 ? "h6" : "body2"} color="textSecondary" component="p">
                        {details}
                      </Typography>
                    </>

                  ))} */}

                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  {/* <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>

                    {course?._source?.requirement?.map((details, index) => (
                      <>
                        <Typography key={index} variant={index === 0 ? "body1" : "body2"} color="textSecondary" component="p">
                          {details}
                        </Typography>
                      </>

                    ))}
                    {/* <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                      minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                      and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography> */}
                    {/* <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                      without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                      medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                      again without stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography> */}
                    {/* <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography> */}
                  </CardContent>
                </Collapse>
              </Card>
            </Paper>
          </Grid>
        ))}




      </Grid>

    </div >
  );
}


export default StudentCourse

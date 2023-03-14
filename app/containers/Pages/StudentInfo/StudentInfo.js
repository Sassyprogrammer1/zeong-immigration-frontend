import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { DatePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import { number } from 'prop-types';
import { studentInfoSend } from '../../../redux/actions/universityAction';
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const StudentInfo = () => {
  const dispatch = useDispatch();
  const { loading, message, studentData } = useSelector((state) => state.universityReducer);

  const currencies = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },

  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [formValue, setFormValue] = useState({
    Name: '',
    Gender: '',
    Title: '',
    Dob: moment(selectedDate).format('DD/MM/YYYY'),
    Phone: '',
    Email: '',
    Address: '',
    PostalCode: number,
    Networking: '',
    Budget: number,
    EasyToGetIn: '',
    Location: '',
    ImmigrationOriented: '',
    Employment: '',
    OptionRange: '',
    Interests: '',
    Direction: '',
    CurrentMajor: '',
    CurrentDegree: '',
    EnglishLevel: '',
    OtherRewards: '',
    Scores: { low: '' }
  });

  console.log(formValue);

  useEffect(() => {
    setFormValue(studentData || formValue);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Paper >

      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"

      >

        <Grid item sm={8} md={6} lg={4}>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField

              label="Name"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              value={formValue.Name}
              onChange={(e) => setFormValue({ ...formValue, Name: e.target.value })}
              variant="outlined"
              size="small"
              error={false}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Gender"
              value={formValue.Gender}
              onChange={(e) => setFormValue({ ...formValue, Gender: e.target.value })}

              margin="normal"
              variant="outlined"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Title"
              id="outlined-size-small"
              defaultValue=""
              variant="outlined"
              size="small"
              placeholder='Mr./Miss'
              value={formValue.Title}
              onChange={(e) => setFormValue({ ...formValue, Title: e.target.value })}
            />

            <KeyboardDatePicker
              label="Date of Birth"
              format="DD/MM/YYYY"
              placeholder="10/10/2018"
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              value={selectedDate}
              onChange={(data) => handleDateChange(data)}

              animateYearScrolling={false}
            />

            <TextField
              label="Phone Number"
              id="outlined-size-small"
              defaultValue=""
              type="number"
              variant="outlined"
              size="small"
              value={formValue.Phone}
              onChange={(e) => setFormValue({ ...formValue, Phone: e.target.value })}

            />
            <TextField
              label="Email"
              id="outlined-size-small"
              defaultValue=""
              type="email"
              variant="outlined"
              size="small"
              value={formValue.Email}
              onChange={(e) => setFormValue({ ...formValue, Email: e.target.value })}

            />
            <TextField
              label="Address"
              id="outlined-size-small"
              defaultValue=""
              type="data"
              variant="outlined"
              size="small"
              value={formValue.Address}
              onChange={(e) => setFormValue({ ...formValue, Address: e.target.value })}

            />

            <TextField
              label="Emplyement"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Employment}
              onChange={(e) => setFormValue({ ...formValue, Employment: e.target.value })}

            />

          </form>

        </Grid>
        <Grid item sm={8} md={6} lg={4}>

          <form className={classes.root} noValidate autoComplete="off">

            <TextField
              label="PostalCode"
              id="outlined-size-small"
              defaultValue={null}
              type="number"
              variant="outlined"
              size="small"
              value={formValue.PostalCode}
              onChange={(e) => setFormValue({ ...formValue, PostalCode: e.target.value })}

            />
            <TextField
              label="Networking"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Networking}
              onChange={(e) => setFormValue({ ...formValue, Networking: e.target.value })}

            />
            <TextField
              label="Budget"
              id="outlined-size-small"
              defaultValue=""
              type="number"
              variant="outlined"
              size="small"
              value={formValue.Budget}
              onChange={(e) => setFormValue({ ...formValue, Budget: e.target.value })}

            />

            <TextField
              label="Easy To Get In"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.EasyToGetIn}
              onChange={(e) => setFormValue({ ...formValue, EasyToGetIn: e.target.value })}

            />
            <TextField
              label="Location"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Location}
              onChange={(e) => setFormValue({ ...formValue, Location: e.target.value })}

            />
            <TextField
              label="ImmigrationOriented"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.ImmigrationOriented}
              onChange={(e) => setFormValue({ ...formValue, ImmigrationOriented: e.target.value })}

            />

            <TextField
              label="OptionRange"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.OptionRange}
              onChange={(e) => setFormValue({ ...formValue, OptionRange: e.target.value })}

            />

          </form>

        </Grid>

        <Grid item sm={8} md={6} lg={4}>

          <form className={classes.root} noValidate autoComplete="off">

            <TextField
              label="Interests"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Interests}
              onChange={(e) => setFormValue({ ...formValue, Interests: e.target.value })}

            />
            <TextField
              label="Direction"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Direction}
              onChange={(e) => setFormValue({ ...formValue, Direction: e.target.value })}

            />
            <TextField
              label="Current Major"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.CurrentMajor}
              onChange={(e) => setFormValue({ ...formValue, CurrentMajor: e.target.value })}
            />
            <TextField
              label="Current Degree"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

              value={formValue.CurrentDegree}
              onChange={(e) => setFormValue({ ...formValue, CurrentDegree: e.target.value })}
            />
            <TextField
              label="EnglishLevel"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

              value={formValue.EnglishLevel}
              onChange={(e) => setFormValue({ ...formValue, EnglishLevel: e.target.value })}

            />
            <TextField
              label="OtherRewards"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.OtherRewards}
              onChange={(e) => setFormValue({ ...formValue, OtherRewards: e.target.value })}

            />
            <TextField
              label="Scores"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"
              value={formValue.Scores.low}
              onChange={(e) => setFormValue({ ...formValue, Scores: { low: e.target.value } })}

            />

          </form>

        </Grid>

      </Grid >
      <Box sx={{
        display: 'flex',
        justifyContent: 'end'
      }}>
        <Button variant="contained" color="primary"
          onClick={() => dispatch(studentInfoSend(formValue))}>
          {loading ? <CircularProgress color="secondary" fontSize="small" /> : 'submit'}

        </Button>
      </Box>
    </Paper >

  );
};

// StudentInfo = reduxForm({
//   form: 'StudentForm'
// })(ContactForm)

export default StudentInfo;

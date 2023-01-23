import React, { useState } from 'react';
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

  const handleDateChange = (date) => {
    // setSelectedDate(date);
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
              variant="outlined"
              size="small"
              error={false}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Gender"
              value=""
              onChange={handleDateChange()}
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
            />

            <KeyboardDatePicker
              label="Date of Birth"
              format="DD/MM/YYYY"
              placeholder="10/10/2018"
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling={false}
            />

            <TextField
              label="Phone Number"
              id="outlined-size-small"
              defaultValue=""
              type="number"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Email"
              id="outlined-size-small"
              defaultValue=""
              type="email"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Address"
              id="outlined-size-small"
              defaultValue=""
              type="data"
              variant="outlined"
              size="small"

            />

          </form>

        </Grid>
        <Grid item sm={8} md={6} lg={4}>

          <form className={classes.root} noValidate autoComplete="off">

            <TextField
              label="PostalCode"
              id="outlined-size-small"
              defaultValue=""
              type="number"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Networking"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Budget"
              id="outlined-size-small"
              defaultValue=""
              type="number"
              variant="outlined"
              size="small"

            />

            <TextField
              label="Easy To Get In"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Location"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="ImmigrationOriented"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="OptionRange"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

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

            />
            <TextField
              label="Direction"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Current Major"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Current Degree"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="EnglishLevel"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="OtherRewards"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />
            <TextField
              label="Scores"
              id="outlined-size-small"
              defaultValue=""
              type="text"
              variant="outlined"
              size="small"

            />

          </form>

        </Grid>

      </Grid >
      <Box sx={{
        display: 'flex',
        justifyContent: 'end'
      }}>
        <Button variant="contained" color="primary">
          submit

        </Button>
      </Box>
    </Paper >

  );
};

export default StudentInfo;

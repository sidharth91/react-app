import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }
  
 const Datepicker=() =>{
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2020-06-11"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        shouldDisableDate={disableWeekends(new Date())}
      />
    </form>
  );
}

export default Datepicker;
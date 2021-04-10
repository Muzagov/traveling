import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { classes } from "istanbul-lib-coverage";
import Button from "@material-ui/core/Button";

function SearchRoute() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const [firstCity, setFirstCity] = React.useState("");
  const [lastCity, setLastCity] = React.useState("");
  const [firstTime, setFirstTime] = React.useState("");

  const handleChangeFirstCity = (event) => {
    setFirstCity(event.target.value);
  };

  const handleChangeLastCity = (event) => {
    setLastCity(event.target.value);
  };

  const handleChangeFirstTime = (event) => {
    setFirstTime(event.target.value);
  };

  return (
    <div className="search-route">
      <div className="block-routes">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            value={firstCity}
            onChange={handleChangeFirstCity}
            label="город вылета/выезда"
            defaultValue=" "
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            value={lastCity}
            onChange={handleChangeLastCity}
            label="город прилета/приезда"
            defaultValue=" "
            variant="outlined"
          />
        </form>
      </div>
      <div className="block-date">
        <TextField
          required
          id="datetime-local"
          type="datetime-local"
          value={firstTime}
          onChange={handleChangeFirstTime}
          label="время вылета/выезда"
          className={classes.textField}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="button-search">
        <Button variant="contained" color="primary">
          Искать
        </Button>
      </div>
    </div>
  );
}

export default SearchRoute;

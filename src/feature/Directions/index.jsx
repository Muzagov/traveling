import React from "react";
import Route from "./Direction";
import { Link } from "react-router-dom";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";

function Directions() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  const classes = useStyles();

  return (
    <div className="routers">
      <div className="login">
        <Link to="/searchRoute">
          <div className="search-icon">
            <SearchIcon />
          </div>
        </Link>
        <Link to="/authorization">
          <div className="come">Войти</div>
        </Link>
        <Link to="/registration">
          <div className="registration">Регистрация</div>
        </Link>
      </div>
      <Link to="/addWindowRoute">
        <div className="add-route">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Добавить маршрут
            </Button>
          </ThemeProvider>
        </div>
      </Link>
      <Route />
    </div>
  );
}

export default Directions;

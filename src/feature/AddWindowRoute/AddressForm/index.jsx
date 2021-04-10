import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { classes } from "istanbul-lib-coverage";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function AddressForm(props) {
  const [transport, setTransport] = React.useState("");

  const [where, setWhere] = React.useState("");

  const [from, setFrom] = React.useState("");

  const [sumKg, setSumKg] = React.useState("");

  const [weight, setWeight] = React.useState("");

  const [sum, setSum] = React.useState("");

  const [departure, setDeparture] = React.useState("");

  const [arrival, setArrival] = React.useState("");

  const [comment, setComment] = React.useState("");

  const handleChangeTransport = (event) => {
    setTransport(event.target.value);
  };

  const handleChangeWhere = (event) => {
    setWhere(event.target.value);
  };

  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleChangeSumKg = (event) => {
    setSumKg(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangeSum = (event) => {
    setSum(event.target.value);
  };

  const handleChangeDeparture = (event) => {
    setDeparture(event.target.value);
  };

  const handleChangeArrival = (event) => {
    setArrival(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="addressForm">
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Откуда"
                variant="outlined"
                value={from}
                onChange={handleChangeFrom}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Куда"
                variant="outlined"
                value={where}
                onChange={handleChangeWhere}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Выберите транспорт
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={transport}
                onChange={handleChangeTransport}
                label="Выберите транспорт"
              >
                <MenuItem value={10}>Самолёт</MenuItem>
                <MenuItem value={20}>Автобус</MenuItem>
                <MenuItem value={30}>Машина</MenuItem>
                <MenuItem value={30}>Поезд</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Цена перевоза за 1кг"
                className={classes.textField}
                variant="outlined"
                value={sumKg}
                onChange={handleChangeSumKg}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Максимальный вес"
                variant="outlined"
                value={weight}
                onChange={handleChangeWeight}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Минимальная цена перевоза"
                variant="outlined"
                value={sum}
                onChange={handleChangeSum}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="datetime-local"
                type="datetime-local"
                label="Время вылета/выезда"
                className={classes.textField}
                variant="outlined"
                value={departure}
                onChange={handleChangeDeparture}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="datetime-local"
                type="datetime-local"
                label="Время прилёта/приезда"
                className={classes.textField}
                variant="outlined"
                value={arrival}
                onChange={handleChangeArrival}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                label="Комментарий"
                variant="outlined"
                value={comment}
                onChange={handleChangeComment}
              />
            </form>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default AddressForm;

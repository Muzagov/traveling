import React from "react";
import AvatarUser from "../ProfileUser/Avatar/index";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function EditProfileUser() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const [name, setName] = React.useState("abc");
  const [lastname, setLastname] = React.useState("abc");
  const [patronymic, setPatronymic] = React.useState("abc");
  const [date, setDate] = React.useState("abc");
  const [telephone, setTelephone] = React.useState("79876543210");
  const [email, setEmail] = React.useState("abc");

  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleChangePatronymic = (event) => {
    setPatronymic(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="edit-profile-user">
      <div className="info-block-up">
        <AvatarUser />
        <div className="edit-name">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Имя</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={name}
                onChange={handleChange}
                label="Имя"
              />
            </FormControl>
          </form>
        </div>
        <div className="edit-lastname">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Фамилия</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={lastname}
                onChange={handleChangeLastname}
                label="Фамилия"
              />
            </FormControl>
          </form>
        </div>
        <div className="edit-patronymic">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Отчество</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={patronymic}
                onChange={handleChangePatronymic}
                label="Отчество"
              />
            </FormControl>
          </form>
        </div>
      </div>
      <div className="info-block-down">
        <div className="edit-date">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="datetime-local"
              onChange={handleChangeDate}
              type="datetime-local"
              value={date}
              label="Дата рождения"
              className={classes.textField}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          {/*<form className={classes.root} noValidate autoComplete="off">*/}
          {/*  <FormControl variant="outlined">*/}
          {/*    <InputLabel htmlFor="component-outlined">*/}
          {/*      Дата рождения*/}
          {/*    </InputLabel>*/}
          {/*    <OutlinedInput*/}
          {/*      id="component-outlined"*/}
          {/*      value={date}*/}
          {/*      onChange={handleChangeDate}*/}
          {/*      label="Дата рождения"*/}
          {/*    />*/}
          {/*  </FormControl>*/}
          {/*</form>*/}
        </div>
        <div className="edit-telephone">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">
                Номер телефона
              </InputLabel>
              <OutlinedInput
                type="number"
                id="component-outlined"
                value={telephone}
                onChange={handleChangeTelephone}
                label="Номер телефона"
              />
            </FormControl>
          </form>
        </div>
        <div className="edit-email">
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Адрес e-mail</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={email}
                onChange={handleChangeEmail}
                label="Адрес e-mail"
              />
            </FormControl>
          </form>
        </div>
      </div>
      <div className="button-save">
        <Button variant="contained" color="primary">
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default EditProfileUser;

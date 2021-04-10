import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

function AvatarUser() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

  const classes = useStyles();

  return (
    <div className="avatar-user">
      <div className={classes.root}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
        />
      </div>
    </div>
  );
}

export default AvatarUser;

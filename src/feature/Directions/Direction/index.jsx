import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Direction() {
  const [activeStep, setActiveStep] = React.useState(0);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  return (
    <div className="route">
      <div className={classes.root}>
        <Typography component="h1" variant="h4" align="center">
          Информация о маршруте
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className="commonLeftCol">
                {<div className="from">Грозный</div>}
              </div>
            </Typography>
            <Typography className={classes.heading}>
              <div className="commonLeftCol">
                {<div className="where">Москва</div>}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="common">
                <div className="commonLeftCol">
                  <div className="transport">Самолёт</div>
                  <div className="sumKg">1500</div>
                  <div className="departure">12:00</div>
                  <div className="comment">Необходимо передать ценный груз</div>
                </div>
                <div className="commonRightCol">
                  <div className="sum">1000</div>
                  <div className="weight">1 килограмм</div>
                  <div className="arrival">15:00</div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {activeStep ? "Place order" : "Добавить"}
          </Button>
        </Accordion>
      </div>
      <div className="exit">
        <HighlightOffIcon />
      </div>
    </div>
  );
}

export default Direction;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ProfileAccordion(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();

  return (
    <div className="accordion">
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className="commonAccordion">
                <div className="profileName">
                  Висхан
                </div>
                <div className="profileAvatar">
                  <img
                      src="https://sun2-3.userapi.com/s/v1/if1/uHfQnNi2RlYkgnN02JZRyT8pukenLF1aFUMCBnbheogMRGVANiEMSJ2GP7PDFeNBmM-P8mf9.jpg?size=200x0&quality=96&crop=3,3,775,775&ava=1"
                      alt=""
                      className="avatar"
                  />
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="profileAccordion">Профиль</div>
              <div className="exitAccordion">Выход</div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ProfileAccordion;

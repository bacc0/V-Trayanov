import React, { useState, useEffect } from 'react';


import {
     makeStyles, Accordion, Typography, useTheme,
     AccordionDetails, AccordionSummary
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
     root: {

     },
     accordionBottom: {

     }
     // marginTop: 

}));

const Accord = ({ windowDimensions }) => {
     const classes = useStyles();
     const theme = useTheme()

     const [margin_B, setMargin_B] = useState(16);


     useEffect(() => {
          if (windowDimensions) {

               if (windowDimensions.width < 440) {
                    setMargin_B(100)
               } else {
                    setMargin_B(16)
               }
          }
     }, [windowDimensions])
     return (
          <div className={classes.root}>
               <Accordion style={{ borderRadius: 0 }}>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                    >
                         <Typography className={classes.heading}
                              style={{ color: theme.palette.tertiary.title, fontSize: 20 }}
                         >
                              github
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography>
                              <a
                                   href="https://github.com/bacc0/"
                                   target="_blank"

                              >
                                   https://github.com/bacc0
                              </a>

                         </Typography>
                    </AccordionDetails>
               </Accordion>
               <Accordion style={{ borderRadius: 0 }}>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2a-content"
                         id="panel2a-header"
                    >
                         <Typography className={classes.heading}
                              style={{ color: theme.palette.tertiary.title, fontSize: 20 }}
                         >
                              work experience
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography>

                              <p>React Developer - appgr8 ,  July 2021 - Present</p>
                              <br />

                              <p>Developer - Groundbits Ltd, February 2019 - May 2021</p>
                              <br />


                              <p>I have been working to support IT personnel in designing and developing desktop-based and web applications. </p>
                              <p>I have been responsible for coding, testing, debugging, modifying, and executing JavaScript programs for software projects.</p>
                              <br />

                              <p style={{ fontSize: 10, color: theme.palette.tertiary.reference, marginBottom: 6 }}>Reference:</p>
                              <p>Ricard Rosson</p>

                              <p>ricard@iacos.net</p>

                         </Typography>
                    </AccordionDetails>

               </Accordion>

               <Accordion className={classes.accordionBottom}
                    style={{
                         borderRadius: 0,
                         marginBottom: margin_B
                    }}



               >

                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                    >
                         <Typography className={classes.heading}
                              style={{ color: theme.palette.tertiary.title, fontSize: 20 }}
                         >
                              contact
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography >
                              <span> mail </span>
                              <a href="mailto:bacco7@me.com"
                                   target="_blank"

                              >
                                   bacco7@me.com
                              </a>
                              <br />
                              <span> mail </span>
                              <a href="mailto:bacco23@gmail.com"
                                   target="_blank"
                              >
                                   bacco23@gmail.com
                              </a>
                              <br />
                              <span> tel  </span>
                              <a
                                   href="tel:+359887787711"
                                   target="_blank"
                              >
                                   +359 (0) 88 778 7711
                              </a>
                              <div></div>
                              <span> tel  </span>
                              <a
                                   href="tel:+447590010066"
                                   target="_blank"
                              >
                                   +44 (0) 7590 010 066
                              </a>
                         </Typography>
                    </AccordionDetails>
               </Accordion>

          </div>
     );
}

export default Accord
import React from 'react';


import {  makeStyles, Accordion,Typography, useTheme,
          AccordionDetails,  AccordionSummary } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
     root: {
          
     },
     // marginTop: 
     
}));

const Accord = () => {
     const classes = useStyles();
     const theme = useTheme()
     return (
          <div className={classes.root}>
               <Accordion  style={{ borderRadius: 0}}>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                    >
                         <Typography className={classes.heading} 
                              style={{ color: theme.palette.tertiary.title, fontSize: 20, paddingLeft: '10vw'}}
                         >
                              projects
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography>
                              https://bacc0.github.io/v/trayanov.html
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
                              style={{ color: theme.palette.tertiary.title, fontSize: 20, paddingLeft: '10vw' }}
                         >
                              work experience
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography>
                         <p>Developer - Groundbits Ltd, February 2019 - Present</p>
                         <br/>


                         <p>I have been working to support IT personnel in designing and developing desktop-based and web applications. </p>
                         <p>I have been responsible for coding, testing, debugging, modifying, and executing JavaScript programs for software projects.</p>
                         <br/>

                         <p style={{ fontSize: 10, color: theme.palette.tertiary.reference, marginBottom: 6}}>Reference:</p>
                         <p>Ricard Rosson</p>

                         <p>ricard@iacos.net</p>

                         </Typography>
                    </AccordionDetails>
                    
               </Accordion>

               <Accordion  style={{ borderRadius: 0 , marginBottom: 16}}>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                    >
                         <Typography className={classes.heading} 
                              style={{ color: theme.palette.tertiary.title, fontSize: 20, paddingLeft: '10vw'}}
                         >
                              contact
                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography >
                              <a href="mailto:bacco7@me.com"
                                   target="_blank"
                                   style={{ margin: '0 0 0 10vw'}}
                                   
                              >
                                   bacco7@me.com
                              </a>
                              <br />

                              <a href="mailto:bacco23@gmail.com"
                                   target="_blank"
                                   style={{ margin: '0 0 0 10vw'}}
                              >
                                   bacco23@gmail.com
                              </a>
                              <br />
                              <a
                                   href="tel:+447590010066"
                                   target="_blank"
                                   style={{ margin: '0 0 0 10vw'}}
                              >
                                   tel: +44 (0) 7590 010 066
                              </a>
                         </Typography>
                    </AccordionDetails>
               </Accordion>
               
          </div>
     );
}

export default Accord
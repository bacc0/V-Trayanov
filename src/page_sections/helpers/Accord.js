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
               <Accordion style={{ borderRadius: '12px 12px 0 0' }}>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                    >
                         <Typography className={classes.heading}
                              style={{ color: theme.palette.tertiary.title, fontSize: 20 }}
                         >
                              skills

                         </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <Typography>

                              <Typography>
                                   <p> Problem Solving Skills</p>
                                   <p> Teamwork</p>
                                   <p> Developing with ReactJS single page JavaScript Applications</p>
                                   <p> Good understanding working with APIs (RESTful services)</p>
                                   <p>Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX </p>
                                   <p> Attention to Detail</p>
                                   <p> Creativity</p>
                                   <p>Skilled at writing well-designed, efficient code using current best practices in Web development</p>
                                   <p> Experience working with dynamic content</p>
                                   <p> Flexibility</p>
                                   <p> Responsibility</p>
                              </Typography>

                         </Typography>
                    </AccordionDetails>
               </Accordion>




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

                              <p><strong>React Developer - Amdocs & Appgr8</strong></p>  
                              <p>July 2021 - Present (Full-time)</p>
                              <br />
                              <hr/>

                              <p><strong>React Developer - Groundbits Ltd</strong></p>
                              <p> Feb 2021 – Apr 2021 (3 months, Part-time)</p>
                              <br />

                              <p><strong>React Developer - Groundbits Ltd</strong></p>
                              <p> Jan 2020 – Jan 2021 (1 year 1 month, Full-time)</p>
                              <br />

                              <p><strong>Frontend Developer - Groundbits Ltd</strong></p>
                              <p> Feb 2019 – Dec 2019 (11 months, Part-time)</p>
                              <br />
                              <hr/>
                           
                              <p>Ricard Rosson</p>

                              <p>ricard@iacos.net</p>

                         </Typography>
                    </AccordionDetails>

               </Accordion>

               <Accordion className={classes.accordionBottom}
                    style={{
                         borderRadius: '0 0 12px 12px ',
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
                    <AccordionDetails >
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
                                   href="tel:+447590010066"
                                   target="_blank"
                              >
                                   +44 (0) 7590 010 066
                              </a>
                              <div/>
                              <span> tel  </span>
                              <a
                                   href="tel:+359887787711"
                                   target="_blank"
                              >
                                   +359 (0) 88 778 7711
                              </a>
                              
                         </Typography>
                    </AccordionDetails>
               </Accordion>

          </div>
     );
}

export default Accord
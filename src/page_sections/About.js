import React, { Fragment, useState, useEffect } from 'react'

import { makeStyles, Typography } from '@material-ui/core'
// import {
//      motion,
//      useViewportScroll,
//      AnimatePresence,
//      useSpring,
//      useTransform
// } from 'framer-motion'


import Skills_Vertc from './SVG_s/Skills_Vertc'
import Skills_Horiz from './SVG_s/Skills_Horiz'
import { theme } from '../theme'



const About = ({ windowDimensions, Y_position_Percentage, pathLength, landscape_Mode }) => {

     const classes = useStyles()
     const [pageOrientation, setPageOrientation] = useState('portraitMode');

     const [SW, setSW] = useState(1)

     useEffect(() => {
          setSW(windowDimensions.width > 600 ? 0.7 : 1.1)
     }, [windowDimensions])

     useEffect(() => {
          if (windowDimensions) {
               if (windowDimensions.height > windowDimensions.width) {
                    setPageOrientation('portraitMode')
               }
               if (windowDimensions.height < windowDimensions.width) {
                    setPageOrientation('landscapeMode')
               }
          }
     }, [windowDimensions]);

     const result_PortraitMode = () => {
          if (pageOrientation === 'portraitMode') {
               return (<div style={{
                    display: 'flex',
                    fontSize: 0,
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
               }}
               >
                    .<Skills_Vertc
                         SW={SW}
                         pathLength={pathLength}
                         Y_position_Percentage={Y_position_Percentage}
                    />
               </div>)
          } else {
               return (<div style={{ display: 'none' }}>
                    . <Skills_Vertc />
               </div>)
          }
     }

     const result_LandscapeMode = () => {

          if (pageOrientation === 'landscapeMode') {
               return (<div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    // margin: '5vh 0', 
                    // fontSize: 0, border: '1px solid'
               }}>
                    .<Skills_Horiz
                         SW={SW}
                         pathLength={pathLength}
                         Y_position_Percentage={Y_position_Percentage}
                    />
               </div>)
          } else {
               return (<div style={{ display: 'none' }}>
                    . <Skills_Horiz />
               </div>)
          }
     }

     // useEffect(() => {
     //      console.log(scroll_Y)
     // }, [scroll_Y]);

     useEffect(() => {


          console.log(Y_position_Percentage)

     }, [Y_position_Percentage])



     return (
          <div className={classes.root}
               style={{
                    backgroundImage: `url('pictures/BG_about.svg')`,
                    // backgroundRepeat: 'repeat',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize:  landscape_Mode ?  windowDimensions.height + 120 : 'auto 110vh' ,
                    height: '100vh'
               }}
          >
               <div className={classes.title_Container}>
                    <Typography variant="h1" align="center">
                         skills
                    </Typography>
               </div>

               { result_PortraitMode()}

               { result_LandscapeMode()}
               {
               Y_position_Percentage > 0.3 &&
                    <div className={classes.downPageText_Container} >
                         <Typography variant="body2" align="center">
                              ReactJs, NextJS, Hooks, Material UI, HTML, CSS,
                              Github, Javascript, NodeJS, Express, GIMP, Photoshop,
                              Autodesk Graphic, Illustrator, Framer Motion, SVG Animations
                         </Typography>
                    </div>
               }
          </div>
     )

}

export default About





const useStyles = makeStyles((theme) => ({
     root: {
          backgroundColor: '#EFE9BB',
          // border: '1px solid',
          backgroundRepeat: 'no-repeat',
          // backgroundSize: 221,
          // backgroundPosition: 'center 30px',

          '@media (min-width : 820px)': {
               // backgroundSize: 560,

          },

          // '& p': {
          //      margin: '10px 0 0',

          //      fontSize: 16,
          //      textAlign: 'left',

          //      '@media (min-width : 600px)': {
          //           fontSize: 20,
          //      },

          // },
     },
     title_Container: {

          height: '10vh',

          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'center',

          color: theme.palette.primary.title,


          '@media (min-width : 370px)': {
               // fontSize: 18,
          },
     },
     downPageText_Container: {

          height: '10vh',

          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0 8vw',
          fontSize: 10,
          color: theme.palette.primary.paragraph,

          '@media (min-width : 370px)': {
               // fontSize: 18,
          },
     }

}))
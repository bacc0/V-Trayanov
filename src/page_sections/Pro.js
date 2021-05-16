import React , {Fragment, useState, useEffect} from 'react'

import { makeStyles, Typography } from '@material-ui/core'

import { motion }   from 'framer-motion'

import { theme } from '../theme'

import Accord from './helpers/Accord'
import Card_Skills from './helpers/Card_Skills'


const Pro = () => {

     const classes = useStyles()

    

     return (
               <Fragment>
                    <div className={ classes.root }>
                    <div className={ classes.containerPro }>

                         <div className={classes.title_Container}>
                              <Typography variant="h1" align="center">
                                   pro
                              </Typography>
                         </div>

                         <div className={classes.main}>
                              <Card_Skills/>
                              <Accord/>
                         </div>
                         </div>
                    </div>
               </Fragment>
          )
     }

export default Pro





const useStyles = makeStyles((theme) => ({
     root: {

         

          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          // textAlign: 'center',




          fontFamily: "'Audiowide', -apple-system, BlinkMacSystemFont",
          // '& p':{
          //      margin: '-10px 0 0',
          //      color: theme.palette.tertiary.paragraph,
          //      fontSize: 12,
          //      // textAlign: 'center',
          //      '@media (min-width : 600px)': {
          //           fontSize: 14,
          //      },
               
                
          //  },
          //  '& a':{
          //      color: theme.palette.tertiary.links,
               
          //  },
     },
     containerPro: {
          width: '84vw',
          maxWidth: 700,
     },
     title_Container: {

          height: '10vh',

          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',

          color: theme.palette.secondary.title,


          '@media (min-width : 370px)': {
               // fontSize: 18,
          },
     },
     main: {
          height: '80vh',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          // background: 'grey',

     }

    

}))
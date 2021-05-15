import * as React from "react";
import { motion } from "framer-motion";

import { makeStyles } from '@material-ui/core/styles'

const itemIds = ['ReactJS', 'NextJS', 'Javascript', 'HTML CSS', 'GIMP Photoshop']


const Skills = ({ scroll_Y, windowDimensions }) => {



     const classes = useStyles()

     const animation_Layout = (children, delay) => {

          return (
               <>
                    {
                         scroll_Y > windowDimensions.height / 1.05 &&
                         <motion.div
                              initial={{ opacity: 0, scale: 0.2, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                   ease: "easeOut",
                                   delay: delay,
                                   duration: 0.2
                              }}
                              className={classes.skills}
                         >
                              {children}
                         </motion.div>
                    }
               </>
          )
     }


     return (
          <div className={classes.skills_Container}>
               <div className={classes.skills_Left}>
                    {animation_Layout('ReactJS', 0)}
                    {animation_Layout('NextJS', 0.15)}
                    {animation_Layout('Material UI', 0.3)}
                    {animation_Layout('Hooks', 0.45)}
                    {animation_Layout('HTML', 0.6)}
                    {animation_Layout('CSS', 0.75)}
               </div>
               <div className={classes.skills_Right}>
                    {animation_Layout('GitHub', 0)}
                    {animation_Layout('Javascript', 0.15)}
                    {animation_Layout('NodeJs', 0.3)}
                    {animation_Layout('Illustrator', 0.45)}
                    {animation_Layout('GIMP', 0.6)}
                    {animation_Layout('Graphic', 0.75)}
               </div>
          </div>

     )
}
export default Skills



const useStyles = makeStyles((theme) => ({

     skills_Container: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
     },
     skills_Left: {
          width: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
     },
     skills_Right: {
          width: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
     },

     skills: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          width: 120,
          height: 30,
          backgroundColor: '#D7232A',
          padding: '12px 0',
          color: '#EFE9BB',
          margin: '3px 3px',
          fontSize: '0.8rem',

          '@media (min-width : 380px)': {
               width: 98,
               height: 16,
          },
          '@media (min-width : 660px)': {
               width: 140,
               height: 14,
               fontSize: '0.85rem',
          },
          '@media (min-width : 720px)': {
               height: 16,
               fontSize: '0.9rem',
          },
          '@media (min-width : 1100px)': {
               height: 18,
               fontSize: '0.95rem',
          },
     }
}))
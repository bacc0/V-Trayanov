import React , {Fragment, useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core'
import { motion }   from 'framer-motion'
import Title from './SVG_s/Title'
import { theme } from '../theme'


const Home = ({  buttonClick_Handler,  windowDimensions, 
                 landscape_Mode, Y_position_Percentage  }) => {

     const classes = useStyles()

     const [opacity   ,    setOpacity] = useState(1)
     const [widthLogo ,  setWidthLogo] = useState(0)


     useEffect(() => {
          if (windowDimensions) {
               
               if (windowDimensions.width < 330) {
                    setWidthLogo( 160 )
               }
               if (windowDimensions.width >330) {
                    setWidthLogo( 220 )
               }
               if (windowDimensions.width > 410) {
                    setWidthLogo( 250 )
               }
               if (windowDimensions.width > 760) {
                    setWidthLogo( 250 )
               }
          }
     }, [windowDimensions])


     useEffect(() => {

          if (Y_position_Percentage < 0.02 ) {
               setOpacity(1)
          }
          if (Y_position_Percentage > 0.02 ) {
               setOpacity(1)
          }
          if (Y_position_Percentage > 0.04 ) {
               setOpacity(0.8)
          }
          if (Y_position_Percentage > 0.1 ) {
               setOpacity(0.6)
          }
          if (Y_position_Percentage > 0.1 ) {
               setOpacity(0.4)
          }
          if (Y_position_Percentage > 0.2 ) {
               setOpacity(0.2)
          }
          if (Y_position_Percentage > 0.27 ) {
               setOpacity(0)
          }
     }, [Y_position_Percentage])

     const toggle = () => {

               let result = (
                         <div className={classes.Title}>
                              <Title 
                                   widthLogo={widthLogo} 
                                   colorTitle={theme.palette.primary.title}
                                   colorTitleInner={theme.palette.primary.titleInner}

                              />
                         </div>
                    )
                    
               if (windowDimensions) {
                    
                    if (    windowDimensions.width  > windowDimensions.height 
                         && windowDimensions.height < 530 && windowDimensions.width < 790) {
                    result = (
                         <img
                              className={classes.Hello_Im_2}
                              
                              src={'pictures/Title_2.svg'}
                         />
                    )
               }     
          }
       return result
     }

     return (
               <Fragment>
           
                    <div className={classes.root} 
                    // style={{position: 'relative', top: '-100vh'}}
                         >
                         <div style={{ 
                                   height          : '100vh', 
                                   backgroundColor : theme.palette.primary.background ,
                                   backgroundImage : `url('pictures/BG_home.svg')`,
                                   backgroundRepeat: 'no-repeat',
                                   backgroundPosition: 'center center',
                                   backgroundSize:  landscape_Mode 
                                                       ? windowDimensions.height + 120 
                                                       : 'auto 100vh'

                              }}
                              
                         >
                              <div style={{ 
                                        height: '100vh',
                                        width: '84vw',
                                        margin:'0 auto',
                                        display: 'flex', 
                                        flexWrap: 'wrap', 
                                        justifyContent: 'center', 
                                        alignItems: 'center', 
                                        maxWidth: 700 ,
                                   }}
                              >
                                   <div style={{ 

                                        height: '100vh' ,
                                        width: '100%', 
                                        maxWidth: 700,
                                   }}
                                   >
                                        <div style={{ 
                                                  backgroundPosition : `right ${-Y_position_Percentage * 800 }px`,
                                                  opacity            : opacity, 
                                                  height             : '100%', 
                                                  backgroundSize     : 'auto 100%',
                                                  backgroundImage    : `url('pictures/frontendDev.svg')`,
                                                  backgroundRepeat   : 'no-repeat',
                                                  backgroundRepeat   : 'no-repeat',
                                                  transition         : 'opacity 250ms linear',
                                             }}
                                        >

                                        </div>
                                        <div style={{ 
                                                  height: '70%' , 
                                                  margin: '-85vh 0 0'
                                             }}
                                        >
                                             <div style={{ 

                                                       border: '1px solid #00000000', 
                                                       height: '41%',
                                                       position:'relative',
                                                       textAlign: 'left', 
                                                  }}
                                             >
                                             {
                                                  toggle()
                                             }
                                             </div>
                                             <div style={{ 

                                                       border: '0px solid lime', 
                                                       height: '18%', 
                                                       display: 'flex', 
                                                       flexWrap: 'wrap', 
                                                       justifyContent: 'center', 
                                                       alignItems: 'center',
                                                       
                                                  }}
                                             >
                                                       <motion.div 
                                                            transition={{ duration: 0.05 }}
                                                            whileTap  = {{ scale: 0.95 }}
                                                       >
                                                            <motion.div
                                                                 initial={{ opacity: 0, scale: 0.9 }}
                                                                 animate={{ opacity: 1, scale: 1}}
                                                                 transition={{ ease: "easeOut", duration: 0.1, delay: 0.4 }}
                                                            >
                                                                      <a 
                                                                           onClick={() => buttonClick_Handler()}  
                                                                           className={classes.links}
                                                                      >
                                                                           about
                                                                      </a>
                                                            </motion.div>
                                                       </motion.div>
                                                  
                                             </div>
                                             <div style={{ 
                                                       border: '0px solid lime', 
                                                       height: '41%', 
                                                       position:'relative',
                                                       display: 'flex', 
                                                       flexWrap: 'wrap', 
                                                       justifyContent: 'center', 
                                                       alignItems: 'center',
                                                       marginLeft: '1.9vw'
                                                  }}
                                             >
                                                  <p>Currently working as developer at Appgr8</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Fragment>
          )
     }

export default Home





const useStyles = makeStyles((theme) => ({
     root: {
          fontFamily: "'Audiowide', -apple-system, BlinkMacSystemFont",
          '& p':{
               margin: '-10px 0 0',
               color: theme.palette.primary.paragraph,
               fontSize: 16,
               textAlign: 'left',
               '@media (min-width : 600px)': {
                    fontSize: 20,
               },
                
           },
     },

     links: {

          top            : 0,
          color          : theme.palette.primary.main ,
          width          : 260,
		cursor         : 'pointer',
          margin         : '0 5px',
          display        : 'inline-blok',
          border         : '2px solid ',
          position       : 'relative',
		fontSize       : '1.45rem',
		textDecoration : 'none',
          margin         : '0px',
          padding        : '5px 36px',
          
		'&:hover': {

               color  : theme.palette.primary.light,
               textDecoration : 'none',
              
		},
          '&:active':{
               
               color      : theme.palette.primary.dark,
               opacity    : 0.7,
               transition : 'color 0.25s , opacity 0.3s',
          },

		
	},

     container_Home: {
          
          backgroundColor: theme.palette.primary.background,
          height: '100vh',
          // minHeight: 400,

          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',

          '@media (min-width : 360px)': {
               // minHeight: 430,
          },
          '@media (min-width : 960px)': {
               // minHeight: 450,
          },
     },

     wrapper_Home:{

          // border: '0.4px solid red',
          height: '70%',
          width: 256,

          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',

          '@media (min-width : 360px)': {
               width   : 308,
          },
          '@media (min-width : 410px)': {
               width   : 350,
          },
          '@media (min-width : 600px)': {
               width   : 500,
               // height: '56%',
          },
          '@media (min-width : 960px)': {
               width   : 600,
               // height: '46%',
          },
          '@media (min-width : 1100px)': {
               width   : 750,
               // height: '56%',

          },

     },
     main_Home_Left:{
          // border: '0.4px solid lime',
          
          width: '75%', //??? 75
          height: '100%', 
     },

     up_left_Info:{
          // border: '1.4px solid red',

          height: '45%',
          // backgroundColor: 'pink',

          display: 'flex',
          flexWrap: 'wrap',
          // justifyContent: 'flex-start',
          alignItems: 'lex-start',

         
     },


     Title:{
          // border: '0.4px solid blue',/

          margin: '-50px 0 0 1.9vw',
          textAlign: 'left',
          // // width   : 180,

          // '@media (min-width : 360px)': {
          //      margin: '-27px 0 0 0',
          // },
          // '@media (min-width : 410px)': {
          //      margin: '-16px 0 0 0',
          // },

          // '@media (min-width : 630px)': {
          //      margin: '-44px 0 0 0',
          // },
          // '@media (min-width : 1000px)': {
          //      margin: '-46px 0 0 0',
          // },


          // '@media (max-height : 470px)': {
          //      width   : 160,
          // },

          // '@media (max-width: 320px) and (max-height: 320px)': {
          //      width   : 80,
          // },
          // '@media (max-width: 600px) and (max-height: 380px)': {
          //      width   : 110,
          // },
          // '@media (max-width: 570px) and (max-height: 320px)': {
          //      width   : 100,
          // },

         

     },

    
     mid_Container: {
          height: '10%', 
          // backgroundColor: 'purple',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
     },
     middle:{
          height: '100%',
          width: '66.6%',
          // backgroundColor: 'red',
          
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
     },
     button_Container:{
          height: 46,
          width: 160,
          // backgroundColor: 'grey',
          cursor: 'pointer',
     },
     down_left_Info: {
          // border: '0.4px solid red',
          height: '40%', 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          '@media (min-width : 600px)': {
               height: '45%', 
          },
     },
     text:{
         
         

     },
    
     right_Frontend_Container:{
          width: '25%',
          height: '100%',
          // backgroundColor: 'lightBlue',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
     },
     frontendDev_Pic:{
          height: '90%', 
          '@media (min-width : 600px)': {
               height: '100%', 
          },
     },
     Title_2:{
          width: '70%',
          textAlign: 'center'

          // '@media (min-width : 360px)': {
          //      margin: '-30px 0 0 0',
          // },
          // '@media (min-width : 410px)': {
          //      margin: '-56px 0 0 0',
          // },

          // '@media (min-width : 630px)': {
          //      margin: '-61px 0 0 0',
          // },
          // '@media (min-width : 1000px)': {
          //      margin: '-153px 0 0 0',
          // },
          
     },

}))
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../theme';


const Card_Skills = () => {

     const classes = useStyles();
     const bull = <span className={classes.bullet}>•</span>;

     return (
          <Card className={classes.root}>
               <CardContent>
                    <h3 className={classes.title} >
                         skills
                    </h3>
                   
                    <br />
                    <Typography>
                         <p> Developing with ReactJS single page JavaScript Applications</p>
                         <p> Good understanding working with APIs (RESTful services)</p>
                         <p>Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX </p>
                         <p>Skilled at writing well-designed, efficient code using current best practices in Web development</p>
                         <p> Experience working with dynamic content</p>
                    </Typography>
                    <br />
                  
                     
               </CardContent>
             
          </Card>
     );
}

export default Card_Skills


const useStyles = makeStyles({
     root: {
          minWidth: 275,
          minHeight: '50vh',
          width: '100%',
          margin: '0 0 16px',
          borderRadius: 0
         
     },
     bullet: {
          display: 'inline-block',
          margin: '0 2px',
          // transform: 'scale(0.8)',
     },
     title: {
          fontSize: 21,
          color: theme.palette.tertiary.title,
     },
     pos: {
          marginBottom: 12,
     },
});


const skills = [
     'Developing with ReactJS single page JavaScript Applications',
     'Good understanding working with APIs (RESTful services)',
     'Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX',
     'Skilled at writing well-designed, efficient code using current best practices in Web development',
     'Experience working with dynamic content',
     
]

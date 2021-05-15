
import React from 'react'
import { createMuiTheme } from '@material-ui/core';



export const theme = createMuiTheme(

	{
		palette: {

			background: {
				default: '#EFE9BB'
			},
			
			primary: {
				dark: '#EFE8BD',
				main: '#DBD5AC',
				light: '#FFF8CD',

				background: '#00A2C8',
				paragraph: '#08437A',
				title: '#08437A',
				menu: '#DBD5AC',
				menuMobile: '#DBD5AC',

			},

			secondary: {
				dark:  '#A7581F',
				main:  '#D37129',
				light: '#F38432',

				background: '#DBD5AC',
				title: '#08437A',
				menu: '#08437A',

			},
			tertiary:{
				main:  '#D7232A',



				background: '#D7232A',

				menu: '#DBD5AC',

			},

			error: {
				main: '#FF1744'
			},
			text: {
				primary: '#546e7a'
			},
			textSecondary:{
				color: '#00A2C8'
			}
			

		},
		typography: {
			h1: {
				fontSize: '1.3rem',
				fontFamily: "'Audiowide','Yanone Kaffeesatz',Raleway, Roboto, Helvetica, Arial, sans-serif",

				'@media (min-width : 370px)': {
					fontSize: '1.8rem',
				},
				'@media (min-width : 460px)': {
					fontSize: '2.1rem',
				},
			},
			body2 :{
				fontSize: '0.45rem',
				fontFamily: "'Audiowide','Yanone Kaffeesatz',Raleway, Roboto, Helvetica, Arial, sans-serif",

				'@media (min-width : 370px)': {
					fontSize: '0.7rem',
				},
				'@media (min-width : 460px)': {
				},
			},
	
		}
	}
)
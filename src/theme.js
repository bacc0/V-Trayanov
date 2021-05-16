
import React from 'react'
import { createMuiTheme } from '@material-ui/core';



export const theme = createMuiTheme(

	{
		palette: {
			shape: {
				borderRadius: 0
			},

			background: {
				default: '#DCE0D9'
			},
			
			primary: {
				

				dark: '#DCE0D9cc',
				main: '#DCE0D9',
				light: '#E3E8E0',

				background: '#48575C',
				paragraph: '#BFD336',
				title: '#BFD336',
				titleInner: '#BFD33600',
				menu: '#00A2C8',
				menu: '#DCE0D9',

			},

			secondary: {
				dark:  '#A7581F',
				main:  '#D37129',
				light: '#F38432',

				background: '#DBD5AC',
				title: '#48575C',
				paragraph: '#337181',
				menu: '#337181',

			},
			tertiary:{
				main:  '#D7232A',



				background: '#DCE0D9',

				menu: '#48575C',
				title: '#337181',
				paragraph: '#48575C',
				reference: '#00A2C8',

			},
			diagram:{
				color: '#48575C66',
				color_Text: '#DCE0D9',
				color_circle_IN: '#48575C',
				color_circle_OUT: '#48575C66',
				color_Text_Secondary: '#337181',
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
			body1 :{
				fontSize: '0.45rem',
				fontFamily: "'Audiowide','Yanone Kaffeesatz',Raleway, Roboto, Helvetica, Arial, sans-serif",
				lineHeight: 1.9,
				'@media (min-width : 370px)': {
					fontSize: '0.7rem',
				},
				'@media (min-width : 460px)': {
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
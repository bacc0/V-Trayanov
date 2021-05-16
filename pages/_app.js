import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from '../src/theme'
import Layout  from '../src/Layout'
import { AnimatePresence }    from "framer-motion"

import { useRouter } from 'next/router'


export default function MyApp(props) {

    const { Component, pageProps } = props
    const router = useRouter()

   


    



  

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    return (
        <React.Fragment>
            <Head>
                <title>V Trayanov</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

                <link rel='shortcut icon' href={`/pictures/vt.svg`} type="image/x-icon"/>
				<link rel='apple-touch-icon' href={`/pictures/vt.svg`} type="image/x-icon"/>
            </Head>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <Layout>
                    <AnimatePresence exitBeforeEnter >

                        <Component 
                            key={ router.route } 
                            {...pageProps} 
                        />
                    </AnimatePresence>
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};


// export const theme = createMuiTheme(
//     {
//         palette: {

//             // background: {
//             //     default: "#ff222f"
//             // },

//         }
//     }
// )
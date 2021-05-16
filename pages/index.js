import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from '../src/_Link'

import { useScrollTo } from 'react-use-window-scroll'
import Menu from '../src/page_sections/SVG_s/Menu'

import styles from '../styles/Home.module.css'
import Home from '../src/page_sections/Home'
import About from '../src/page_sections/About'

import { useViewportScroll, useSpring, useTransform } from 'framer-motion'
import { theme } from '../src/theme'

const Index = () => {

    const getWindowDimensions = () => {
        if (typeof window !== "undefined") {
            const { innerWidth: width, innerHeight: height } = window
            return { width, height }
        }
    }

    const [landscape_Mode        ,         setLandscape_Mode] = useState(false)
    const [transition_Time       ,        setTransition_Time] = useState(500)
    const [windowDimensions      ,       setWindowDimensions] = useState(getWindowDimensions())
    const [Y_position_Percentage , set_Y_position_Percentage] = React.useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { scrollYProgress } = useViewportScroll()
    const Y = useTransform(scrollYProgress, [0, 1.3], [0, 2.8])
    const pathLength = useSpring(Y, { stiffness: 1350, damping: 380 })
    useEffect(() => {
        scrollYProgress.onChange(v => set_Y_position_Percentage(v));
    }, [scrollYProgress])

    useEffect(() => {
        if (windowDimensions) {

            if (windowDimensions &&
                windowDimensions.width > windowDimensions.height) {
                setLandscape_Mode(true)
            } else {
                setLandscape_Mode(false)
            }
        }
    }, [windowDimensions])


    const home_Ref = useRef(null)
    const about_Ref = useRef(null)
    const pro_Ref = useRef(null)

    const scrollTo = useScrollTo()

    const goTo_Home = () => {
        scrollTo({
            top: home_Ref.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goTo_About = () => {
        scrollTo({
            top: about_Ref.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goTo_Pro = () => {
        scrollTo({
            top: pro_Ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const buttonClick_Handler = () => {
        goTo_About()
        setTransition_Time(1100)
        setTimeout(() => { setTransition_Time(500) }, 1100)
    }


    return (
        <div style={{}} className={styles.container}>

            <section ref={home_Ref} style={{ height: '100vh' }}>
                <Home
                    pathLength={pathLength}
                    landscape_Mode={landscape_Mode}
                    windowDimensions={windowDimensions}
                    buttonClick_Handler={buttonClick_Handler}
                    Y_position_Percentage={Y_position_Percentage}
                />
            </section>

            <section ref={about_Ref} style={{ height: '100vh' }}>
                <About
                    goTo_Home={goTo_Home}
                    pathLength={pathLength}
                    landscape_Mode={landscape_Mode}
                    transition_Time={transition_Time}
                    windowDimensions={windowDimensions}
                    Y_position_Percentage={Y_position_Percentage}
                />
            </section>


            <section ref={pro_Ref} style={{ backgroundColor:theme.palette.tertiary.background , height: '100vh', margin: 0 }}>
               
                <div>pro</div>

            </section>


            <Menu
                Y_position_Percentage={Y_position_Percentage}
                windowDimensions={windowDimensions}
                scrollYProgress={scrollYProgress}
                goTo_Home={goTo_Home}
                goTo_About={goTo_About}
                goTo_Pro={goTo_Pro}
            />
        </div>
    )
}

export default Index


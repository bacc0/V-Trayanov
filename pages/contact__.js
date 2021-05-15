import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import Link  from '../src/_Link' 
// import Link from 'next/link'

import { motion } from 'framer-motion'


export default function Home() {

    const router = useRouter()
    const page = router.query.pageName

    const [scroll_Y, setScroll_Y] = useState(0)

    useEffect(() => {
		const onScroll = () => {
			const scrolled = window.scrollY

            setScroll_Y(scrolled)
		}
		window.addEventListener('scroll', onScroll)
	}, [])

    const ddd = () => {
        router.push('/')
        console.log(9)
    }

    useEffect(() => {

        if (scroll_Y > 0) {
            console.log('Down', scroll_Y)

        }
        if (scroll_Y < 0) {
            console.log('up', scroll_Y)
            ddd()
        }

    }, [scroll_Y]);

    // console.log('ABOUT --- router; ', router, ' ', 'page ; ', router.route)
    return (
        <motion.div
            initial={{ opacity: 1, scale: 1, y: `-100vh` }}
            animate={{ opacity: 1, scale: 1, y: `0vh`  }}
            transition={{ ease: "easeOut", duration: 0.2, delay: 0 }}

            exit={{ opacity: 1,  y: `100vh`  }}
            // initial={{ x: 300, opacity: 0 }}
            //                   animate={{ x: 0, opacity: 1 }}

            //                   exit={{ x: -300, opacity: 0 }}
                >
                <div className={styles.container} style={{ 
                    // background: 'lightgreen' 
                    }}>
                    <Head>
                        <title>Contact</title>

                    </Head>

                    <main className={styles.main}>
                        <h1 className={styles.title}>
                        Contact
                </h1>
                <Link href="/">
                <a>Home</a>
                </Link>

                        <p className={styles.description}>
                            Get started by editing{' '}
                            <code className={styles.code}>pages/index.js</code>
                        </p>


                    </main>

                    <footer className={styles.footer}>

                    </footer>
                </div>
        </motion.div>   
    )
}

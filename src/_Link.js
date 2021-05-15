import React, {useState} from 'react'
import Link              from 'next/link'
import { useRouter }     from 'next/router'

// import { AnimatePresence } from "framer-motion"


export default ({ href, children }) => {
	const router = useRouter()

	// alert()

	let className = children.props.className || ''

	if ( 				   router.pathname === href ||  
				 '/' + router.query.pageName === href ||
		 (href=== '/' && router.query.pageName === "home")) {
		className = `${className} selected`
	}
	// console.warn('Router Pathname : ', router);
	// console.log('Router Query Title : ',  router.query.pageName);

	return   	<Link href={href}>
				{ React.cloneElement(children, { className }) }
			</Link>
		 
}



import Link from './_Link'
const Layout = ({ children }) => {

    return (
        <div className="content">
            <nav style={{ position: 'fixed',zIndex: 5}}>
			
               {/* <Link href="/">
                    <a>Home</a>
               </Link> */}
               
               <style jsx>
					{`
						.selected{
							color: '#fffaaa';
							backgroundColor:'green';
						}
						.selected:hover { 
							color:'lime' 
                              };
						.selected:active { 
							color:'#fff';
						}
					`}
				</style>
            </nav>
                { children}
            {/* <Footer footerPages={footerPages} /> */}
        </div>
    )
}

export default Layout
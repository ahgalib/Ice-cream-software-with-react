import React from 'react';
import footerClass from './Footer.module.css';

const Footer = () =>  {
    return(
        <footer>
            <div className={['container',footerClass.container].join(' ')}>
                <div>Copyright issu @2022 ..all right reserved</div>
            </div>  
            <div className={['container',footerClass.container].join(' ')}>
                Built with <span>create react app</span>
            </div>
        </footer>
    )
}
export default Footer;
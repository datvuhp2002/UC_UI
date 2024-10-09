"use client"
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import BootStrapIcon from '@/modules/common/components/bootstrap-icon'
const FooterExt = () => {
    const [visible, setVisible] = useState(false)
  
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
      }, []);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    return (
        <>
            <a className={styles["fe-scroll-top"]} onClick={scrollToTop}>
                <BootStrapIcon style={{display: visible ? 'inline' : 'none'}} iconName='ArrowUpCircleFill' />
            </a>
        </>
    )
}
export default FooterExt;
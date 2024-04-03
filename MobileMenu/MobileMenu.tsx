import { FC } from 'react'
import styles from './MobileMenu.module.scss'
import { IMobileMenu, IMobileMenuLink } from './interface'
import { Link } from 'react-router-dom'

const MobileMenuLink: FC<IMobileMenu> = ({link, text }) => {
    return (   
        <Link to={link} >            
                <span>{text}</span>            
        </Link>
    )
}

export const MobileMenu: FC<IMobileMenuLink> = ({ menuMobileLink }) => {
    return (
        <ul className={styles["menu-list"]}>
            {menuMobileLink.map(({id, link,  text}) => (
                <li key={id} className={styles["menu-item"]}>
                    <MobileMenuLink  text={text} link={link}/>
                </li>
            ))}
        </ul>
    )
}
import  { FC } from "react"
import styles from"./MobileMenu.module.scss"
import userDefault from "../../../assets/icons/landing/userDefault.svg"
import { MobileMenu } from "./MobileMenu"
import { useAuthSuccess } from "../../../hooks/useAuthSuccess"
import { UserRole } from "../../../types/auth/userRole"

interface menuActive {
    active: boolean;
    setActive:any;
}

const MobileMenuM: FC<menuActive> = ({active, setActive}) => {
    const menuMobileLink =[
       { id: 1, text: "Список докторов", link: "#"},
       { id: 2, text: "Список процедур", link: "#"},
       { id: 3, text: "Список того ", link: "#"},
       { id: 4, text: "О чем-нибудь ", link: "#"},
       { id: 5, text: "Список сосисок ", link: "#"},
       { id: 6, text: "Контакты", link: "#"},
       { id: 7, text: "О нас", link: "#"},
       { id: 8, text: "Форум", link: "#"},        
     ]
    const { isAuthenticated } = useAuthSuccess();
    const {logout, userRole} = useAuthSuccess();   

    const tolowerCase = (word: string): string => {
        const lowerCaseWord = word[0] + word.slice(1).toLowerCase();
        return lowerCaseWord;
    };

    return (
        <>   
        <div className={ `${styles["menu-mobile"]} ${
				!active ? "" : styles["active"]
			}`}>
            <div className={styles["menu-container"]}>
                <div className={styles["menu-header"]}>
                    <button className={styles["btn-menu_back"]} 
                    onClick={() => setActive(!active)}>назад</button>
                    <div className={styles["profile-container"]}>
                        <div className={styles["profile-img"]}>
                            <img className={styles["img-profile"]} src={userDefault} alt="profile"/>
                        </div>
                        <span className={styles["profile-name"]}>
                            {userRole ? tolowerCase(userRole) : UserRole.UNVERIFIED_CLIENT}
                        </span>
                    </div>
                </div>
                <div className={styles["menu"]}>
                    <MobileMenu menuMobileLink={menuMobileLink} />   
                </div>
                <div className={styles["menu-footer"]} >
                    {isAuthenticated ? <button className={styles["exit-btn"]} onClick={() => logout()}>Выйти</button> : ''}
                </div>
			</div>
        </div>
    </>
        )
    
}

export default MobileMenuM
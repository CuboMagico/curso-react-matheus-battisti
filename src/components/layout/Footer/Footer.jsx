import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <ul className={`${styles.social_list}`}>
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/maciel-suassuna-85b9b4209/"><FaLinkedin/></a></li>
            </ul>
            <p className={`${styles.copy_right}`}><span>Maciel & Costs</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer
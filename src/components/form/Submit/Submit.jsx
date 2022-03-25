import styles from "./Submit.module.css"

const Submit = ({ text }) => {
    return (
        <div>
            <input value={text} className={`${styles.btn}`} type="submit" />
        </div>
    )
}

export default Submit
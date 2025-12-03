import { MdMessage } from "react-icons/md";
import styles from './Buttons.module.css'
const Buttons = ({text, icon}) => {
  return (
    <button className={styles.primary_btn}>
        <MdMessage fontSize='24px'/>
        {text}
    </button>
  )
}

export default Buttons
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

import styles from './Buttons.module.css'
const Buttons = ({text, icon}) => {
  return (
    <button className={styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Buttons
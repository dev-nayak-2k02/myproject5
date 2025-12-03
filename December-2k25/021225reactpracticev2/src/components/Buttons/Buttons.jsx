import { MdMessage } from "react-icons/md";
import styles from './Buttons.module.css'
const Buttons = ({props}) => {
  return (
    <div className={styles.primary_btn}>
        <MdMessage fontSize='24px'/>
        {props.text}
    </div>
  )
}

export default Buttons
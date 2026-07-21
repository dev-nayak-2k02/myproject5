import Styles from '../src/Display.module.css'
const Display = (props) =>{
    return(
        <>
            <div className={Styles.display}>
                the count is {props.count}
            </div>
        </>
    )
}

export default Display;
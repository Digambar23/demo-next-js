import React from 'react'
import styles from './style.module.css'
function Button(props) {
  return (
    <button className={`${styles.btn} ${styles[`btn_${props.shades}`]}`} onClick={props.onClickEvent}>{props.label}</button>
  )
}
Button.defaultProps = {
    label: 'Click Me'
}
export default Button;
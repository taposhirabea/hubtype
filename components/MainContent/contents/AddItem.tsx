import React from 'react'
import styles from '../main.module.css'
import { Add} from '@mui/icons-material'

export default function AddItem() {
  return (
    <div className={styles.frame_441}>
        <Add className={styles.icon}/>
        <p className={styles.add_text}>新規作成</p>
    </div>
  )
}

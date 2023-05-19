import React from 'react'
import styles from  '../main.module.css'
import { TextField } from '@mui/material'

export default function Breadcrumb() {
  return (
    <article className={styles.breadcrumb}>
        <div className={styles.group_156}>
            <div className={styles.frame_156}>
            {/* <TextField id="filled-basic" className={styles.text} label="ハブ管理ページ"  /> */}
            <p className={styles.text}>ハブ管理ページ</p>
            </div>
        </div>
    </article>
  )
}

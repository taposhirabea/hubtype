import React from 'react'
import styles from  '../main.module.css'
import List from './List'
import { Box, Grid, } from '@mui/material'
import Pagination from './Paginations'
import AddItem from './AddItem'

export default function Frame439() {
  return (
    <article className={styles.frame_439}>
      <div className={styles.group_158}>
        <p className={styles.frame_text2}>ハブ一覧</p>
        <p className={styles.frame_text1}>あなたが管理中、管理チームメンバーとなっているハブ一覧です。</p>
      </div>

      <div style={{border: '1px solid red'}}  className={styles.box}>
        {/* <div className={styles.pp}> */}
        <AddItem/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
      
      <div className={styles.frame_174}>
        <Pagination/>
      </div>      
    </article>
  )
}

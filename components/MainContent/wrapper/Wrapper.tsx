import React from 'react'
import styles from './Wrapper.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Input, Paper, IconButton, InputBase } from '@mui/material'
import Information  from './information';

export default function Wrapper() {
  return (
    <article className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <div className={styles.frame_167}>
                        <div className={styles.frame_158}>
                            <p className={styles.frame_158_text}>購読しているハブ一覧</p>
                        </div>
                        <div className={styles.devider}></div>
                        <p className={styles.frame_167_text}>あなたが購読しているハブの一覧です。</p>
                    </div>
                    <div className={styles.frame_105}>
                        <div className={styles.frame_173}>
                            <Paper 
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', boxShadow: 'none', alignItems: 'center', width: 257, height: 48, borderRadius: '12px', backgroundColor: '#FAFAFA;' }}
                            >
                            <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
                                <SearchIcon style={{fontSize: '16px'}}/>
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, marginLeft: '0px' }}
                                placeholder="検索する"
                                style={{color: '#616161'}}
                                inputProps={{ 'aria-label': '検索する'}}
                            />
                            
                            
                            </Paper>
                        </div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.frame_637}>
                            {/* <div className={styles.frame_121}></div> */}
                            <Information/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

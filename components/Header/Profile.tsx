import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import account from '../../images/account-circle.png'
import { AccountCircle, SettingsOutlined  } from '@mui/icons-material';
import Link from 'next/link';


export default function Profile() {
  return (
    <article className={styles.profile}>
        {/* <Image src={account} alt=''/> */}
        {/* <div className={styles.nn}>
        <AccountCircle sx={{color: '#36449B'}} className={styles.account}/>
        <Settings sx={{color: '#36449B'}} className={styles.gear}/>
        </div> */}
        <ul className={styles.nn}>
            <li >
                <Link href='/'><AccountCircle sx={{color: '#36449B'}}/></Link>
            </li>
            <li >
                <Link href='/'><SettingsOutlined sx={{color: '#36449B'}} /></Link>
            </li>
        </ul>
    </article>
  )
}

import React from 'react'
import styles from './Header.module.css'
import Group154 from './Group154'
import Profile from './Profile'

export default function Header() {
  return (
    <article className={styles.header}>
      <Group154/>
      <Profile/>
    </article>
  )
}

import React from 'react'
import { Box, ListItemText } from '@mui/material';

import Image from 'next/image';
import styles from './Sidebar.module.css'

import earth1 from '../../images/Earth1.png'
import earth2 from '../../images/Earth2.png'

export default function ListItems() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <article>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
          <div>
          <div className={styles.list1}
          // selected={selectedIndex === 0}
          // onClick={(event) => handleListItemClick(event, 0)}
        >
          {/* <ListItemIcon className={styles.new}>
            <Image src={earth1} alt='' className={styles.earth1}/>
          </ListItemIcon> */}
          <Image src={earth1} alt='' className={styles.earth1}/>
          <ListItemText primary="ハブ" className={styles.text1}/>
         
        </div>
        <div className={styles.list2}
          // selected={selectedIndex === 1}
          // onClick={(event) => handleListItemClick(event, 1)}
        >
          {/* <ListItemIcon className={styles.new}>
          <Image src={earth2} alt='' className={styles.earth2}/>
          </ListItemIcon> */}
          <Image src={earth2} alt='' className={styles.earth2}/>
          <ListItemText primary="ニュースアセット" className={styles.text2} />

        </div>
        </div>
        </Box>
    </article>
  )
}

import React from 'react'
import { Box, Grid, } from '@mui/material'
import styles from './List.module.css'
import Image from 'next/image'
import image16 from '../../../images/image16.png'
import menu from '../../../images/open-in-new.png'

export default function List() {
  return (
    <article className={styles.frame_159}>
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <div className={styles.info2}>
                  <div className={styles.frame_662}>
                    {/* <Image src={image16} alt='' className={styles.image16} /> */}
                    <div className={styles.image16} ></div>
                    <p className={styles.text16}>ハブ名称ハブ名称ハ…</p>
                  </div>

                  <div className={styles.contact_info}>
                    <div className={styles.email}>
                      <p className={styles.email_text1}>メンバー</p>
                      <p className={styles.email_text2}>1,542人</p>
                    </div>

                    <div className={styles.phonelocation1}>
                      <div className={styles.phone}>
                        <p className={styles.phone_text1}>公開範囲</p>
                        <p className={styles.phone_text2}>一般公開</p>
                      </div>
                      <div className={styles.location}>
                        <p className={styles.location_text1}>接続アセット数</p>
                        <p className={styles.location_text2}>8</p>
                      </div>
                    </div>

                    <div className={styles.phonelocation2}>
                      <div className={styles.phone2}>
                        <p className={styles.phone_text}>カテゴリー</p>
                        <div className={styles.frame_440}>
                          <div className={styles.badge1}>
                            <p className={styles.badge1_text}>カテゴリ1</p>
                          </div>
                          <div className={styles.badge2}>
                            <p className={styles.badge2_text}>カテゴリゴリゴリゴリ2</p>
                          </div>
                        </div>

                        <div className={styles.frame_441}>
                          <div className={styles.frame441_bedge1}>
                            <p className={styles.frame441_bedge1_text}>カテゴリ3</p>
                          </div>
                          <div className={styles.frame441_bedge2}>
                            <p className={styles.frame441_bedge2_text}>カテゴリ4</p>
                          </div>
                          <div className={styles.frame441_bedge3}>
                            <p className={styles.frame441_bedge3_text}>...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.menu}>
                  <Image src={menu} alt='' className={styles.img_menu} />
                </div>
              </div>
            </div>
    </article>
  )
}

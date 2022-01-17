import React from 'react'
import styles from './index.less'
import {Input, Button, Carousel} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.recommend}>
          <div className={styles.recommend__title}>
            <span className={styles.recommend__title__name}>
              猜你喜欢
            </span>
            <span className={styles.recommend__title__desc}>为你甄选最合适的</span>
          </div>
          <div className={styles.recommend__list}>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home

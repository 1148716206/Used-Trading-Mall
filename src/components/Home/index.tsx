import React, {useEffect, useState} from 'react'
import styles from './index.less'
import request from '@/http';
import {Input, Button, Carousel} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

const Home = () => {
  const [imagesData,setImagesData] = useState()

  const loadDataSource = async () => {
    const result: any = await request.get('api/getGoodsInfo')
    console.log('result',result.data.msg[0].address)
    setImagesData( result.data.msg[0].address)
  };

  useEffect(() => {
    loadDataSource()
  }, [])
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
            <img src={imagesData} alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home

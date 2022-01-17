import React from 'react'
import {Layout, Button, Carousel} from 'antd';
import styles from './index.less'
import Header from './Header'
import Footer from './Footer'

const Index = (props:any) => {
  return (
    <div className={styles.wrapper}>
      <Layout className="layout">
        <Header/>
        <div >
          {props.children}
        </div>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Index

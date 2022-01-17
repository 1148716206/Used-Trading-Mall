import React from 'react'
import styles from './Footer.less'
import {Layout} from 'antd';

const {Footer} = Layout;

const Index = () => {

  return (
    <Footer>
      <div className={styles.MD_footer} id="bgC">
        <div className={styles.MD_footer_inner}>
          <div className={styles.MD_footer_inner_map}>
            <h3>交易指南</h3>
            <ul>
            123
            </ul>
          </div>
          <div className={styles.MD_footer_inner_map}>
            <h3>会员服务</h3>
          </div>
          <div className={styles.MD_footer_inner_map}>
            <h3>关于优信拍</h3>
          </div>
          <div className="MD-widget-footer-plats">
            <h3>优信拍官方客服<span className="c-org">1010-1088</span></h3>
            <p>周一至周日 9:00-18:00</p>
            <div>123</div>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Index

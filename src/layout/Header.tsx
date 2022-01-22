import React, {Fragment} from 'react'
import styles from './Header.less'
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {SearchOutlined} from "@ant-design/icons";

const {Header} = Layout;
const Index = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header_top__content}>
          <div className={styles.nav}>
            <Link to='/home'>首页</Link>
            <Link to='/trade'>交易大厅</Link>
            <Link to='/index'>购物车</Link>
          </div>
          <div className={styles.desc}>
            <span className={styles.desc__login}>你好，请登录</span>
            <span className={styles.desc__register}>免费注册</span>
            <span>咨询热线：17602382858（9:00-18：00）</span>
          </div>

        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.search_img_box}>
          <a href="//bj.meituan.com">
            <img src="//s0.meituan.net/bs/fe-web-meituan/87a1b8e/img/logo.png" alt="美团"/>
          </a>
        </div>
        <div className={styles.search_search_box}>
          <div className={styles.block}>
            <input/>
            <button>
              <SearchOutlined/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

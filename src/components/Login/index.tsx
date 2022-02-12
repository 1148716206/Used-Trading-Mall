import React from 'react'
import {useState} from "react";
import {Link,useHistory} from 'react-router-dom';
import styles from './index.less'
import { Input, Button, Tabs, Form, message } from 'antd';
const { TabPane } = Tabs;
const FormItem = Form.Item;
import { ExclamationCircleOutlined } from '@ant-design/icons';


const login = () => {
  const [data,setData] = useState(1)
  const activeKey = this.props.location.search
  return (
    <div className={styles.login_body}>
      <div className={styles.login_content}>
        <div className={styles.login_panel}>
          <h1 className={styles.login_title}>登录</h1>
          <Tabs
            defaultActiveKey={activeKey || 'style'}
          >
            <TabPane
              tab="密码登录"
              key="password"
            >
              <Form className={styles.login_form}>
                <FormItem name="name">
                  <Input placeholder="账号" className={styles.login_form_input} />
                </FormItem>
                <FormItem name="password">
                  <Input type="password" placeholder="密码" className={styles.login_form_input}/>
                </FormItem>
                <FormItem style={{ marginBottom: 10 }}>
                  <Button type="primary" className={'login-form-button kxy'}>登录</Button>
                  <Button type="link" style={{float: "right"}} >忘记密码？</Button>
                </FormItem>

              </Form>
            </TabPane>
            <TabPane
              tab="快速注册"
              key="register"
            >
              <Form className={styles.login_form}>
                <FormItem name="name">
                  <Input placeholder="账号" className={styles.login_form_input} />
                </FormItem>
                <FormItem name="nickName">
                  <Input placeholder="昵称" className={styles.login_form_input} />
                </FormItem>
                <FormItem name="password">
                  <Input type="password" placeholder="密码" className={styles.login_form_input}/>
                </FormItem>
                <FormItem style={{ marginBottom: 10 }}>
                  <Button type="primary" className={'login-form-button kxy'}>注册</Button>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </div>
    </div>
    </div>
  )
}
export default login

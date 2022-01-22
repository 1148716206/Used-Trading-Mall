import React, {useEffect, useState} from 'react'
import styles from './index.less'
import request from '@/http';
import { Link } from 'react-router-dom'
import {Input, Button,Upload, Carousel,Modal,message} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
const { Dragger } = Upload;
import { PlusOutlined } from '@ant-design/icons';
const Home = () => {
  const [editShow, setEditShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [managerInfoModal, setManagerInfoModal] = useState({ avatar: '' });
  const [updateLoading, setUpdateLoading] = useState(false);


  const [goodsList, setGoodsList] = useState([])

  const getGoodsList = async () => {
    const result: any = await request.get('api/getGoodsInfo')

    console.log('result', result.data.data)
    setGoodsList(result.data.data)
  };

  useEffect(() => {
    getGoodsList()
  }, [])


  const checkPicUpload = (file: any) => {
    if (!~['image/jpg', 'image/png', 'image/gif', 'image/jpeg'].indexOf(file.type)) {
      message.error('上传图片格式错误');
      return false;
    }

    if (file.size > 4 * 1024 * 1024) {
      message.error('上传图片大小超过 4MB');
      return false;
    }
    console.log('file',file)
    let formData = new FormData()
    formData.append('images', file)
    const result: any =  request.post('api/uploadGoodsImg', formData,{ headers: { 'content-type': 'multipart/form-data' } },)
    console.log(result)
/*    return new Promise(
      (resolve, reject) => dispatch({
        type: 'GET_UPLOAD_ACTIVITY',
        resolve,
        reject,
        id: activityId,
      })).then(() => {})
      .catch(e => message.error(e));*/
  };

  // @ts-ignore
  const hasPicUpload = ({ file }) => {
    if (file.status === 'error') {
      message.error('图片上传失败');
    }
    if (file.status === 'done') {
      message.success('图片上传成功');
      // setManagerInfoModal({
      //   avatar: `${formAction.filepath}${file.response.url}`,
      // });
    }
  };

  const nicknameChange = (e:any) => {
    // setManagerInfoModal({
    //   ...managerInfoModal,
    //   nickname: e.target.value,
    // });
  };

  const toggleManagerInfoModal = (val: boolean) => {
    if (val) {
      setManagerInfoModal({
        ...managerInfoModal,
      });
    } else {
      setManagerInfoModal({
        ...managerInfoModal,
        avatar: '',
      });
    }


    setEditShow(false);
  };

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
            {
              goodsList ? goodsList.map((item: any) => (
                <Link to={{ pathname: '/detail', query: { key: 'xxx' } }} >
                  <div className={styles.goods}>
                    <div>
                      <img src={item.address} alt=""/>
                    </div>
                    <div className={styles.product_info}>
                      <p className={styles.product_info__title}>
                        自由港湾，智能自主入住湖景房
                      </p>
                      <p className={styles.product_info__new_price}>
                      <span className={styles.price_icon}>
                        ￥
                      </span>
                        {item.newPrice}
                        <span className={styles.product_info__old_price}>
                        <span className={styles.price_icon}>
                          ￥
                        </span>
                          {item.oldPrice}
                      </span>
                      </p>
                    </div>
                  </div>
                </Link>
              )) : null
            }
          </div>
        </div>
        <Button onClick={() => {
          setEditShow(true)
        }}>上传图片</Button>
      </div>
      <Modal
        visible={editShow}
        onCancel={() => setEditShow(false)}
        title="添加商品信息"
        width={450}
        footer={null}
      >
        <div className={styles.edit_box}>
          <div className={styles.edit_box_line}>
            <span className={styles.tt}>图片:</span>
            <span className={styles.ct}>
                <Dragger
                  name="file"
                  // headers={{
                  //   'X-Requested-With': null,
                  // }}
                  beforeUpload={checkPicUpload}
                  showUploadList={false}
                  onChange={hasPicUpload}
                >
                    {
                      managerInfoModal.avatar ?
                        <img
                          style={{
                            width: 68,
                            height: 68,
                            position: 'relative',
                            top: 3,
                            borderRadius: 3
                          }}
                          role="presentation"
                          src={managerInfoModal.avatar}
                        />
                        :
                        <PlusOutlined/>
                    }
                </Dragger>
                <p className={styles.tip}>建议上传的尺寸为 68*68 px<br/>支持 jpg/png/gif, 3MB以内</p>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.tt} style={{verticalAlign: 'middle'}}>描述:</span>
            <span className={styles.ct}>
            <Input
              style={{width: 200, marginRight: 10}}
              // value={managerInfoModal.nickname}
              // onChange={nicknameChange}
            />
            <span>2-10 个字符以内</span>
        </span>
          </div>
          <div style={{textAlign: 'right'}}>
            <Button
              style={{marginRight: 10}}
              onClick={() => toggleManagerInfoModal(true)}
            >取消</Button>
            <Button type="primary" onClick={() => toggleManagerInfoModal(true)}>确定</Button>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Home

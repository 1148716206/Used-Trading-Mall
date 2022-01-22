import React from 'react'
import styles from './index.less'

const Detail = () => {

  return (
    <div className={styles.banner}>
        <div className={`${styles.wrapper} ${styles.clearfix}`}>
          <div className={styles.celeInfo_left}>
            <div className={styles.avatar_shadow}>
              <img className={styles.avatar}
                   src="https://p1.meituan.net/movie/c5550a2059c3d41a30b80e79548625754013145.jpg@464w_644h_1e_1c"
                   alt="汪汪队立大功大电影海报封面"/>
              <div className={styles.movie_ver}/>
            </div>
          </div>
          <div className={`${styles.celeInfo_right} ${styles.clearfix}`}>
            <div className={styles.movie_brief_container}>
              <h1 className={styles.name}>汪汪队立大功大电影</h1>
              <div className={`${styles.ename} ${styles.ellipsis}`}>Paw Patrol: The Movie</div>
              <ul>
                <li className={styles.ellipsis}>
                  <a className={styles.text_link} href="/films?catId=4" target="_blank"> 动画 </a>
                  <a className={styles.text_link} href="/films?catId=2" target="_blank"> 喜剧 </a>
                  <a className={styles.text_link} href="/films?catId=9" target="_blank"> 冒险 </a>
                </li>
                <li className={styles.ellipsis}>
                  美国,加拿大
                  / 86分钟
                </li>
                <li className={styles.ellipsis}>2022-01-14 09:00中国大陆上映</li>
              </ul>
            </div>
            <div className={styles.action_buyBtn}>
              <div className={`${styles.action} ${styles.clearfix}`} data-val="{movieid:1328669}">
                <a className="wish " data-wish="false" data-score="" data-bid="b_gbxqtw6x">
                  <div>
                    <i className="icon wish-icon"/>
                    <span className="wish-msg" data-act="wish-click">想看</span>
                  </div>
                </a>
                <a className="score-btn " data-bid="b_rxxpcgwd">
                  <div>
                    <i className="icon score-btn-icon"/>
                    <span className="score-btn-msg" data-act="comment-open-click">
                评分
            </span>
                  </div>
                </a>
              </div>
              <a className="btn buy" href="/cinemas?movieId=1328669" target="_blank">特惠购票</a>
            </div>

            <div className="movie-stats-container">

              <div className="movie-index">
                <p className="movie-index-title">猫眼口碑</p>
                <div className="movie-index-content score normal-score">
              <span className="index-left info-num ">
                <span className="stonefont">.</span>
              </span>
                  <div className="index-right">
                    <div className="star-wrapper">
                      <div className="star-on" style={{"width":"92%"}} />
                    </div>
                    <span className="score-num"><span className="stonefont"></span>人评分</span>
                  </div>
                </div>
              </div>


              <div className="movie-index">
                <p className="movie-index-title">累计票房</p>
                <div className="movie-index-content box">
                  <span className="stonefont"></span><span className="unit">万</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Detail

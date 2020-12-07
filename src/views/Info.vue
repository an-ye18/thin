<template>
  <div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/img/1.png" class="doll" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/2.png" class="doll" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="记录">
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/3.jpg" class="img3" />
            </span>
            <span> <span class="gray">奶茶小丸子</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/4.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 15
              <van-icon name="chat" color="#a7a7a7" /> 12
              <van-icon name="eye" color="#a7a7a7" /> 230
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/7.jpg" class="img3" />
            </span>
            <span> <span class="gray">囡囡</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/6.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/8.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/8.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/16.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/16.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/17.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/17.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/18.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/18.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/19.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/19.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/3.jpg" class="img3" />
            </span>
            <span> <span class="gray">奶茶小丸子</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/4.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 15
              <van-icon name="chat" color="#a7a7a7" /> 12
              <van-icon name="eye" color="#a7a7a7" /> 230
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/7.jpg" class="img3" />
            </span>
            <span> <span class="gray">囡囡</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/6.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/8.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/8.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/16.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/16.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/17.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/17.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/18.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/18.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
          <div class="tab1">
            <span>
              <img width="35rem" src="../assets/img/19.jpg" class="img3" />
            </span>
            <span> <span class="gray">憨憨</span><br />打卡 </span>
            <span class="gray">
              <span @click="showShare = true">分享</span>
              <van-share-sheet
                v-model="showShare"
                :options="options"
                @select="onSelect"
              />
            </span>
          </div>
          <div class="tab1-1">
            <span></span>
            <span><img src="../assets/img/19.jpg" width="150rem" /></span>
            <p>
              <van-icon name="good-job" color="#a7a7a7" /> 5
              <van-icon name="chat" color="#a7a7a7" /> 8
              <van-icon name="eye" color="#a7a7a7" /> 123
            </p>
          </div>
        </van-tab>
        <van-tab title="推荐">
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/6.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 背着书包闯天下</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/9.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/7.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 佳佳</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/10.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/8.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 铭铭</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/11.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/6.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 背着书包闯天下</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/9.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/7.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 佳佳</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/10.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/8.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 铭铭</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/11.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/6.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 背着书包闯天下</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/9.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/7.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 佳佳</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/10.jpg" width="100rem" />
              </div>
            </div>
          </div>
          <div class="tabTwo">
            <div class="tab2">
              <span>
                <img src="../assets/img/8.jpg" width="30rem" class="img3" />
              </span>
              <span style="padding-top: 1rem"> 铭铭</span>
            </div>
            <div class="tab2-1">
              <div>
                <p>减重45斤，瘦下来的我变得自信了，我的瘦身秘...</p>
                <p>
                  我是来自青岛的顾客，今年30岁的我，因为肥胖变得
                  不自信，工作不顺心，而且还患上了高血压、...
                  <br />
                  <span class="color">40</span> 点赞 ·
                  <span class="color">1</span> 评论 ·
                  <span class="color">112</span> 阅读 ·
                  <span class="color">20</span> 分享
                </p>
              </div>
              <div>
                <img src="../assets/img/11.jpg" width="100rem" />
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="知识">
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font"><van-icon name="coupon-o" /> 饮食误区</div>
            <p>
              <img src="../assets/img/12.jpg" width="375rem" height="200rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/13.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/14.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font"><van-icon name="coupon-o" /> 饮食误区</div>
            <p>
              <img src="../assets/img/12.jpg" width="375rem" height="200rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥总失败，5个骗人的方法别再上当了......</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/13.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥PK，这三种减肥方法，哪种瘦的更快</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/14.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font"><van-icon name="coupon-o" /> 饮食误区</div>
            <p>
              <img src="../assets/img/12.jpg" width="375rem" height="200rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/13.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
          <div class="tab3">
            <div>减肥不能吃肉？错！这几种肉让你越吃越瘦！</div>
            <div class="color font">
              <van-icon name="coupon-o" /> 饮食误区 运动误区
            </div>
            <p>
              <img src="../assets/img/14.jpg" width="375rem" height="180rem" />
            </p>
            <p class="font gray">
              <span class="color">600</span> 点赞 ·
              <span class="color">800</span> 推荐 ·
              <span class="color">9k+</span> 阅读数
            </p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.doll {
  width: 23.5rem;
  height: 10.5rem;
}
.my-swipe .van-swipe-item {
  text-align: center;
  height: 10.5rem;
}
.img3 {
  border-radius: 1rem;
}
.tab1 {
  font-size: 0.5rem;
  line-height: 1.2rem;
  display: flex;
  padding: 1rem 0 0 1rem;
}
.tab1 > span:nth-of-type(1) {
  flex: 1;
}
.tab1 > span:nth-of-type(2) {
  flex: 5;
}
.tab1 > span:nth-of-type(3) {
  flex: 1;
}
.gray {
  color: #a7a7a7;
}
.tab1-1 {
  padding: 0.5rem 0 0 4.2rem;
  font-size: 0.5rem;
  border-bottom: 0.8rem solid #f2f3f5;
}
.tab1-1 p i:nth-of-type(1) ~ i {
  padding-left: 1rem;
}
.tabTwo {
  border-bottom: 0.8rem solid #f2f3f5;
}
.tab2 {
  font-size: 0.6rem;
  display: flex;
  padding: 1rem 0 0 0.7rem;
}
.tab2 > span:nth-of-type(1) {
  text-align: center;
  flex: 1;
}
.tab2 > span:nth-of-type(2) {
  color: gray;
  flex: 8;
}
.tab2-1 {
  display: flex;
  margin: 1rem;
}
.tab2-1 > div:nth-of-type(1) {
  flex: 1.9;
}
.tab2-1 > div:nth-of-type(1) p:nth-of-type(1) {
  margin-top: 0.1rem;
}
.tab2-1 > div:nth-of-type(1) p:nth-of-type(2) {
  margin-top: -0.5rem;
  font-size: 0.5rem;
  color: gray;
}
.tab2-1 > div:nth-of-type(2) {
  flex: 1;
  padding-left: 1rem;
}
.color {
  color: #6bd4bc;
}
.font {
  font-size: 0.6rem;
}
.tab3 {
  border-bottom: 0.8rem solid #f2f3f5;
}
.tab3 > div {
  padding: 1rem 0 0 1rem;
}
.tab3 > p:nth-of-type(2) {
  padding-left: 1rem;
}
</style>
<style>
/* tab切换样式 */
.van-tabs__line {
  background-color: #6bd4bc;
}
.van-tab--active {
  color: #6bd4bc;
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      active: 0,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
    };
  },
};
</script>
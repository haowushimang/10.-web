## 总结

1. 字体图标的使用和生成字体图标
2. css预处理器的概念
3. less预处理器的编译和使用
4. less预处理器的语法
5. 使用less实现头部样式
6. 使用less实现导航条样式
7. 轮播图的响应式切换
8. 支付交易保障栅格系统和媒体对象的使用

## 字体图标

    1. 什么是字体图标： 把一些图标打包到一个字体文件里面  通过特定编码来表示对应图标
    2. 使用字体图标
        1. 使用系统自带的图标 就使用图标对应字体 再使用图标的编码即可
        2. 使用bootstrap 引入bootstrap 使用对应类名即可 <i class="glyphicon glyphicon-phone"></i>
        3. 使用自己打包的字体图标

    3. 如何去生成自己的字体图标
        1. 有矢量图片 svg图片
        2. 拿到svg图标后你要把图标打包到一个字体文件里面
        3. 打开阿里图标库官网 http://www.iconfont.cn/
        4. 登录
        5. 点击上面图标管理 》 点击我的图标
        6. 右侧有一个  搜索框右边的带有上传样式的按钮点击这个按钮上传
        7. 点击上传选择你要上传的文件
        8. 点击底部保存 或者去除颜色保存
        9. 把所有图标加入购物车
        10. 点击购物去下载图标
        11. 点击下载代码（帮你创建一个字体 写一个demo帮你使用字体图标）

    4. 下载好图标后  里面包含的内容解析
        1. 创建了4个字体文件（打包了你的所有图标）  eot svg ttf woff 4种格式的字体文件
        2. 创建了一个iconfont.css文件 去创建一个属于你的字体
          定义一个字体  字体名称就是iconfont
          @font-face {
            font-family: "iconfont";
            /*还要指定src字体文件的路径*/ 
            /*如果要兼容不同浏览器就要引入多个字体文件
            同时要format声明这个字体文件的类型*/
            src:url('iconfont.ttf?t=1535163749373') format('truetype');
          }
        2. 使用字体
          /*公共类 来使用图标字体*/
          .iconfont {
            font-family:"weijinsuo" !important;
            font-size:16px;
            font-style:normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        3. 使用图标的编码
            .icon-staroff:before { content: "\e618"; }
    5. 最终在项目使用图标
        1.  引入你定义字体文件 和图标类名的文件
        2.  保证字体文件要能够被CSS读取
        3.  页面中只要引入 iconfont.css 
        4.  使用对应类名即可


## 使用微金所的图标

    1. 把微金所 图标的字体文件复制到项目里面
    2. 复制里面font.css文件 定义微金所的字体 使用微金所字体 定义微金所图标的类名  直接把微金所完整版的css文件夹复制到项目里面
    3. 把css里面font.css引入到主页
    4. 在主页里面直接使用图标的类名（类名直接从完整版检查元素看）



## CSS的预处理器

    1. 什么CSS预处理器（预编译器）： 提前写好一些特定的高级的CSS代码 通过一些编译方式编译成普通浏览器能够识别的CSS
    2. 为什么要有CSS预处理器： 因为CSS写代码方式很繁琐 冗余 不利于维护和扩展 因为CSS没有逻辑性 无法实现定义变量 函数 循环 判断 
    3. CSS预处理器 就是为了让CSS更加富有逻辑性 让CSS代码更加利于维护扩展 写起来更简单快捷

## 常见的CSS预处理器

    1. less
    2. sass
    3. stylus

## (less预处理器)[http://lesscss.org]

    1. 如何创建less文件   后缀名.less  创建一个less文件 demo.less
    2. 如何引入less
    3. 如何让less文件工作
    4. less.js的工作原理
        1. 在less.js里面去使用XMLHtttpRequest 发送ajax请求
        2. 请求当前less文件 请求demo.less文件
        3. 在file协议是不能发送这种请求 要使用服务器 localhost
        4. 请求到了demo.less文件 通过特定编译方式 把demo.less里面的代码编译普通的CSS
        5. 把普通的CSS通过内联样式的方式添加到页面 
    5. 开启网页服务器方式
        1. sublime 使用sublimserver  点击工具 》 sublimeserver > start sublimeserver > 右键open in sublimeserver
        2. vscode open with live server   安装 live server插件 在html 右键 Open with live server
        3. 使用php study 把 weijinsuo项目放到php study的目录 通过php study访问weijinsuo项目
        4. webstrom 直接点击右上角浏览器图标即可
        5. 如果要开启服务器 必须拖一个项目或者文件夹进编辑器里面

## less的特点

    1. less可以完全兼容CSS 在less文件里面写之前所有的CSS代码


## less的语法

    1. 如何使用less定义变量和使用变量
    2. 混入（自定义函数 传参）
    3. less的嵌套
    4. 操作 + - x /运算
    5. 导入



## 上午复习

    1. 字体图标的概念： 把一些图标打包到一个字体里面（有字体文件eot svg ttf woff  定义字体的代码 @font-face { 定义字体 引入字体文件}）
    2. 字体如何生成 ： 阿里图标库  把你要生成的字体图标的图标上传到阿里图标库 把图标添加到购物车 下载代码 （就会包含你生成的字体文件 和 定义字体的代码）
    3. 如何去使用字体图标 只需要引入字体的代码的css文件 iconfont.css （包含了定义字体的代码 定义图标的类名） 只需要使用图标对应的类名
    4. 使用微金所的字体图标 : 拷贝完整版里面css文件夹(定义字体的代码 和 图标类名) 和 fonts文件 (包含了微金所图标的字体文件) 在主页里面去引入font.css文件  再去使用图标的类名（只能通过完整版检测元素来看）
    5. 字体图标的好处： 减少网络请求 压缩图标体积 方便使用
    6. CSS的预处理的概念： 是对CSS 一个升级 扩展了CSS 让CSS充满逻辑性 有逻辑代码的特征 利于维护扩展
    7. less  sass stylus 3种常见的CSS预处理器
    8. 学习less预处理
        1. 如何使用less 以及编译
          创建一个less 
          less里面写任意CSS代码
        2. 在页面中去引入less
          <link rel="stylesheet/less" href="demo.less">
          注意要把rel="stylesheet/less"
        3. 引入less编译器文件 
          <script src="weijinsuo/lib/less/less.js"></script>
        4. 使用服务器打开页面就可以使用less
    9. less的语法
        1. 定义变量
        2. 嵌套
        3. 混入（自定义函数）
        4. 运算
        5. 导入

    10. less函数的问题
      
        1. 函数参数如果定义函数要求传几个参数 调用函数也要传几个参数 如果个数不对就会报错 
        2. 但是如果函数参数有默认值可以省略参数
        3. 如果less报错很好找 在浏览器会告诉报什么错在哪一行
        4. 函数有一个层叠性 CSS有层叠性  相当于类 如果2个类一样后面会把前面的类覆盖（写函数通常函数名不要和类名有冲突） 函数和类名区分一般函数会带参数 类名不会带参数


## 顶部通栏样式

      /* 头部区域样式 */
      #header{
        border-bottom: 1px solid @border-color;
        .row{
          /* 一般如果要选择标签选择器带> 表示子代 */
          >div{
            border-right: 1px solid @border-color;
            height: 40px;
            line-height: 40px;
            font-size: 12px;      
            &:last-child{
              border-right: none;
            }
            a{
              color:@a-color;
              text-decoration: none;
            }
          }
        }
      }


## 导航条样式修改

      /* 导航条区域的样式 */

      #nav{
        background-color: #fff;
        margin-bottom: 0;
        /* 导航条头部样式 */
        .navbar-header{
          /* 移动端按钮的样式 */
          .navbar-toggle{
            margin-top: 23px;
          }
          /* 头部里面的品牌logo容器 */
          .navbar-brand{
            height: 80px;
            /* 因为a有上下15px的padding 内容高度只有50px行高只有50px */
            line-height: 50px;
            > i{
              font-size: 30px;
              &.icon-icon{
                color:@main-color;
              }
              &.icon-logo{
                color:#333;
              }
            }
          }   
        }
        /* 导航条身体的ul的样式 */
        .navbar-nav{
          >li{
            >a{
              height: 80px;
              line-height: 50px;
              &:hover{
                border-bottom: 2px solid @main-color;
              }
            }
            &.active{
              >a{
                background-color: #fff;
                border-bottom: 2px solid @main-color;
              }
            }
          }
        }
      }


## 轮播图响应式切换

    1. 需求： 在 小 中 大屏幕（非移动端） 显示大图片  2000*410 大图需要固定高度410居中显示  使用背景图
    2. 超小屏幕（手机端） 显示小图片  640*340  小图需要自适应 使用图片标签-->
    3. 方案就写2个标签分别是大图和小图 控制大图在非移动端显示小 中 大屏幕显示 
    4. 小图 就在移动端显示 
    5. 使用隐藏类来切换大图和小图的显示 注意隐藏类没有向上兼容因为写and 限制了只在这个范围才隐藏

### 轮播图大小图样式

      /* 轮播图的样式 */
      #slide{
        .large-image{
          display: block;
          height: 410px;
          background-position: center center;
        }
        .small-image{
          display: block;
          img{
            width: 100%;
          }
        }
      }


##  特色介绍

###  网格系统
```html
    <div class="row">
      <div class="col-sm-6 col-md-4">
      </div>
      <div class="col-sm-6 col-md-4">
      </div>
      <div class="col-sm-6 col-md-4">
      </div>
      <div class="col-sm-6 col-md-4">
      </div>
      <div class="col-sm-6 col-md-4">
      </div>
      <div class="col-sm-6 col-md-4">
      </div>
    </div>
```

###  媒体对象类型
```html
     <div class="media">
        <a href="#">
            <div class="media-left">
                <i class="icon-meiyuan"></i>
            </div>
            <div class="media-body">
                <h4 class="media-heading">支付交易保障</h4>
                <p>银联支付全程保障财产安全</p>
            </div>
        </a>
    </div>
```
###  响应式辅助类工具
```html
     <section id="features" class="hidden-xs">
     </section>
```

- hidden-xx
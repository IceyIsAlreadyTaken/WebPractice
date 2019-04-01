//vps 整台服务器卖给你 
//Virtual Private Server 虚拟专用服务器
// 或者拆开卖个端口

//windows远程桌面默认端口3389

//SSH  一种用来远程控制的协议 
//Secure Shell（安全外壳协议，简称SSH）是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境[1]。SSH通过在网络中创建安全隧道（英语：secure channel）来实现SSH客户端与服务器之间的连接[2]。虽然任何网络服务都可以通过SSH实现安全传输，SSH最常见的用途是远程登录系统，人们通常利用SSH来传输命令行界面和远程执行命令。

//SSH以非对称加密实现身份验证[2]。身份验证有多种途径，例如其中一种方法是使用自动生成的公钥-私钥对来简单地加密网络连接，随后使用密码认证进行登录；另一种方法是人工生成一对公钥和私钥，通过生成的密钥进行认证，这样就可以在不输入密码的情况下登录。任何人都可以自行生成密钥。公钥需要放在待访问的计算机之中，而对应的私钥需要由用户自行保管。认证过程基于生成出来的私钥，但整个认证过程中私钥本身不会传输到网络中。

//远程登录 
//ssh root@ip
//改密码  passwd

//退出登录  exit

//===========================================
//不用每次登录输入密码
//使用公私钥的方式登录
//ssh-keygen
//私钥存放在 /Users/~/.ssh/id_rsa

//ssh-copy-id root@ip

//Now try logging into the machine, with:   "ssh 'root@'"
//and check to make sure that only the key(s) you wanted were added.
//一般一台电脑安装一堆即可

//.ssh 内可以设置访问网站的默认端口

//===================================
//修改dns网址解析可以用网址替代 Ip
//或者写命令行脚本结尾为sh结尾的脚本（待研究）


//=======================================
//apt 软件商店
//apt is a commandline package manager and provides commands for searching and managing as well as querying information about packages.
//It provides the same functionality as the specialized APT tools,like apt-get and apt-cache, but enables options more suitable for interactive use by default.




//======================================
//腾讯云
//登录
//ssh -q -l ubuntu -p 22 188.131.244.97
//密匙登录 ssh [-i 密钥文件路径] ubuntu@188.131.244.97
//通过域名登录 （待研究）


//======
//nodejs    js都可以进来
//nvm 管理node    或者 n
//坑！！！ nvm不适用于服务器！！！ 坑死我了
//https://github.com/creationix/nvm#manual-install


//================================
//命令行工具
//bash 
//终极 zsh
// ohmyzsh
// l 相当于  ls -lha
//配置文件  zshrc    run command 启动时加载

//编辑工具  mc 傻瓜鼠标操作
//mc 
//mcedit

//任务管理器 安装 human top      
//sudo apt install htop


//========================
//将本地文件上传到服务器上（也可以从远程上传文件到本机）
//scp传输协议 本地文件 root@ip:远程文件地址
//scp -P 32424 本地文件 root@ip:远程文件地址
// scp root@ip:远程文件地址  本地文件

//fileZilla 文件传输软件 
//基于 sftp
//winSCP虚拟出服务器上的硬盘到本地上

//===========================
// 将一个命令在后台运行  加&符号
// bg fg
// tmux   （termianl multiplex 终端复用器）把tmux挂起在后台 也可以让程序一直运行（报错无法自动重启）
// apt install tmux
//  control+b  +  % 垂直平分开出新窗口
//  control+b  +  "" 水平平分开除新窗口
//  control+b  + d
//  
// tmux 增加鼠标操作 tmux
// 隐藏窗口
// 
// deamon 守护进程 帮你看着这个进程是否挂掉,可以帮你看任何需要24小时需要运行的进程
// 如 ：pm2
// npm i -g pm2
// 开启 pm2 start xxxxx
// 退出登录也可以继续运行
// pm2 stop 0 //停止程序
// pm2 start 0 //开始程序

//把当前任务保存起来 
// pm2 save
// pm2 resurrect   重启后重新恢复
// 

// pm2 startup  在系统重启后 把程序重启
// pm2 unstartup systemd 取消开机重启
// pm2 show 0 

// pm2 logs 0  把任务的日志打印出来
// pm2 monit   监视器同时看很多

//服务器重启 sudo reboot

//===================================================
//基于tmux 的封装 少记一些快捷键   byobu
//f1 f2 f3....



//======================================
//手机上通过ssh登录服务器的软件啊
//juiceSSH  仅仅是ssh   //udp链接 自带 mosh 功能
//termux
//mosh  基于udp链接  可以链接很长时间    比ssh 协议快一点
//服务器要装


//================================https
//默认端口http：80，https：443
//监听端口是443
//安装证书 
//let's encrypt 免费发放域名证书  CA 机构
//acme 协议   用来证明你电脑所在ip有对应的域名   为域名发证书
// acme 有的集成在软件中，有的以命令行的方式发放, 最好的是命令行形式的 acme.sh
//直接连接那个域名，如果域名连接到这台机器上，证明这个机器就是你的
//安装 acme.sh
// curl https://get.acme.sh | sh
//安装 socat   
// apt install socat
//安装  证书
// acme.sh命令行可以用了
// just issue acert 新建一个证书！！！
// acme.sh --issue -d example.com
//acme.sh --issue -d tls.realeago.com:8000 --standalone

//把 这个cert 和 key 文件 传给 https模块
//



//如何同时访问 http和https两个网站
//同时运行http和https 同时运行两个程序

//https://www.chengxulvtu.com/pm2%E7%9B%91%E5%90%AC80%E7%AB%AF%E5%8F%A3/
//解决1024以下端口无法监听的问题












//==============================vscode
//终于知道如何切换高亮语言了 command + k + m
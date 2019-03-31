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
//ZXCqq00()

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


//======
//nodejs    js都可以进来
//nvm 管理node    或者 n
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
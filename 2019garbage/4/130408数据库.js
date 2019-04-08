//数据库下  一个DB（类似 一个 xsl 文件），对应多个数据表
//数据库连接器  DBC（类似JDBC 客户端，服务端  ，bind的方式进行使用
//SDK 链接走基于 TCP 的特定协议链接 服务器

//SQL语言

//MySQL 全球使用最多的数据库，被甲骨文收购了 => 社区制作的 miorraDB
//还有 Oracle 数据库,

//微软的 SQL Serveer
//postgre SQL 网络型数据库

//网络型数据库要再搞单独的服务器

//SQLite 非网络型数据库，嵌入式数据库，储存在文件中，架构相对简单一些，门槛低
//除了主键以外，SQLite不强制进行类型检查
//程序设计者还提供了一个叫做sqlite3的独立程序用来查询和管理SQLite数据库文件。SQLite的用户可以把这个程序当作如何写SQLite应用程序的示例。
//c 语言的 SDK 来操作数据库文件  - o


//下载 SQLlite
//.help

//一定要用分号结束
//create table users(id,name,password);
//创建名为users的表

//插值
// insert into users values(1,'zs,'123456');

//查看表内容 
//select * from users;
//select title from users;
// 更换展示模式  .mode 
//.mode column

//打开表头 .headers on
// id          name        password
// ----------  ----------  ----------
// 1           zs          123456
// 2           ls          123456
// 3           ww          123456
// 4           zl          123456

//.save ./bbs.sqlite3


//.open bbs.sqlite3
//.mode column
//.headers on 




//http://www.runoob.com/sqlite
//https://www.w3schools.com/sql/default.asp
//
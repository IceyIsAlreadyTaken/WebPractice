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

//创建名为users的表
//create table users(id,name,password);
//一定要用分号结束

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


//w3c例子
//改列名
//SELECT Address as Addr,City as Location FROM Customers

//去重 city
//select distinct city from customers
//select distinct city,xxx from customers  唯一组合

//  where
//SELECT * FROM Customers where CustomerId > 30 and CustomerId < 40;
//SELECT * FROM Customers where city = 'Caracas';
//SELECT * FROM Customers where city != 'Caracas';
//SELECT * FROM Customers where city != 'Caracas' or CustomerId > 30 ;


//弱类型
//设置列数据的偏好类型
//查出来的时候数据库会尽量提供(转换)给你偏好的类型
//create table foo (id  int,name string,content string,ts int)


//Order by xx,xx ...     ASC|DESC 升序或者降序
//SELECT * FROM Customers order by City desc;

//insert into table_name
//values 
//插入指定列的内容
//inseret into table_name (id,content) values (5,'hello')
//其他未填的则为空


//Update
//UPdate table_name
//set column1 = value1,column2 = value2
//where condition

//select top
//select * from users limit 2 //查询前两个
//select * from users limit 2，5 //查询2-5

//select max(id) from users 


//group by
//select sum,COuntry from customers group by country order by sum desc 


//sqlite 里一个文件就是一个数据库 


//drop 删除一个表
//sqllite 不支持改列名 删除列

//select Into 把查询的内容插入到新表中
//insert into xxxx select * from table_name

//加载多个表
// .databases 显示当前加载的表
//attach test as se;
// .tables

//constraints 设定这个表必须班组的条件
// creat table user3(
//   id integer ,
//   name string primary key,
//   password not null
// );

//索引
//当数据库数据非常大时为数据库建立索引，提高查询效率
//.schema   查看索引


//建立视图
//

//连表查询 join
//select * from posts join users on posts.userid=users.id where posts.id=4
// inner left



//在语言中使用的话，需要绑定
//npm sqlite3 是call

//csv 格式的文件支持直接导入sqlite
//http://www.runoob.com/sqlite
//https://www.w3schools.com/sql/default.asp
//
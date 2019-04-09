//.cd  到指定工作目录
//create table users (
//   id integer primary key autoincreament,
//   name string unique,
//   password string not null
// );

//insert into users (name,password) values ('zs','123456')

//select * from users

//如果id这个条目被删除了，id再加入后则从这个id值的后边进行
//delete from users where id=2
//insert into users (name,password) calues ('ww','123456') 插入后id值为3


//有隐藏的 rowid 主键  
//select rowid, * from users;


//.headers on
//.mode column
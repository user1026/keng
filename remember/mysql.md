# mysql

<<<<<<< HEAD
## SQl语法

## SQL函数
=======

## 简单语句

>增

insert into 表名 values ("全部字段名")<br>
insert into 表名(字段名) values (字段名对应的值)

>删
delete form 表名
>改

>查

select * from 表名<br>
```MYSQL
select * from stu
```
select 字段名 from 表名<br>
```MYSQL
select name from stu
```
select * from 表名 limit 1,3 查询表中第一到三条数据 <br>
```MYSQL
select * from stu limit 1,3
```
select * from 表名 where 字段名=条件  and  字段名=条件 多条件与<br>
```MYSQL
select * from stu where name="a" and id="1"
```
select * from 表名 where 字段名=条件  or  字段名=条件 多条件或<br>
```MYSQL
select * from stu where name="a" or id="1"
```
select * from 表名 where name like "%字段%" 模糊查询包含字段的数据<br>
```MYSQL
select * from stu where name like "%刘%"
```
select * from 表名 where name like "字段_" 查询以字段开头的字段后只有一个字符的数据，下划线_表示任意一个字符
```MYSQL
select * from stu where name like "王_" 查询姓王的俩字名字
```
select * from 表名 where 字段名 between 值 and 值
```MYSQL
select * from stu where age between 23 and 34 
```
select * from 表名 order by 字段 asc[,字段 asc/desc]    asc升序 desc降序
```MYSQL
select * from stu order by id asc,age desc   查到的数据按照id升序,id相同时按age降序
```
select distinct 字段名 from 表名  去重查找
```MYSQL
select distinct age from stu 
```

## 复杂语句
### 嵌套语句


### 联表查询
>>>>>>> 6096416572f86b59a6e3382cbd1302a2498fe4c8

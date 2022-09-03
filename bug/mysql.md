# mysql

## Operand should contain 1 column(s)

```mysql
SELECT
	 (username, `password`)
FROM
	`user` 
WHERE
	username = 'a' 
	AND `password` = '1232'
```

<font color="blue">select 后面跟的字段外不要加()，如果想使字段拼接请用concat函数</font>  
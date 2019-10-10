USE demo

SHOW TABLES

CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,
	           email VARCHAR(50),
		   passwords VARCHAR(50),
		   createTime TIMESTAMP,
		   STATUS INT COMMENT '0 失效,1 成功'
		   	)
DESC users

CREATE TABLE verify(id INT PRIMARY KEY AUTO_INCREMENT,
	           email VARCHAR(50),
		   CODE VARCHAR(10),
		   createTime TIMESTAMP
		)
DESC verify
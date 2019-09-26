SELECT * FROM stu
DESC stu

-- 约束stu里的name不能为NULL	
ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;

-- 删除不能为null的约束

ALTER TABLE stu MODIFY NAME VARCHAR(20)

-- 添加唯一约束
ALTER TABLE stu MODIFY id INT UNIQUE

-- 删除唯一约束
ALTER TABLE stu DROP INDEX id

-- 主键约束 (唯一且非空stu内有id参数)
ALTER TABLE stu MODIFY id INT PRIMARY KEY

-- 添加主键id(stu内无id参数)
ALTER TABLE stu ADD PRIMARY KEY(id)

-- 删除主键约束
ALTER TABLE stu DROP PRIMARY KEY

-- 删除表内对应数据
DELETE FROM stu WHERE id=0  

-- 添加自动增长
ALTER TABLE stu MODIFY id INT AUTO_INCREMENT 

-- 将id等于一的数据内的streng改为1
UPDATE stu SET strength=1 WHERE id=1 

-- 删除自动增长
ALTER TABLE stu MODIFY id INT

-- 设置自动增长默认开始值为2000
ALTER TABLE stu AUTO_INCREMENT = 2000

-- DELETE：删除所有的记录之后，自增长没有影响
-- TRUNCATE：删除以后，自增长又重新开始。

-- 将id默认值设为1 	
CREATE TABLE st9 (   
id INT  DEFAULT 1,

)
-- 添加一个NAME属性 
ALTER TABLE st9 ADD NAME VARCHAR(10)

-- 将st9内的id等于1的一行的name设为A
UPDATE st9 SET NAME='A' WHERE id=1

-- 定义id为主键
ALTER TABLE st9 MODIFY id INT PRIMARY KEY

-- 设置位子增长
ALTER TABLE st9 MODIFY id INT AUTO_INCREMENT

-- 使用默认值1
INSERT INTO st9 VALUES (DEFAULT)

-- 增加一行数据
INSERT INTO st9 VALUE (NULL,'C'),
(NULL,'D')

-- 创建外键约束  
ALTER TABLE st9 ADD CONSTRAINT FOREIGN KEY(id) REFERENCES stu(id)

SELECT * FROM st9

DESC st9
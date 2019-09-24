-- 创建数据库
CREATE DATABASE demo

-- 创建表
CREATE TABLE stu(

-- 参数 参数类型

id INT,
  
NAME VARCHAR(100),

sex VARCHAR(5), 

age INT,   

codes INT, 

abilities VARCHAR(100),

powerlevel VARCHAR(100)

)
-- 显示所有表格
SHOW TABLES 

-- 显示stu表
SHOW CREATE TABLE stu	

-- 查询表结构
DESC stu

-- 给表stu添加一个powerelvel参数
ALTER TABLE stu ADD powerlevel VARCHAR(10)

-- 将表内一个名为gender的参数更名为sex
ALTER TABLE stu CHANGE gender sex VARCHAR(20)

-- 更改已存在属性sex且id等于1时的值
UPDATE stu SET sex='man' WHERE id = 1

-- 更改已存在属性codes且id等于7时的值
UPDATE stu SET codes=50 WHERE id = 7

-- 更改已存在属性coeds且id等于6时的值
UPDATE stu SET codes=90 WHERE id = 6

-- 删除表stu
DROP TABLE stu

-- 对应参数属性插入数据
INSERT INTO stu VALUE(1,'dante','man','40','80',NULL,'SSS'),
		     (2,'vergil','man','42','100',NULL,'SSS'),
		     (3,'batman','man','60','70',NULL,'SSS'),
		     (4,'superman','man','30','60',NULL,'SSS'),
		     (5,'urizen','fema',NULL,'20',NULL,'SSS'),
		     (6,'wesker','man','18','20',NULL,'SSS'),
		     (7,'albert','female','25','20',NULL,'SSS')

-- 筛选显示出stu内所有数据		     
SELECT * FROM stu

-- 更改已存在属性sex且id等于5时的值
UPDATE stu SET sex='female'WHERE id=5

-- 筛选显示出name和sex的属性值		  
SELECT NAME,sex FROM stu

-- 去重筛选出codes参数的属性值
SELECT DISTINCT codes FROM stu

-- 从stu中筛选出age和codes的值并相加赋给新增的total并显示
SELECT (age+codes)AS total FROM stu

--  筛选显示出所有age属性值小于20的数据
SELECT * FROM stu WHERE age < 20;

--  筛选显示出所有age属性值不等于20的数据
SELECT * FROM stu WHERE age != 20;

--  筛选显示出所有age属性值大于20且sex为man的数据
SELECT * FROM stu WHERE age > 20 AND sex='man'

--  筛选显示出所有id为1或3或5的数据
SELECT * FROM stu WHERE id=1 OR id=3 OR id=5; 

--  筛选显示出所有id为1或3或5的数据
SELECT * FROM stu WHERE id IN(1,3,5)

--  筛选显示出所有codes值在60到90之间的数据
SELECT NAME FROM stu WHERE codes BETWEEN 60 AND 90

--  筛选显示出所有name含有sup的数据
SELECT * FROM stu WHERE NAME LIKE'%sup%'

-- 将所有age为null的属性值设为0
UPDATE stu SET age=0 WHERE age IS NULL

-- 将stu里数据 按age值大小的降序排列
SELECT * FROM stu ORDER BY age DESC

-- 将stu里数据 按age值大小的升序排列
SELECT * FROM stu ORDER BY age ASC

-- 将stu里数据 按id值大小的升序排列
SELECT * FROM stu ORDER BY id ASC

-- 计算出所有age大于20的个数
SELECT COUNT(*) FROM stu WHERE age>20

-- 按sex分类分别计算每个类的总个数
SELECT COUNT(*) FROM stu GROUP BY sex

-- 按codes>60的数据分组筛选出age>20的数据 
SELECT * FROM stu WHERE age>20 GROUP BY codes HAVING codes>60

-- 筛选粗从第二个数据开始一共5个数据
SELECT * FROM stu LIMIT 1,5

-- 删除表
DELETE FROM stu
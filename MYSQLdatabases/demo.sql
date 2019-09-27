CREATE DATABASE goods
DROP DATABASE goods
USE goods

CREATE TABLE goodlists(
	goodsID INT PRIMARY KEY AUTO_INCREMENT,
	goodsNAME VARCHAR(20),
	goodsCLASS INT,
	goodsATTRIBUTE INT,
	goodsPRICE DOUBLE(8,2),
	CONSTRAINT goods_NAME FOREIGN KEY (goodsCLASS) REFERENCES class(classID),	
	CONSTRAINT goods_ATTRIBUTE FOREIGN KEY (goodsATTRIBUTE) REFERENCES attribution(attributionID)	
)

DROP TABLE goodlists

DESC goodlists

INSERT INTO goodlists VALUE(1,'拉菲','1','1',100000)

SELECT * FROM goodlists
 
CREATE TABLE userlists(
	userID INT PRIMARY KEY AUTO_INCREMENT,
	userNAME VARCHAR(20),
	avatar VARCHAR(1000)
)

INSERT INTO userlists VALUE(1,'wesker','/wesker.jpg')

SELECT * FROM userlists

CREATE TABLE collection(

	goodsID INT,
	
	userID INT,
	
	PRIMARY KEY(goodsID,userID),
	
	CONSTRAINT goods_collect FOREIGN KEY (goodsID) REFERENCES goodlists(goodsID),
	
	CONSTRAINT user_collect FOREIGN KEY (userID) REFERENCES userlists(userID)

)
DROP TABLE collection

DESC collection

INSERT INTO collection VALUE(1,1)

SELECT * FROM collection

CREATE TABLE comments(

	goodsID INT,
	
	userID INT,
	
	userNAME VARCHAR(20),
	
	avatar VARCHAR(1000),
	
	CONSTRAINT goods_comments FOREIGN KEY (goodsID) REFERENCES goodlists(goodsID),
	
	CONSTRAINT user_comments FOREIGN KEY (userID) REFERENCES userlists(userID)
	
)
DROP TABLE comments

INSERT INTO comments VALUE(1,1,'wesker','/wesker.jpg') 

SELECT * FROM comments 


CREATE TABLE orders(
	userID INT,
	orderState VARCHAR(20),
	CONSTRAINT user_orders FOREIGN KEY (userID) REFERENCES userlists(userID)

)

INSERT INTO orders VALUE(1,1) 
SELECT * FROM orders 

CREATE TABLE class(
	classID INT PRIMARY KEY AUTO_INCREMENT,
	classNAME VARCHAR(20) 

) 
INSERT INTO class VALUE(1,'家具') 
SELECT * FROM class

CREATE TABLE attribution(
	attributionID INT PRIMARY KEY AUTO_INCREMENT,
	attributionNAME VARCHAR(20),
	attributionVALUE VARCHAR(20)
)
INSERT INTO attribution VALUE(1,'材质','真皮') 
SELECT * FROM attribution 


SELECT * FROM goodlists g LEFT JOIN class c ON g.goodsclass=c.classID LEFT JOIN attribution a ON g.goodsATTRIBUTE=a.attributionID
	

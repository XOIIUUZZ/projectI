CREATE DATABASE goods



CREATE TABLE goodlists(
	goodsID INT PRIMARY KEY AUTO_INCREMENT,
	goodsNAME VARCHAR(20),
	goodsCLASS VARCHAR(20),
	goodsATTRIBUTE VARCHAR(20),
	goodsPRICE DOUBLE(8,2)

		
)
DESC goodlists

INSERT INTO goodlists VALUE(1,'拉菲','0001','1',100000)

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
	CONSTRAINT goods_collect FOREIGN KEY (goodsID) REFERENCES goodlists(goodsID),
	CONSTRAINT user_collect FOREIGN KEY (userID) REFERENCES userlists(userID)

)
INSERT INTO userlists VALUE(NULL,NULL)

CREATE TABLE comments(
	goodsID INT,
	userID INT,
	userNAME VARCHAR(20),
	avatar VARCHAR(1000),
	CONSTRAINT goods_comments FOREIGN KEY (goodsID) REFERENCES goodlists(goodsID),
	CONSTRAINT user_comments FOREIGN KEY (userID) REFERENCES userlists(userID)

	
)
INSERT INTO userlists VALUE(NULL,NULL,NULL,NULL) 

CREATE TABLE orders(
	userID INT,
	orderState VARCHAR(20),
	CONSTRAINT user_orders FOREIGN KEY (userID) REFERENCES userlists(userID)

)
INSERT INTO userlists VALUE(NULL,1) 

CREATE TABLE class(
	classID INT,
	classNAME VARCHAR(20),
	CONSTRAINT class_ID FOREIGN KEY (classID) REFERENCES goodlists(goodsCLASS)

) 
INSERT INTO userlists VALUE(NULL,NULL) 

CREATE TABLE attribution(
	attributionID VARCHAR(20)
	CONSTRAINT attribution_ID FOREIGN KEY (attributionID) REFERENCES goodlists(goodsATTRIBUTE)

)


	

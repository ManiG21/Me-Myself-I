

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS journals CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    full_name TEXT,
    age INT,
    dob TIMESTAMP,
    email TEXT,
    img TEXT 
);


CREATE TABLE journals(
    id SERIAL PRIMARY KEY,
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    entry TEXT,
    color TEXT,
    emoji TEXT, 
    user_id INTEGER REFERENCES users
);

-- USERS--(default, name, age, dob, email)
INSERT INTO users VALUES (DEFAULT, 'Bob', 22, '2000-03-10','bobisawesome@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Simba', 17, '2005-05-05','simbaroar@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Adelia', 20, '2002-05-20','adeliaiscute@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Jungkook', 22, '2000-03-10','jkisawesome@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Mufasa', 17, '2005-05-05','mufasa@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Maya', 20, '2002-05-20','Mayaisok@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Odalis', 20, '2002-05-20','odareyes2@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Armani', 20, '2002-05-20','manigrant021@gmail.com');
INSERT INTO users VALUES (DEFAULT, 'Juan', 20, '2002-05-20','Jsanchez0937@gmail.com');



-- JOURNALS--(DEFAULT, date, title, entry, color, emoji, user_id)
INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 3);

INSERT INTO journals VALUES (DEFAULT, '2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 1);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 2);

INSERT INTO journals VALUES (DEFAULT, '2022-12-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 3);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 1);

INSERT INTO journals VALUES (DEFAULT,'2022-01-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 2);

INSERT INTO journals VALUES (DEFAULT,'2022-05-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 3);

INSERT INTO journals VALUES (DEFAULT,'2022-06-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 1);

INSERT INTO journals VALUES (DEFAULT, '2022-07-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 2);

INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 3);

INSERT INTO journals VALUES (DEFAULT,'2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 1);

INSERT INTO journals VALUES (DEFAULT,'2022-02-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 2);




INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-12-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT,'2022-01-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT,'2022-05-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT,'2022-06-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-07-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT,'2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);

INSERT INTO journals VALUES (DEFAULT,'2022-02-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 7);




INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-12-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT,'2022-01-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT,'2022-05-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT,'2022-06-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT,'2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);

INSERT INTO journals VALUES (DEFAULT,'2022-02-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 8);




INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-12-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-10-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT,'2022-01-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT,'2022-05-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT,'2022-06-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT, '2022-08-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT,'2022-09-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);

INSERT INTO journals VALUES (DEFAULT,'2022-02-09','Best Day Ever', 'Im so busy got nothing to do Spent the last two hours just tying my shoe, Every flower, every grain of sand
Is reaching out to shake my hand Its the best day ever (best day ever) Its the best day ever (best day ever) Sometimes the little things Start closing in on me', 'blue', 'happy', 9);
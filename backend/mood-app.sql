

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS journals CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    full_name TEXT,
    age INT,
    dob DATE,
    email TEXT
);


CREATE TABLE journals(
    id SERIAL PRIMARY KEY,
    entry_time DATE,
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
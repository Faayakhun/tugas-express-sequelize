insert into todos (name,user_id) values 
("eat", 2),
("sleep", 3),
("coding", 1);

insert into users (username) values 
("fay"),
("ken"),
("nur");

SELECT users.username, todos.name FROM users JOIN todos ON users.id = todos.user_id

POSTMAN post and put body
        {
            "name": "typing",
            "user_id": 1
        }

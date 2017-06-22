# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## projects
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
description        | text      | not null
end_date           | date      | not null
funding_goal       | integer   | not null
details            | text      | optional
creator_id         | integer   | not null, foreign key (references users), indexed
category_id        | integer   | not null

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects), indexed
title        | string    | not null
description  | string    | not null
cost         | integer   | not null
delivery_date| date      | optional

## pledges
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
amount           | integer   | not null
pledgeable_type  | string    | not null, only "projects or rewards"
pledgeable_id    | integer   | not null, foreign key (references rewards), indexed
backer_id        | integer   | not null, foreign key (references users), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

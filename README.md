# Redis Ninja


## Set

```redis 
set name mario
set name2 "Mario Lazzari"
```

## Get

```redis 
get name
```

## Del

```redis 
del name2
```

## Multi Set

```redis 
mset name2 Yoshi color green  rating 10

getrange name 0 3
GETRANGE name -1 -3

SETRANGE name2 2 abc 

INCR rating 
DECR rating 

INCRBY rating 5
DECRBY rating 5
```

## Ranges

```redis 
getrange name 0 3
GETRANGE name -1 -3

SETRANGE name2 2 abc 
```

## Increments
```redis 
INCR rating 
DECR rating 

INCRBY rating 5
DECRBY rating 5
```

## Expire
```redis 
set exp "Expire in 3 seconds" ex 3
```

## Set only if Not Exists
```redis 
set name "Yoshi" nx
```

## Set and get prev
```redis 
SET name "Mario" GET
```

## Sets 
```redis 
SADD names Mario
SADD names Yoshi Peach

SREM names Yoshi

SADD moreName Link Zelda

SUNION names moreNames

SISMEMBER names Mario

```

## Lists

```redis 
LPUSH orders ryu
LPUSH orders chu-li

RPUSH orders blanka ken

LPOP orders

RPOP orders 2

LRANGE orders 0 1
LRANGE orders -2 -1

LINDEX orders 0

LPOS orders ryu
```

## Hashes
```redis
HSET books:1 title "Book one"
HSET books:1 author "Author Name"
HSET books:1 rating 10


HGET books:1 title

HGETALL books:2

HEXISTS books:1 title

HKEYS books:1
HVALS books:1

HDEL books:2 title

DEL books:1
```

## Sorted set

```redis
ZADD books 7 "Book one" 2 "Book two" 9 "Third book"
ZADD books NX 1 "Book one"

ZRANGE books 0 -1
```
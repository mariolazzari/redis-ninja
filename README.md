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

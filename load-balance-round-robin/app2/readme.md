# Start App2

```sh
$ docker build -t app2 -f - . << EOF 
FROM node:12

WORKDIR /app
COPY . /app

CMD ["node","index.js"]
EOF
```

# run 

```sh
$ docker run -dp 3002:3002 --name app2 app2
```
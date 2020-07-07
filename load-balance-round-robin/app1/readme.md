# Start App1

```sh
$ docker build -t app1 - . << EOF 
FROM node:12

WORKDIR /app
COPY . /app

CMD ["node","index.js"]
EOF
```

# run 

```sh
$ docker run -dp 3001:3001 --name app1 app1
```
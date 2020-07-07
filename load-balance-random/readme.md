# Nginx LoadBalance
<!-- 
```sh
app1:3001
app2:3002
nginx
``` -->

- nginx.conf
```sh
...
  upstream web-server {
    random two;
    server app1:3001;
    server app2:3002;
  }
...
}
```

# NGINX Method
- [ ] (Default) Round Robin 
- [ ] Least Connections
- [ ] IP Hash
- [ ] Generic Hash
- [x] Random

--- 

(Default) Round Robin
- สลับให้แต่ละ process ได้ทำงานคนละหนึ่งช่วงเวลา

Least Connections
- request จะถูกส่งไปตัวที่ มี connection น้อยที่สุด

IP Hash
- เอา ipv4 or ipv6 มา ``hash``

Generic Hash
- เอา URI มา ``hash``

Random
- แบบสลับ
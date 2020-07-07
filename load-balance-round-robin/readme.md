# Nginx LoadBalance
<!-- 
```sh
app1:3001
app2:3002
nginx
``` -->

# NGINX Method
- [x] (Default) Round Robin 
- [ ] Least Connections
- [ ] IP Hash
- [ ] Generic Hash
- [ ] Random

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
<!-- (Default) Round Robin
: สลับให้แต่ละ process ได้ทำงานคนละหนึ่งช่วงเวลา

Least Connections
: request จะถูกส่งไปตัวที่ มี connection น้อยที่สุด

IP Hash
: เอา ipv4 or ipv6 มา ``hash``
Generic Hash
: เอา URI มา ``hash``

Random
: แบบสลับ -->
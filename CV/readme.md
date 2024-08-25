JSON Responses:
http://37.35.113.149/responses.json

Contact Form:
http://37.35.113.149/contactForm.html

CV:
http://37.35.113.149

Copy Files to RPI5:
scp -r 'C:\Users\jan\OneDrive - HFTM\02_Fachstudium\IN214 - Grundlagen Web-Programmierung\Codebase\CV\' pi@192.168.2.2:~/my_website

sudo apt install -y python3-pip


Run server.py:
nohup python3 server.py &

API for Mail
https://www.emailjs.com/

Reverse Proxy Nginx:
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/reverse-proxy.conf

Conf: reverse-proxy.conf

sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl restart nginx

sudo certbot renew --dry-run

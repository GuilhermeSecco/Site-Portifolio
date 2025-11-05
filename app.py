from flask import Flask, request, redirect, url_for, session
from flask_mail import Mail
from config import email, password

app = Flask(__name__)
from views import *

app.secret_key = 'Shiro'

mail_settings = {
    'MAIL_SERVER': 'smtp.gmail.com',
    'MAIL_PORT': 465,
    'MAIL_USE_TLS': False,
    'MAIL_USE_SSL': True,
    'MAIL_USERNAME': email,
    'MAIL_PASSWORD': password
}

app.config.update(mail_settings)

mail = Mail(app)

if __name__ == '__main__':
    app.run(debug=True)
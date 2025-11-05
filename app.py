from flask import Flask, request, redirect, url_for, session
from flask_mail import Mail
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
from views import *

app.secret_key = 'Shiro'

mail_settings = {
    'MAIL_SERVER': 'smtp.gmail.com',
    'MAIL_PORT': 465,
    'MAIL_USE_TLS': False,
    'MAIL_USE_SSL': True,
    'MAIL_USERNAME': os.getenv("EMAIL"),
    'MAIL_PASSWORD': os.getenv("PASSWORD")
}

app.config.update(mail_settings)

mail = Mail(app)

if __name__ == '__main__':
    app.run(debug=True)
from elasticsearch.client import Elasticsearch
from flask import Flask, render_template, url_for, request, send_file
import json
import glob
import os
from flask import request, redirect

from datetime import datetime

es = Elasticsearch(timeout=30, max_retries=10, retry_on_timeout=True)
app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

#Accueil
@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')
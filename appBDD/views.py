from flask import Flask, render_template, url_for, request, send_file
import json
import html
import glob
import os
from flask import request, redirect
from graphviz import render


app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

from .utils import find_content
import codecs

#Accueil
@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

@app.route('/investigation')
def investigation():
    return render_template('investigation.html')
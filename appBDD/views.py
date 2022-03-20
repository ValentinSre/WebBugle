from flask import Flask, render_template, url_for, request, send_file
import json
import html
import glob
import os
from flask import request, redirect


app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

from .utils import find_content
import codecs

# Accueil
@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

# Page Investigation
@app.route('/investigation')
def investigation():
    return render_template('investigation.html')

# Page Droits cinématographiques (Investigation)
@app.route('/investigation/droits-cinematographiques')
def droitscine():
    return render_template('/investigation/droitscine.html')

# Page Evolution Marvel Comics (Investigation)
@app.route('/investigation/evolution-marvelcomics')
def evolution_marvelcomics():
    return render_template('/investigation/evolutionmarvel.html')

# Page Marvel vs DC Comics (Investigation)
@app.route('/investigation/marvel-vs-dc')
def marvel_vs_dc():
    return render_template('/investigation/marvelvsdc.html')

# Page Sciences
@app.route('/sciences')
def sciences():
    return render_template('/sciences.html')

# Page Sciences
@app.route('/treeter')
def twitter():
    return render_template('/sites/twitter/accueil.html', mode="light")

@app.route('/twitterDark')
def twitterDark():
    return render_template('/sites/twitter/accueil.html', mode="dark")

# Page Sciences
@app.route('/profil')
def twitter_profil():
    return render_template('/sites/twitter/profil.html', mode="light")

# Profil Twitter de Ben Urich
@app.route('/treeter/urich4thetruth')
def twitter_profil_ben_urich():
    return render_template('/sites/twitter/profilBenUrich.html', mode="light")

# Profil Twitter de Ben Urich
@app.route('/treeter/thew4tcher')
@app.route('/treeter/profile')
def twitter_profil_user():
    return render_template('/sites/twitter/profilUser.html', mode="light")

@app.route('/profilDark')
def twitter_profilDark():
    return render_template('/sites/twitter/profil.html', mode="dark")

# Page Grandir comme Giant-Man (Sciences)
@app.route('/sciences/grandir-comme-giantman')
def giantman():
    return render_template('/sciences/giantman.html')




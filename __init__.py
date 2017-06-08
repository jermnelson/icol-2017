__author__ = "Jeremy Nelson"

from flask import Flask, render_template
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config['FLATPAGES_EXTENSION'] = '.md'
pages = FlatPages(app)

@app.route("/<path:slide>")
def deck(slide):
    page = pages.get_or_404(slide)
    return render_template("icol-2017/slide.html", page=page)
    

@app.route("/")
def home():
    return render_template("icol-2017/index.html")

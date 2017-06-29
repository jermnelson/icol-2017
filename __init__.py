__author__ = "Jeremy Nelson"

from flask import Flask, render_template
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config['FLATPAGES_EXTENSION'] = '.md'
pages = FlatPages(app)

@app.route("/contact")
def contact():
    return render_template("icol-2017/contact.html")


@app.route("/references")
def references():
    return render_template("icol-2017/references.html")


@app.route("/transcript")
def transcript():
    return render_template("icol-2017/transcript.html", 
        pages=pages)

@app.route("/<path:slide>")
def deck(slide):
    page = pages.get_or_404(slide)
    return render_template("icol-2017/slide.html", page=page)
    

@app.route("/")
def home():
    return render_template("icol-2017/index.html")

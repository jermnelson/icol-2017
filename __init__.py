__author__ = "Jeremy Nelson"

from flask import Flask, render_template, current_app
from flask_flatpages import FlatPages

presentation_app = Flask(__name__, template_folder='templates')
presentation_app.config['FLATPAGES_EXTENSION'] = '.md'
pages = FlatPages(presentation_app)

@presentation_app.route("/contact")
def contact():
    return render_template("icol-2017/contact.html")


@presentation_app.route("/references")
def references():
    return render_template("icol-2017/references.html")


@presentation_app.route("/transcript")
def transcript():
    return render_template("icol-2017/transcript.html", 
        pages=pages)

@presentation_app.route("/<path:slide>")
def deck(slide):
    page = pages.get_or_404(slide)
    return render_template("icol-2017/slide.html", page=page)
    

@presentation_app.route("/")
def home():
    return render_template("icol-2017/index.html")

from flask import Flask, redirect, request, render_template
from urllib.request import urlopen
import json

URL_START = "https://live.kvv.de/webapp/departures/bystop/"
URL_END = "?maxInfos=10&key=377d840e54b59adbe53608ba1aad70e8"

stops = {
    "Kronenplatz (Kaiserstr.)": "de:8212:2",
    "Rüppurrer Tor": "de:8212:85",
    "Philipp-Reis-Straße": "de:8212:621"
}

def get_departures_by_stop_id(stop_id):
    with urlopen(URL_START + stop_id + URL_END) as departures_json:
        return json.loads(departures_json.read().decode("utf8"))

app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html', departures = get_departures_by_stop_id(stops["Kronenplatz (Kaiserstr.)"]))

if __name__ == '__main__':
    app.run(None, 1337, True)

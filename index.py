from flask import Flask, redirect, request, render_template

app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(None, 1337, True)

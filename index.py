from flask import Flask, redirect, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(port = 1337, debug = True)

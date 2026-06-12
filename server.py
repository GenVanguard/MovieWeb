import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

load_dotenv()
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app, origins =["http://127.0.0.1:5500"])

@app.route("/api/now_playing")
def now_playing():
    response = requests.get("https://api.themoviedb.org/3/movie/now_playing",
                            params={"api_key": TMDB_API_KEY, 
                                    "language": "en-US", 
                                    "page": 1, 
                                    "region": "US"}, 
                                    timeout = 10)
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True, port = 3000)
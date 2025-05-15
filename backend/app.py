from flask import Flask, render_template
from flask_cors import CORS
from flask_sock import Sock

app = Flask(__name__,
    template_folder='./www',
    static_folder='./www',
    static_url_path='/'
)
CORS(app)  # 모든 도메인에서의 접근을 허용
sock = Sock(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)

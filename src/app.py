from flask import Flask
from views import main_views
from views import test_views

app = Flask(__name__)



app.register_blueprint(main_views.main_page)
app.register_blueprint(test_views.test_page)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)



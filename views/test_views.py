from flask import Blueprint, render_template

bp = Blueprint('test', __name__, url_prefix='/test')

@bp.route('/test')
def test():
    return render_template('test.html')
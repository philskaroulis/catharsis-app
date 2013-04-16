import bottle
from bottle import run, route, static_file


@route('/')
def get_root(filename='index.html'):
    return static_file(filename, root='./app/')

@route('/css/<filename:path>')
def get_css(filename='app.css'):
    return static_file(filename, root='./app/css/')

@route('/img/<filename:path>')
def get_img(filename='bg.png'):
    return static_file(filename, root='./app/img/')

@route('/js/<filename:path>')
def get_js(filename='app.js'):
    return static_file(filename, root='./app/js/')

@route('/lib/<filename:path>')
def get_lib(filename='foundation.min.js'):
    return static_file(filename, root='./app/lib/')

@route('/partials/<filename:path>')
def get_partials(filename='note.txt'):
    return static_file(filename, root='./app/partials/')


app = bottle.default_app()


if __name__ == "__main__":
    run(host='0.0.0.0', port=8080, reloader = False)


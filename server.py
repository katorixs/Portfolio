from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.split('?')[0] == '/projects/project-1':
            self.path = '/index.html'
        return super().do_GET()

ThreadingHTTPServer(('127.0.0.1', 8001), Handler).serve_forever()

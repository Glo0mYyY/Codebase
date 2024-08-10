from http.server import SimpleHTTPRequestHandler, HTTPServer
import json

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/CV.html'
        return super().do_GET()

    def do_POST(self):
        if self.path == '/submit':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data)

                # Print the received data for debugging
                print("Received data:", data)

                # Save the data to a JSON file
                with open('responses.json', 'a') as f:
                    json.dump(data, f)
                    f.write('\n')

                print("Data saved to responses.json")

                # Send a response back to the client
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {'status': 'success'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except Exception as e:
                print("Error handling POST request:", e)
                self.send_error(500, 'Server Error')
        else:
            self.send_error(404)

PORT = 8000
server_address = ('', PORT)
httpd = HTTPServer(server_address, MyHandler)
print(f"Serving on port {PORT}...")
httpd.serve_forever()

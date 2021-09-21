from flask import Flask


from Controllers import Movies as MovieApi


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


#genres(Category)
@app.route("/get/genres")
def Getgenres():
    return MovieApi.GetAllgenres()


@app.route("/get/movie/<genre>")
def GetMovie(genre):
    return MovieApi.GetAllgenres(genre)




app.run(debug=True)
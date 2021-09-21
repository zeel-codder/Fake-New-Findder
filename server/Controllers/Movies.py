"""
All Api Base
GetMovies:
GetAllgenres:https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
"""
# form Flask import J
import requests
import json
from flask import abort
from requests.models import Response
from flask import request


def GetAllgenres():
    """
    Use to get all Genres of Movies
    """
    try:
        response=requests.get('https://api.themoviedb.org/3/genre/movie/list?api_key=8d214a27e630c2335c6a21fc774f9669&language=en-US')
        return response.json()
    except requests.exceptions.ConnectionError as connectionError:
        return json.dumps({})
    except Exception:
        return json.dumps({})

def GerMovieListByGenres(genre):
    """
    Use to get all Movie with genre
    """
    try:
        
        response=requests.get(f'https://api.themoviedb.org/3/discover/movie?api_key=8d214a27e630c2335c6a21fc774f9669&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres={genre}&with_watch_monetization_types=flatrate')
        return response.json()
    except requests.exceptions.ConnectionError as connectionError:
        
        return json.dumps({})
    except Exception as e:
        print("e")
        return json.dumps({})







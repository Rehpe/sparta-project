from flask import Blueprint, jsonify, request
import os
import sys
import urllib.request

search_page = Blueprint('search', __name__, url_prefix='/')

# <!--Naver API-->
# client_id = "dqOa471tm1HYrs0RBMzQ"
# client_secret = "dwy90DH1Xk"
# encText = urllib.parse.quote("보스베이비")
# url = "https://openapi.naver.com/v1/search/blog?query=" + encText # json 결과
# # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
# request = urllib.request.Request(url)
# request.add_header("X-Naver-Client-Id",client_id)
# request.add_header("X-Naver-Client-Secret",client_secret)
# response = urllib.request.urlopen(request)
# rescode = response.getcode()
# if(rescode==200):
#     response_body = response.read()
#     print(response_body.decode('utf-8'))
# else:
#     print("Error Code:" + rescode)

def api_search(key_value):
    client_id = "dqOa471tm1HYrs0RBMzQ"
    client_secret = "dwy90DH1Xk"
    encText = urllib.parse.quote(key_value)
    url = "https://openapi.naver.com/v1/search/movie" # json 결과
    # url = "https://openapi.naver.com/v1/search/movie.xml?query=" + encText # xml 결과
    query = "?query=" + encText
    option = "&display=30&sort=sim"
    url_query = url + query + option

    request = urllib.request.Request(url_query)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        return response_body.decode('utf-8')
    else:
        return "Error Code:" + rescode



## API 역할을 하는 부분
# @app.route('/review', methods=['POST'])
# def default_post():
#     sample_receive = request.form['sample_give']
#     print(sample_receive)
#     return jsonify({'msg': '이 요청은 POST!'})
#
#
# @app.route('/review', methods=['GET'])
# def default_get():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': '이 요청은 GET!'})


@search_page.route('/search', methods=['GET'])
def search():
    search_receive = request.args.get('search_give')
    search_result = api_search(search_receive)
    print(search_result)
    return jsonify({'all_search_results': search_result})




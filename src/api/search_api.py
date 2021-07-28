from flask import Blueprint, jsonify, request
import os
import sys
import urllib.request

search_page = Blueprint('search', __name__, url_prefix='/')

# 네이버 영화 검색 api 호출 함수

def api_search(key_value):
    client_id = "dqOa471tm1HYrs0RBMzQ"
    client_secret = "dwy90DH1Xk"
    encText = urllib.parse.quote(key_value)
    url = "https://openapi.naver.com/v1/search/movie" # json 결과
    # url = "https://openapi.naver.com/v1/search/movie.xml?query=" + encText # xml 결과
    query = "?query=" + encText
    option = "&display=50&sort=sim" # 검색결과는 50개까지, 유사도 순으로 검색
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


@search_page.route('/search', methods=['GET'])
def search():
    search_receive = request.args.get('search_give')
    search_result = api_search(search_receive)
    print(search_result)
    return jsonify({'all_search_results': search_result})




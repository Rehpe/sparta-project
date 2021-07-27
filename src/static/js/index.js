// searchForm = document.getElementById("search-form");
searchBtn = document.getElementById("button-addon1");

<!--페이지 로딩되면 영화예매순위 업데이트-->
 $(document).ready(function () {
    $('#searchResultBox').hide();
    });

function bookingPage1() {
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=11410674&qvt=0&query=%EB%B3%B4%EC%8A%A4%20%EB%B2%A0%EC%9D%B4%EB%B9%84%202%20%EC%83%81%EC%98%81%EC%9D%BC%EC%A0%95",'window','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=750,height=800,left=0, top=0, scrollbars=yes')
}

function bookingPage2() {
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=6466840&qvt=0&query=%EC%98%A4%ED%95%84%EB%A6%AC%EC%95%84%20%EC%83%81%EC%98%81%EC%9D%BC%EC%A0%95",'window','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=750,height=800,left=0, top=0, scrollbars=yes')
}

function bookingPage3() {
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=13881020&qvt=0&query=%EC%98%81%ED%99%94%20%EB%AA%A8%EA%B0%80%EB%94%94%EC%8A%88%20%EC%83%81%EC%98%81%EC%9D%BC%EC%A0%95",'window','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=750,height=800,left=0, top=0, scrollbars=yes')
}

function bookingPage4() {
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=9704651&qvt=0&query=%EB%B8%94%EB%9E%99%20%EC%9C%84%EB%8F%84%EC%9A%B0%20%EC%83%81%EC%98%81%EC%9D%BC%EC%A0%95",'window','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=750,height=800,left=0, top=0, scrollbars=yes')
}




function searchBtnClick() {
    let search = $('#search-form').val() // 검색어 가져오기
    $('#searchResultText').empty(); // ~로 검색한 결과입니다 지우기
    $('#searchResultText').prepend(search); // 검색어 붙이기
    $('#searchResultText').append("(으)로 검색한 결과입니다."); // 그 뒤에 ~로 검색한 결과입니다 붙이기
    $('#searchResultRow').empty(); // 전 검색결과창 지우기
    $('#searchResultBox').show(); // 접혀져있던 검색결과창 보여주기

    $.ajax({
        type: "GET",
        url: "/search",
        data: {search_give: search},
        success: function (response) {
            let json_search = JSON.parse(response['all_search_results']) //json string 형식을 json object 형식으로 변환
            let search_results = json_search['items'] //변환된 json 리스트에서 영화정보가 담긴 items만 지정
            for (let i = 0; i < search_results.length; i++) {
                let rawTitle = search_results[i]['title']
                let title = rawTitle.replace(/(<([^>]+)>)/ig,"") //title에 붙어있는 태그들 제거
                let img = search_results[i]['image']
                let pubDate = search_results[i]['pubDate']
                let rawDirector = search_results[i]['director']
                let director = rawDirector.replace('|',"") //director에 붙어있는 |(bar) 제거
                let rate = search_results[i]['userRating']
                let link = search_results[i]['link']

                console.log(title, img, pubDate, director, rate)

                let temp_html = `<li class="result-movie-card">
                                    <tr class="image-box">
                                    <a href="${link}" target="_blank">
                                        <img class="movie-image"
                                            src="${img}">
                                            </a>
                                    </tr>
                                    <div class="movie-desc"><p class="movie-name"> ${title} (${pubDate})</p>
                                        <span style="font-size: 13px"> ${director} / ★${rate} </span></div>
                                </li>`

                $('#searchResultRow').append(temp_html)



            }
        }
    })
}



//     function ajaxGet() {
//     $.ajax({
//         type: "GET",
//         url: "/search",
//         data: {},
//         success: function (response) {
//             alert(response["msg"]);
//         }
//     })
// }


// AJAX 콜

// function ajaxPost() {
//     $.ajax({
//         type: "POST",
//         url: "/review",
//         data: {sample_give: '샘플데이터'},
//         success: function (response) {
//             alert(response["msg"]);
//             window.location.reload();
//         }
//     })
// }
//
// function ajaxGet() {
//     $.ajax({
//         type: "GET",
//         url: "http://spartacodingclub.shop/post",
//         data: {},
//         success: function (response) {
//             console.log(response);
//             alert(response["msg"]);
//         }
//     })
// }

//         $.ajax({
//         type: "POST",
//         url: "/search",
//         data: {search_give: search},
//         success: function (response) {
//             alert(response["msg"]);
//             // window.location.reload();
//         }
//     })
//
// }


function init() {
    searchBtn.addEventListener("click", searchBtnClick);
}

init();
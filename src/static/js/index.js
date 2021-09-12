<<<<<<< HEAD
// searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("jsSearchButton");
const searchInput = document.getElementById("jsSearchInput");

// 처음 페이지 로딩될 때에는 검색창 숨김
// $(document).ready(function () {
//     $('#searchResultBox').hide();
//     $(function() {
//         $("form").submit(function() { return false; });
//     });
// });

 // 캐로셀 예매하기 버튼을 눌렀을 때 네이버 영화 상영일정을 팝업으로 띄워줌
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
    let search = $('#jsSearchInput').val() // 검색어 가져오기
    $('#searchResultText').empty(); // ~로 검색한 결과입니다 지우기
    $('#searchResultText').prepend(search); // 검색어 붙이기
    $('#searchResultText').append("(으)로 검색한 결과입니다."); // 그 뒤에 ~로 검색한 결과입니다 붙이기
    $('#searchResultRow').empty(); // 전 검색결과창 지우기
    $('#searchResultBox').show(); // 접혀져있던 검색결과창 보여주기
    $('#buttonBox').empty(); //버튼 초기화


    $.ajax({
        type: "GET",
        url: "/search",
        data: {search_give: search},
        success: function (response) {
            let json_search = JSON.parse(response['all_search_results']) //json string 형식을 json object 형식으로 변환
            search_results = json_search['items'] //변환된 json 리스트에서 영화정보가 담긴 items만 지정

            let page = parseInt(search_results.length / 10) //한 페이지에 보여줄 검색결과가 10개일 경우 생기는 페이지 수
            if (search_results.length % 10 !== 0) { //10으로 나눈 나머지 값이 있다면 페이지를 하나 추가
                page++;
            }
            if (page == 1) { //페이지의 수가 1이면 굳이 1페이지만 있는 버튼이 필요가 없으니 버튼 갯수를 0으로 한다
                page = 0;
            }

            // 페이지 숫자만큼 버튼 붙이기
            for (let b = 0; b < page; b++) {
                let temp_button = `<button class="list-btn" id="listbtn_${b + 1}"> ${b + 1} </button>`
                $('#buttonBox').append(temp_button);

            }

            // 기본으로 1 페이지 결과 출력
            listBtnClick(1, search_results);

            // 페이지 수에 따른 버튼 생성 및 이벤트핸들러
            listBtn1 = document.getElementById("listbtn_1");
            listBtn2 = document.getElementById("listbtn_2");
            listBtn3 = document.getElementById("listbtn_3");
            listBtn4 = document.getElementById("listbtn_4");
            listBtn5 = document.getElementById("listbtn_5");

            listBtn1.addEventListener("click", listBtnClick1);
            listBtn2.addEventListener("click", listBtnClick2);
            listBtn3.addEventListener("click", listBtnClick3);
            listBtn4.addEventListener("click", listBtnClick4);
            listBtn5.addEventListener("click", listBtnClick5);

            function listBtnClick1() {
                listBtnClick(1,search_results)
            }
            function listBtnClick2() {
                listBtnClick(2,search_results)
            }
            function listBtnClick3() {
                listBtnClick(3, search_results)
            }
            function listBtnClick4() {
                listBtnClick(4, search_results)
            }
            function listBtnClick5() {
                listBtnClick(5, search_results)
            }
        }
    })
=======
// const changeButton = document.getElementById("jsButtonChangePage");
//
//
// $(document).ready(function () {
//     $("#reviews-box").html("");
//
// });
//
// function changeButtonClick() {
//     alert("test");
// }
//
//
// function init() {
//     changeButton.addEventListener("click", changeButtonClick);
// }
// init();


function bookingPage1() {
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=11410674&qvt=0&query=%EB%B3%B4%EC%8A%A4%20%EB%B2%A0%EC%9D%B4%EB%B9%84%202%20%EC%83%81%EC%98%81%EC%9D%BC%EC%A0%95",'window','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=750,height=800,left=0, top=0, scrollbars=yes')
>>>>>>> 6875ced (main page + Nav, Footer)
}

function listBtnClick(num, search_results) {
    $('#searchResultRow').empty(); // 전 검색결과창 지우기

    for (let i = (num-1)*10; i < num*10; i++) {
        let rawTitle = search_results[i]['title']
        let title = rawTitle.replace(/(<([^>]+)>)/ig, "") //title에 붙어있는 태그들 제거
        let img = search_results[i]['image']
        let pubDate = search_results[i]['pubDate']
        let rawDirector = search_results[i]['director']
        let director = rawDirector.replace('|', "") //director에 붙어있는 |(bar) 제거
        let rate = search_results[i]['userRating']
        let link = search_results[i]['link']


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



<<<<<<< HEAD
function init() {
    searchBtn.addEventListener("click", searchBtnClick);
    searchInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        searchBtnClick()
    }});

    $('#searchResultBox').hide();
    $(function() {
        $("form").submit(function() { return false; });

    });
}


if(searchBtn) {
    init();
}


=======
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
>>>>>>> 6875ced (main page + Nav, Footer)

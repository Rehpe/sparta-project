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
}


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

let ransuueast = "";
let ransuuwest = "";
var resultComment = "";
// 東方の力士を選出

$("#set-btn").on("click", function() {
    $(this).prop("disabled", true);
    // 乱数を作るfor東方
    const ransuueast = Math.ceil(Math.random() * 5);

    // 条件分岐for東方
    let name = "";
    let image = "";
    let banzuke = "";
    
    if (ransuueast === 1) {
        name = '豊昇龍';
        image = '<img src="img/02hou.jpg" alt="">';
        banzuke = '大　関';
    }
    if (ransuueast === 2) {
        name = '若元春'
        image = '<img src="img/03waka.jpg" alt="">';
        banzuke = '関　脇';
    }
    if (ransuueast === 3) {
        name = '朝乃山'
        image = '<img src="img/04asano.jpg" alt="">';
        banzuke = '小　結';
    }
    if (ransuueast === 4) {
        name = '熱海富士'
        image = '<img src="img/05atami.jpg" alt="">';
        banzuke = '前頭筆頭';
    }
    if (ransuueast === 5) {
        name = '平戸海'
        image = '<img src="img/11hirado.jpg" alt="">';
        banzuke = '前頭二';
    }

    // 表示処理
    $("#eastshikoname").html(name);
    $("#eastrikisiimg").html(image);
    $("#eastbanzuke").html(banzuke);
    
});

// 西方の力士を選出

$("#start-btn").on("click", function() {
    $(this).prop("disabled", true);

    // 乱数を作るfor西方
    const ransuuwest = Math.ceil(Math.random() * 5);

    // 条件分岐for西方
    let name = "";
    let image = "";
    let banzuke = "";
    let resultImage = "";

    if (ransuuwest === 1) {
        name = '琴櫻';
        image = '<img src="img/06kotozakura.jpg" alt="">';
        banzuke = '大　関';
    }
    if (ransuuwest === 2) {
        name = '阿炎'
        image = '<img src="img/07abi.jpg" alt="">';
        banzuke = '関　脇';
    }
    if (ransuuwest === 3) {
        name = '大の里'
        image = '<img src="img/08oono.jpg" alt="">';
        banzuke = '小　結';
    }
    if (ransuuwest === 4) {
        name = '大栄翔'
        image = '<img src="img/09daiei.jpg" alt="">';
        banzuke = '前頭筆頭';
    }
    if (ransuuwest === 5) {
        name = '豪ノ山'
        image = '<img src="img/10gouno.jpg" alt="">';
        banzuke = '前頭二';
    }

    // 表示処理
    $("#westshikoname").html(name);
    $("#westrikisiimg").html(image);
    $("#westbanzuke").html(banzuke);
    


// 結果表示

if (ransuueast === ransuuwest) {
    resultComment = '取り直し！';
} else if (ransuueast < ransuuwest) {
    resultComment = 'おめでとう！';
} else {
    resultComment = '稽古積め！';
}

// 表示処理
$("#comment").html(resultComment);

});



// リセット
$("#reset-btn").on("click",function(){
    location.reload();  // ページを再読み込み
});
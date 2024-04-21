$(function(){
    // class属性が"btn"の要素がクリックされたら
    $('.btn').on('click',function(){
        $('.text-box').val('クリックしました！');
    });
});
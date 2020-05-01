
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  navigation: {
      nextEl: '.swiper-button-next',  //「次へ」ボタンの要素のセレクタ
      prevEl: '.swiper-button-prev',  //「前へ」ボタンの要素のセレクタ
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  speed: 2000,
  }
  new Swiper('.swiper-container', swipeOption);
  $(document).ready(function() {
    $('.drawer').drawer();
  });


      //■page topボタン

      $(function(){
      var topBtn=$('#pageTop');
      topBtn.hide();



      //◇ボタンの表示設定
      $(window).scroll(function(){
        if($(this).scrollTop()>80){

          //---- 画面を80pxスクロールしたら、ボタンを表示する
          topBtn.fadeIn();

        }else{

          //---- 画面が80pxより上なら、ボタンを表示しない
          topBtn.fadeOut();

        }
      });



      // ◇ボタンをクリックしたら、スクロールして上に戻る
      topBtn.click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;

      });


      });


  document.addEventListener('DOMContentLoaded', function () {
    var $tab__link = $('.tab1__link')
    var $tab_body_item = $('.tab1-body__item')
    $tab__link.on('click', function (e) {
      var target = $(e.currentTarget)
      //タブの表示非表示
      $tab__link.removeClass('on')
      target.addClass('on')
      //タブの中身の表示非表示
      var num = target.data('tab-body')
      $tab_body_item.removeClass('on')
      $('.tab1-body__item--' + num).addClass('on')
    })
  })


  $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		speed: 800,//スライドのスピード。初期値は300。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
		variableWidth: true,//幅の違う画像の高さを揃えて表示
		dots: true,//下部ドットナビゲーションの表示
	});



  $(function(){
    tab_vertical();
  });
  
  function tab_vertical(){
    $('#tab-vertical__tit li').click(function() {
      $('#tab-vertical__content li').hide();
      $('#tab-vertical__tit li').removeClass('current');
      $(this).addClass('current');
      index = $("#tab-vertical__tit li").index(this) + 1;
    $('#tab-vertical__content li:nth-child('+index+')').removeClass('current');
    $('#tab-vertical__content li:nth-child('+index+')').fadeIn();
    $('#tab-vertical__content li:nth-child('+index+')').addClass('current');
    });
  }

  


  
  

  
  
  
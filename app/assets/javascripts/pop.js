$(function(){

  $(".fa-edit").on( 'mouseover', function(){
    $(".chat-main__main-header__van").css( 'opacity', '1')
    $(".chat-main__main-header__van").css('transition', '0.3s')
  });
  $(".fa-edit").on( 'mouseout', function(){
    $(".chat-main__main-header__van").css( 'opacity', '0')
    $(".chat-main__main-header__van").css('transition', '0.1s')
  });

  $(".fa-cog").on( 'mouseover', function(){
    $(".pop-account").css( 'opacity', '1')
    $(".pop-account").css('transition', '0.3s')
  });
  $(".fa-cog").on( 'mouseout', function(){
    $(".pop-account").css( 'opacity', '0')
    $(".pop-account").css('transition', '0.1s')
  });

  $(".fa-plus").on( 'mouseover', function(){
    $(".pop-group").css( 'opacity', '1')
    $(".pop-group").css('transition', '0.3s')
  });
  $(".fa-plus").on( 'mouseout', function(){
    $(".pop-group").css( 'opacity', '0')
    $(".pop-group").css('transition', '0.1s')
  });

});
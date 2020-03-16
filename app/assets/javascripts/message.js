$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
     `<div class="messages" data-message-id="${message.id}">
     <div class="chat-main__messages__message">
       <div class="chat-main__messags__message__upper-info">
         <div class="chat-main__messages__message__upper-info__talker">
         ${message.user_name}
         </div>
           <div class="chat-main__messages__message__upper-info__date">
           ${message.created_at}
           </div>
         </div>
        <div class="chat-main__messages__message__textman">
         <p class="text__content">
         ${message.content}
         </p>
         <img src="${message.image}" >
       </div>
     </div>
   </div>`
     return html;
   } else {
     var html =
      `<div class="messages" data-message-id="${message.id}">
        <div class="chat-main__messages__message">
          <div class="chat-main__messages__message__upper-info">
            <div class="chat-main__messages__message__upper-info__talker">
            ${message.user_name}
            </div>
              <div class="chat-main__messages__message__upper-info__date">
              ${message.created_at}
              </div>
            </div>
           <div class="chat-main__messages__message__textman">
            <p class="text__content">
            ${message.content}
            </p>
          </div>
        </div>
      </div>`
     return html;
   };
 }
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $(".chat-main__messages").append(html);
    $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
    $("form")[0].reset();
    $(".chat-main__form__new-message__btn").prop('disabled', false);
    return false;
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
   });
 })

 var reloadMessages = function() {
  var last_message_id = $('.messages:last').data("message-id");
  console.log(last_message_id)
  $.ajax({
    url: "api/messages",
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages) {
    console.log(messages)
    if (messages.length !== 0) {
    var insertHTML = '';
    $.each(messages, function(i, message) {
      insertHTML += buildHTML(message)
    });
    $('.chat-main__messages').append(insertHTML);
    $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
   }
  })
  .fail(function() {
    alert('error');
  });
 };
 if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 7000);
 }
});

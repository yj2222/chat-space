$(function () {
  
  function buildHTML(message) {

    image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    
    var html = `<div class="message" data-message-id="${message.id}">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-meesage">
            <p class="lower-message__content">
              ${message.content}
            </p>
            ${image}
          </div>
        </div>`
    return html;
  }
  $('#new_message').on('submit', function (e) {
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
    .done(function (data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__submit').prop('disabled', false);
      $('form')[0].reset();
    })
    .fail(function () {
      alert('Please Type a Message!');
    })
  })  
  var reloadMessages = function () {
    var last_message_id = $('.message:last').data("message-id");
    var group_id = $(".group").data("group-id");

    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {last_id: last_message_id}
    })
    .done(function (messages) {
      var insertHTML = '';
      messages.forEach(function (message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
      })
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function () {
    });
  };
  setInterval(reloadMessages, 5000);
});

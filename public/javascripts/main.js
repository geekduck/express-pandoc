$(function(){
  "use strict";
  $('#convertButton').on('click', function(event){
    $('#message').text();
    var srcLan = $('#srcLanguage').val();
    var dstLan = $('#dstLanguage').val();
    var srcText = $('#srcText').val();
    var data = {
      from: $('#srcLanguage').val(),
      to: $('#dstLanguage').val(),
      srcText: $('#srcText').val()
    };
    $.ajax({
      url:'/api/pandoc',
      data: data
    }).done(function(response, textStatus, jqXHR){
      if(response.error){
        $('#message').text("エラー: " + response.message);
        return;
      }
      $('#dstText').val(response.dstText);
    }).fail(function(jqXHR, textStatus, error){
      $('#message').text(textStatus);
      return;
    });
  });

  $('#swapButton').on('click', function(event){
    function swap(src, dst){
      var swap = $(src).val();
      $(src).val($(dst).val());
      $(dst).val(swap);
    }

    swap('#srcText', '#dstText');
    swap('#srcLanguage', '#dstLanguage');
    var swap = $('#srcText').val();
  });
});

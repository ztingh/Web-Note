$(function(){
  // add item
  $('form').on('submit', function(){
    var
      input = $('#add').val(),
      addItem = {item: input};
    $.ajax({
      type: 'post',
      url: '/todo',
      data: addItem,
      success: function(data) { location.reload(); }
    });
  });
  // delete item
  $('li').on('click', function() {
    var itemText = $(this).text().replace(/\s/g, '-');
    $.ajax({
      type: 'delete',
      url: '/todo/' + itemText,
      success: function() { location.reload(); }
    });
  });
});

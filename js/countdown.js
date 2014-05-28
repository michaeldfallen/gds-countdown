(function() {

  var root = this,
      $ = root.jQuery,
      querystring;

  querystring = function(key) {
    var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
    var r=[], m;
    while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
    return r;
  };

  window.querystring = querystring;
}.call(this));

$(document).ready(function() {
  var now = new Date();
  var date = Date.parse(querystring('date'));
  var seconds = (date - now) / 1000;
  var clock = $('.counter').FlipClock(seconds, {
    clockFace : 'DailyCounter',
    countdown : true
  });
  var name = decodeURI(querystring('name'));
  $('.name').html(name);
});
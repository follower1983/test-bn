$(document).ready(function(){

  $('#fullpage').animate({
    'opacity':'1'
  }, 500)

  // menu

  function menuOpen() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        $('#overlay').fadeToggle(500)
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  };
  menuOpen();

  //fullpage
  $('#fullpage').fullpage({
    anchors:['firstPage','secondPage','3rdPage','4thPage'],
    menu: '#menu',
    scrollbar: false,
    loopHorizontal: false
  });


  // slider ajax

  $.ajax({
    url: 'D:/work/BULETEN/files/content.json',
    type: 'get',
    dataType: 'json',
    success: function(data){
      //console.log('Load was performed.');
      data.forEach(function(item, i) {
         $('#slide_' + i + ' .slide-text').html(item.content)
      });
    },
    error:function(){
      console.log("Error");
    }
  })


})

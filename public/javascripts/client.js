new AppView();

ENTER_KEY = 13;

$(function() {

	$(document).load().scrollTop(0);
	
  $('#full-cover').on({
    'mousewheel' : function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
    }
  });

	setTimeout(function() {
		$('#full-cover').trigger('click');
	}, 2000);

  $('#full-cover').on('click', function() {
			setTimeout(function(){ 
				$('#full-cover').remove();
				$(window).scrollTop(0);
			}, 1500);
	});

});
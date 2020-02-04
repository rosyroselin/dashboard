$(document).ready(function() {
		$('.table-1, .table-2').DataTable( {
			responsive: {
				details: {
					display: $.fn.dataTable.Responsive.display.modal( {
						header: function ( row ) {
							var data = row.data();
							return 'Details for '+data[0]+' '+data[1];
						}
					} ),
					renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
						tableClass: 'table'
					} )
				}
			}
		} );
	} );
//Header Sticky
$(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});


// Login Page
$(function() {
	$('body').slides({
		images		: ['images/1.jpg', 'images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg'],
		interval	: 6000,
		speed		: 4000,
	});

//hidden otp section
	 $(".hide-otp").click(function()
		 {
			$(".hidden-otp").show('slow');
			$(".hide-otp").hide('slow')
			return false;
		 }); 
  });


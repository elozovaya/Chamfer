$(document).ready(function(){
	$('.carousel').slick({
		infinite: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
]
	});

	initMobileNav();
	initMobileSidebar();
	$('select').select2();
});

function initMobileNav(){
	// Create the dropdown base
	var nav = $("#main-nav");
	$("<select class='nav-select visible-xs' />").appendTo(nav);
	var select = nav.find("select");
	// Populate dropdown with menu items
	nav.find("a").each(function() {
		var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("nav select");//nav-teg
	});

	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}


function initMobileSidebar(){
	// Portfolio, create the dropdown base
	var sidebar = $("#portfolio-sidebar");
	$("<select class='sidebar-select visible-xs' />").appendTo(sidebar);
	var select = sidebar.find("select");
	// Populate dropdown with menu items
	sidebar.find("a").each(function() {
		var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
			}).appendTo(select);
	});

	select.change(function() {
		window.location = $(this).find("option:selected").val();
	});
}
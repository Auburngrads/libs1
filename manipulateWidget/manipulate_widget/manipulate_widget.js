function select(el, id) {
  el = $(el);
  var active = el.hasClass("active");
  $(".mw-btn-settings,.mw-btn-area").removeClass("active");
  $(".mw-inputs").css("display", "none");
  if (!active) {
	  el.addClass("active");
	  $("#" + id).css("display", "block");
  }

  // Resize all widgets
  var widgets = HTMLWidgets.findAll(document, ".mw-chart>.html-widget");
  var ids = $.map($(".mw-chart>.html-widget"), function(x, i) {return x.id});
  var container;
  if (widgets) {
	  for (var i = 0; i < widgets.length; i++) {
		  container = document.getElementById(ids[i]);
		  if (widgets[i]) {
		  HTMLWidgets.widgets[0].resize(container, container.clientWidth, container.clientHeight, widgets[i]);
		  }
	  }
  }
}



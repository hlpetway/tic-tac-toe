(function() {
  var source = $("#grid-template").html();
  var template = Handle.bars.compile(source);

  $("#grid").html(template(GRID_NAMESPACE.data));

}) ();

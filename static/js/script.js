$(function() {
	var form = $("#Form");
	form.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form.serialize(),
			success: function(data) {
                $("#modal").modal("hide");
                $("#list").append('<li class="col-3 list-group-item"> &#8226; ' + data + '</li>');
			},
			error: function(xhr, ajaxOptions, thrownError) {
                 console.log("error on create");
                 console.log(xhr);
                 console.log(ajaxOptions);
                 console.log(thrownError);
			}
	  });
    });

    $("#check").click(function() { $("#modal").modal("show"); });

});
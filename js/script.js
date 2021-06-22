$(document).ready(function(){

    //Toggle Item Icons With descriptions/.

$('#image5').click(function(){
  $('#image5').toggle();
    $('#desi').toggle();
})
$('#desi').click(function(){
  $('#desi').toggle();
  $('#image5').toggle();
})
$('#image6').click(function(){
  $('#image6').toggle();
   $('#dev').toggle();
})
$('#dev').click(function(){
  $('#dev').toggle();
  $('#image6').toggle();
})
$('#image7').click(function(){
  $('#image7').toggle();
   $('#pm').toggle();
})
$('#pm').click(function(){
  $('#pm').toggle();
  $('#image7').toggle();
})
    //Hovering Images On Portfolio Section.

$("#black").mouseover(function(){
    $("#overlay").show();

});

  $().mouseout(function(){
    $("#overlay").hide();

  });

$("#ontario").mouseover(function(){
    $("#overlay1").show();
})

  .mouseout(function(){
      $("#overlay1").hide();

  });

$("#pyramids").mouseover(function(){
    $("#overlay2").show();

})

  .mouseout(function(){
    $("#overlay2").hide();

});

$("#jim").mouseover(function(){
    $("#overlay3").show();
})
  .mouseout(function(){
    $("#overlay3").hide();
});

$("#nice").mouseover(function(){
    $("#overlay4").show();
})
  .mouseout(function(){
    $("#overlay4").hide();
});

$("#calculator").mouseover(function(){
    $("#overlay5").show();
})
  .mouseout(function(){
    $("#overlay5").hide();
});

$("#burned").mouseover(function(){
    $("#overlay6").show();
})
  .mouseout(function(){
    $("#overlay6").hide();
});

$("#jim").mouseover(function(){
    $("#overlay3").show();
})
  .mouseout(function(){
    $("#overlay3").hide();
});

$("#giraffe").mouseover(function(){
    $("#overlay7").show();
})

  $().mouseout(function(){
    $("#overlay7").hide();  
});

  //Add a white background.

  //Collect User input From contact form.

$('#myForm').submit(function(event){
    event.preventDefault();
    let name =
$('#name').val();
    let email =
$('#email').val();
    let message =
$('#message').val();
    let output = "Hello " + name + " ...We have received your message, thanks alot for reaching out to us."
    alert(output);
    
$('input').val('').removeAttr('checked').removeAttr('selected');

$('#message').val('').removeAttr('checked').removeAttr('selected');
  });

});

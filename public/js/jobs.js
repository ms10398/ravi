
  console.log("SUP");
  $.ajax({url: "/users/jobs", success: function(result){
console.table(result);
if (result.length!=0) {
  for(i in result)
  $('#jobs').html(`<h1> ${i.title} </h1> <br>`);
}

  }});

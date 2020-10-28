$(".hide-button").click(function(){
  $(".ghost-image").fadeOut();
});

$(".show-button").click(function(){
  $(".ghost-image").fadeIn();
});

$(".update-img-button").click(function(){
  $(".ghost-image").attr("src","https://media.tenor.com/images/5b61a360d83b8fccc05f5060b048c6e1/tenor.gif");
  $("h1").text("Get Rick Rolled lol")
});

$(".message-button").click(function(){
  let msg = $("input").val();
  $(".message").append(`<p>${msg}<p>`);
});

$(".name-button").click(function(){
  let msg = $("input").val();
  $("h1").text("My name is "+msg);
  
});
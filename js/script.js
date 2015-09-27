/* Default */

$(document).ready(function(){
var number = 10;
var output = "";
var title = "";
$.ajax({ 
    url: 'https://api.imgur.com/3/gallery.json',
    headers: {
        'Authorization': 'Client-ID 9bddd2446d95576'
    },
    type: 'GET',
    success: function(data) { 
    $.each(data,function(key,value){
      $.each(value,function(key,value){
        output += '<h1>'+value.title+'</h1>';
        output += '<a target="_blank" href="' +value.link+ '">' + '<img id="images" alt ="Click Here(Album)"src="'+value.link+'">'+'</a>';
        output += '<hr>';
        $('div ul#img-group div').html(output);
      if(key > number) return false;
      })
    })
    } 
    })
    



/*On Change*/

$('#photo-number').change(function(){
var number = $('#photo-number').val();
var output = "";
var title = "";
$.ajax({ 
    url: 'https://api.imgur.com/3/gallery.json',
    headers: {
        'Authorization': 'Client-ID 9bddd2446d95576'
    },
    type: 'GET',
    success: function(data) { 
    $.each(data,function(key,value){
      $.each(value,function(key,value){
        output += '<h1>'+value.title+'</h1>';
        output += '<a target="_blank" href="' +value.link+ '">' + '<img id="images" alt ="Click Here(Album)"src="'+value.link+'">'+'</a>';
        output += '<hr>';
        $('div ul#img-group div').html(output);
      if(key > number) return false;
      })
    })
    } 
    
    })
})


/*On KeyUp*/

$('#photo-number').change(function(){
var number = $('#photo-number').val();
var output = "";
var title = "";
$.ajax({ 
    url: 'https://api.imgur.com/3/gallery.json',
    headers: {
        'Authorization': 'Client-ID 9bddd2446d95576'
    },
    type: 'GET',
    success: function(data) { 
    $.each(data,function(key,value){
      $.each(value,function(key,value){
        output += '<h1>'+value.title+'</h1>';
        output += '<a target="_blank" href="' +value.link+ '">' + '<img id="images" alt ="Click Here(Album)"src="'+value.link+'">'+'</a>';
        output += '<hr>';
        $('div ul#img-group div').html(output);
      if(key > number) return false;
      })
    })
    } 
    
    })
})

})
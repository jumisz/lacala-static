var loadContent = function(ev, page) {
  
  if (ev != null) {
    ev.preventDefault();
  }

  $('#image').html("<img class='shadow' src='images/" + page.img + "'>");
  $('#main').load(page.content);

};

var loadSection = function(ev, section) {
  if (ev != null) {
    ev.preventDefault();
  }
  $('#display-section').load(section.content);
  

};

var sections = {
  buffets : {
    content : 'menu/buffet.html'
  },
  dinners : {
    content : 'menu/dinner.html'
  }
 

};

var pages = {
  index : {
    itemid : 'index',
    content : 'main.html',
    img : 'empanada.jpg'
  },
  contact : {
    itemid : 'contact',
    content : 'contact.html',
    img : 'pata_jamon.jpg'
  },
  menus : {
    itemid : 'menus',
    content : 'our_menus.html',
    img : 'anchoas.jpg'

  },
  about : {
    itemid : 'about',
    content : 'about.html',
    img : 'anchoas.jpg'

  }
};

$(document).ready(function() {
  loadContent(null, pages.index);
  
  $('#menu a').click(function(ev) {
    loadContent(ev,pages[ev.target.id]);
  });
  
  
  
 
 
});


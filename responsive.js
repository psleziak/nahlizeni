
$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');

$('#header-left').prepend('<a id="menu" onclick="toggleMenu()"><i class="fa fa-bars"></i></a>');

// zmena Parcela menu
var parcelaMenu = $('<ul class="submenu"></ul>')
parcelaMenu.append('<li><a>Item 1</a></li>')
parcelaMenu.append('<li><a>Item 2</a></li>')

var parcela = $('#menu-horizontal-left a[title="Vyhledat parcelu"]')
parcela.removeAttr('href');
parcela.click(function(e) {
  toggleElement(parcelaMenu);
})
$(document).click(function(e) {
  var container = parcela.parent();
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    toggleElement(parcelaMenu, true);
  }
});

parcela.parent().append(parcelaMenu)

function toggleMenu() {
  toggleElement($('#menu-horizontal-box'));
}

function toggleElement(el, forceHide) {
  if (el.is(':visible') || forceHide) {
  	el.removeClass('expanded')
  } else {
  	el.addClass('expanded')
  }
}


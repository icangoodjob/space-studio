var menuTrigger = document.getElementsByClassName('menu__trigger') [0];
var adaptiveMenu = document.getElementsByClassName('adaptive__menu') [0];
var	closeMenu = document.getElementsByClassName('close__menu') [0];
var adaptiveLink = document.getElementsByClassName('adaptive__link') [0];
var painBlock = document.getElementsByClassName('technologies') [0];
function anchor () {
	adaptiveMenu.classList.remove('active');
	menuTrigger.style.display = "block";
	painBlock.style.display = "block";
}
menuTrigger.onclick = function () {
	adaptiveMenu.classList.add('active');
	menuTrigger.style.display = "none";
	painBlock.style.display = "none";
}
closeMenu.onclick = function () {
	adaptiveMenu.classList.remove('active');
	menuTrigger.style.display = "block";
	painBlock.style.display = "block";
}

$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout: 8000,
})
$('.mobile-tab').hide();
$('#burg').on('click', function(){
	$('.mobile-tab').slideToggle();
})
$(".price-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="price-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="price-options">';
      $(this).find("option").each(function() {
        template += '<span class="price-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="price-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".price-option:first-of-type").hover(function() {
  $(this).parents(".price-options").addClass("option-hover");
}, function() {
  $(this).parents(".price-options").removeClass("option-hover");
});
$(".price-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".price-select").removeClass("opened");
  });
  $(this).parents(".price-select").toggleClass("opened");
  event.stopPropagation();
});
$(".price-option").on("click", function() {
  $(this).parents(".price-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".price-options").find(".price-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".price-select").removeClass("opened");
  $(this).parents(".price-select").find(".price-select-trigger").text($(this).text());
});
$(function(){
  $(".phone").mask("+38 (099) 999-9999");
  $(".date").mask("99/99/9999")
});
$(document).ready(function(){

  $('.support-card__btn').click(function(event){

    if($('.support-cards').hasClass('one')){
      $('.support-card__btn').not($(this)).removeClass('active');
      $('.support-card__list').not($(this).next()).slideUp(700);
    }

    $(this).toggleClass('active').next().slideToggle(700);
  });
});

// Плавная прокрутка при нажатии на ССЫЛКУ до якоря (блока)
$(function(){
  $('.portfolio__link').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.portfolio-title').offset().top }, 2000);
    e.preventDefault();
  });
  $('.price__link').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.price__title').offset().top }, 3000);
    e.preventDefault();
  });
  $('.advantages__link').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.title-about').offset().top }, 2000);
    e.preventDefault();
  });
  $('.questions__link').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.questions__title').offset().top }, 3000);
    e.preventDefault();
  });
});
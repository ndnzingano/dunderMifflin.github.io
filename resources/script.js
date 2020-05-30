var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })

$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
      /*direction indica a direção do scrolling: para cima, para baixo */
      /*Se estiver indo para baixao*/
      if(direction=="down"){
         /*Adicionar a classe _sticky_ ao elemento _nav_*/
         $('nav').addClass('sticky');
      }else{
          /*Se tiver indo para cima*/
         /*Remover a classe _sticky_ do elemento _nav_*/
         $('nav').removeClass('sticky');
      }
      
    }, {
        /*Define que o gatilho será ativado 60px antes de chegar na seção features*/
       offset: '60px;'
    });
  
  /*Suavização do scrolling*/
  
    /*Ao clicar no elemento classe js--scroll-to-testimonials,
    seleciona os elementos html e body, então chama animação de scrolling para a seção js--section-photo com velocidade de 1000ms ou seja 1s*/
     $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-photo').offset().top}, 1000);
     
     });
  
  /*Agora aplique o efeito para os demais botões do hero header*/
  
  });
/* Mobile navigation */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }        
});


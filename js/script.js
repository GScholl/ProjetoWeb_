const contadorPeloIdElemento = (
  id_elemento,
  minimo,
  maximo,
  tempo_latencia
) => {
  let contador = minimo;

  const intervalId = setInterval(() => {
    $(id_elemento).text("+" + contador);

    if (contador === maximo) {
      clearInterval(intervalId);
    }

    contador++;
  }, tempo_latencia); // Intervalo de 100 milissegundos
};

$(window).on("scroll", function () {
  let posicaoScroll = $(this).scrollTop();
  if (posicaoScroll > 200) {
    contadorPeloIdElemento("#indicador-palestrante", 0, 12, 500);
    contadorPeloIdElemento("#indicador-palestras", 0, 25, 250);
    contadorPeloIdElemento("#indicador-participantes", 0, 1690, 1);
  }
});

$("#form-inscricao").on("submit", function (e) {
  e.preventDefault();
  $("#texto-botao").append(`&nbsp;<div class="spinner-border text-white spinner-border-sm" role="status">
  
</div>`);
window.setTimeout(function(){
  $("#texto-botao").html(`Inscrever-se`);
  $("#mensagem-sucesso").slideDown();
},1000);
window.setTimeout(function(){

  $("#mensagem-sucesso").slideUp();

},8000)


});

$(".agenda-dia").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

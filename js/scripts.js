// Codigo para voltar ao inicio da pagina

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    }
    
    window.addEventListener('scroll', () => {
    const arrowUp = document.querySelector('.arrow-up');
    if (window.scrollY > 200) { // Exibe a seta após rolar 200 pixels
    arrowUp.classList.add('show-arrow');
    } else {
    arrowUp.classList.remove('show-arrow');
    }
    });
    
    // Função para exibir o conteúdo oculto e mostrar o botão "Leia mais"

  $(document).ready(function() {
    $(".botao-leia-mais").on("click", function() {
      $(".mais-conteudo").slideToggle();
      $(this).text(function(i, text) {
        return text === "Leia mais" ? "Mostrar menos" : "Leia mais";
      });
    });
  });


      
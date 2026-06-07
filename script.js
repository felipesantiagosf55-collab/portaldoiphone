// Função para criar o efeito de retorno ao início
  /*function ativarLoopCarrossel(seletor) {
    const carrossel = document.querySelector(seletor);
    
    if (!carrossel) return;

    carrossel.addEventListener('scroll', () => {
      // scrollLeft: o quanto o usuário já rolou para a direita
      // scrollWidth: o tamanho total horizontal do carrossel interno
      // clientWidth: a largura visível do carrossel na tela
      const chegouAoFim = carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 5;

      if (chegouAoFim) {
        // Remove temporariamente o scroll-snap para não travar a animação de volta
        carrossel.style.scrollSnapType = 'none';
        
        // Joga a rolagem de volta para o começo de forma suave
        carrossel.scrollTo({
          left: 0,
          behavior: 'smooth'
        });

        // Reativa o scroll-snap após a animação de retorno acabar (400ms)
        setTimeout(() => {
          carrossel.style.scrollSnapType = 'x mandatory';
        }, 400);
      }
    });
  }

  // Ativa o monitoramento nos seus dois carrosséis
  ativarLoopCarrossel('div.carrossel');
  ativarLoopCarrossel('div.carrosselC');*/
  
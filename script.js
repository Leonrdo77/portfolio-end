const elementos = document.querySelectorAll(
    ".apresentacao__conteudo, .sobre__conteudo, .card-info, .projeto"
);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }
    });
});

elementos.forEach((elemento) => {
    elemento.classList.add("esconder");
    observer.observe(elemento);
});
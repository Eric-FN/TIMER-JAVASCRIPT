function relogio() {
  function criaSegundos(segundos) {
    const data = new Date(segundos * 1000); //o javascript considera milisegundos
    return data.toLocaleTimeString("pt-PT", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }
    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }
    if (el.classList.contains("zerar")) {
      relogio.classList.add("zerado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
  /* iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("pausado");
  clearInterval(timer); //isto está reiniciando o timer
  iniciaRelogio();
});
pausar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.classList.add("pausado");
});
zerar.addEventListener("click", function (event) {
  relogio.classList.add("zerado");
  clearInterval(timer);
  relogio.innerHTML = "00:00:00"; //retorna o html
  segundos = 0; //reinicia a variavel
}); */
}
relogio();

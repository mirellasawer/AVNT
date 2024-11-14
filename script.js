const avancarBtns = document.querySelectorAll('.btn-proximo');

avancarBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const passoAtual = document.querySelector('.ativo');
        const idProximoPasso = `passo-${this.dataset.proximo}`;

        passoAtual.classList.remove('ativo');
        document.getElementById(idProximoPasso).classList.add('ativo');
    });
});

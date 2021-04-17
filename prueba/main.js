let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let Despla_actual = window.pageYOffset;
    if (ubicacionPrincipal >= Despla_actual) {
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-100px'
    }
    ubicacionPrincipal = Despla_actual;

}
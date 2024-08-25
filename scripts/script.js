function redirecionarCategoria(elementoSelecionado){
    let categoria = elementoSelecionado.selectedIndex;
    
    switch(categoria) {
        case 1:
            window.location.href = "/siteCulinarioJonasPinheiro/paginas/salgadas.html";
            break;
        case 2:
            window.location.href = "/siteCulinarioJonasPinheiro/paginas/doces.html";
            break;
        default:
            window.location.href = "/siteCulinarioJonasPinheiro/paginas/drinks.html";
    }
}

function mostrarMenu(){
    let menuMobile = document.getElementById("menuMobile");

    if(menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    }
    else{
        menuMobile.classList.add("open")
    }
}

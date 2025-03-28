function precisoAssistir(filmesAssistidos) {
    var totalFilmes = 200;
    return `Ainda faltam ${totalFilmes - filmesAssistidos} filmes para assistir`;
}

function jaAssisti(filmesAssistidos, totalFilmes) {
    return `Já assisti ${filmesAssistidos} do total de ${totalFilmes} filmes`;
}

precisoAssistir(20);
jaAssisti(20);

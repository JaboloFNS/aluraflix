var catalogoFilmes = ["https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg", "https://img.elo7.com.br/product/original/269D300/big-poster-nos-filme-lo01-tamanho-90x60-cm-presente-geek.jpg", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg", "https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-pedra-filosofal-01-original1.jpeg?quality=70&strip=info&w=395", "https://img.elo7.com.br/product/original/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg"];

for (i = 0; i < catalogoFilmes.length; i++) {
    document.getElementById("listagem").innerHTML += ("<img src=" + catalogoFilmes[i] +  ">");
}
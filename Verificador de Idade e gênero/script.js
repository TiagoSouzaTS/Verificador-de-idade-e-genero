function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){ //Não seria necessário colocar o Number, mas é bom pra ficar explicíto na leitura do código.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Através do Dom usando o (createElement), o objeto img está recebendo a CRIAÇÃO de uma TAG HTML <IMG>
        img.setAttribute('id', 'foto') //Via JavaScript foi adicionado um Id chamado Foto para a Tag html <IMG>
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=00 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png') //Quando a Tag img é criada por Javascript essa é a forma de chamar ela passando o atributo src com o caminho, nome e extensão documento. 
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
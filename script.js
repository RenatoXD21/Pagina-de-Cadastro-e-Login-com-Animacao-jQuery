alternar = (x,y) =>                                                         //função que faz a alternância entre os formulários ( x = opção selecionada ; y = atual )
{
    $('nav button').eq(x).addClass('selecionado')                           //marca e desmarca os botões
    $('nav button').eq(y).removeClass('selecionado') 

    alternarTempo = 1000                                                    //tempo da animação de troca de tela ( 1000 = 1 segundo )

    $('form').eq(y).animate({opacity: 0}, (alternarTempo/2) , ()=>          //animação de desaparecer e chamada de função
    {
        $('form').eq(y).css('display','none')                               //mostra e oculta as telas
        $('form').eq(x).css('display','flex') 

        $('form').eq(x).animate({opacity: 1}, (alternarTempo/2))            //animação de aparecer
    })
}

$('nav button').eq(0).click( ()=>alternar(0,1) )                            //chama a função de alternar de acordo com o botão pressionado
$('nav button').eq(1).click( ()=>alternar(1,0) )

$('.senhaBox img').click( function()                                        //função ao clickar no cadeado da senha
{
    if( $(this).prev().attr('type')=='password' )                           //verifica o tipo do elemento anterior (a caixa de input da senha)
    {
        $(this).prev().attr('type','text')                                  //muda o tipo do input
        $(this).attr('src','img/unlock.png')                                //muda a imagem
        $(this).attr('title','Ocultar Senha')                               //muda a mensagem ao passar o mouse sobre
    }
    else
    {
        $(this).prev().attr('type','password')
        $(this).attr('src','img/lock.png')
        $(this).attr('title','Mostrar Senha')
    }
})
let btn = document.querySelector('#copy');
btn.addEventListener( 'click', function(e) {

  let textArea = document.querySelector( '.text' );
  textArea.select();
  document.execCommand( 'copy' );
  btn.innerText = "Texto Copiado"
  
});
setInterval(()=>{
        btn.classList.remove( 'ativo' );
        btn.innerText = "Copiar Texto"
}, 5000)

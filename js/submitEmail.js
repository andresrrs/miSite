const btnEnviar = document.getElementById("#enviarEmail");

function enviar(){
    const name = document.getElementById('name').value;
    const  email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    window.location.href='mailto:c.andres1489@gmail.com?subject=EnvioDesdeFormulario&body=Nombre%3A%20${name}%0AEmail%3A%20${email}%0ATelefono%3A%20${phone}%0AMensaje%3A%20${message}';
}
btnEnviar.addEventListener('click',function(){
  enviar();
});
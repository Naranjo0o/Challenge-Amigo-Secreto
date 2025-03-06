let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Captura el input donde el usuario escribe
    let nombreAmigo = inputAmigo.value.trim(); // Obtiene el valor del input y elimina espacios en blanco
    let lista = document.getElementById("listaAmigos"); 

    if (nombreAmigo === '') {
        alert("Error! Por favor ponga un nombre correcto");
        return;
    } 

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; 

    lista.innerHTML = "";

    amigos.forEach(amigo =>{
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);


    });

}


    function sortearAmigo() {
        let resultado = document.getElementById("resultado");
    
        if (amigos.length === 0) {
            alert("No tienes ningun amigo ahorita, ve a hacer algunos!");
            return;
        }
    
        let random = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[random];
    
        resultado.innerHTML = "El amigo secreto es: "+ amigoAleatorio;
    }
 
const pantalla= document.querySelector(".pantalla");
const botones =document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonApretado= boton.textContent;

        if (boton.id==="C"){
            pantalla.textContent="0";
            return;
        }

        if (boton.id==="Borrar"){
            if (pantalla.textContent.length===1){
                pantalla.textContent="0";
            }
            else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
           
            return;
        }

        if (boton.id==="igual"){
            try{
                pantalla.textContent=eval(pantalla.textContent);
            return;
            }
            catch {
                pantalla.textContent="Error de sintaxis!"
            }
            return;
            
        }
      

        if (pantalla.textContent==="0" || pantalla.textContent==="Error de sintaxis!"){
            pantalla.textContent=botonApretado;
        }
        else{
            pantalla.textContent+= botonApretado;
        }


})
})
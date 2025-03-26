
const commentairebutton = document.querySelector("#commentairebutton");
commentairebutton.addEventListener ("click",()=>{

    const nom = prompt('Veuillez entrer votre nom')
    
    if (nom !==null){

        const commentaire = prompt('Ecrivez votre commentaire!');
        
        
    if (commentaire !==null)  
        alert("Merci pour votre commentaire")

    

        
   } else {alert ('bye');

    };


});


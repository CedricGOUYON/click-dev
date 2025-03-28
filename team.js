
const commentairebutton = document.querySelector("#commentairebutton");

commentairebutton.addEventListener ("click",()=>{

    const nom = prompt('Veuillez entrer votre nom')

    if (nom === ""){
     alert ("Votre nom n'est pas renseigné!");
     return;
    } 

    const commentaire = prompt('Ecrivez votre commentaire!');
    document.getElementById("outputMessage").textContent = nom.valueOf() + " : " + commentaire.valueOf()
   if (commentaire === ""){
    alert ("Le commentaire est vide");
    return;
     
    } 
alert ("votre commentaire sera traité par un administrateur")

});
 
 



     

    

        
   

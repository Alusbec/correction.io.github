var tabprenom=new Array("Adrien", "Phillipe", "Stan", "ThomasD", "ThomasL", "Hugo", "Rémy", "James", "Clément", "Laurence", "Laurie", "Ahmed")
function aleatoire(){
var rand=Math.floor(Math.random()*12)
document.getElementById('affectation').value=tabprenom[rand]
}
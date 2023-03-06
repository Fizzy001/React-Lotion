
export default function hide(){
    var click =document.getElementById("left");

    if(click.style.display == "block"){
        click.style.display = "none";
    }
    else{
        click.style.display = "block";
    }
}
document.getElementById("dateInput").addEventListener("change", function()
{
        var input=this.value;
        console.log(input);
        var check= input.charAt(9);
        console.log(check);
        var cityIndex=document.getElementById("selection");
        var city=cityIndex.options[cityIndex.selectedIndex].text;
        console.log(city);

        if (check%2==1) {
            if (city=="Ahemdabad") {
                document.querySelector(".multiplexBoxAhemdabad1").style.display = "flex";
            }
            if (city=="Ambala") {
                document.querySelector(".multiplexBoxAmbala1").style.display = "flex";
            }
            if (city=="Agra") {
                document.querySelector(".multiplexBoxAgra1").style.display = "flex";
            }
            if (city=="Bangalore") {
                document.querySelector(".multiplexBoxBangalore1").style.display = "flex";
            }
            if (city=="Chennai") {
                document.querySelector(".multiplexBoxChennai1").style.display = "flex";
            }
            if (city=="Delhi") {
                document.querySelector(".multiplexBoxDelhi1").style.display = "flex";
            }
            if (city=="Guwahati") {
                document.querySelector(".multiplexBoxGuwahati1").style.display = "flex";
            }
            if (city=="Hyderabad") {
                document.querySelector(".multiplexBoxHyderabad1").style.display = "flex";
            }    
            if (city=="Kolkatta") {
                document.querySelector(".multiplexBoxKolkatta1").style.display = "flex";
            }
            if (city=="Mumbai") {
                document.querySelector(".multiplexBoxMumbai1").style.display = "flex";
            }       
            
        }
        else
        {
            if (city=="Ahemdabad") {
                document.querySelector(".multiplexBoxAhemdabad2").style.display = "flex";
            }
            if (city=="Ambala") {
                document.querySelector(".multiplexBoxAmbala2").style.display = "flex";
            }
            if (city=="Agra") {
                document.querySelector(".multiplexBoxAgra2").style.display = "flex";
            }
            if (city=="Bangalore") {
                document.querySelector(".multiplexBoxBangalore2").style.display = "flex";
            }
            if (city=="Chennai") {
                document.querySelector(".multiplexBoxChennai2").style.display = "flex";
            }
            if (city=="Delhi") {
                document.querySelector(".multiplexBoxDelhi2").style.display = "flex";
            }
            if (city=="Guwahati") {
                document.querySelector(".multiplexBoxGuwahati2").style.display = "flex";
            }
            if (city=="Hyderabad") {
                document.querySelector(".multiplexBoxHyderabad2").style.display = "flex";
            }    
            if (city=="Kolkatta") {
                document.querySelector(".multiplexBoxKolkatta2").style.display = "flex";
            }
            if (city=="Mumbai") {
                document.querySelector(".multiplexBoxMumbai2").style.display = "flex";
            }       
        }

})


document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating); 
    });
    
    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){
        if(match){
            star.classList.remove('rated');
        }else{
            star.classList.add('rated');
        }
        if(star === span){
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}
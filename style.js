const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 4) * 2;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()



var mybotton = document.getElementById('goup');

window.onscroll = function () {

    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 1000){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};

mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}

let cards = document.querySelectorAll(".cardd");
let links = document.querySelectorAll(".link");

for (let i = 0; i < cards.length; i++){
    let cardd = cards[i];
    let link = links[i];

    cardd.addEventListener("click", () =>{
        link.click();
    })
}
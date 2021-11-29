document.addEventListener('DOMContentLoaded', function(event) {

    
    document.querySelector(".form-select").addEventListener('change',   function() {

    let d = document.querySelector(".form-select").value;
        
    let featuredFish = document.querySelector('.featured-fish')
    
    if (d === '1'){
        featuredFish.setAttribute("src","Img/Largemouth.png")
        featuredFish.setAttribute('id','slide_1')
    }

    else if (d === '2'){
        featuredFish.setAttribute("src","Img/Carp.png")
        featuredFish.setAttribute('id','slide_2')
    }

    else if (d === '3'){
        featuredFish.setAttribute("src","Img/Bluegill.png")
        featuredFish.setAttribute('id','slide_3')
    }

    else if (d === '4'){
        featuredFish.setAttribute("src","Img/Walleye.png")
        featuredFish.setAttribute('id','slide_4')
    }

    else if (d === '5'){
        featuredFish.setAttribute("src","Img/pike.png")
        featuredFish.setAttribute('id','slide_5')
    }

    else if (d === '6'){
        featuredFish.setAttribute("src","Img/roach_fish.png")
        featuredFish.setAttribute('id','slide_6')
    }

    else if (d === '7'){
        featuredFish.setAttribute("src","Img/Perch.png")
        featuredFish.setAttribute('id','slide_7')
    }

    else if (d === '8'){
        featuredFish.setAttribute("src","Img/Catfish.png")
        featuredFish.setAttribute('id','slide_8')
    }

    else if (d === '9'){
        featuredFish.setAttribute("src","Img/Drum.png")
        featuredFish.setAttribute('id','slide_9')
    }

    else if (d === '10'){
        featuredFish.setAttribute("src","Img/Trout.png")
        featuredFish.setAttribute('id','slide_10')
    }

    else if (d === '11'){
        featuredFish.setAttribute("src","Img/Sturgeon.png")
        featuredFish.setAttribute('id','slide_11')
    }

    else if (d === '12'){
        featuredFish.setAttribute("src","Img/Crusian_carp.png")
        featuredFish.setAttribute('id','slide_12')
    }
    
   
}
)
});
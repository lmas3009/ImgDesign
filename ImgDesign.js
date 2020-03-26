function ImgDesign(options){
    let images = document.querySelectorAll(".ImgDesign");

    if(options.type == "hard")
        options.type = "0px"
    else    
        options.type = "15px"
    

        images.forEach(img=>{
            img.style.color='red';
        })
}

module.exports.ImgDesign = ImgDesign;
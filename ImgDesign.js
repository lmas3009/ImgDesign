function ImgDesign(options){
    let images = document.querySelectorAll(".ImgDesign");

    if(options.type == "hard")
        options.type = "0px"
    else    
        options.type = "15px"
    

        images.forEach(img=>{
            img.style.width="900px";
        })
}

module.exports.ImgDesign = ImgDesign;
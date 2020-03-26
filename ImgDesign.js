function ImgDesign(options){
    let images = document.querySelectorAll(".ImgDesign");

   
        images.forEach(img=>{
            img.style.color='red';
        })

    let info = document.querySelectorAll(".hdes");
    info.forEach(hdes=>{
        hdes.style.color='red';
    })
}

module.exports.ImgDesign = ImgDesign;
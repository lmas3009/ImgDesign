function ImgDesign(options){
    let images = document.querySelectorAll(".ImgDesign");
        images.forEach(img=>{
            img.style.color='red';
        })
    let hdes = document.querySelectorAll("h1");
        hdes.style.color='red';

    if(options.heading_type === "hard"){
        hdes.style.fontSize = "500px";
    }


}

module.exports.ImgDesign = ImgDesign;
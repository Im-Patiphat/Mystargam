//ประกาศฟังห์ชั่น
function appendImageElement(keyword, index){
    const imgElement = document.createElement("img");
    imgElement.className = "img"+index;
    imgElement.src =  `https://source.unsplash.com/225x225/?${keyword}&sig=${index}`;
    const galleryElement = document.querySelector(".gallery");
    galleryElement.appendChild(imgElement);
}
function removeAllimg(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";
}
function searchphoto(event){
    const keyword = event.target.value;
    
    if(event.key === "Enter" && keyword){
        removeAllimg();
        
        for(let i = 1; i<=12; i++){
            appendImageElement(keyword, i);

        }
    }    
  

}
function main(){
    const inputElement = document.querySelector(".search");
    inputElement.addEventListener("keydown",searchphoto);
}
//เรียกใช้main
main();
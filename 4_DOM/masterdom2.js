// Event listeners for revealing text


const btn = document.querySelector(".reveal button");
const contentDiv = document.querySelector(".content");
/* this code works good for showing quote for few sec and hiding it in 
btn.addEventListener("click", () => {
    
    contentDiv.style.display = "block";
    contentDiv.style.opacity = "1";
    contentDiv.style.height = "auto";
    btn.textContent = "Hide";
    
    setTimeout(() => {
        contentDiv.style.opacity = "0";
        contentDiv.style.height = "0";
        btn.textContent = "Reveal More";

        
        setTimeout(() => {
            contentDiv.style.display = "none";
        }, 500); 
    }, 10000); 
});*/




//Event propagation 3phases
/**
 * event bubbling
 * event capturing 
 * target
 */

btn.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.preventDefault()
    
    if(contentDiv.style.display === "block"){
        contentDiv.style.opacity = "0";
        contentDiv.style.height = "0";
        setTimeout(() => {
            contentDiv.style.display ="none";
        }, 100);
        btn.textContent = "Hide";
    }else{
        contentDiv.style.display = "block";
        contentDiv.style.opacity = "1";
        contentDiv.style.height = "auto";
        btn.textContent = "Hide";
        setTimeout(() => {
            contentDiv.style.opacity = "0";
            contentDiv.style.height = "0";
            setTimeout(() => {
                contentDiv.style.display = "none";
                btn.textContent = "Reveal More"
            }, 100);
        }, 3000);
    }
});
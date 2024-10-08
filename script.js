const selectPage = document.querySelectorAll(".click");
const pages = document.querySelectorAll("section.row");
const sideBar = document.querySelector(".option");
const aboutMe = document.querySelector(".aboutMe");
const cv = document.querySelector(".cv");
const hire = document.querySelector(".hire");
const bar = document.querySelector(".sideBar");
const dark = document.querySelector(".dark");
// const color = document.querySelector(".color");
// const colors = document.querySelector(".select").querySelectorAll("span");
// console.log(colors);
selectPage.forEach(btn => {
    btn.addEventListener("click" , ()=>{
        console.log(btn.getAttribute("href").split("#")[1]);
        setActive(btn);
        getPage(btn.getAttribute("href").split("#")[1]);
        closeBar();
    })
})
aboutMe.addEventListener("click" , ()=>{
    getPage("about");
    setActive(selectPage[1]);
})
cv.addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1znyTcV58rSkypiNPCdYOCW2iKmVNvEXS/view?usp=drive_link" , '_blank')
})
hire.addEventListener("click", ()=>{
    getPage("contact");
    setActive(selectPage[selectPage.length - 1]);
})
function setActive(e){
    selectPage.forEach(btn => {
        btn.classList.remove("active")
    });
    e.classList.toggle("active");
}
function getPage(slide){
    pages.forEach(page=>{
        if(!page.classList.contains("d-none")){
            page.classList.add("d-none");
        }
        if(slide === page.dataset.page){
            if(page.classList.contains("d-none")){
                page.classList.remove("d-none");
                // page.classList.toggle("pt-5");
                // page.classList.toggle("mt-5");

            }
        }
    })
}
function openBar(){
    sideBar.addEventListener("click" ,()=>{
        bar.classList.remove("d-none");
        bar.classList.add("col-6");
        bar.classList.add("appear");
    })
}
function closeBar(){
    bar.classList.add("d-none");
    bar.classList.remove("col-6");
    bar.classList.remove("appear");
}
function darkMode(){
    dark.querySelector("i").classList.toggle("fa-moon");
    dark.querySelector("i").classList.toggle("fa-sun");
}
dark.addEventListener("click", ()=>{
    darkMode();
    document.querySelector("body").classList.toggle("darkMode");
})
// function colorSwitch(color){
//     document.querySelector("body").classList.toggle(`${color}`);
// }
// color.addEventListener("click" , ()=>{
//     document.querySelector(".select").classList.toggle("open");
//     color.classList.toggle("left");
//     dark.classList.toggle("left");
// })
// colors.forEach(color =>{
//     color.addEventListener("click", ()=>{
//         console.log(color);
//         const newColor = color.dataset.color;
//         console.log(newColor);
//         document.querySelector("body").classList.toggle(`${newColor}`);
//     })
// })
openBar();
const typed = new Typed(".typing",{
    strings:["Web Designer" , "Web Developer" , "Software Engineer" , "Director"],
    typeSpeed:100,
    BackSpeed:80,
    loop:true
})
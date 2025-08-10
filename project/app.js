// Load form.html in the same window
const registerBtnClick = ()=>{
    // laod the page
    window.location.href = "form.html"

}
//handle for data
document.addEventListener("DOMContentLoaded",function(){
    // load the form
    const form = document.getElementById("data-form");
    // get submit event 
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const formData = new FormData(form)
        // add  data to an object
        const formObj = Object.fromEntries(formData.entries())
        console.log(formObj);
        const formDataJSON = JSON.stringify(formObj)
        console.log(formDataJSON)
    });
});

const resetData = ()=>{
    document.getElementById("data-form").reset()
}
const backToIndexPage = ()=>{
    window.location.href = "main.html"
}


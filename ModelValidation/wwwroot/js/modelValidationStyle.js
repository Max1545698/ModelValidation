var inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    // if (inputs[i].classList.contains("input-validation-error")) {
    inputs[i].classList.replace("input-validation-error", "border-danger")
    //if (inputs[i].type === "checkbox") {
    //    inputs[i].parentElement.innerHTML += "<div id=\"errMsg\">You should agreed with the statment</div>";
    //    document.getElementById("errMsg").classList.add("text-danger");
    //}
}
//}



function Submitt(){
    let user_name = document.getElementById("text");
    let user_password = document.getElementById("pass")
    // let user_click_on_submit = user.value
    // console.log(user_name.value)
    let value = (user_name.value)
    let value2 = (user_password.value)

    if(value==="" && value2 === ""){
        let p_ele = document.getElementById("enter_name")
        p_ele.textContent = "Kindly enter your name and password"
    }
    else if(value === ""){
        let p_ele = document.getElementById("enter_name")
        p_ele.textContent = "Kindly enter your name"
    }
    else if (value2 === ""){
        let p_ele = document.getElementById("enter_name")
        p_ele.textContent = "Kindly enter your password"
    }
    else{
        let p_ele = document.getElementById("enter_name")
        p_ele.textContent = "Congratulations!!"  
    }
}

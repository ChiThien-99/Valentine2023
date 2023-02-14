function openGift(){
    let pass=prompt("Nhập mật khẩu")
    // console.log(typeof(pass))
    if(pass==="HoangAnh"){
        document.getElementById("gift").src="./img/gift_box_open.png"
        document.getElementById("voucher").style.display="flex"
    }else{
        alert("Sai mật khẩu rồi!")
    }
}
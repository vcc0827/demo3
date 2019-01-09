// Page1 JS
//必填项确认是否为空
function leaveCheck() {
    if (document.getElementById('email').value === '') {
        document.getElementById('email').style.border = "2px red solid"
    } else {
        document.getElementById('email').style.border = "2px green solid"
    }

    if (document.getElementById('real-name').value === '') {
        document.getElementById('real-name').style.border = "2px red solid"
    } else {
        document.getElementById('real-name').style.border = "2px green solid"
    }

    if (document.getElementById('phone').value === '') {
        document.getElementById('phone').style.border = "2px red solid"
    } else {
        document.getElementById('phone').style.border = "2px green solid"
    }

    if (document.getElementById('phone').value === '') {
        document.getElementById('phone').style.border = "2px red solid"
    } else {
        document.getElementById('phone').style.border = "2px green solid"
    }

    if (document.getElementById('position').value === '') {
        document.getElementById('position').style.border = "2px red solid"
    } else {
        document.getElementById('position').style.border = "2px green solid"
    }

    if (document.getElementById('department').value === '') {
        document.getElementById('department').style.border = "2px red solid"
    } else {
        document.getElementById('department').style.border = "2px green solid"
    }

    if (document.getElementById('company').value === '') {
        document.getElementById('company').style.border = "2px red solid"
    } else {
        document.getElementById('company').style.border = "2px green solid"
    }

    if (document.getElementById('company-address').value === '') {
        document.getElementById('company-address').style.border = "2px red solid"
    } else {
        document.getElementById('company-address').style.border = "2px green solid"
    }

    if (document.getElementById('office-tel').value === '') {
        document.getElementById('office-tel').style.border = "2px red solid"
    } else {
        document.getElementById('office-tel').style.border = "2px green solid"
    }
}
//邮箱校验
function emailCheck() {
    var reg = new RegExp("^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    var _email = document.getElementById("email").value;
    console.log(_email)
    if(reg.test(_email)){
        console.log("邮箱正确！");
        document.getElementById('email').style.border = "1px green solid"
    }else{
        document.getElementById('email').style.border = "1px red solid";
        console.log(" 邮箱错误！");

    }
}
// 二次密码校验
function pwdCheck() {
    var value1 = document.getElementById("password-set").value;
    var value2 = document.getElementById("password-confirm").value;
    if (value1 === value2) {
        console.log("两次相同！");
        document.getElementById('password-confirm').style.border = "1px green solid"
        document.getElementById('password-set').style.border = "1px green solid"
    } else {
        console.log("两次不同!");
        document.getElementById('password-confirm').style.border = "1px red solid"
        document.getElementById('password-set').style.border = "1px red solid"
    }
}
//手机号验证
function telCheck() {
    var phoneReg = /^1[3-5789]\d{9}$/;
    var _tel = document.getElementById("phone").value;
    console.log(_tel);
    if(phoneReg.test(_tel)){
        console.log("手机号正确！");
        document.getElementById('phone').style.border = "1px green solid"
    }else{
        document.getElementById('phone').style.border = "1px red solid";
        console.log(" 手机号错误！");
    }
}

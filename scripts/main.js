let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/pic1.jpg') {
        myImage.setAttribute('src', 'images/pic2.jpg');
    } else {
        myImage.setAttribute('src', 'images/pic1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字：');
    if (!myName || myName == null){
        setUserName();
    } else {
        //localstorage API可以将数据存储在浏览器中供后续获取
        localStorage.setItem('name',myName);
        myHeading.textContent = '小猫咪 is so cute, '+ myName;
    }

}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '小娃娃 is so cute, ' + storedName;
}

//为按钮button设置onclick事件处理器
myButton.onclick =function(){
    setUserName();
}
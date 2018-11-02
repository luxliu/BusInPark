export const appendText = (domId,text) => {
    if(domId){
        const ele = document.getElementById(domId);
        if(ele)
            ele.value += text;
    }
}


export const getValue = (domId) => {
    if(domId){
        const ele = document.getElementById(domId);
        if(ele)
            return ele.value;
    }
}

export const emptyValue = (domId) => {
    if(domId){
        const ele = document.getElementById(domId);
        if(ele)
            ele.value = '';
    }
}

export const disableBtnsByClass = (btnsClass) => {
    if(btnsClass){
        const btns = Array.from(document.getElementsByClassName(btnsClass));
        if(btns)
            btns.forEach(ele => {
                ele.setAttribute('disabled', 'disabled');
            }); 
    }
}

export const enableBtnsByClass = (btnsClass) => {
    if(btnsClass){
        const btns = Array.from(document.getElementsByClassName(btnsClass));
        if(btns)
            btns.forEach(ele => {
                ele.removeAttribute('disabled');
            }); 
    }
}

export const enableBtn = (btnId) => {
    if(btnId){
        const btn = document.getElementById(btnId);
        if(btn)
            ele.removeAttribute('disabled');
    }
}
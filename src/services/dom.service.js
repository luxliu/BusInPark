import { DirectionArray } from "../constants/direction.constant";

export const appendText = (domId,text) => {
    if(domId){
        const ele = document.getElementById(domId);
        if(ele){
            ele.value += text;
            ele.scrollTop = ele.scrollHeight;
        }
           
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
        if(ele){
            ele.value = '';
            ele.innerHTML = '';
        }
            
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

export const appendAlert = (divId, alertMsg) => {
    if(divId){
        const ele = document.getElementById(divId);
        if(ele)
            ele.innerHTML = `<div class="alert alert-danger fade show" role="alert">
                                <strong>Error!</strong> ${alertMsg}
                            </div>`;
    }

}

export const drawPark = async (tableId,width,length) => {
    if(tableId){
        const table = document.getElementById(tableId);
        if(table){
            for(let i = 0; i< length; i++ ){
                let td = ``;
                for(let j = 0; j< width; j++){
                    td += `<td>(${j},${length - i - 1})</td>`;
                }
                table.innerHTML += `<tr>${td}</tr>`;
            }
        }
        
    }
}

export const drawBus = async (tableId, length, bus) =>{
    if(tableId){
        const table = document.getElementById(tableId);
        if(table && table.innerHTML){
            Array.from(table.getElementsByTagName('td')).forEach(td=>{
                td.classList.remove('bus');
                td.style[`border`] = '2px solid grey';
            })
            const trIndex = length - bus.yPosition - 1;
            const tdIndex = bus.xPosition;
            const tr = table.getElementsByTagName('tr')[trIndex],
                  td = tr.getElementsByTagName('td')[tdIndex];
            td.classList.add('bus');
            let busHead = '';
            const directionIndex = DirectionArray.indexOf(bus.direction);
            switch (directionIndex) {
                case 0:
                    busHead = 'top';
                    break;
                 case 1:
                    busHead = 'right';
                    break;
                case 2:
                    busHead = 'bottom';
                    break;
                case 3:
                    busHead = 'left';
                    break;
                default:
                    break;
            };
            
            td.style[`border-${busHead}`] = '10px solid yellow';
        }
    }
}

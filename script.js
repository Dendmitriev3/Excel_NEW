const button = document.querySelector('.create');
const input = document.querySelector('.text_T');
const divNew = document.querySelector('.new');


let newInfo;
let del = [];

!localStorage.newInfo ? newInfo = [] : newInfo = JSON.parse(localStorage.getItem('newInfo'));

function Local(item){
    this.item = item;
}
function createdTemplate(newInfo, t){
    return `
        <div class="linew">
            <div class="text_text"><a href="./table/index.html" target="_blank" rel="noopener noreferrer">${newInfo.item}</a></div>
            <div class="info">
                <div class="info_cr"></div>
                <button onclick="delete_del(${t})" class="del">Delete</button>
            </div>
        </div>
    `
}
function createdElement(){
    divNew.innerHTML = "";
    if(newInfo.length > 0){
        newInfo.forEach((i, t) => {
            divNew.innerHTML += createdTemplate(i, t) 
        });
        del = document.querySelector('.linew')
    }
}
createdElement();


function upLocal() {
    localStorage.setItem('newInfo', JSON.stringify(newInfo))
}

button.addEventListener('click', function(){
    newInfo.push(new Local(input.value));
    // console.log(newInfo);
    upLocal();
    createdElement();
    input.value = ''
})

function delete_del(t){
    // del[t].classList.add('del_del');
    newInfo.splice(t, 1);
    createdElement();  
}


function Time(value){
    if (value < 10){
        value='0'+value;
    }
    return value;
}
function date_time(){
    let current_datetime = new Date();
    let hours = Time(current_datetime.getHours());
    let minutes = Time(current_datetime.getMinutes());
    return hours+":"+minutes;
}
document.getElementById('time').innerHTML = date_time();
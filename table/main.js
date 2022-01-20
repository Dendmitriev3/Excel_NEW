let name = document.getElementById('name');
let excel_name = document.getElementById('excel_name');
let tds = document.querySelectorAll('td');
let button_Download = document.getElementById('download')

excel_name.addEventListener('keyup', fun)
function fun(e) {
    e.preventDefault
    name.innerHTML = excel_name.value  
}
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function fun(){
        let input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = "";
        this.appendChild(input);
        input.classList.add('active')
        this.classList.add('active_2')
        
        let newInput = document.getElementById('color')
        this.style.backgroundColor = newInput.value

        let element = this
        input.addEventListener('blur', function(){
            element.innerHTML = this.value;
            element.addEventListener('click', fun)
        });

        this.removeEventListener('click', fun);
    });
    
}

function Download(type, fun, dl) {
    let elt = document.getElementById('worksheet');
    let wb = XLSX.utils.table_to_book(elt, { sheet: 'sheet1' });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fun || (excel_name.value + '.' + (type || 'xlsx')));
}
// button_Download.addEventListener("click", Download)

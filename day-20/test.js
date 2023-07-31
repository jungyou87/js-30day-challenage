const name = "Ian You";
for (const char of name){
    // console.log(char);
}

const header = document.querySelectorAll('h5');

for (const h of header){
    h.addEventListener('click', function() {
        console.log(this.textContent);
    })
    // console.log(h);
}
console.log(header);
let string="";
let buttons= document.querySelectorAll('#btn')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML =='C'){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML =='M+' || 'M-'){
            string=""
            document.querySelector('input').value=string
            alert("i am not in working so plese use me after some time")
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string
        }
       
    })
})


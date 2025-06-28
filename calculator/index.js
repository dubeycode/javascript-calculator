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
      else if(e.target.innerHTML =='M+'){
            string=""
            document.querySelector('input').value=string
            alert("i am not in working so plese use me after some time")
        }
        else if(e.target.innerHTML =='M-'){
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


// for key board

document.addEventListener("keydown",function(event){
    const key=event.key;
    

    // number allow 
    if("0123456789+-*/.".includes(key)){
        string+=key;
        document.querySelector('input').value=string
    }
        // ENter or =
        else if(key==="Enter" || key==="="){
            try{
                string=eval(string);
                document.querySelector('input').value=string
            }
            catch{
                document.querySelector('input').value="Error"
                string="";
            }
        }
        else if(key=='c' || key=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(key==="Backspace"){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }
})
 




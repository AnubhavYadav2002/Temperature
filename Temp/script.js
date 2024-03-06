let cel =  document.getElementById("celcius");
let far = document.getElementById("fahenheit");
    
if(cel.value==""){
    far.value = 18
}

cel.addEventListener('input',function(){
   
        let c = this.value;
    let f = (c*9/5)+32;

    if(cel.value==""){
        far.value = 0
    }

    else{far.value = f   
    }
})


far.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32)*5/9;
    
    if(far.value==""){
        cel.value = 0
    }
   else{
    cel.value = c
   } 
})
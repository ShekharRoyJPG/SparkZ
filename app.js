const dotBtn=document.querySelector('.dots-icon')

const gapps=document.querySelector('.container2')


dotBtn.addEventListener('click',function(e){


    if(gapps.style.display=='block')
        {
         gapps.style.display='none'
        
    }
    else{
        gapps.style.display="block"
    }
         
   

})
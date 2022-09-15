const btn = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
btn.addEventListener('click',function(){
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        document.body.style.overflow='hidden';
    }else{
        document.body.style.overflow='';
    }
});

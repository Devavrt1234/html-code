console.log("hi javascript");
const tabItems=document.querySelectorAll(".tab-item");
const tab1content=document.querySelector('#tab-1-content');
const tab2content=document.querySelector('#tab-2-content');
const tab3content=document.querySelector('#tab-3-content');


function removeBorder(){
    tabItems.forEach(item =>item.classList.remove('tab-border'));
}



//listen for tab click
tabItems.forEach(item => item.addEventListener('click',function(){
   
   
    removeBorder();
     //add border to current tab
    item.classList.add('tab-border');
    //grab content item from DOM
    
    
    const tabContentItem=document.querySelector(`#${this.id}-content`);
   
    tabContentItem.classList.add('showtabcontent');
    
//show the current tab data and hide rest tabs data
    if(tabContentItem==tab1content){
        tab2content.classList.remove('showtabcontent');
        tab3content.classList.remove('showtabcontent');
    }
    else if(tabContentItem==tab2content){
        tab1content.classList.remove('showtabcontent');
        tab3content.classList.remove('showtabcontent');
    }
    else{
        tab1content.classList.remove('showtabcontent');
        tab2content.classList.remove('showtabcontent');
    }
    
}));



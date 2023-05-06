$(function(){

    // search input;
        let search = $(`.search`)
        let searchBar = $(`.searchBar`)
        // search.on(`click`, function(){})

        searchBar.click(function(){
            search.toggleClass(`show`)
            
            if(searchBar.hasClass(`show`) == true){
                searchBar.html(`<i class="fa-regular fa-circle-xmark"></i>`)
            }
            else{
                searchBar.html(`<i class="fa-solid fa-magnifying-glass"></i>`)

            };                                      
        });


    
    // fixd navber;
        let navFixd = $(`#navber`);
        let backToTop = $(`.backToTop`)

            $(window).scroll(function(){
                
            let scrollTop = $(window).scrollTop();

            if(scrollTop > 500){
                navFixd.addClass(`menuFixed`)
                backToTop.addClass(`showBtn`)
            }
                else{
                    navFixd.removeClass(`menuFixed`)
                    backToTop.removeClass(`showBtn`)

                };
        });



    // top to buttom icon;
        let topToButtom = $(`button`)
            topToButtom.click(function(){
                $(`html,body`).animate({
                    scrollTop: 0 
                }, 500);
        });




        $(window).on('load',function(){
            $(`.preLoader`).fadeOut();
        })

    

    


});
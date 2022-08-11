$("#menu-item-paises").click(function(){

    fetch("componentes/paises.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            //console.log(data)
            $("#main-content").html(data);
        })
})
const PAISES = [
    {id: 1,nombres: "Kuwait",capital:"Kuwait",moneda:"Dinar kuwaití", foto:"imagenes/paises/kuwait.jpg" },
    {id: 2,nombres: "Corea del Sur",capital:"Seúl",moneda:"Won surcoreano",foto:"imagenes/paises/coreadelsur.jpg" },
    {id: 3,nombres: "Japón",capital:"Tokio",moneda:" Yen japonés",foto:"imagenes/paises/japon.jpg" },
    {id: 4,nombres: "Israel",capital:"Jerusalén",moneda:"Nuevo séquel israelí",foto:"imagenes/paises/israel.jpg" },
    {id: 5,nombres: "Hong Kong",capital:"City of Victoria",moneda:"Dólar de Hong Kong",foto:"imagenes/paises/hongkong.jpg" },
    {id: 6,nombres: "Emiratos Árabes Unidos",capital:"Abu Dabi",moneda:"Dírham de los Emiratos Árabes Unidos",foto:"imagenes/paises/emiratosarabes.jpg" }
];
console.log(PAISES);
$(PAISES).each(function(indexInArray, valueOfElement) { 
    console.log(valueOfElement.nombres);
    var fila = "<tr>";
    fila += "<td>" + valueOfElement.id + "</td>"; 
    fila += "<td>" + valueOfElement.nombres + "</td>";
    fila += "<td>" + valueOfElement.capital + "</td>";
    fila += "<td>" + valueOfElement.moneda + "</td>";
    fila += "</tr>";

    $("#tbody-paises").append(fila);
})

/*$("#tbody-paises tr").click(function(){
    var position = $(this).index();
    var nombres = PAISES[position].nombres;
    var capital = PAISES[position].capital;
    var foto = PAISES[position].foto;
    $("#pais-nombre").text(nombres);
    $("#pais-capital").text(capital);
    $("#pais-bandera").attr("src",foto);
})*/
$("#tbody-paises tr").click(function(){
    var position = $(this).index();
    console.log(position);
    var foto = PAISES[position].foto;
        $("body").append("<div id='fondo-oscuro'>");
        $("#fondo-oscuro").append("<img src= '" + foto + "'>")

        $("#fondo-oscuro").click(function(){
            $(this).remove();
        })
    })

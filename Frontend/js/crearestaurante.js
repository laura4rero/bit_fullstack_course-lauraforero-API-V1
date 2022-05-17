window.onload=()=>
{
    $('#buttonCrear').click(()=>
    {
        let infoToSend =
        {
            name: $("#nameCrear").val(),
            cusine: $("#cusineCrear").val(),
            address: $("#addressCrear").val()
        };

        $.ajax({
            type: 'post',
            url: 'http://localhost:4000/apiv1ToDo',
            data: JSON.stringify(infoToSend),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) 
            {
                //console.log('la data', data);
                alert("Creado con exito");

                $("#nameCrear").val('');
                $("#cusineCrear").val('');
                $("#addressCrear").val('');
            }
        });
    });
    console.log("hola");
};
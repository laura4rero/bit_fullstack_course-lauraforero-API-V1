window.onload=()=>
{
    console.log("hola");
    $.get("http://localhost:4000/apiv1ToDo/inicial", function(data, status)
    {
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data.success);
        if(data.success.length > 0)
        {
            let tarjetas = '';

            data.success.forEach((restaurant)=> 
            {
                tarjetas = tarjetas+`<div class="col-md-4">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="./img/restaurant.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${restaurant.name}</h5>
                                <p class="card-text">${restaurant.cuisine}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            });

            $('#principal').html(tarjetas);
        }
    });
};
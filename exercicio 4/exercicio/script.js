$(document).ready(function(){
    const input = document.getElementById('search');
    console.log(input.value);

    const imagesContainer = document.querySelector('div.imagesContainer');

    $("button").click(function(){
        if(input.value !== ""){
            $.ajax({url: `https://www.flickr.com/services/rest/`, data: {text: input.value, method: "flickr.photos.search", api_key: "3bb1cd6dadcf5cada04ddb01190a3fb5", extras: 'url_m', format: 'json', nojsoncallback: 1, api_sig: '14fb5b562f8c773e1a9d6f51589d64b6'} ,success: function(result){
                    if(result.stat === "ok"){
                        for(let i = 0; i < result.photos.photo.length; i++){
                            const img = document.createElement("img");
                            img.setAttribute("src", result.photos.photo[i].url_m)
                            console.log(img);

                            // console.log(result.photos.photo[i].url_m);
                            imagesContainer.appendChild(img)
                        }
                    } else {
                        alert(`couldn't find this phrase`);
                    }



                    //$("#div1").html(result);
                }, error: function(){alert(`couldn't find this phrase`)}});
        } else {
            alert('The input cant be empty!');
        }
    });
});
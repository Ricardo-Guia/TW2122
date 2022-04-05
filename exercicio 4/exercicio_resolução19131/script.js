// flickr api key: https://www.flickr.com/services/api/misc.api_keys.html || a5dbe90ceeb8a3561dfc760ae33be5f7
// Weather api key: https://home.openweathermap.org/users/sign_in || a9e49b305a5d14cc0790dbf507251ca1


function searchInFlickr(){

    const valueToSearch = $('#searchInputID').val();

    $.ajax({
        method: 'GET',
        url:'https://www.flickr.com/services/rest/',
        data:{
            text: valueToSearch,
            method: 'flickr.photos.search',
            api_key: '3bb1cd6dadcf5cada04ddb01190a3fb5',
            extras: 'url_m',
            format: 'json',
            nojsoncallback: '1'

        },
        datatype: 'JSON',
        success: function(response){
            console.log(response);
            response.photos.photo.forEach((photo)=>{
                const newImg = $( '<img>').attr('src', photo.url_m);
                $('#photos').append(newImg);
            })
        },
    })
}
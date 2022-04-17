function playerInfo(){
    const playerName = $('#searchInputID').val();
    $.ajax({
        url: 'https://soccer.sportmonks.com/api/v2.0/players/search/' + playerName,
        data: {
            api_token: 'TBKuJ62KlOHcd4FP6sPW1NS9GcdiHMMQiwTnbhIwpyARdb9yHedP7IOND8pO',
        },
        method: 'GET',
        success: function (response) {
            $("#pImage").attr("src",response.data[0].image_path);
            console.log(response);
            document.getElementById("name").innerHTML = "Name: " + response.data[0].display_name;
            document.getElementById("birth").innerHTML = "Birthdate: " + response.data[0].birthdate;
            document.getElementById("heightAndWeight").innerHTML = "Height/Weight: " + response.data[0].height + " /" + response.data[0].weight;
            document.getElementById("country").innerHTML = "Country: " + response.data[0].birthcountry;

            $.ajax({
                url: 'https://restcountries.com/v2/name/' + response.data[0].birthcountry,
                method: 'GET',
                success: function(response){
                    $("#pNation").attr("src",response[0].flag);
                }
            });

            $.ajax({
                url: 'https://soccer.sportmonks.com/api/v2.0/teams/' + response.data[0].team_id,
                data: {
                    api_token: 'TBKuJ62KlOHcd4FP6sPW1NS9GcdiHMMQiwTnbhIwpyARdb9yHedP7IOND8pO'
                },
                method: 'GET',
                error: function(){
                    document.getElementById("team").innerHTML = "Team: No Team Found";
                    $("#pTeam").attr("src","team.jpg");
                    alert("Team not found");
                },
                success: function (response) {
                    document.getElementById("team").innerHTML = "Team: " + response.data.name;
                    $("#pTeam").attr("src",response.data.logo_path);
                }
            });

            randomVideo();
        }
    });
}

function randomVideo(){
    var btn = document.getElementById("btnRandomVideo");
    const playerName = $('#searchInputID').val();
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyC_5McC6O96wAvAq_H2qugUVC4dEA6GySE',
            q: playerName + ' best goals',
            part: 'snippet',
            maxResults: 60,
            type: 'video',
            videoEmbeddable: true
        },
        success: function(response){
            var video = Math.floor(Math.random() * 60)
            $('iframe').attr('src', 'https://www.youtube.com/embed/' + response.items[video].id.videoId);
        }
    });

    btn.style.display = "inline";
}

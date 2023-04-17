let urlData = location.href;
let newUrl = new URL(urlData);
// console.log(newUrl);
let playerUrl = newUrl.searchParams.get("name");
// console.log(playerUrl);

//getting data from local storage

teamDetails = JSON.parse(localStorage.getItem("teamArray"));
playerDetails = JSON.parse(localStorage.getItem("playerArray"));

let playerData = document.getElementById("player-details-con");
for(var i = 0;  i < playerDetails.length; i++){
    if(playerDetails[i].playerName == playerUrl)
    {
        var playingOrN=""
        if(playerDetails[i].isPlaying == true){
            playingOrN = "Playing"
        }
        else{
            playingOrN = "On Bench"
        }
        playerData.innerHTML +=`
        <div id="player_deatil-img">
        <img src="${playerDetails[i].playerImg}" alt="">
        </div>
        <div id ="new-player-det">

        <table>
        <tr>
           <td>Player Name </td>
           <td>${playerDetails[i].playerName}  </td>
        </tr>

        <table>
        <tr>
            <td>Team Name </td>
            <td> ${playerDetails[i].playerTeam} </td>
        </tr>

        <table>
        <tr>
            <td> Team Code </td>
            <td>${playerDetails[i].from} </td>
        </tr>

        <table>
        <tr>
            <td> Worth </td>
            <td> ${playerDetails[i].price} </td>

        <table>
        <tr>
           <td> Is playing </td>
           <td> ${playingOrN} </td>
        </tr>
        </table>
        </div>
        
        ` ;
    }
}
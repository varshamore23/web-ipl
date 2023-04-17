
let urlData = location.href;
let newUrl =new URL(urlData);
//console.log(newUrl);

let teamFull = newUrl.searchParams.get("name");
//console.log(teamfull);

//getting data from local storage

teamDetails = JSON.parse(localStorage.getItem("teamArray"));
playerDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams");
var tableTeam = document.getElementById("table-team");

//variable for player count in team
var cnt = 0;
//loping through array to find which player is clicked and reneder accordingly

for(var i=0; i<playerDetails.length; i++){
    if(teamFull == playerDetails[i].from){
        var isPlay=""
        if(playerDetails[i].isPlaying==true){
            isPlay="Playing"
        }
        else{
            isPlay="On Bench"
        }
    var currentP = playerDetails[i].playerName
    cnt++;
    teamMainBox.innerHTML+=`
    <div onclick ="makethisinclick('${currentP}')"  class="minibox mn2>

    <img src="${playerDetails[i].playerImg}"  class="mainimage" alt=""/>
    <div class="dataofcard">
    <p class="text1"> ${playerDetails[i].playerName}  </p>
    <p class="text2"> Worth: ${playerDetails[i].price}  </p>
    <p class="text2">Playing: ${isPlay}  </p>
    <p class="text2">
    ${playerDetails[i].description}</p>
    </div>
    </div>

    `
}  
//To open player details page based on user input abd self mean open in same page
function makethisinclick(res){
    window.open(`./playerdetails.html?name=${res}`,"_self");
}

 }
 //search for top batsman
 var topBatsman=" "
 for(var j=0; j<playerDetails.length; j++){
    if(playerDetails[j].description == "Batsman" && playerDetails[j].from==teamFull){
        topBatsman=playerDetails[j].playerName
        break
    }
    else{
        topBatsman="No player"
    }
 }
 //search for top bowler
 var topBowler=""
 for(var j=0; j<playerDetails.length; j++){
    if(playerDetails[j].description == "Bowler" && playerDetails[j].from==teamFull){
        topBowler=playerDetails[j].playerName
        break
    }
    else{
        topBowler="No player"
    }
 }

 //team table
 //console.log(cnt);
 teamDetails.map((item)=>{
    if(teamFull==item.sName){

        return tableTeam.innerHTML+=`
        <table>
        <tr>
           <td>Team name</td>
           <td>${item.teamFullName}</td>
        </tr>
        
        <tr>
           <td>Team icon</td>
           <td><img src="${item.teamIcon}"  class="team-page-icon" alt=""><td>
        <tr>

        <tr>
           <td>Player Count</td>
           <td> ${cnt}</td>
        <tr>

        <tr>
            <td>Top Batsman</td>
            <td>${topBatsman}</td>
        <tr>

        <tr>
            <td>Top Bowler</td>
            <td>${topBowler}</td>
        <tr>


        <tr>
            <td>Won Count</td>
            <td>${item.WonCount}</td>
        <tr>
        </table>

       `;
    }
 })
 


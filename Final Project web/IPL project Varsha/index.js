let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}



var playerData = [
  {
    "id":0,
    "playerName":"Hardik Pandya",
    "from":"GT",
    "price":"15 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://crichead.com/wp-content/uploads/2023/01/Hardik-Pandya-IPL-2023.jpg",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":1,
    "playerName":"Shubman Gill",
    "from":"GT",
    "price":"8 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":2,
    "playerName":"David Miller",
    "from":"GT",
    "price":"3 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/187.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":3,
    "playerName":"Wriddhiman Saha",
    "from":"GT",
    "price":"1.9 Crore",
    "isPlaying":true,
    "description":"Batsman/Wicket-keeper",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/16.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":4,
    "playerName":"Rashid khan",
    "from":"GT",
    "price":"15 Cr",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":5,
    "playerName":"Mohammed Shami",
    "from":"GT",
    "price":"6.25 Crore",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":6,
    "playerName":"Pradeep Sangwan",
    "from":"GT",
    "price":"20 Lakh",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/91.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":7,
    "playerName":"Jayant Yadav",
    "from":"GT",
    "price":"1.7 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png",
    "playerTeam":"Gujarat Titans"
  },

  {
    "id":8,
    "playerName":"Rohit Sharma",
    "from":"MI",
    "price":"16 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":9,
    "playerName":"Suryakumar Yadav",
    "from":"MI",
    "price":"8 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/108.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":10,
    "playerName":"Arjun Tendulkar",
    "from":"MI",
    "price":"30 Lakh",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/10244.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":11,
    "playerName":"Tim David",
    "from":"MI",
    "price":"8.25 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/4524.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":12,
    "playerName":"Jasprit Bumrah",
    "from":"MI",
    "price":"12 Crore",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":13,
    "playerName":"Dewald Brevis",
    "from":"MI",
    "price":"3 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20593.png",
    "playerTeam":"Gujarat Titan"
  },

  {
    "id":14,
    "playerName":"Tristan Stubbs",
    "from":"MI",
    "price":"20 Lakh",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20631.png",
    "playerTeam":"Mumbai Indians"
  },

  {
    "id":15,
    "playerName":"MS Dhoni",
    "from":"CSK",
    "price":"12 Crore",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":16,
    "playerName":"Devon Conway",
    "from":"CSK",
    "price":"1 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":17,
    "playerName":"Ruturaj Gaikwad",
    "from":"CSK",
    "price":"6 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":18,
    "playerName":"Ambati Rayudu",
    "from":"CSK",
    "price":"6.75 Crore",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":19,
    "playerName":"Ravindra Jadeja",
    "from":"CSK",
    "price":"16 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":20,
    "playerName":"Dwaine Pretorius",
    "from":"CSK",
    "price":"50 Lakh",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20573.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":21,
    "playerName":"Moeen Ali",
    "from":"CSK",
    "price":"8 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1735.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":22,
    "playerName":"Simarjeet Singh",
    "from":"CSK",
    "price":"20 Lakh",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/10789.png",
    "playerTeam":"Chennai Super Kings"
  },

  {
    "id":23,
    "playerName":"David Warner",
    "from":"DC",
    "price":"6.25Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/170.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":24,
    "playerName":"Prithvi Shaw",
    "from":"DC",
    "price":"7.50Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":25,
    "playerName":"Rovman Powell",
    "from":"DC",
    "price":"2.80 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3333.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":26,
    "playerName":"Mitchell Marsh",
    "from":"DC",
    "price":"6.50Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/221.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":27,
    "playerName":"Anrich Nortje",
    "from":"DC",
    "price":"6.50Crore",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"ghttps://assets.iplt20.com/ipl/IPLHeadshot2022/5433.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":28,
    "playerName":"Ripal Patel",
    "from":"DC",
    "price":"All-rounder",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/17191.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":29,
    "playerName":"Kamlesh Nagarkoti",
    "from":"DC",
    "price":"1.1Crore",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3766.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":30,
    "playerName":"Yash Dhull",
    "from":"DC",
    "price":"50 Lakh",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20623.png",
    "playerTeam":"Delhi Capitals"
  },

  {
    "id":31,
    "playerName":"Shreyas Iyer",
    "from":"KKR",
    "price":"12.25 Crore",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":32,
    "playerName":"Rinku Singh",
    "from":"KKR",
    "price":"55 Lakhs",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":33,
    "playerName":"Nitish Rana",
    "from":"KKR",
    "price":"8 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/2738.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":34,
    "playerName":"Andre Russell",
    "from":"KKR",
    "price":"12 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/177.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":35,
    "playerName":"Umesh Yadav",
    "from":"KKR",
    "price":"2 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/59.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":36,
    "playerName":"Tim Southee",
    "from":"KKR",
    "price":"1.5 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/307.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":37,
    "playerName":"Sunil Narine",
    "from":"KKR",
    "price":"6 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/203.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":38,
    "playerName":"Anukul Roy",
    "from":"KKR",
    "price":"20 lakhs",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3774.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":38,
    "playerName":"Anukul Roy",
    "from":"KKR",
    "price":"20 lakhs",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3774.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":38,
    "playerName":"Anukul Roy",
    "from":"KKR",
    "price":"20 lakhs",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3774.png",
    "playerTeam":"Kolkata Knight Riders"
  },

  {
    "id":39,
    "playerName":"KL Rahul",
    "from":"LSG",
    "price":"17 Crore",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":40,
    "playerName":"Quinton de Kock",
    "from":"LSG",
    "price":"6.75 Crore",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/834.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":41,
    "playerName":"Ravi Bishnoi",
    "from":"LSG",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/19351.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":42,
    "playerName":"Krunal Pandya",
    "from":"LSG",
    "price":"8.25 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3183.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":43,
    "playerName":"Avesh Khan",
    "from":"LSG",
    "price":"10 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1561.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":44,
    "playerName":"Marcus Stoinis",
    "from":"LSG",
    "price":"9.2 Crore",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/964.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":45,
    "playerName":"Kyle Mayers",
    "from":"LSG",
    "price":"50 Lakhs",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/20587.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":46,
    "playerName":"Deepak Hooda",
    "from":"LSG",
    "price":"5.75 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1556.png",
    "playerTeam":"Lucknow Super Giants"
  },

  {
    "id":47,
    "playerName":"Shikhar Dhawan",
    "from":"PBKS",
    "price":"8.25 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
    "playerTeam":"Punjab Kings"
  },

  {
    "id":48,
    "playerName":"Shahrukh Khan",
    "from":"PBKS",
    "price":"9 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/7779.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":49,
    "playerName":"Jonny Bairstow",
    "from":"PBKS",
    "price":"6.75 Crores",
    "isPlaying":true,
    "description":"Wk-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/506.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":50,
    "playerName":"Arshdeep Singh",
    "from":"PBKS",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/4698.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":51,
    "playerName":"Liam Livingstone",
    "from":"PBKS",
    "price":"11.50 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3644.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":52,
    "playerName":"Rahul Chahar",
    "from":"PBKS",
    "price":"5.25 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3763.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":53,
    "playerName":"Kagiso Rabada",
    "from":"PBKS",
    "price":"9.25 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1664.png",
    "playerTeam":"Punjab Kings"
  },


  {
    "id":54,
    "playerName":"Raj Bawa",
    "from":"PBKS",
    "price":"2 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"",
    "playerTeam":"Punjab Kings"
  },

  {
    "id":55,
    "playerName":"Sanju Samson",
    "from":"RR",
    "price":"14 Crores",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":56,
    "playerName":"Yashasvi Jaiswal",
    "from":"RR",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/13538.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":57,
    "playerName":"Shimron Hetmyer",
    "from":"RR",
    "price":"8.50 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1705.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":58,
    "playerName":"Jos Buttler",
    "from":"RR",
    "price":"10 Crores",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":59,
    "playerName":"Navdeep Saini",
    "from":"RR",
    "price":"2.60 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3824.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":60,
    "playerName":"Yuzvendra Chahal",
    "from":"RR",
    "price":"6.50 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/111.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":61,
    "playerName":"Ravichandran Ashwin",
    "from":"RR",
    "price":"5 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/8.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":62,
    "playerName":"Trent Boult",
    "from":"RR",
    "price":"8 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/969.png",
    "playerTeam":"Rajasthan Royals"
  },

  {
    "id":63,
    "playerName":"Virat Kohli",
    "from":"RCB",
    "price":"15 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":64,
    "playerName":"Faf du Plessis",
    "from":"RCB",
    "price":"7 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":65,
    "playerName":"Dinesh Karthik",
    "from":"RCB",
    "price":"5.50 Crores",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":66,
    "playerName":"Mohammed Siraj",
    "from":"RCB",
    "price":"7 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":67,
    "playerName":"Josh Hazlewood",
    "from":"RCB",
    "price":"7.75 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/857.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":68,
    "playerName":"Harshal Patel",
    "from":"RCB",
    "price":"10.75 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/157.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":69,
    "playerName":"Glenn Maxwell",
    "from":"RCB",
    "price":"11 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":70,
    "playerName":"Wanindu Hasaranga",
    "from":"RCB",
    "price":"10.75 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3082.png",
    "playerTeam":"Royal Challengers Bangalore"
  },

  {
    "id":71,
    "playerName":"Aiden Markram",
    "from":"SRH",
    "price":"2.60Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/1667.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":72,
    "playerName":"Glenn Phillips",
    "from":"SRH",
    "price":"1.50Crores",
    "isPlaying":true,
    "description":"WK-Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3027.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":73,
    "playerName":"Umran Malik",
    "from":"SRH",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/15154.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":74,
    "playerName":"Kartik Tyagi",
    "from":"SRH",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/10059.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":75,
    "playerName":"Bhuvneshwar Kumar",
    "from":"SRH",
    "price":"4.20 Crores",
    "isPlaying":true,
    "description":"Bowler",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/116.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":76,
    "playerName":"Abhishek Sharma",
    "from":"SRH",
    "price":"6.50 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":77,
    "playerName":"Rahul Tripathi",
    "from":"SRH",
    "price":"8.75 Crores",
    "isPlaying":true,
    "description":"Batsman",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
    "playerTeam":"Sunrisers Hyderabad"
  },

  {
    "id":78,
    "playerName":"Abdul Samad",
    "from":"SRH",
    "price":"4 Crores",
    "isPlaying":true,
    "description":"All-rounder",
    "playerImg":"https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
    "playerTeam":"Sunrisers Hyderabad"
  },
];

var teamData = [
  {
    "id":0,
    "teamFullName": "Mumbai Indians",
    "sName":"MI",
    "fullSname":"MI(Mumbai Indians)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png",
    "WonCount":5,
  },

  {
    "id":1,
    "teamFullName": "Chennai Super Kings",
    "sName":"CSK",
    "fullSname":"CSK(Chennai Super Kings)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png",
    "WonCount":4,
  },

  {
    "id":2,
    "teamFullName": "Delhi Capitals",
    "sName":"DC",
    "fullSname":"DC(Delhi Capitals)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png",
    "WonCount":0,
  },

  {
    "id":3,
    "teamFullName": "Gujarat Titans",
    "sName":"GT",
    "fullSname":"GT(Gujarat Titans)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Medium/GTmedium.png",
    "WonCount":5,
  },

  {
    "id":4,
    "teamFullName": "Kolkata Knight Riders",
    "sName":"KKR",
    "fullSname":"KKR(Kolkata Knight Riders)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKR.png",
    "WonCount":2,
  },

  {
    "id":5,
    "teamFullName": "Lucknow Super Giants",
    "sName":"LSG",
    "fullSname":"LSG(Lucknow Super Giants)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Medium/LSGmedium.png",
    "WonCount":0,
  },

  {
    "id":6,
    "teamFullName": "Punjab Kings",
    "sName":"PBKS",
    "fullSname":"PBKS(Punjab kings)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKS.png",
    "WonCount":0,
  },

  {
    "id":7,
    "teamFullName": "Rajasthan Royals",
    "sName":"RR",
    "fullSname":"RR(Rajasthan Royal)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RR.png",
    "WonCount":1,
  },

  {
    "id":8,
    "teamFullName": "Royal Challengers Banglore",
    "sName":"RCB",
    "fullSname":"RCB(Royal Challengers Banglore)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png",
    "WonCount":0,
  },

  {
    "id":9,
    "teamFullName": "Sunrisers Hyderabad",
    "sName":"SRH",
    "fullSname":"SRH(Sunrisers Hyderabad)",
    "teamIcon":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png",
    "WonCount":1,
  },
  
];

var addteamclicked=()=>{
  window.open("./addTeam.html","_self");
}

var addPlayerClicked=()=>{
  window.open("./addPlayer.html","_self");
}

    let detailofTeam = [];
    let detailofPlayer = [];
    var teamGrid = document.getElementById("container_teams");
    //to store our data teams and player in local storage

    if(localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray",JSON.stringify(teamData));

    if(localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray",JSON.stringify(playerData));

    detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
    detailofPlayer = JSON.parse(localStorage.getItem("playerArray"));
  
    // //search bar code goes here
    var suggestArray=[];
    for(var i=0;i<detailofTeam.length;i++){
       suggestArray.push(detailofTeam[i].sName)
   // console.log(suggestArray)
     }
    let searchBar = document.querySelector(".search-input");
    let inputBox = searchBar.querySelector("input");
    let suggBox = searchBar.querySelector(".autocom-box");
    let icon = searchBar.querySelector(".icon");

  inputBox.onkeyup = (e) => {
    if(e.keyCode==13){
        icon.click()
    }
    let userData = e.target.value;
    // console.log(userData);
    let emptyArray = [];
    if(userData) {

        emptyArray = suggestArray.filter((data)=>{
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
           
        });

        emptyArray = emptyArray.map((data)=> {
            return data = `<li>${data}</li>`;
        });

        searchBar.classList.add("active");
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");

        for(let i = 0; i < allList.length; i++)
        {
            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    }else{
        searchBar.classList.remove("active");
    }
}

function currentLi(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {

      window.open(`./teams.html?name=${element.textContent}`,"_self");
    }
    searchBar.classList.remove("active");
}
function showSuggestions(list){
  let listData;
  if(!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
//grid cards for teams goes here

var teamMainBox = document.getElementById("container_teams");
for(var i=0; i<detailofTeam.length;i++) {
  teamMainBox.innerHTML+=`
  <div onclick ="makethisinclick('${i}')"   class="minibox">
  
  <img src="${detailofTeam[i].teamIcon}"  class="mainimage" alt=""/>
  <div class="dataofcard">

  <p class="text1"> ${detailofTeam[i].teamFullName} </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
  </div>

  </div>
  
  `
}

function makethisinclick(res) {
  var clickedCard=detailofTeam[res].sName;
  window.open(`./teams.html?name=${clickedCard}`,"_self")
}

 








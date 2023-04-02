var firebaseConfig = {
    apiKey: "AIzaSyBgIEUsnViPVctM_Te5HWg_v4nxonZM5Yg",
    authDomain: "kwitter-85c4f.firebaseapp.com",
    databaseURL: "https://kwitter-85c4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-85c4f",
    storageBucket: "kwitter-85c4f.appspot.com",
    messagingSenderId: "379787459266",
    appId: "1:379787459266:web:e653a6388d4a95b4cb995b",
    measurementId: "G-BEN314DKW2"
  };

  firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");


function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "kwitter.html";
 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    firebase_message_id = childKey;
    message_data = childData;
   //Start code
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['like'];
          like = message_data['like'];
          name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>"
          like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value"+ like + " onlick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
          
   //End code
   });});}
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button.id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    })
}


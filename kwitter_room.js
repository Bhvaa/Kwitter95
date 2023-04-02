
//ADD YOUR FIREBASE LINKS HERE
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
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


     
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room_name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}
     

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.is)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

   function redirectToRoomName(name)
   {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
   }

   function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
   }

$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyBaevnzjf7_ZrepNXTs_irEgllAStl0Lvo",
  authDomain: "fir-demo-d6ed4.firebaseapp.com",
  projectId: "fir-demo-d6ed4",
  storageBucket: "fir-demo-d6ed4.appspot.com",
  messagingSenderId: "874869253201",
  appId: "1:874869253201:web:cf9e02cf80c05b1d81c470",
  measurementId: "G-2S2WH76BP6"
  };
    
  firebase.initializeApp(config);
      
  /* var user = null;
      var $loginBtn = $('#start-login');
    
      $loginBtn.on('click',googleLogin);
    
      function googleLogin(){
        var provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopUp
      }*/
    

  var $registroBtn = $('.btn-registro');
  var $ingresoBtn = $('.btn-ingreso');
    
  $registroBtn.on('click', Registrar);
  $ingresoBtn.on('click', Ingresar);
    
  function Registrar() {
    var $email = $('.email-res').val();
    var $password = $('.pass-res').val();
    
    firebase.auth().createUserWithEmailAndPassword($email, $password)
      .then(function() {
        alert('aa');
        writeUserData(uid, name);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
  }
    
  function Ingresar() {
    var $email2 = $('.email-ingreso').val();
    var $password2 = $('.pass-ingreso').val();
    var $message = $('.message-error');
    
    firebase.auth().signInWithEmailAndPassword($email2, $password2)
      .then(function() {
        next1();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        $message.append('<p class="red-text">*Datos incorretos</p>');
      });
  }
    
  function Observador() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('existes');
            
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
    
        console.log('no existes');
      }
    });
  }
    
  Observador();
    
  function next1() {
    setTimeout(function() { 
      window.location.href = 'home.html';
    }, 500);
  }
});
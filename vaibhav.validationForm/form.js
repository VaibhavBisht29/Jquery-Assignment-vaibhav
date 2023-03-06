$(document).ready(function () {
    $("#usernames").keyup(function () {
        validateUsername();});

    $("#password").keyup(function () {
        validatePassword();});

    $("#cit").keyup(function () {
        validateCity();});

    $("#gender").keyup(function () {
        validateGender();});
    
    $('#usernames').keypress(function (e) {
        var name = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (name.test(str)) {
            return true;
        }
        else
        {
        e.preventDefault();
        return false;
        }
    });
    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
          $("#usercheck").show();
          usernameError = false;
          return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
          $("#usercheck").show();
          $("#usercheck").html("length of username must be between 3 and 10");
          usernameError = false;
          return false;
        } else {
          $("#usercheck").hide();
        }
      }

      function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
          $("#passcheck").show();
          passwordError = false;
          return false;
        }
        else {
            $("#passcheck").hide();
          }
        
        if (passwordValue.length < 6 || passwordValue.length > 15) {
          $("#passcheck").show();
          $("#passcheck").html("length of password must be between 6 and 15");
          passwordError = false;
          return false;
        }
        // validate letter
        if ( passwordValue.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
            $("#letter").hide();
           } else {
            $('#letter').removeClass('valid').addClass('invalid');
            
           }
           
           //validate capital letter
            if ( passwordValue.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
            $("#capital").hide();
           } else {
            $('#capital').removeClass('valid').addClass('invalid');
           }
           
           //validate number
            if ( passwordValue.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
            $("#number").hide();
           } else {
            $('#number').removeClass('valid').addClass('invalid');
           }
         
      }

      $('#cit').keypress(function (e) {
        var name = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (name.test(str)) {
            return true;
        }
        else
        {
        e.preventDefault();
        return false;
        }
    });
    function validateCity() {
        let usernameValue = $("#cit").val();
        if (usernameValue.length == "") {
          $("#cityname").show();
          usernameError = false;
          return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 20) {
          $("#cityname").show();
          usernameError = false;
          return false;
        } else {
          $("#cityname").hide();
        }
      }

      $("#change").click(function(){
        $("div").toggleClass("toggle");
      }); 
        
});

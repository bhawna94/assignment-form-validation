$(function () {

    var error_username = false;
    var error_phonenumber = false;
    var error_email = false;
    var error_email1 = false;


    $("#form_username").focusout(function () {
        check_user();
    });


    $("#form_phone").focusout(function () {
        check_phonelength();
    });


    $("#form_email").focusout(function () {
        check_mail();
    });


    $("#retypeemail").focusout(function () {
        check_retypeemail();

    });

    function check_user() {

        var pattern = /^[a-zA-z]*$/;
        var usernamevalue = $("#form_username").val();
        if (pattern.test(usernamevalue) && usernamevalue != '') {
            $("#usererrormessage").hide();
        }
        else if (usernamevalue.length == 0) {
            $("#usererrormessage").html("This field is mandatory");
            error_username = true;
        }
        else {
            $("#usererrormessage").html("Invalid name");
            error_username = true;
        }

    }

    function check_phonelength() {

        var pattern = /^[7-9][0-9]{9}$/
        var phonenumber = $("#form_phone").val();
        if (pattern.test(phonenumber) && phonenumber != '') {
            $("#phoneerrormessage").hide();
        }
        else if (phonenumber.length == 0) {
            $("#phoneerrormessage").html("This field is mandatory");
            error_phonenumber = true;
        }
        else {

        $("#phoneerrormessage").html("Invalid Phone number");
        error_phonenumber = true;
    }
}

function check_mail() {

      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
         var emailid =  $("#form_email").val();
         if(pattern.test(emailid) && emailid !='')
         {
             $("#emailerrormessage").hide();

         }
         else if(emailid.length == 0)
         {$("#emailerrormessage").html("This field is mandatory");
            error_email = true;
        }
        else{
             $("#emailerrormessage").html("Invalid email id");
             error_email = true;
         }

      }



   function check_retypeemail() {

       var textbox1 = $("#form_email").val();
       var textbox2 = $("#retypeemail").val();
       if( textbox1 != textbox2 )
       {
           $("#retypeemailerrormessage").html("email dont match");
            error_email1 = true;
       }
       else
       {
           $("#retypeemailerrormessage").hide();

       }

   }

   $("#form1").submit(function() {
       error_username = false;
       error_phonenumber = false;
       error_email1 = false;
       error_email = false;

       check_user();
       check_phonelength();
       check_mail();
       check_retypeemail();
       if (error_username == false && error_phonenumber == false && error_email == false && error_email1==false){
           alert("Form has been submitted");
       return true;
       }
       else
           {
               alert("Please fill the form correctly");
               return false;
           }
   });
   });

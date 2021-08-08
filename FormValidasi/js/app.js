/**
 *  Pembuatan fugsi sederhana 
 *  untuk melakukan validasi pada Form Login
 */

 function getValidasi()
 {
     var mail = document.getElementById("email").value;
     var pwd = document.getElementById("pwd").value;
 
     var error = "";
 
     if (mail == "" && mail.indexOf('@') == -1) {
         error = "Email anda Salah, Gunakan penulisan email yang benar";
         getKomponenData(error);
         return false;
     }else if(pwd == ""){
         error = "Masukkan Password Anda.";
         getKomponenData(error);
         return false;
     }else{
         alert("Email dan Password anda telah benar, akan segera divalidasi");
         return true;
     }
 }
 
 function getKomponenData(err_lab)
 {
     document.getElementById("error").style.display = "block";
     document.getElementById("error").style.color = "white";
     document.getElementById("error").innerHTML = err_lab;
 }
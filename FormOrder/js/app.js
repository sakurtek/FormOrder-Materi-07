/**
 * Pembuatan fungsi untuk proses 
 * pemilihan ORDER Makanan
 * Menggunakan DIV
 */

 const backColor = "#2ECC40";
 const frontColor = "white";
 
 // fungsi untuk memproses data
 // dan menghitung jumlah harga
 function getProsesData (baris)
 {   
     var total_harga = 0;
     var myid = getElementId(baris);
     getColor(baris);
 
     // ambil data setiap menu
     var strHargaMenu = document.getElementById(myid).innerHTML;
     var strTotalHarga = document.getElementById("total_harga").innerHTML;
 
     // mengambil nilai dari total harga
     var spStrHargaMenu = strHargaMenu.split(".");
     var valSpStrHargaMenu = spStrHargaMenu[1];
     var valueHarga = parseInt(valSpStrHargaMenu);
 
     // mengambil harga menu yang dipilih
     var spStrTotalHarga = strTotalHarga.split(".");
     var valSpStrHargaMenu = spStrTotalHarga[1];
     var valueTotal = parseInt(valSpStrHargaMenu);
 
     total_harga = valueHarga + valueTotal;
     var rpTotal = "Rp." + total_harga;
 
     // Ambil data jumlah pemesanan dan 
     // mengupdate data jumlah pemesanan
     var myspan = getElementIDJumlahPesanan(baris);
     var jmlPesan = document.getElementById(myspan).innerHTML;
     var valPesan = parseInt(jmlPesan);
     valPesan += 1;
 
     document.getElementById(myspan).style.display = "inline";
     document.getElementById(myspan).innerHTML = valPesan;
     document.getElementById("total_harga").innerHTML = rpTotal;
 }
 
 // fungsi digunakan untuk mengambil elemen
 // dari menu
 function getColor (baris)
 {
     var el = "";
     switch(baris)
     {
         case 0: el = "menu01"; break;
         case 1: el = "menu02"; break;
         case 2: el = "menu03"; break;
         case 3: el = "menu04"; break;
         case 4: el = "menu05"; break;
         case 5: el = "menu06"; break;
     }
     document.getElementById(el).style.background = backColor;
     document.getElementById(el).style.color = frontColor;
 }
 
 // fungsi untuk mengambil element id
 // pada keterangan jumlah pemesanan setiap 
 // data menu yang ditampilkan
 function getElementIDJumlahPesanan (id)
 {
     var el = "";
     switch (id)
     {
         case 0: el = "ket1"; break;
         case 1: el = "ket2"; break;
         case 2: el = "ket3"; break;
         case 3: el = "ket4"; break;
         case 4: el = "ket5"; break;
         case 5: el = "ket6"; break;
     }
     return el;    
 }
 
 // fungsi untuk mengambil elemen id 
 // dari seluruh form
 function getElementId (id)
 {
     var el = "";
     switch (id)
     {
         case 0: el = "hm01"; break;
         case 1: el = "hm02"; break;
         case 2: el = "hm03"; break;
         case 3: el = "hm04"; break;
         case 4: el = "hm05"; break;
         case 5: el = "hm06"; break;
     }
     return el;
 }
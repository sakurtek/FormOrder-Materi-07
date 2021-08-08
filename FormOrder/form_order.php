<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/tampilan.css">
        <script src="js/app.js"></script>
    </head>
    <body>
        <div id="kotak_utama">
            <div id="judul">
                PESANAN
            </div>
            
            <div id="menu01" class="menu_makanan" onclick="getProsesData(0)">
                Cappicinuo <div id="ket1" class="teks_pesan" style="display: none;">0</div>
                <div id="hm01" class="harga_menu">Rp.35000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="menu02" class="menu_makanan" onclick="getProsesData(1)">
                Green Tea Latte <span id="ket2" class="teks_pesan" style="display: none;">0</span>
                <div id="hm02" class="harga_menu">Rp.40000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="menu03" class="menu_makanan" onclick="getProsesData(2)">
                Fish and Chips <span id="ket3" class="teks_pesan" style="display: none;">0</span>
                <div id="hm03" class="harga_menu">Rp.50000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="menu04" class="menu_makanan" onclick="getProsesData(3)">
                Tuna Sandwich <span id="ket4" class="teks_pesan" style="display: none;">0</span>
                <div id="hm04" class="harga_menu">Rp.45000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="menu05" class="menu_makanan" onclick="getProsesData(4)">
                Mineral Water <span id="ket5" class="teks_pesan" style="display: none;">0</span>
                <div id="hm05" class="harga_menu">Rp.8000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="menu06" class="menu_makanan" onclick="getProsesData(5)">
                Frensh Fries <span id="ket6" class="teks_pesan" style="display: none;">0</span>
                <div id="hm06" class="harga_menu">Rp.18000</div>
            </div>
            <div class="baris_antara"></div>
            <div id="total_item">
                TOTAL:
                <div id="total_harga" class="total_val">Rp. 0</div>
            </div>
        </div>
    </body>
</html>
const halaman = [
    {
        judul: "Di Hutan Aceh yang damai",
        gambar: "img/hal1.jpeg",
        cerita: "Konon, di tengah hutan belantara Aceh, hiduplah sekawanan burung parakeet yang hidup damai, tenteram, dan makmur. Kawanan burung tersebut dipimpin oleh seorang raja parakeet yang bernama si Parkit."
    },
    {
        judul: "Pemburu Datang Memasang Perekat",
        gambar: "img/hal2.jpeg",
        cerita: "Suatu hari datanglah seorang pemburu yang berniat menangkap mereka dengan cara memasang perekat."
    },
    {
        judul: "Si Parkit Memberi Peringatan",
        gambar: "img/hal3.jpeg",
        cerita: "Si Parkit mengetahui niat jahat pemburu dan memberitahukan pada seluruh kawanan burung untuk berhati-hati."
    },
    {
        judul: "Si Parkit Tertinggal",
        gambar: "img/hal4.jpeg",
        cerita: "Malangnya, si Parkit justru masih terjebak. Pemburu segera menghampirinya dan mengancam akan membunuhnya. Si Parkit yang ketakutan pun membujuk si Pemburu agar tidak membunuhnya dan berjanji akan bernyanyi setiap hari untuk menghiburnya."
    },
    {
        judul: "Bernyanyi Setiap Hari",
        gambar: "img/hal5.jpeg",
        cerita: "Sejak saat itu, setiap hari si Parkit selalu bernyanyi. Banyak orang yang memuji kemerduan si Parkit, salah satunya Raja Aceh."
    },
    {
        judul: "Dibeli Raja Aceh",
        gambar: "img/hal6.jpeg",
        cerita: "Akhirnya, dengan menyerahkan sejumlah uang kepada pemburu, si Parkit menjadi milik raja. Ia dibawa ke istana, dimasukkan ke dalam sangkar emas, dan diberikan makanan enak setiap harinya."
    },
    {
        judul: "Rindu Hutan di Sangkar Emas",
        gambar: "img/hal7.jpeg",
        cerita: "Meski diberi makanan enak dan tempat yang nyaman, si Parkit tetap merindukan hutan. Ia sering menatap ke luar sangkar, memandang pohon-pohon yang tinggi dan burung-burung yang berkicau di sana."
    },
    {
        judul: "Pura-pura mati untuk kembali ke hutan",
        gambar: "img/hal9.jpeg",
        cerita: "Petugas istana melaporkan kematian si Parkit kepada raja. Raja pun memerintahkan untuk menguburkan si Parkit di taman istana. Namun, si Parkit ternyata pura-pura mati agar bisa kembali ke hutan."
    },
    {
        judul: "",
        gambar: "img/hal9.jpeg",
        cerita: ""
    },
    {
        judul: "",
        gambar: "img/hal10.jpeg",
        cerita: ""
    }
];

let halamanSekarang = 0;

function tampilkanHalaman() {
    document.getElementById("judulCerita").textContent =
        halaman[halamanSekarang].judul;

    document.getElementById("gambarCerita").src =
        halaman[halamanSekarang].gambar;

    document.getElementById("teksCerita").textContent =
        halaman[halamanSekarang].cerita;

    document.getElementById("nomorHalaman").textContent =
        (halamanSekarang + 1) + " / " + halaman.length;

    document.getElementById("btnPrev").disabled =
        halamanSekarang === 0;

    document.getElementById("btnNext").disabled =
        halamanSekarang === halaman.length - 1;
}

function halamanBerikutnya() {
    if (halamanSekarang < halaman.length - 1) {
        speechSynthesis.cancel();

        halamanSekarang++;
        tampilkanHalaman();
    }
}

function halamanSebelumnya() {
    if (halamanSekarang > 0) {
        speechSynthesis.cancel();

        halamanSekarang--;
        tampilkanHalaman();
    }
}

function bacakanCerita() {
    speechSynthesis.cancel();

    const teks = document.getElementById("teksCerita").innerText;

    const suara = new SpeechSynthesisUtterance(teks);

    suara.lang = "id-ID";
    suara.rate = 0.9;

    speechSynthesis.speak(suara);
}

tampilkanHalaman();
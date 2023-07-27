// dari dini kita akan menggimplementasikan suit jawa yang pernah kita buat kedalam DOM agar lebih interaktif dan tidak hanya menggunakan alert
// kita pelajari program dari suit jawa ini

// kita awali dengan membuat varialbe tanya untuk mengulang/looping pakah user ingin bermain lagi atau tidak
// lalu kita membuat pengulangan dengan while yang isinya pilihan player, di mulai dari
// membuat variable pilih yang isinya prompt nilai yang di dalam-nya gajah, orang dan semut
// lalu kita membuat pilihan computer, dari sini kita membuat pilihan logika untuk program, kita awali dengan membangkitkan bilangan random
// kita menyebut computer menjadi comp
// aturan yang kita buat adalah penempatan bilangan random untuk value tertentu
// - ketika bilangan random di bawah 0.34 maka computer memilih 'gajah',
// - ketika bilangan random di antara 0.34 samapai 0.67 maka computer memilih 'orang',
// - ketika bilangan random di atas 0.67 maka computer memilih 'semut'
// setelah kita membangkitkan random, lalu kita membuat rules,
// rules kita awali membuat menggunakan if yang isinya seri jika value-nya sama, else if untuk menang atau kalah lalu jika value sama di kemabalikan ke if untuk seri lalu jika penulisan salah akan menghasilkan input salah
// setalah rules kita membuat

// const tanya = true;
// while (tanya) {
//   // pilihan player
//   let player = prompt(semut, orang, gajah);

//   // pilihan computer
//   // membangkitakan bilangan random
// let comp = Math.random();
//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && 0.67 <= comp) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

//   //   menentukan rules
//   var hasil = " ";
//   if (player == comp) {
//     hasil = "SERI !";
//   } else if (player == "gajah") {
//     hasil = comp == "orang" ? "MENANG" : "KALAH";
//   } else if (player == "orang") {
//     hasil = comp == "gajah" ? "KALAH" : "MENANG";
//   } else if (player == "semut") {
//     hasil = comp == "gajah" ? "MENANG" : "KALAH";
//   } else {
//     hasil = "Input Salah 'gunakan ejaan yang benar' ";
//   }

//   // menampilkan hasil

// }

// untuk suit jawa versi 2 kita akan membuat dengan html yang tampilannya sudah kita buat untuk interface yang lebih interaktif
// idenya kita akan membuat dua buah panel atas dan bawah dari pada file HTML
// panel bawah untuk pilihan computer yang random dan panel bawah untuk pilihan kita siap kan 3 gambar logo, di setiap logo ada semut gajah orang
// idenya kita akan menekalan salah satu dari gambar untuk player dan gambar atas untuk pilihan random untuk computer dan nanti di compare atau di adu dan menghasikan hasil yang sudah kita tentukan dari seri mengan atau kalah yang hasil-nya akan muncul di kolom informasi di tengah-tengah ini
// disini kita membuat 3 file html css dan js

document.body.addEventListener("mousemove", function (posisi) {
  const posisiX = Math.round((posisi.clientX / window.innerWidth) * 255);
  const posisiY = Math.round((posisi.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor =
    "rgb(" + posisiX + "," + posisiY + ",100 )";
});

// setalah kita membuat file html css dan js sekarang kita sudah mendapatkan bentuk dari web swit jawa, tinggal membuat sistem-nya
// kita awali dengan mengambil logika dari suwit jawa 1 yaitu bagian pilihan computer dan bagian mambangkitkan bilangan random dan kita masukkan kedalam function

// function pilihanComputer() {
//   let comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && 0.67 <= comp) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }
// }

// jika kita sudah mengambil logika membangkitkan bilangan random seperti diatas yang di masukkan kedalam function
// dari sini kita ingin membuat code di atas lebih ringkas dimana setelah kondisi pada if else if dan else karana function mengembalikan nilai, yang mana nilainya adalah apapun dari pilihan computer jadi dari pada kita menuliskan comp = 'gajah' lebih baik kita return 'gajah' dan jika kita menggunakna return maka kita tidak membutuhkan kurung kurawal
// jika kita sudah menulis if (comp < 0.34) return gajah statment ini sudah selesai dan tidak membaca yang di bawahnya lagi, dari sini kita kita akan membuat if yang lain yang memiliki kondisi berbeda
// jika kita sudah memiliki kondisi yang berbeda kita langsung saja membuat if yang lain dan tidak menggunakan else if penulisan sebagai berikut, dan yang paling terakhir kita tidak membutuhkan else kita tinggal menggunakan return semut
// jika sudah kita comment untuk code di atas yang sebelum di ringkas

function getPilihanComputer() {
  let comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && 0.67 <= comp) return "orang";
  return "semut";
}

// dari sini sebelum kita membuat pilihan user kita akan membuat rules, yang menentuka siapa yang menang kalah dan seri
// kita buat di dalam function yang memiliki parameter comp dan player
// yang logikanya kita copy dari suwit jawa satu untuk penentuan rules

// function getHasil(comp, player) {
//   var hasil = " ";
//   if (player == comp) {
//     hasil = "SERI !";
//   } else if (player == "gajah") {
//     hasil = comp == "orang" ? "MENANG" : "KALAH";
//   } else if (player == "orang") {
//     hasil = comp == "gajah" ? "KALAH" : "MENANG";
//   } else if (player == "semut") {
//     hasil = comp == "gajah" ? "MENANG" : "KALAH";
//   } else {
//     hasil = "Input Salah 'gunakan ejaan yang benar' ";
//   }
// }

// dan dari sini juga bisa kita ringkas dengan return untuk kondisi tertentu
// lalu kita jadikan setiap kondisi untuk di return ke function getHasil yang memiliki 2 parameter yang mengembalikan nilai dari pilihan (computer dan player)
// jika di baca sama jika kondisi terpenuhi return ke get hasil jika kondisi tidak terpenuhi maka akan pindah ke kondisi yang di bawahnya dan jika kondisi tidak terpenuhi lagi akan masuk ke bawah dan seterusnya
// dari sini kita comment untuk get hasil yang belum di ringkas

function getHasil(comp, player) {
  if (player == comp) return "SERI !";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
  return "Input Salah 'gunakan ejaan yang benar' ";
}

// dari sini kita sudah mendapatkan pilihan dari computer dan hasil suwit-nya
// kita akan masuk ke event, jika kita masuk ke dalam browser kita akan masuk kedalam event-nya ketika kita memilih dari salah satu tombol yang ada di area-player
// kita mulai dari tombol gajah

// sekarang kita akan seleksi terlebih dahulu tombol-nya
// kita mulai dari membuat variable gajah
// lalu kita beri add event click, kita jalankan function, kita cek dulu function dengan alert ok, jika sudah berhasil
//  kita ambil dulu pilihan computer yang berada di atas dengan variable pilihanComputer di isi dengan memanggil functionnya getPilihanComputer, dan nanti akan secara random masuk kedalam pilihan computer
// sekarang kita ambil pilihan kita/player dengan variable pilihanPlayer, yang kita ambil dari nama class pada HTML yang kebetulan sama kita manfaatkan penamaan class
// penulisan pemaanggilan setiap gambar dengan class sebagai berikut :
// pGajah.className

// kita bisa mengecek satu persatu dengan console, dari pilihanComputer, pilihanPlayer
// jika rules sudah berjalan kita tinggal membuat hasil variable hasil
// setelah kita selesai mengambil setiap nilai yang di deklarasikan kita tinggal menampilkan hasil ke antarmuka dan kita menggambil gambar sesuai pilihan acak dari computer
// lalu gambar kita sesuaikan dengan pilihan computer
// kita ganti gambar dengan memanipulasi attribute, penulisan seperti di bawah
// dari sini jika kita menekan logo gajah maka pilihan computer akan berubah secara acak

// lalu kita akan mendekarasikan hasil ke antar muka di element info
// kita ambil dulu element info, lalu kita ambil tengahnya dengan innerHTML
// jika sudah kita mendeklarasikan hasil dengan innerHTML maka akan tampil di hlaan info di browser
// jika sudah berhasil
// kita akan memfungsilakan tobol yang lain seperti tombol gajah, untuk orang dan semut
// cara gampangnya tinggal kita copikan saja pGajah dan mengganti dangan pOrang dan pSemut, tapi ini tidak efektif tapi bisa, coba kita copikan saja dulu
//

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player :" + pilihanPlayer);
//   console.log("hasil :" + hasil);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player :" + pilihanPlayer);
//   console.log("hasil :" + hasil);

//   const imgComputer = document.querySelector(".img-computer");
// imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player :" + pilihanPlayer);
//   console.log("hasil :" + hasil);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// dari sini game suit kita sudah selesai, dan program kita sudah berjalan, dan kita akan memubat program kita menjadi lebih efisien
// jika sudah kita akan memperbaiki dengan 3 event yang sama yang hanya mengulang-ulang program pada tombol untuk pGajah pOrang dan pSemut, agar program kita lebih efisien
// kita mulai dengan mengomentari event untuk pilihan di section player, lalu kita hanya butuh membuat satu kali dan akan menggunakan looping untuk program yang lain
// yang akan kita lakukan sekarang, menyeleksi gambar yang di dalam li sekaligus dengan membuat variable pilihan misal, dan kita mulai menggunakan query selector all
// INGAT : querySelector hanya mengambil satu element yang pertama kali di atemui dan menghasilkan HMTL collection, jika kita ingin mengambil semua element yang ada di halaman kita bisa menggunakan querySelectorAll yang menghasilkan nodeList
// dan yang kita ambil adalah img yang ada di dalam li bukan img saja kita butuh spesifik dari li
// jika sudah kita akan looping tiap img-nya, jika kita log untuk mengecek isi dari piilihan, ada 3 nodeList img
// dan kita akan melakukan looping pada 3 img ini,caranya kita penggil node list, lalu kita menggunkan forEach, yang di baca untuk setipa img yang ada di nodeList pilihan akan kita jalankan function berikut, yang di dalam function ktia beri parameter untuk mengambil masing masing dari parameter-nya, bisa i bisa pil bebas
// dan pil ini akan merepresentasikan satu img saja, jika kita cek log pil akan merepresentasikan 3 buah img tadi, yang merepresentasikan jumlah dari img='orang.jpg' dan seterusnya
// selanjutanya kita beri event untuk tiap pilihan yang di click dan function, jika kita menambahkan eventListener maka akan dia akan fokus kepada pil yang akan di pilih/diclick, sekarang kita bisa mencoba kita click salah saru dari gambar maka dia akan muncul sesuai dari gambar yang di pilh pada log
// dari sini kita hanya perlu menggunakan satu saja evetnt dan tidak akan mengkopikan menjadi 3 tadi
// dari sini kita tinggal melakukan hal yang sama dengan yang tadi, membuat variable pilihan computer yang di dalamnya get pilihanComputer, variable pilihan player yang di dalamnya property pil yang di ambil dari property pil, dan hasil yang  di ambil dari getHasil yang di dalamnya kondisi jika ada (getPilihancomputer dan getPilihanPlayer)
// setalah pada log muncul kondisi yang benar/berjalan, kita akan menampilkan gambar yang sesuai dengan pilihan random yang kita ambil dari class img-computer jadi kita akan menambahkan attribute di img yang memiliki class img-computer dan tinggal mendeklarasikan/menampilkan kedalam browser dengan penulisan set attribute src='gambar' yang di dalamnya seuaikan dengan string literal, yang sebelumnya kita deklarasikan dulu kedalam variable
// jika sudah menerapkan gambar pada pilihan computer dan sesuai dengan inputan pada program
// kita akan menampilkan ke dalam bar info dengan keyword innerHTML, yang kita masukkan ke dalam variable info yang mengambil class info
// dari sini agar terlihat lebih keren, kita akan menambahkan sesuatu, yaitu agar terlihat lebih keren saya ingin computer seolah-olah mengacak dulu pilihan dari
// jadi dia akan berputar dulu mengacar dari gambar yang ada sampai di berhenti di pilihan dia
// disini kita akan mengimplementasikan konsep timing pada javascript , jika kita ingat pada pemahasan di seri quictip, yang berhubungan dengan var di ganti dengan let const dll di dalamnya ada pambahasan tentang set interval dan set timeout, dan kita akan menggunakan itu kita akan membuat fucntion putar di atas variable pilihan di bawah
// setelah kita membuat funcion putar kita akan mengisikan dengan,
//  mengambil gambar dari img-computer dengan memasukkan ke variable kita namai acak,
// dan kita akan menggunakan setInterval agar suatu program bisa berjalan berulang-ulang, yang isinya adalah function yang intervalnya kita beri 100 = 0,1 detik, dan selama 0.1 detik saya ingin mengganti-ganti gambarnya
// tapi kita buat dulu varibale yang menampung array sebelum ke dalam function setInterval yang menampung gajah, semut, orang
// lalu kita masuk kedalam funciton setInterval yang di dalamnya kita ambil acakGambar dan kita guankan setAttribute seperti tadi tapi kita ganti menggunakan gambar yang di ikuti dengan index tertentu jadi kita akan menambahkan variable untuk index di bawah variable gambar dan kita akan menggunakan let karena angka akan berganti-ganti, jadi let i = 0
//  lalu kita tambahkan pada string literal increment i++ untuk angka terus bertambah
// jika kita berhenti disini maka gamba akan berputer terus menerus dan gambar hilang karena index gambar hanya dari 0 1 2, sekarang bagaimana jika kita membuat incement yang terus bertambah berhenti ke 3 dan kembali ke awal, kita akan menggunakan if
// if jika i == 3/jumlah_gambar/length, maka kita sisi dengan i = 0, maka dia akan mengulang terus menerus
// jadi gambar sudah berputer terus menerus tapi tidak berhenti bagaimana cara kita berhenti selama waktu tertentu
// kita akan membuat variable const waktuMulai, jadi saat waktu mulai di jalankan, kita ambil waktu saat itu dan satu detik kemudian berhenti kita menggunakan new Date().getTime(), dan di dalam setInterval kita cek dengan if jika seleksi pengulangan sudah selisih 1 detik berhentikan, kita tuliskan if(new Date().getTime()), jadi date().getTIme() pada variable waktu mulai itu pada awal mulai, dan new Date()/getTIme() pada if di dalam interval adalah saat pengulangannya di ambil waktunya, dimana waktunya nanti akan menambah 0,1 0,1 0,1 terus sampai sudah 1 detik at 100 milisecond di berhentikan jadi di kurangi waktu mulai selisihnya makin lama kan, > 1000 { maka clear interval atau berhentikan }, panulisan langsung di variable waktuMulai dan di dalam setInterval di dalam if, lalu kita return agar keluar dari function
// dari sini ada problem lagi, karen selalu berhenti di orang, jadi bagaimana agar selalu berhenti di pilihan acak dari computer, yang sebenarnya function putar ini hanya pura",
// dari sini kita akan melihan ke bawah lagi pada tampilImgComp dan info, dan dua hal tersebut akan kita lakukan ketika funcion putar selesai, jadi funcion putar selesai dalam satu detik, sedangkan gambar di ganti sebelum satu detik,
// jadi bagaimana jika tampilImgComp dan info kita jalankan ketika selesai interval waktu atau selesai setelah satu detik, jadi biarkan function putar selesai baru kita jalankan dua hal tersebut
// jadi di bawah pemanggilan acak() pada pilihan, akan kita panggil setTimeOut function berikut selama satu detik, yang di dalam-nya dua hal tersebut yaitu tampilImgComp dan info
// lalu kita akan memanggil funcion puter di variable pilihan, di bagian setelah kita click
// coba kita jalankan

function acak() {
  const acakGambar = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    acakGambar.setAttribute(`src`, `img/${gambar[i++]}.jpg`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
// console.log(pilihan);
pilihan.forEach(function (pil) {
  // console.log(pil);
  pil.addEventListener("click", function () {
    // console.log(pil);
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log(pilihanComputer);
    console.log(pilihanPlayer);
    console.log(hasil);

    acak();

    setTimeout(function () {
      const tampilImgComp = document.querySelector(".img-computer");
      tampilImgComp.setAttribute(`src`, `img/${pilihanComputer}.jpg`);

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// dari sini ada kita sudah melakukan versi update dari suwit jawa, jika ada yang di tambahkan kita sambil belajar tambahkan sesuatu, atau kita memiliki pr dari WPU untuk menambahkan scoring dari hasil suwit, kita bisa coba untuk belajar

// CATATAN : kapan kita membuat varible untuk di deklarasikan, dan ingat dan pahami cara menulis suatu kondisi penulisan saat membutuhkan DOM kapan kita menulis menggunakan funcion kapan kita menulis menggunakna pengulangan kapan parameter di pbutuhkan kapan parameter tidak di butuhkan saat ada kondisi apa kita akan melakukan, pahami urutan/alur pembuatan program , jadi butuh pemahaman ulang untuk kedepannya SEMANGAT

// dari materi sebelunnya kita sudah membuat dan kita akan masuk kedalam materi DOM traversal
 
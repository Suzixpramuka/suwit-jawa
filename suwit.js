var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih : gajah, semut, orang");

  // menangkap pilihan komputer

  //membangkitakn bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "Gajah" && "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang" && "orang";
  } else {
    comp = "Semut" && "semut";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "MENANG!";
    // } else {
    //   hasil = "KALAH!";
    // }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Memasukkan pilihan yang salah!, periksa kembali!";
  }

  // tampilkan hasilnya
  alert(
    " Kamu memilih : " +
      p +
      " dan Komputer memilih : " +
      comp +
      "\n Maka  hasilnya : Kamu " +
      hasil
  );

  tanya = confirm("lagi?");
}
alert("TERIMA KASIH SUDAH BERMAIN");

// angka random
// var lagi = true;
// while (lagi) {
//   alert("Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.");
//   var comp = Math.round(Math.random() * 10);
//   var hasil = "";
//   for (var i = 3; i > 0; i--) {
//     var p = prompt("Masukkan Angka tebakan!");
//     j = i - 1;
//     if (p == "") {
//       alert("Yang anda masukkan bukan angka");
//       i = 0;
//     } else if (p == null) {
//       i = 0;
//     } else {
//       if (p == comp) {
//         alert("Anda BENAR!\nAngka yang dicari adalah " + comp);
//         i = 0;
//       } else if (p < comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu RENDAH!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else if (p > comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu TINGGI!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else {
//         alert("Yang anda masukkan bukan angka");
//         i = 0;
//       }
//     }
//   }
//   lagi = confirm("Main lagi?");
// }
// alert("Terima kasih.");

// var lagi = true;
// while (lagi) {
//   alert("Tebak angka BOOM dari 1 - 10!\nKamu punya 3 kesempatan.");
//   var comp = Math.round(Math.random() * 10);
//   var hasil = "";
//   for (var i = 3; i > 0; i--) {
//     var p = prompt("Masukkan Angka tebakan!");
//     j = i - 1;
//     if (p == "") {
//       alert("Yang anda masukkan bukan angka");
//       i = 0;
//     } else if (p == null) {
//       i = 0;
//     } else {
//       if (p == comp) {
//         alert("Anda BENAR!\nAngka yang dicari adalah " + comp);
//         i = 0;
//       } else if (p < comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu RENDAH!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else if (p > comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu TINGGI!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else {
//         alert("Yang anda masukkan bukan angka");
//         i = 0;
//       }
//     }
//   }
//   lagi = confirm("Main lagi?");
// }
// alert("Terima kasih.");
//
// var lagi = true;
// while (lagi) {
//   // pilihan player
//   var p = prompt("Pilih : Gajah, Semut atau Orang");

// pilihan computer
// membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "Gajah" && "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "Orang" && "orang";
//   } else {
//     comp = "Semut" && "semut";
//   }

//   var hasil = "";
//   // menentukan rules
//   if (p == comp) {
//     hasil = "SERI!";
//   } else if (p == "Gajah" || "gajah") {
//     //
//     hasil = comp == "Orang" || "orang" ? "MENANG!" : "KALAH!";
//   } else if (p == "Orang" || "orang") {
//     hasil = comp == "Gajah" || "gajah" ? "KALAH" : "MENANG!";
//   } else if (p == "Semut" || "semut") {
//     hasil = comp == "Orang" || "orang" ? "KALAH!" : "MENANG!";
//   } else {
//     hasil = "Anda memasukkan pilihan yang salah! Periksa kembali!";
//   }

//   // tampilkan hasilnya
//   alert(
//     " Kamu memilih : " +
//       p +
//       " dan Komputer memilih : " +
//       comp +
//       "\nMaka Hasilnya : Kamu " +
//       hasil
//   );
//   lagi = confirm("Ingin memainkan lagi?");
// }
// alert("Terimakasih sudah bermain");

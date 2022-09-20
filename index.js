// let osoba = {
//   ime: 'Marko',
//   prezime: 'Markovic',
//   godiste: 2000,
//   pozdrav: function () {
//     console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${2022 - this.godiste} godina.`);
//   },
// };

// // osoba.godiste = 1990;
// // osoba.pozdrav = function () {
// //   console.log('Zdravo');
// // };
// //console.log(osoba.godiste);
// //osoba.pozdrav();

// osoba.visina = 175;
// console.log(Object.entries(osoba));

class Osoba {
  ime;
  prezime;
  godiste;
  constructor(ime, prezime, godiste) {
    this.ime = ime;
    this.prezime = prezime
    this.godiste = godiste;
  }
  pozdrav() {
    console.log(`Zdravo ja sam ${this.ime} ${this.prezime}. Imam ${2022-this.godiste} godina.`)
  }
}

class Nastavnik extends Osoba {
  predmet;
  constructor(ime, prezime, godiste, predmet) {
    super(ime, prezime, godiste);
    this.predmet = predmet;
  }
  dajocenu(ucenik, ocena) {
    ucenik.ocene.push(ocena);
  }
}

let nastavnik = new Nastavnik("Milan", "Vukadin", 1987, "Programiranje");
nastavnik.pozdrav();

class Ucenik extends Osoba {
  ocene = [];
}

let ucenik = new Ucenik("Petar", "Petrovic", 2004);

nastavnik.dajocenu(ucenik, 5);
nastavnik.dajocenu(ucenik, 5);
nastavnik.dajocenu(ucenik, 4);
ucenik.pozdrav();
console.log(ucenik.ocene);
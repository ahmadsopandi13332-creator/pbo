class Kendaraan {
  constructor(jenis) {
    this.jenis = jenis;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun) {
    super('Mobil'); // Memanggil konstruktor kelas induk
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }
}

class Hewan {
  speak() {
    console.log("Hewan berbicara");
  }
}

class Anjing extends Hewan {
  speak() {
    console.log("Anjing menggonggong");
  }
}

let hewan1 = new Hewan();
let hewan2 = new Anjing();

hewan1.speak(); // Output: Hewan berbicara
hewan2.speak(); // Output: Anjing menggonggong

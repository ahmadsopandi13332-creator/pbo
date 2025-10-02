class Mahasiswa {
    // private field
    #nilai;

    constructor(nama, nim, nilai){
        this.nama = nama; // public
        this.nim = nim;   // public
        this.nilai = nilai; // langsung lewat setter
    }

    // getter (akses nilai)
    get nilai(){
        return this.#nilai;
    }

    // setter (ubah nilai dengan validasi)
    set nilai(nilaiBaru){
        if (nilaiBaru >= 0 && nilaiBaru <= 100){
            this.#nilai = nilaiBaru;
        } else {
            this.#nilai = null;
        }
    }

    // method untuk tampilkan data
    tampilkanData(nomor){
        console.log(`${nomor}. Nama   : ${this.nama}`);
        console.log(`   NIM    : ${this.nim}`);
        if (this.#nilai !== null){
            console.log(`   Nilai  : ${this.#nilai}`);
        } else {
            console.log(`   Nilai harus antara 0 dan 100`);
        }
        console.log("");
    }
}

// === Buat beberapa mahasiswa ===
let daftarMahasiswa = [
    new Mahasiswa("Ahmad Sopandi", "202401110074", 150), // invalid
    new Mahasiswa("Budi", "202401110099", 90),           // valid
    new Mahasiswa("Citra", "202401110123", 200)          // invalid
];

// tampilkan semua data
daftarMahasiswa.forEach((mhs, index) => {
    mhs.tampilkanData(index + 1);
});

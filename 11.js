let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra"); // overwrite

console.log(mahasiswa.get("001")); // Andi
console.log(mahasiswa.get("002")); // Citra
console.log(mahasiswa.get("003")); // Citra

let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); // beda karena ada spasi
console.log(tugas);

function printItems(items) {
    items.forEach(i => console.log(i));
}

printItems([1, 2, 3]);             
printItems(["A", "B", "C"]);        
printItems([1, 2, 3, "A", "B", "C"]);

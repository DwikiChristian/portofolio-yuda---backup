// Ambil referensi ke elemen-elemen button dan section
const allBtn = document.getElementById('allBtn');
const photoBtn = document.getElementById('photoBtn');
const videoBtn = document.getElementById('videoBtn');
const photoSection = document.getElementById('photoSection');
const videoSection = document.getElementById('videoSection');

function showAllContent() {
    // Tampilkan semua section
    photoSection.classList.remove('hidden');
    videoSection.classList.remove('hidden');
    allBtn.classList.remove('bg-white'); 
    allBtn.classList.add('bg-yellow-400'); 
}

// Tambahkan event listener untuk tombol "ALL"
allBtn.addEventListener('click', function() {
    // Tampilkan semua section
    showAllContent();
    // Tambahkan warna kuning ke tombol "ALL" dan hapus dari tombol lainnya
    allBtn.classList.remove('bg-white');
    allBtn.classList.add('bg-yellow-400');
    photoBtn.classList.remove('bg-yellow-400');
    videoBtn.classList.remove('bg-yellow-400');
    videoBtn.classList.add('bg-white');
    photoBtn.classList.add('bg-white');
});

// Tambahkan event listener untuk tombol "PHOTO"
photoBtn.addEventListener('click', function() {
    // Tampilkan hanya section foto, sembunyikan section video
    photoSection.classList.remove('hidden');
    videoSection.classList.add('hidden');
    // Tandai tombol "PHOTO" sebagai dipilih
    photoBtn.classList.remove('bg-white');
    photoBtn.classList.add('bg-yellow-400');
    // Hapus warna kuning dari tombol lainnya
    allBtn.classList.remove('bg-yellow-400');
    videoBtn.classList.remove('bg-yellow-400');
    allBtn.classList.add('bg-white');
    videoBtn.classList.add('bg-white');
});

// Tambahkan event listener untuk tombol "VIDEO"
videoBtn.addEventListener('click', function() {
    // Tampilkan hanya section video, sembunyikan section foto
    videoSection.classList.remove('hidden');
    photoSection.classList.add('hidden');
    // Tandai tombol "VIDEO" sebagai dipilih
    videoBtn.classList.remove('bg-white');
    videoBtn.classList.add('bg-yellow-400');
    // Hapus warna kuning dari tombol lainnya
    allBtn.classList.remove('bg-yellow-400');
    photoBtn.classList.remove('bg-yellow-400');
    allBtn.classList.add('bg-white');
    photoBtn.classList.add('bg-white');
});

showAllContent();
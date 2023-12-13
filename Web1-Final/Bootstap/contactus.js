function validateForm() {
    // Dapatkan input formulir
    let fullName = document.forms["contactForm"]["fullName"].value;
    let email = document.forms["contactForm"]["email"].value;
    let username = document.forms["contactForm"]["username"].value;
    let password = document.forms["contactForm"]["password"].value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let religion = document.forms["contactForm"]["religion"].value;
    let address = document.forms["contactForm"]["address"].value;
    let hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

    // Periksa apakah input kosong atau tidak dipilih
    if (fullName === "") {
      alert("Nama lengkap harus diisi");
      return false;
    }

    if (email === "") {
      alert("Email harus diisi");
      return false;
    }

    if (username === "") {
      alert("Nama pengguna harus diisi");
      return false;
    }

    if (password === "") {
      alert("Kata sandi harus diisi");
      return false;
    }

    if (gender === null) {
      alert("Jenis kelamin harus dipilih");
      return false;
    }

    if (religion === "") {
      alert("Agama harus dipilih");
      return false;
    }

    if (address === "") {
      alert("Alamat harus diisi");
      return false;
    }

    if (hobbies.length === 0) {
      alert("Pilih setidaknya satu hobi");
      return false;
    }

    // Validasi tambahan dapat ditambahkan sesuai kebutuhan

    // Formulir valid
    alert("Formulir berhasil disubmit!");
    return true;
  }
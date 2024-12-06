let blogs = [];

function addBlog(e) {
  e.preventDefault();

  // Mengambil nilai dari input fields
  let title = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-blog-description").value;
  // Menangkap teknologi yang dipilih
  let selectedTechnologies = [];
  if (document.getElementById("html").checked)
    selectedTechnologies.push("HTML");
  if (document.getElementById("css").checked) selectedTechnologies.push("CSS");
  if (document.getElementById("js").checked)
    selectedTechnologies.push("JavaScript");
  if (document.getElementById("TypeScript").checked)
    selectedTechnologies.push("TypeScript");
  let image = document.getElementById("input-blog-image").files[0]; // Mengambil file image

  // Validasi form
  if (
    title === "" ||
    description === "" ||
    startDate === "" ||
    endDate === "" ||
    selectedTechnologies.length === 0
  ) {
    alert(
      "All fields must be filled out and at least one technology should be selected."
    );
    return;
  }

  // Validasi file gambar (jika ada)
  if (!image) {
    alert("Please upload an image for your project.");
    return;
  }

  // Membuat objek blog baru
  let blog = {
    author: "Maaseya Sardin",
    title: title,
    startDate: startDate,
    endDate: endDate,
    description: description,
    technologies: selectedTechnologies,
    postedAt: new Date(),
    image: image.name, // Menyimpan nama file gambar
  };

  // Menambahkan objek blog ke array blogs
  blogs.push(blog);

  renderBlog();
  // Reset form setelah submit
  document.querySelector(".form-container").reset();
}

function renderBlog() {
  console.log(blogs);
}

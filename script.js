////// tìm kiếm 
  const searchIcon = document.getElementById("searchIcon");
  const searchBox = document.getElementById("searchBox");

  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("d-none");
  });



////////// Đánh giá
const API_URL = "https://690953022d902d0651b34ee8.mockapi.io/reviews";
const reviewList = document.getElementById("review-list");

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach((review, index) => {
      const { name, avatar, rating, comment, date } = review;

      // Tạo sao đánh giá
      const stars = Array(5).fill(0).map((_, i) =>
        i < rating
          ? `<i class="bi bi-star-fill text-warning"></i>`
          : `<i class="bi bi-star text-warning"></i>`
      ).join("");

      // Nếu là phần tử đầu tiên thì thêm class "active"
      const activeClass = index === 0 ? "active" : "";

      const html = `
        <div class="carousel-item ${activeClass}">
          <div class="testimonial-card p-4 shadow-sm rounded-4 bg-white mx-auto" style="max-width: 600px;">
            <div class="d-flex align-items-center mb-3">
              <img src="${avatar}" alt="${name}" class="rounded-circle me-3" width="60" height="60">
              <div>
                <h5 class="mb-1 fw-semibold">${name}</h5>
                <div>${stars}</div>
                <small class="text-muted">${date}</small>
              </div>
            </div>
            <p class="text-muted mb-0">
              “${comment}”
            </p>
          </div>
        </div>
      `;

      reviewList.innerHTML += html;
    });
  })
  .catch(err => console.error("Lỗi tải dữ liệu:", err));
//////// đăng nhập 
  document.addEventListener("DOMContentLoaded", () => {
    
    const signInBtn = document.getElementById("signInBtn");
    const signInModalEl = document.getElementById("signInModal");
    
    // Tạo đối tượng Bootstrap Modal
    const signInModal = new bootstrap.Modal(signInModalEl);

    // Khi nhấn nút, hiển thị modal
    signInBtn.addEventListener("click", () => {
      signInModal.show();
    });
  });
///////////// menu món ăn 
document.addEventListener("DOMContentLoaded", () => {
  const moreMenuBtn = document.getElementById("moreMenuBtn");
  const menuTable = document.getElementById("menuTableContainer");

  moreMenuBtn.addEventListener("click", () => {
    if (menuTable.style.display === "none") {
      menuTable.style.display = "block"; // hiển thị bảng
      moreMenuBtn.textContent = "Hide Menu"; // đổi chữ nút
    } else {
      menuTable.style.display = "none"; // ẩn bảng
      moreMenuBtn.textContent = "More Menu";
    }
  });
});
/////// đăng kí

document.getElementById("signupBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (!name || !email || !pass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    alert("Đăng ký thành công!");

    // Đóng modal bằng Bootstrap JS
    const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    modal.hide();
});



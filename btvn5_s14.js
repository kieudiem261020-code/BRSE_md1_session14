const students = [];
// 1. Thêm sinh viên mới
function addStudent() {
  const name = prompt("Nhập tên sinh viên:");
  const age = prompt("Nhập tuổi:");
  const id = prompt("Nhập mã số sinh viên (ID):");

  students.push({ id, name, age });
  alert("Đã thêm sinh viên thành công!");
}

// 2. Hiển thị danh sách sinh viên
function displayStudents() {
  if (students.length === 0) {
    alert("Danh sách trống!");
    return;
  }
  console.clear();
  students.forEach((s) => {
    console.log(`ID: ${s.id} | Tên: ${s.name} | Tuổi: ${s.age}`);
  });
}
// 3. Xóa sinh viên theo ID
function deleteStudentById() {
  const id = prompt("Nhập ID sinh viên cần xóa:");
  const index = students.findIndex((s) => s.id === id);

  if (index !== -1) {
    students.splice(index, 1);
    alert("Đã xóa sinh viên!");
  } else {
    alert("Lỗi: Không tìm thấy sinh viên với ID này!");
  }
}
// Menu chạy chương trình
while (true) {
  const choice = prompt(
    "1. Thêm sinh viên\n2. Hiển thị danh sách\n3. Xóa sinh viên theo ID\n0. Thoát"
  );

  if (choice === "1") addStudent();
  else if (choice === "2") displayStudents();
  else if (choice === "3") deleteStudentById();
  else break;
}

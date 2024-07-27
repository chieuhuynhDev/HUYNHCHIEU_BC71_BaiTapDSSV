// tạo array dssv
var DSSV = [];

// lấy dữ liệu từ local storage khi load lại trang
var data = localStorage.getItem("DSSV_JSON");
console.log("🚀 ~ data:", data);

//convet JSON trở lại aray gốc
let svArr = JSON.parse(data);

// convert từ arr obj cũ sang arr obj mới

for (var i = 0; i < svArr.length; i++) {
  var data = svArr[i];
  var sv = new SinhVien(
    data.ma,
    data.ten,
    data.email,
    data.matKhau,
    data.diemToan,
    data.diemLy,
    data.diemHoa
  );
  DSSV.push(sv);
}
console.log("🚀 ~ DSSV:", DSSV);
renderDSSV();

// render dssv
function renderDSSV() {
  var contentHTML = "";
  for (let i = 0; i < DSSV.length; i++) {
    var sv = DSSV[i];
    var trString = `<tr>
      <td>${sv.ma}</td>
      <td>${sv.ten}</td>
      <td>${sv.email}</td>
      <td>${sv.tinhDTB()}</td>
      <td> <button class="btn btn-danger" onclick="xoaSv('${
        sv.ma
      }')" >Xóa</button>
      <button class="btn btn-warning" onclick="suaSv('${
        sv.ma
      }')">Sửa</button> </td>
      </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

// thêm SV
function addSv() {
  var sv = layThongTinTuForm();

  DSSV.push(sv);
  console.log(" data dau khi thêm: ", DSSV, sv.tinhDTB());
  // convert array to string
  var jsonDSSV = JSON.stringify(DSSV);
  console.log("🚀 ~ themSv ~ jsonDSSV:", jsonDSSV);
  // lưu vào local stroage
  localStorage.setItem("DSSV_JSON", jsonDSSV);
  renderDSSV();
}

//  xóa 1 phần tử array
function xoaSv(maSv) {
  console.log("🚀 ~ maSv ~ :", maSv);

  var viTri = -1;
  for (i = 0; i < DSSV.length; i++) {
    if (DSSV[i].ma == maSv) {
      viTri = i;
    }
  }

  if (viTri != -1) {
    DSSV.splice(viTri, 1);
  }

  // convert array to string
  var jsonDSSV = JSON.stringify(DSSV);
  console.log("🚀 ~ themSv ~ jsonDSSV:", jsonDSSV);
  // lưu vào local stroage
  localStorage.setItem("DSSV_JSON", jsonDSSV);
  renderDSSV();
}

// sửa 1 phần tử array
function suaSv(maSv) {
  var viTri = DSSV.findIndex(function (item) {
    return item.ma == maSv;
  });
  if (viTri != -1) {
    var sv = DSSV[viTri];

    //  đưa data lên form
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtDiemToan").value = sv.diemToan;
    document.getElementById("txtDiemHoa").value = sv.diemHoa;
    document.getElementById("txtDiemLy").value = sv.diemLy;
    console.log("🚀 ~ suaSv ~ sv:", sv);
    // disable input txtMaSV
    document.getElementById("txtMaSV").setAttribute("readonly", true);
  }
}

//  cạp nhật data
function capNhatSV() {
  var sv = layThongTinTuForm();
  console.log("🚀 ~ capNhatSV ~ sv:", sv);
  var viTri = DSSV.findIndex(function (item) {
    return item.ma == sv.ma;
  });

  DSSV[viTri] = sv;
  renderDSSV();
}

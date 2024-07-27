function SinhVien(ma, ten, email, matKhau, diemToan, diemLy, diemHoa) {
  (this.ma = ma),
    (this.ten = ten),
    (this.email = email),
    (this.matKhau = matKhau),
    (this.diemToan = diemToan),
    (this.diemLy = diemLy),
    (this.diemHoa = diemHoa),
    (this.tinhDTB = function () {
      return (this.diemHoa + this.diemLy + this.diemToan) / 3;
    });
}

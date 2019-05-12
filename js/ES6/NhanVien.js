//Lớp nhân viên
class NhanVien {
    constructor(maNV, hoTen, email, matKhau, ngayVaoLam, chucVu){
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.email = email;
        this.matKhau = matKhau;
        this.ngayVaoLam = ngayVaoLam;
        this.chucVu = chucVu;

        this.mangDoiChieu = [this.maNV, this.hoTen, this.email, this.matKhau, this.ngayVaoLam, this.chucVu]
    }
}
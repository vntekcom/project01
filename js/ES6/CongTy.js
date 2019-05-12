class CongTy {
    constructor(){
        this.DanhSachNhanVien = new Array();
    }

    ThemNhanVien(nhanvienmoi){
        this.DanhSachNhanVien = [...this.DanhSachNhanVien, nhanvienmoi];
    }

    TimViTriNhanVien(maNV){
        for(let i in this.DanhSachNhanVien){
            if(this.DanhSachNhanVien[i].maNV===maNV){
                return i;
                break;
            }
        }
    }

    TimTenNhanVien(maNV){
        for(let i of this.DanhSachNhanVien){
            if(i.maNV===maNV){
                return i;
                break;
            }
        }
    }

    XoaNhanVien(maNV){
        let i = this.TimViTriNhanVien(maNV);
        this.DanhSachNhanVien.splice(i, 1);
    }

    SuaNhanVien(nhanvien){
        let i = this.TimViTriNhanVien(nhanvien.maNV);
        this.DanhSachNhanVien[i] = nhanvien;
    }

    TimNhanVienTheoTen(hoten){
        let ds = new CongTy();
        hoten = hoten.trim().toLowerCase();
        for(let nhanvien of this.DanhSachNhanVien){
            let hoTen = nhanvien.hoTen.trim().toLowerCase();
            if(hoTen.search(hoten) !== -1){
                ds.DanhSachNhanVien = [...ds.DanhSachNhanVien, nhanvien];
            }
        }
        return ds;
    }
}
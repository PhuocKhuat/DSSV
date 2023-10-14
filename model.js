//TẠO LỚP ĐỐI TƯỢNG, CÓ 6 DATA (MÃ, TÊN,...) CỦA SINH VIÊN, LỚP ĐỐI TƯỢNG LÀ PROPERTY, METHOD
function SinhVien(_ma, _ten, _email, _pass, _toan, _van,){
   this.ma = _ma;
   this.ten = _ten;
   this.email= _email;
   this.pass = _pass;
   this.toan = _toan;
   this.van = _van;
   this.tinhDTB = function(){
        var dtb = (this.toan + this.van)/2;
        return dtb;
      }
}
//Lưu tên sinh viên dùng array chứa object
//Tạo array bên ngoài => NHỚ
var dSSV = [];
//## ĐỂ Ở ĐÂY, KHI TẢI TRANG ĐƯA CÁC Ô LÊN GIAO DIỆN /
var dataJson = localStorage.getItem("DSSV_LOCAL");
if(dataJson != null){
  //JSON CHUYỂN THÀNH ARRAY (DATAJSON)
  let result = JSON.parse(dataJson);
  //LẤY ARRAY ĐI XỬ LÝ
  //BIẾN 1 ARRAY CHỨA OBJECT KHÔNG CÓ METHOD THÀNH ARRAY CHỨA OBJECT CÓ METHOD.
  //BIẾN NHỮNG PHẦN TỬ CÓ TRONG RESULT TRẢ VỀ LỚP ĐỐI TƯỢNG SINH VIÊN
  dSSV = result.map(function(item){
    //MAP LÀ FUNCTION NÊN PHẢI CÓ RETURN
    return new SinhVien(
      item.ma, //object.key
      item.ten,
      item.email,
      item.pass,
      item.toan,
      item.van,
    );
  });
  renderDSSV(dSSV);

}

function themSV(){
  /**
   * 1. Tạo 1 array rỗng
   * 2. Lấy thông tin từ form => tạo object => push object vào array
   * 3. render array object lên layout (tạo các thẻ tr tương ứng)
   */
  var _ma = document.getElementById('txtMaSV').value;
  var _ten = document.getElementById('txtTenSV').value;
  var _email = document.getElementById('txtEmail').value;
  var _pass = document.getElementById('txtPass').value;
  var _toan = document.getElementById('txtDiemToan').value*1;
  var _van = document.getElementById('txtDiemVan').value*1;
  //C1:
  // var sinhVien = {
  //   ma : _ma,
  //   ten: _ten,
  //   email: _email,
  //   pass: _pass,
  //   toan: _toan,
  //   van: _van,
  //   tinhDTB: function(){
  //     var dtb = (this.toan + this.van)/2;
  //     return dtb;
  //   },
  // }
  //C2:
  var sVien = new SinhVien(_ma, _ten, _email, _pass, _toan, _van);
  //Validate
  //Dấu & dù phía trước có SAI HAY ĐÚNG vẫn đi kiểm tra tiếp.
  //Mã SV
  var isValid = kiemTraMaSV(sVien.ma, dSSV) & kiemTraDoDai(sVien.ma,"spanMaSV",4,6);

  //Mật khẩu
  isValid = isValid & kiemTraDoDai(sVien.pass,"spanMatKhau",7,8);
  //Email
  isValid = isValid & kiemTraEmail(sVien.email);
 
  if(isValid){
  dSSV.push(sVien);
  var dataJson = JSON.stringify(dSSV);
  //LƯU KEY, VALUE XUỐNG LOCAL.
  localStorage.setItem("DSSV_LOCAL",dataJson);
  renderDSSV(dSSV); //gọi lại cho chạy
  }
  //Khi ấn nút các ô SV sẽ hiện trên layout, và khi load trang lại thì các ô SV vẫn còn, nên để stringtify ở đây.
  //Chuyển array là dSSV về JSON.
  //# JSON CHUYỂN ARRAY (DSSV) THÀNH JSON.
   
  //Bước 3:
  //Xuất ra
  
}
//So sánh hàm, trên xoaSV có tham số, dưới có tham số để nhận
function xoaSV(id){
  //indexOf dùng cho array chứa chuỗi, số, khi đã có hết thông tin
  /**splice( vị trí cần xoá)
   * 1. từ id tìm vị trí => findIndex
   * 2. sử dụng splice để remove
   * 3. update lại layout */
  var viTri = dSSV.findIndex(function(item){
    return item.ma == id;
    //item: từng phần tử trong array danh sách
    //findIndex(function(item) : tìm thông tin của item
    //{return item.ma == id}): Kiếm mã của item là id (có ai tên là id)
  }) ;
  dSSV.splice(viTri, 1);
  renderDSSV(dSSV);
}
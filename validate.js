//KIỂM TRA ID
/**
 * id hợp lệ khi chưa được sử dụng => chưa có ai dùng
 * ngược lại => đã có người sử dụng id này => false => Xuất ra thông báo.
 */
//KIỂM TRA MÃ SV XEM ĐÃ CÓ CHƯA
function kiemTraMaSV(id, dSSV) {
  //1
  var viTri = dSSV.findIndex(
    //CALL BACK, CÁI ĐI ĐỊNH NGHĨA
    function (item) {
      return item.ma == id;
    }
  );
  console.log(viTri)
  // var id = document.getElementById(id).value;
  //KHÁC -1 LÀ TÌM THẤY, = -1 LÀ KHÔNG TÌM THẤY
  if (viTri != -1) {
    var thongBao = document.getElementById("spanMaSV");
    thongBao.innerHTML = "Mã sinh viên đã được sử dụng";
    // thongBao.style.display = "block";
    return false;
  } else {
    var thongBao = document.getElementById("spanMaSV");
    thongBao.innerHTML = "";
    // thongBao.style.display = "none";
    return true;
  }
}
function kiemTraDoDai(value, idErr, min, max) {
  
  var length = value.length;
  if (min <= length && length <= max) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
   
    document.getElementById(
      idErr
    ).innerHTML = `Độ dài phải từ ${min} đến ${max}`;
    return false;
  }
}
function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
  if (re.test(email)) {
    document.getElementById("spanEmailSV").innerHTML = "";
    return true;
  }
  document.getElementById("spanEmailSV").innerHTML = "Email không hợp lệ";
  return false;
}

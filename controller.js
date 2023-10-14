//Thông tin giao tiếp với người dùng là chính
//PHẢI TRUYỀN VÀO THAM SỐ dSSV NẾU KHÔNG renderDSSV() SẼ HIỂU dSSV Ở DÒNG 6 LÀ TỪ BÊN NGOÀI, THÊM Ở FUNCTION CONTRO, NÚT THÊM VÀ XOÁ.
function renderDSSV(dSSV){
    var contentHTML = "";
    //Duyệt mảng
    for(var i=0; i<dSSV.length; i++){
      //Liên quan tới duyệt object 
       var sV = dSSV[i]; 
       //Biến tạm bằng mảng tại vị trí i
       //array chứa object là object
       var tRString = `<tr>
       <td>${sV.ma}</td>
       <td>${sV.ten}</td>
       <td>${sV.email}</td>
       <td>${sV.tinhDTB()}</td>
       <td>
       <button class="btn btn-danger" onclick ="xoaSV('${sV.ma}')">Xoá</button>
       <button class="btn btn-warning">Sửa</button>
       </td>
       </tr>`;
       contentHTML += tRString;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
  }
var foodArr = [
  {
    ten: "Yellowstripe scad",
    loai: false,
    gia: "504.00",
    khuyenMai: 63571,
    tinhTrang: false,
    moTa: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "98",
  },
  {
    ten: "Filipino Venus",
    loai: false,
    gia: "857.00",
    khuyenMai: 22937,
    tinhTrang: true,
    moTa: "The Football Is Good For Training And Recreational Purposes",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "101",
  },
  {
    ten: "Asian swamp eel",
    loai: true,
    gia: "289.00",
    khuyenMai: 11299,
    tinhTrang: true,
    moTa: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "103",
  },
  {
    ten: "Japanese common catfish",
    loai: true,
    gia: "964.00",
    khuyenMai: 97396,
    tinhTrang: true,
    moTa: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "104",
  },
  {
    ten: "Chilean jack mackerel",
    loai: true,
    gia: "262.00",
    khuyenMai: 59953,
    tinhTrang: false,
    moTa: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "105",
  },
  {
    ten: "Chub mackerel",
    loai: true,
    gia: "226.00",
    khuyenMai: 15105,
    tinhTrang: true,
    moTa: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "106",
  },
  {
    ten: "Atlantic cod",
    loai: false,
    gia: "81.00",
    khuyenMai: 81871,
    tinhTrang: false,
    moTa: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "107",
  },
  {
    ten: "Asari",
    loai: true,
    gia: "777.00",
    khuyenMai: 32946,
    tinhTrang: false,
    moTa: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "108",
  },
  {
    ten: "Atlantic mackerel",
    loai: true,
    gia: "160.00",
    khuyenMai: 56477,
    tinhTrang: false,
    moTa: "The Football Is Good For Training And Recreational Purposes",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "109",
  },
  {
    ten: "European anchovy",
    loai: false,
    gia: "42.00",
    khuyenMai: 46840,
    tinhTrang: false,
    moTa: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    hinhAnh: "https://loremflickr.com/640/480/food",
    ma: "110",
  },
];

//Số lượng món ăn đang có
console.log(foodArr.length);

//In ra tất cả món ăn đang có
for(i=0; i< foodArr.length; i++){
    var food = foodArr[i];
    console.log("Tất cả món ăn:", food.ten);
}

//Sắp xếp các giá từ cao đến thấp (đang hiểu là dựa theo vị trí )
function swap(index0,index1){
  var bienTam = foodArr[index0];
  foodArr[index0] = foodArr[index1];
  foodArr[index1] = bienTam;
}
for(j =0; j< foodArr.length; j++){
  for(jdex =0; jdex< foodArr.length -1; jdex++){
  var food2 = foodArr[jdex];
  food2 < foodArr[jdex +1] && swap(jdex,jdex+1); //Lệnh && là 2 điều kiện đúng mới thực hiện được.
  // console.log("Giá:",food2.gia);
  }
  for(var i = foodArr.length -1; i >= 0; i--){
    console.log("Giá:",foodArr[i].gia);
  }
}

//tinhTrang false: hết món
//Đếm số lượng món ăn trong tình trạng còn
var result = foodArr.filter(function(item){
//Trong filter tạo 1 hàm
    return item.tinhTrang == true;
    //return true hoặc false đều ko được, return về 1 điều kiện (.thuongHieu, .khuyenMai > 50%)
})
console.log("Số lượng: ",result);

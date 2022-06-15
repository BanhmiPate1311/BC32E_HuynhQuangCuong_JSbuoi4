//Bài 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần

document.getElementById("sapXep").onclick = function () {
  //input: so1: number, so2: number, so3: number
  var so1 = Number(document.getElementById("so1").value);
  var so2 = Number(document.getElementById("so2").value);
  var so3 = Number(document.getElementById("so3").value);
  //output: ketQuaSapXep: string
  var ketQuaSapXep = "";
  //progress:

  //cách 1: Lồng if trong if
  // if (so1 < so2) {
  //   if (so2 < so3) {
  //     // 1<2 2<3
  //     ketQuaSapXep = so1 + "<" + so2 + "<" + so3; //  =>1 2 3
  //   } else if (so1 < so3) {
  //     //1<2 2>3 1<3
  //     ketQuaSapXep = so1 + "<" + so3 + "<" + so2; //  =>1 3 2
  //   } else ketQuaSapXep = so3 + "<" + so1 + "<" + so2; //  =>3 1 2
  // } else if (so1 < so3) {
  //   // 1>2 3>1
  //   ketQuaSapXep = so2 + "<" + so1 + "<" + so3; //  =>2 1 3
  // } else if (so2 < so3) {
  //   // 1>2 1>3 2<3
  //   ketQuaSapXep = so2 + "<" + so3 + "<" + so1; //  =>2 3 1
  // } else ketQuaSapXep = so3 + "<" + so2 + "<" + so1; //  =>3 2 1

  //cách 2: if else if else
  if (so1 < so2 && so2 < so3) {
    ketQuaSapXep = so1 + " < " + so2 + " < " + so3; //  =>1 2 3
  } else if (so1 < so3 && so2 > so3) {
    ketQuaSapXep = so1 + " < " + so3 + " < " + so2; //  =>1 3 2
  } else if (so1 > so2 && so1 < so3) {
    ketQuaSapXep = so2 + " < " + so1 + " < " + so3; //  =>2 1 3
  } else if (so3 > so2 && so1 > so3) {
    ketQuaSapXep = so2 + " < " + so3 + " < " + so1; //  =>2 3 1
  } else if (so1 > so3 && so2 > so1) {
    ketQuaSapXep = so3 + " < " + so1 + " < " + so2; //  =>3 1 2
  } else ketQuaSapXep = so3 + " < " + so2 + " < " + so1; //=>3 2 1

  //in kết quả ra màn hinh
  document.getElementById("ketQuaSapXep").innerHTML = ketQuaSapXep;
};

//Bài 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
document.getElementById("chao").onclick = function () {
  //input: thanhVien: string
  var thanhVien = Number(document.getElementById("thanhVien").value);
  //output: xuatChao: string
  var xuatChao = "";
  //progress:
  switch (thanhVien) {
    case 1:
      xuatChao = "Xin chào Bố!";
      break;
    case 2:
      xuatChao = "Xin chào Mẹ!";
      break;
    case 3:
      xuatChao = "Xin chào Anh Trai!";
      break;
    case 4:
      xuatChao = "Xin chào Em Gái!";
      break;
    default:
      xuatChao = "Ai đó, phá hả!";
  }
  //in kết quả ra màn hinh
  document.getElementById("xuatChao").innerHTML = xuatChao;
};

//Bài 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
document.getElementById("dem").onclick = function () {
  //input: soThu1: number, soThu2: number, soThu3: number
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);
  var soThu3 = Number(document.getElementById("soThu3").value);
  //output: xuatDem: string
  var xuatDem = "";
  //progress: count : number
  var count = 0;
  if (soThu1 % 2 === 0) {
    count++;
  }
  if (soThu2 % 2 === 0) {
    count++;
  }
  if (soThu3 % 2 === 0) {
    count++;
  }
  //in kết quả ra màn hinh
  document.getElementById("xuatDem").innerHTML =
    "Có " + count + " số chẵn và " + (3 - count) + " số lẻ";
};

//Bài 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
document.getElementById("doan").onclick = function () {
  //input: a: number, b: number, c: number
  var a = Number(document.getElementById("canhA").value);
  var b = Number(document.getElementById("canhB").value);
  var c = Number(document.getElementById("canhC").value);
  //output: xuatDoan: string
  var xuatDoan = "";
  //progress:
  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    )
      xuatDoan = "Đây là tam giác vuông!";
    else if (a == b && b == c) xuatDoan = "Đây là tam giác đều!";
    else if (a == b || a == c || b == c) xuatDoan = "Đây là tam giác cân";
    else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    )
      xuatDoan = "Đây là tam giác tù";
    else xuatDoan = "Đây là tam giác nhọn";
  } else xuatDoan = "Ba cạnh a, b, c không phải là 3 cạnh của 1 tam giác";
  //in kết quả ra màn hinh
  document.getElementById("xuatDoan").innerHTML = xuatDoan;
};

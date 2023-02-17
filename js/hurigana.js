// let moji = prompt('年齢は？');
// let age = parseInt(moji);
// if (age < 6) {
//     console.log('幼児');
// }

// let moji = prompt('年齢は？');
// let age = parseInt(moji);//mojiの整数化
// if (age <= 5 || age >= 65) {　//&&=かつ= 5歳以下(幼児)'かつ'65歳以上(高齢者)はtrueで動く
//     console.log('幼児か高齢者');
// }
// &&では↑5歳以下と65歳以上はtrueにならない

// let moji1 = prompt('文字の入力？');
// if (isNaN(moji1)) {
//     console.log('数字ではない');
// } else if (!isNaN(moji1)) {
//     console.log('数字です')
// } else if ((moji1)) {
//     console.log('それ以外の何かです')

// }





// **************************************************

// 四則演算

// >　未満（その数字を含まない）
// <=以下　>=以上
// && かつ(左右の条件を両方を含む場合)
// || または[or](片方のみの条件でtrue)
// ! not (否定)意味が逆になる()

// let dir = ['東', '西', '南', '北'];
// for (let d of dir) {
//     console.log(d);
// }


// // for文の中でofを使って所属する変数を用いた文
// let team = ['A', 'B', 'C', 'D'];
// let opps = ['A', 'B', 'C', 'D'];
// for (let t1 of team) {
//     opps.shift();
//     for (let t2 of opps) {
//         console.log(t1 + 'vs' + t2);

//     }
// }

// for〜of文章
// let wdays = ['月', '火', '水', '木', '金',];
// for (let day of wdays) {
//     console.log(day + '曜日');
// }

// let wdays = ['月', '火', '水', '木', '金',];
// for (let cnt = 0; cnt < 5; cnt++) {//cnt変数を定義 5回までがtrueで行う(++)で１ずつ増やす
//     console.log(wdays[cnt] + '曜日');
// }


// let team = ['A', 'B', 'C', 'D'];
// for (let t1 of team) {
//     for (let t2 of team) {
//         if (t1 != t2) {
//             console.log(t1 + 'vs' + t2);

//         }
//     }
// }

// 全て出てしまう
// let yasai = ['人参', 'かぼちゃ', 'キノコ', 'ナス', 'コーン',];
// // 指定の配列項目を名称変更
// yasai[1] = 'パンプキン';
// yasai[2] = 'マッシュルーム';


// console.log(yasai);


// let team = ['A', 'B', 'C', 'D'];
// for (let t1 of team) {
//     for (let t2 of team) {
//         if (t1 = t2) {
//             console.log(t1 + 'vs' + t2);

//         }
//     }
// }
// お試しループ

// // 逆順に読む
// let wdays = ['月', '火', '水', '木', '金', '土', '日',];
// for (let cnt = 4; cnt >= 0; cnt--) {//金(4)から始まり１ずつ終わり0で終わる
//     console.log(wdays[cnt] + "曜日")
// }

// テンプレートリテラル
// let creatMail = (recv, bill) => {
//     let msg = `${recv}様
//     PT企画の斎藤です。
//     今月の請求額は${bill}円です。`;
//     console.log(msg);
// };
// creatMail('山本', '40000');

// let addCharge = (bill) => {
//     return bill * 1.07;//7%の引数
// };
// console.log(addCharge(400000));//戻り値

// 複数人のデータを配列にまとめる
let data = [
    { name: '山本', bill: 40000, crg: true },
    { name: '吉田', bill: 25000, crg: false },
];
console.log(data[0]['name']);
console.log(data[0]['bill']);
console.log(data[0]['crg']);




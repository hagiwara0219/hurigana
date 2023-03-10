// html上のテキストインプット上の情報を取得
let tarea = document.querySelector('textarea');
// idを参照する場合は#Id名と書く
let findipt = document.querySelector('#findtxt');
// htmlのIDrepiptを参照する
let repipt = document.querySelector('#reptxt');
// ボタンを参照する
let btn = document.querySelector('button');
//  Pを参照する
let elem = document.querySelector('p');

btn.addEventListener('click', () => {

    // 置き換えたい文字
    let findtxt = findipt.value;
    // 置き換える
    let reptxt = repipt.value;

    // テキストエリア(tarea)
    let tagtxt = tarea.value;

    findtxt = new RegExp(findtxt, 'g');

    tagtxt = tagtxt.replace(findtxt, reptxt);
    elem.innerText = tagtxt;
});


//アロー関数 //=()=>{}
// let createMail = (recv, bill) => { //(「引数(パラメータ)」指定)
//     let msg = recv + '様\n'
//         + 'PT企画の斎藤です。\n'
//         + '今月の請求額は' + bill + '$です。'
//     console.log(msg);
// };
// createMail('萩原くん', '3000'); 　//作った関数を指定(パラメータの文字列);








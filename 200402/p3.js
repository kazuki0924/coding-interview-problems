// 入力される値N個の文字列『T』を出力してください

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
  console.log('T'.repeat(inputData));
});

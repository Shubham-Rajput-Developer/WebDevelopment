let jsonRes = '{"message":"https:\/\/images.dog.ceo\/breeds\/spitz-indian\/Indian_Spitz.jpg","status":"success"}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.message);
console.log(validRes.status);
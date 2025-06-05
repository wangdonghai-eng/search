
// 在生产环境中切勿将密钥写在前端。

var api_url = ""

var token = ""
var key = ""
var cbc_key = ""
var cbc_iv = ""

function encryptAES_CBC(plainText) {
    var keyHex = cbc_key
    var ivHex = cbc_iv
    const key = CryptoJS.enc.Hex.parse(keyHex);
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: iv, mode: CryptoJS.mode.CBC });
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}
 
  // 解密函数
function decryptAES_CBC(ciphertextHex) {
    var keyHex = cbc_key
    var ivHex = cbc_iv
    const key = CryptoJS.enc.Hex.parse(keyHex);
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const ciphertext = CryptoJS.enc.Hex.parse(ciphertextHex);
    const decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, { iv: iv, mode: CryptoJS.mode.CBC });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

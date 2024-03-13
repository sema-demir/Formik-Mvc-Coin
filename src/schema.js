// yuptaki bütün fonksiyonları import et
import * as yup from "yup";

//Validasyon Şeması
// formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

//En az bir büyük harf ([A-Z])
//En az bir küçük harf ([a-z])
//En az bir sayı (\d)
//En az bir özel karakter ([@$!%*?&])
//Toplam en az 5 karakter ({5,})

const regex =
  "^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{5,}$";

export const schema = yup.object().shape({
  // Emailin geçerli olması için koşullar
  email: yup
    .string()
    .email("Email geçerli bir formatta olmalı")
    .required("Email zorunlu bir alan"),

  // yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Yaş 18den küçük olamaz")
    .max(100, "Yaş 100den büyük olamaz")
    .integer("Lütfen tam sayı değeri giriniz")
    .required("Yaş zorunlu bir alandır"),

  //şifrenin geçerli olması için koşullar
  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter olmalı")
    // şifre regex kurallarına uygun mu kontrol eder
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alan"),

  // şifre onay alanının geçerli olması için koşullar
  passwordConfirm: yup
    .string()
    // oneOf() kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
    // ref() farklı bir inputtaki veriye erişmemizi sağlar
    .oneOf([yup.ref("password")], "Onay şifreniz eşleşmiyor")
    .required("Lütfen şifrenizi onaylayın"),
});

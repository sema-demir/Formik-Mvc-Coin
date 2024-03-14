import { useFormik } from "formik";
import LoginView from "../views/LoginView";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";
const LoginController = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    //formda tutulacak verilerin ilk degeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // validasyon şeması
    // inputlardaki veriler tanımladığımız şemadaki koşullara uygun mu diye kontrol eder. Eğer geçerli değilse error state'ine hataları ekler
    validationSchema: schema,

    //form gönderilince calısacak fonksiyon
    // ototmatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda calısabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;

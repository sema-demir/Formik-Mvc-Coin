import { useFormik } from "formik";
import { schema } from "../schema";
import InputFieldView from "../view/InputFieldView";
import { inputs } from "../constants";
const LoginPage = () => {
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
      "";
    },
  });

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-item-center">
          <img height={60} src="c-logo.png" alt="" />
          <span>Coinmaina</span>
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-5 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}
          <button className="btn btn-primary " type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

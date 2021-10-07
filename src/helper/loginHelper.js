import axios from "axios";
import Cookies from "js-cookie";

const passReq = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const login = (inputEmail, inputPassword, history) => {
  if (inputEmail === "") {
    alert("Kolom email tidak boleh kosong");
  } else if (inputPassword === "") {
    alert("Kolom password tidak boleh kosong");
  } else {
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/login", data, {
        headers,
      })
      .then((response) => {
        Cookies.set("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        //error.response.data.message
        alert("Kombinasi email dan password salah");
      });
  }
};

export const forgotPass = (inputEmail, history) => {
  if (inputEmail === "") {
    alert("Kolom email tidak boleh kosong");
  } else {
    const data = {
      email: inputEmail,
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/check-email", data, {
        headers,
      })
      .then((response) => {
        if (response.data.meesage === "Email Not Registered") {
          alert("Email tidak terdaftar");
        }
      })
      .catch((error) => {
        if (
          error.response.data.message === "Email Registered" ||
          error.response.data.message === null
        ) {
          apiForgotPass(inputEmail, history);
        }
      });
  }
};

export const forgotPass2 = (inputEmail, history) => {
  const data = {
    email: inputEmail,
  };
  const headers = {
    Accept: "application/json",
  };
  axios
    .post("https://yodacentral.herokuapp.com/api/check-email", data, {
      headers,
    })
    .then((response) => {
      if (response.data.meesage === "Email Not Registered") {
        alert("Email tidak terdaftar");
      }
    })
    .catch((error) => {
      if (
        error.response.data.message === "Email Registered" ||
        error.response.data.message === null
      ) {
        history.push("/");
      }
    });
};

const apiForgotPass = (inputEmail, history) => {
  const data = {
    email: inputEmail,
  };
  const headers = {
    Accept: "application/json",
  };
  axios
    .post("https://yodacentral.herokuapp.com/api/forgot-password", data, {
      headers,
    })
    .then((response) => {
      if (response.data.message === "Reset Password Email sent.") {
        alert("Email untuk reset password telah terkirim");
        Cookies.set("forgotpass2", 1);
        history.push("/forgot-password/2");
      }
    });
};

export const checkEmail = (inputEmail, history) => {
  const link = "/register/2?email=" + inputEmail;

  if (inputEmail === "") {
    alert("Kolom email tidak boleh kosong");
  } else if (!document.getElementById("radio-sk").checked) {
    alert("Harus menyetujui syarat dan ketentuan yodamobi");
  } else {
    const data = {
      email: inputEmail,
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/check-email", data, {
        headers,
      })
      .then((response) => {
        if (response.data.meesage === "Email Not Registered") {
          Cookies.set("regis2", inputEmail);
          history.push(link);
        }
      })
      .catch((error) => {
        if (
          error.response.data.message === "Email Registered" ||
          error.response.data.message === null
        ) {
          alert("Email telah terdaftar");
        }
      });
  }
};

export const register = (
  inputNamaDepan,
  inputNamaBelakang,
  inputEmail,
  inputPassword,
  inputKonfirmasiPassword,
  history
) => {
  const link = "/register/3?email=" + inputEmail;

  if (inputNamaDepan === "") {
    alert("Kolom nama depan tidak boleh kosong");
  } else if (inputNamaBelakang === "") {
    alert("Kolom nama belakang tidak boleh kosong");
  } else if (inputPassword === "") {
    alert("Kolom password tidak boleh kosong");
  } else if (passReq.test(inputPassword) === false) {
    alert("Password harus terdiri dari minimal 8 karakter, 1 buah huruf besar, 1 buah huruf kecil, dan angka");
  } else if (inputKonfirmasiPassword === "") {
    alert("Kolom konfirmasi password tidak boleh kosong");
  } else if (inputPassword !== inputKonfirmasiPassword) {
    alert("Kolom password dan konfirmasi password tidak sama");
  } else if (!document.getElementById("radio-sk").checked) {
    alert("Harus menyetujui syarat dan ketentuan yodamobi");
  } else {
    const data = {
      name: inputNamaDepan + " " + inputNamaBelakang,
      email: inputEmail,
      password: inputPassword,
      password_confirmation: inputKonfirmasiPassword,
      phone_number: "081234567890",
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/register", data, {
        headers,
      })
      .then((response) => {
        Cookies.remove("regis2");
        Cookies.set("regis3", 1);
        history.push(link);
      })
      .catch((error) => {
        console.error(error.response.data.errors);
      });
  }
};

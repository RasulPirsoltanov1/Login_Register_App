import React from 'react'
import jwt_decode from "jwt-decode";

function App() {
  var decoded = jwt_decode(localStorage.getItem('token'));
  console.log(decoded);
  var unixZamanDamgasi = 1698319561;

  // Unix zaman damgasını JavaScript tarihine dönüştür
  var tarih = new Date(unixZamanDamgasi * 1000); // Unix zaman damgasının saniyeler cinsinden olduğunu belirtmek için 1000 ile çarpıyoruz

  console.log(tarih);
  return (
    <div>App</div>
  )
}

export default App
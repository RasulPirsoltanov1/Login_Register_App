import React from 'react'
import jwt_decode from "jwt-decode";
function HomePage() {
  var decoded = jwt_decode(localStorage.getItem('token'));
  console.log(decoded);
  var unixZamanDamgasi = 1698319561;

  var tarih = new Date(unixZamanDamgasi * 1000); 

  console.log(tarih);
  return (
    <div><h1>
      Welcome : {decoded.user.fullName}</h1>
      <h3> Email: {decoded.user.email}</h3></div>
  )
}

export default HomePage
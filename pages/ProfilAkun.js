import React from "react";
import LightGreen from "../components/ButtonLightGreen";
import FotoProfil from "../components/FotoProfil";
import Inputfields from "../components/Inputfields";
import Layout from "../components/Layout";
import Password from "../components/Password";

const ProfilAkun = () => {
  return (
    <Layout>
      <div className="static">
        <div className="text-gray-400 text-base ">Profil Akun</div>
        <div className="font-semibold pt-4 text-xl pb-2">Profil Akun</div>
        <div className="w-full">
          <div className="grid bg-white rounded-lg shadow">
            <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-5 sm:px-3 mx-5">
              <div>
                <div className="grid grid-cols-1">
                  <Inputfields type="text" placeholder="Masukkan NIK" namee="NIK" />
                </div>
                <div className="grid grid-cols-1 mt-3">
                  <Inputfields type="text" placeholder="Masukkan E-mail" namee="E-mail" />
                </div>
                <div className="grid grid-cols-1 mt-3">
                  <Inputfields type="text" placeholder="Masukkan Username" namee="Username" />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1">
                  <Inputfields type="text" placeholder="Masukkan Nama Lengkap" namee="Nama Lengkap" />
                </div>
                <div className="grid grid-cols-1 mt-3">
                  <Inputfields type="text" placeholder="Masukkan Nomor Telepon" namee="Nomor Telepon" />
                </div>
                <div className="grid grid-cols-1 mt-3">
                  <Inputfields type="text" placeholder="Masukkan Alamat" namee="Alamat" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-52 w-52">
                  <label className="h-full w-full top-0 cursor-pointer flex flex-col justify-center items-center">
                    <img id="file-ip--1-priview" className="w-full h-full object-cover object-center hidden" />
                    <img src="https://www.hortusweb.com/image/20220307152235.jpg" alt="" className="" />
                    <input className="hidden" name="image" type="file" id="file-ip-1" accept="image/*" onChange="showPriview(event);" />
                    <span className="text-sm text-gray-400">Klik untuk ganti foto profil !</span>
                  </label>
                  <div className="">
                    <FotoProfil />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex md:justify-end mr-3 pb-5 pt-10">
              <LightGreen text="Simpan" />
            </div>
          </div>
        </div>
        <div className="font-semibold pt-4 text-xl pb-2">Password</div>
        <div className="w-full">
          <div className="grid bg-white rounded-lg shadow">
            <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-5 sm:px-3 mx-5">
              <div div className="grid grid-cols-1">
                <Password type="text" namee="Password Baru" placeholder="Masukkan password baru" />
              </div>
              <div div className="grid grid-cols-1">
                <Password type="text" namee="Konfirmasi Password Baru" placeholder="Masukkan password baru" />
              </div>
            </div>
            <div className=" flex md:justify-end mr-3 pb-5 pt-10">
              <LightGreen text="Ubah Password" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilAkun;

import React from "react";
import ButtonBlue from "../components/ButtonBlue";
import FotoProfil from "../components/FotoProfil";
import Inputfields from "../components/Inputfields";
import Layout from "../components/Layout";
import LevelKuasa from "../components/LevelKuasa";
import Password from "../components/Password";
import Status from "../components/Status";
import { BiArrowBack } from "react-icons/bi";
import LightGreen from "../components/ButtonLightGreen";
import Buttongray from "../components/ButtonGray";

const User = () => {
  return (
    <Layout>
      <div>
        <div className="w-full">
          <div className="flex text-[#064635]">
            <BiArrowBack className="text-3xl" />
            <span className=" text-2xl font-semibold ml-5">User</span>
          </div>
          <div className="grid bg-white rounded-lg shadow pt-5 pb-16 mt-8">
            <span className="flex justify-center font-medium text-lg pb-5">Tambah Data User</span>
            <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-2 sm:px-3 mx-5">
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
                <div className="grid grid-cols-1 mt-3">
                  <Password type="text" namee="Password Baru" placeholder="Masukkan password baru" />
                </div>
                <div className="grid grid-cols-1 mt-3">
                  <LevelKuasa namee="Level Kuasa" />
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
                <div className="grid grid-cols-1 mt-3">
                  <Status namee="Status" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FotoProfil />
                <div className="pt-5">
                  <ButtonBlue text="UPLOAD IMAGE" />
                </div>
                <div className="flex">
                  <Buttongray text="Cancel" />
                  <LightGreen text="Simpan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;

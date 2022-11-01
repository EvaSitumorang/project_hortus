import React from "react";
import Chart from "../components/Chart/index.jsx";
import ButtonInfo from "../components/DashboardInfo";
import Layout from "../components/Layout";
import TitleBar from "../components/TitleBar";

const Dashboar = () => {
  return (
    <Layout>
      <TitleBar title="Dashboard"></TitleBar>
      <div className="flex border-t-2 border-b-2 border-black">
        <div className="flex w-1/4 border-r-2 mr-4 border-black">
          <img src="/Dasarhukum.svg" alt="" className="h-12 m-2" />
          <span className="">Dasar Hukum</span>
        </div>
        <span className="w-3/4">
          Peraturan Pemerintah No. 72 Tahun 2014 tentang Penambahan Penyertaan Modal Negara Republik Indonesia ke dalam Modal Saham Perusahaan Perseroan PT Perkebunan Nusantara III (RTPN III) dimana terjadinya pengalihan 90% saham milik
          pemerintah diatas PTPN tersebut menjadi 10%{" "}
        </span>
      </div>
      <div className="pt-8 font-semibold text-gray-400">
        <span>Selamat pagi, </span>
        <span>Nama Lengkap</span>
      </div>
      <div className="grid md:grid-cols-5 md:gap-8 gap-5">
        <div className="grid grid-cols-1">
          <ButtonInfo icon="/Pemasukan.svg" keterangan="Pemasukan bulan ini" nilai="10" />
        </div>
        <div className="grid grid-cols-1">
          <ButtonInfo icon="/Pengeluaran.svg" keterangan="Pengeluaran bulan ini" nilai="10" />
        </div>
        <div className="grid grid-cols-1">
          <ButtonInfo icon="/Daun.svg" keterangan="Total kebun" nilai="10" />
        </div>
        <div className="grid grid-cols-1">
          <ButtonInfo icon="/asset.svg" keterangan="Total aset" nilai="10" />
        </div>
        <div className="grid grid-cols-1">
          <ButtonInfo icon="/karyawan.svg" keterangan="Jumlah karyawan" nilai="10" />
        </div>
      </div>
      <div className="pt-10 grid md:grid-cols-2 gap-5">
        <img src="/pmblocation.svg" className="rounded-lg w-full h-full" />
        <div className="rounded-lg shadow-md bg-white items-center justify-center mb-0">
          <span className="flex justify-center font-semibold">Grafik Hasil Panen 2022</span>
          <Chart />
        </div>
      </div>
      <div className="pt-10">
        <span className="font-semibold">Daftar Jadwal Cek Tumbuhan</span>
      </div>
    </Layout>
  );
};

export default Dashboar;

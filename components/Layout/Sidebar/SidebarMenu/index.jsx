import React from "react";
import Menu from "../SubMenu";
import { RiComputerLine, RiFileListFill, RiPlantFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsPersonLinesFill, BsPersonFill, BsCashCoin, BsMicrosoft } from "react-icons/bs";
import { AiFillCloud, AiFillBug } from "react-icons/ai";
import { FaWallet, FaUsersCog, FaUserAlt, FaBookReader, FaBoxes, FaHandHolding, FaUserCog, FaCalendarAlt } from "react-icons/fa";
import { BiLike, BiListCheck } from "react-icons/bi";
import { GiReceiveMoney, GiPayMoney, GiPowderBag, GiGreenhouse } from "react-icons/gi";

const Sidebar = () => {
  const Menus = [
    { title: "Dashboar", icon: <BsMicrosoft />, route: "/Dashboar" },
    {
      title: "Aktifitas",
      icon: <RiComputerLine />,
      SubMenus: [
        { title: "Jadwal", icon: <FaCalendarAlt />, route: "/Jadwal" },
        { title: "Cuaca", icon: <AiFillCloud />, route: "/Cuaca" },
        { title: "Hama", icon: <AiFillBug />, route: "/Hama" },
      ],
    },
    {
      title: "Kelola Keuangan",
      icon: <FaWallet />,
      SubMenus: [
        { title: "Pemasukan", icon: <GiReceiveMoney />, route: "/Dashboar" },
        { title: "Pengeluaran", icon: <GiPayMoney />, route: "/Dashboar" },
      ],
    },
    {
      title: "User",
      icon: <FaUsersCog />,
      SubMenus: [
        { title: "User", icon: <BsPersonFill />, route: "/Dashboar" },
        { title: "User", icon: <BsPersonFill />, route: "/User" },
        { title: "Level Kuasa", icon: <BsPersonLinesFill />, route: "/Dashboar" },
        { title: "Pengaturan Otoritas", icon: <FaUserCog />, route: "/Dashboar" },
      ],
    },
    {
      title: "Inventory",
      icon: <FaBoxes />,
      SubMenus: [
        { title: "Aset", icon: <GiGreenhouse />, route: "/Dashboar" },
        { title: "Pemakaian", icon: <BiListCheck />, route: "/Dashboar" },
        { title: "Permintaan", icon: <FaHandHolding />, route: "/Dashboar" },
        { title: "Persetujuan", icon: <BiLike />, route: "/Dashboar" },
      ],
    },
    { title: "Hasil Panen", icon: <GiPowderBag />, route: "/Dashboar" },
    { title: "Kebun", icon: <RiPlantFill />, route: "/Dashboar" },
    { title: "Pricing", icon: <BsCashCoin />, route: "/Dashboar" },
    {
      title: "Laporan",
      route: "/",
      icon: <FaBookReader />,
      SubMenus: [
        { title: "Jadwal", icon: <FaCalendarAlt />, route: "/Dashboar" },
        { title: "Panen", icon: <GiPowderBag />, route: "/Dashboar" },
        { title: "Penjualan", icon: <RiMoneyDollarCircleLine />, route: "/Dashboar" },
        { title: "Kas", icon: <BsCashCoin />, subroute: "/Dashboar" },
      ],
    },
    { title: "Akun Profil", icon: <FaUserAlt />, route: "/ProfilAkun" },
    { title: "Log Aktifitas", icon: <RiFileListFill />, route: "/Dashboar" },
  ];

  return (
    <div className="">
      <div className="fixed w-1/5 md:w-64 left-0 h-[calc(100vh-112px)] overflow-y-auto shadow">
        <div className="flex flex-col items-center pt-4">
          <img src="https://www.hortusweb.com/image/20220307152235.jpg" alt="" className="rounded-full h-24 shadow-md" />
          <p className="text-sm">username</p>
          <p className="font-semibold text-slate-500">Nama Lengkap</p>
        </div>
        <div className="pt-4">
          <div className="flex flex-col">
            {Menus.map((menu, index) => (
              <Menu key={index} {...menu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

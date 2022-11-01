import React from "react";
import Layout from "../components/Layout";
import ButtonAdd from "../components/Button/ButtonAdd";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableHead from "../components/TableHead";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TitleBar from "../components/TitleBar";

const Users = () => {
  return (
    <>
      <TitleBar title="User"></TitleBar>
      <Layout>
        <ButtonAdd />

        <div className="overflow-hidden col-span-12 sm:col-span-10">
          <Table>
            <TableHeader title="USER">
              <TableHead>Nama</TableHead>
              <TableHead>LevelKuasa</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Aksi</TableHead>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>investor</TableCell>
                <TableCell>Investor</TableCell>
                <TableCell>aktif</TableCell>
                <TableCell>hapus</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Layout>
    </>
  );
};

export default Users;

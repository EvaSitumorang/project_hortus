import Layout from "../components/Layout/index.jsx";
import TitleBar from "../components/TitleBar/index.jsx";

export default function Home() {
  return (
    <div>
      <TitleBar title="Dashboard"></TitleBar>
      <Layout />
    </div>
  );
}

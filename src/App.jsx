import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Main from "./components/main/main";

function App() {
  const [coinBalance, setCoinBalance] = useState(0);

  const handleClaimFreeCredit = () => {
    setCoinBalance((prevBalance) => {
      const newBalance = prevBalance + 6000000;

      toast.success("Coin successfully added !", {
        position: "top-center",
      });
      return newBalance;
    });
  };

  return (
    <div>
      <div className="md:container mx-auto">
        <Navbar coinBalance={coinBalance}></Navbar>

        <Banner onClaimFreeCredit={handleClaimFreeCredit}></Banner>
        <Main coinBalance={coinBalance} setCoinBalance={setCoinBalance}></Main>
      </div>
      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer autoClose={1300} theme="colored" />
    </div>
  );
}

export default App;

import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Tooltiphome from "../../Common/Tooltiphome";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import * as AllRedux from "../../store/slice/medDataSlice";

const DummyComponent = () => {
  const isLoading = useSelector((state) => state.admindata.isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className="tap-top">
        <i data-feather="chevrons-up"></i>
      </div>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          {/* {getAccess.view === 1 ?} */}
          <div className="page-body">
            <div className="container-fluid">
              <div className="page-title">
                <div className="row">
                  <div className="col-6">
                    <h4>Medical Staff Dashboard</h4>
                  </div>{" "}
                  <div className="col-6">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Tooltiphome />
                      </li>
                      {/* <li className="breadcrumb-item active">Dashboard</li> */}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            This is some dummy text.
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DummyComponent;

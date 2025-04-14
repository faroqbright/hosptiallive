import React, { useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Alert from "../../Common/Alert";
import * as AllRedux from "../../store/slice/admindataSlice";
import { useDispatch, useSelector } from "react-redux";
import * as ALLADMIN from "../../store/slice/admindataSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminData = useSelector((state) => state.admindata);
  useLayoutEffect(() => {
    dispatch(ALLADMIN.getAdminData({}));
  }, []);

  const clearData = () => {
    try {
      dispatch(AllRedux.logout({})).then((res) => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
    } catch (error) {
      Alert.ErrorAlert(error);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("UserToken")) {
      navigate("/");
    }
  }, [adminData]);

  return (
    <>
      <div className="page-header">
        <div className="header-wrapper row m-0">
          <form className="form-inline search-full col" action="#" method="get">
            <div className="form-group w-100">
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative">
                  <input
                    className="demo-input Typeahead-input form-control-plaintext w-100"
                    type="text"
                    placeholder="Search Cuba .."
                    name="q"
                    title=""
                    autoFocus
                  />
                  <div
                    className="spinner-border Typeahead-spinner"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <i className="close-search" data-feather="x"></i>
                </div>
                <div className="Typeahead-menu"></div>
              </div>
            </div>
          </form>
          <div className="header-logo-wrapper col-auto p-0">
            <div className="logo-wrapper">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/logo/logo.png"}
                  alt=""
                />
              </a>
            </div>
            <div className="toggle-sidebar">
              <i
                className="status_toggle middle sidebar-toggle"
                data-feather="align-center"
              ></i>
            </div>
          </div>
          <div className="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
            <div className="notification-slider"></div>
          </div>
          <div className="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
            <ul className="nav-menus">
              <li className="profile-nav onhover-dropdown pe-0 py-0">
                <div className="media profile-media">
                  <img
                    className="b-r-10"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/dashboard/profile.png"
                    }
                    alt=""
                  />
                  <div className="media-body">
                    <span>{adminData && adminData?.adminData?.data?.name}</span>
                    {/* <span>Demo</span> */}
                    <p className="mb-0 font-roboto">
                      {adminData &&
                        adminData?.adminData?.data?.role?.toUpperCase()}

                      <i className="middle fa fa-angle-down"></i>
                    </p>
                  </div>
                </div>
                <ul className="profile-dropdown onhover-show-div">
                  {adminData && adminData?.adminData?.data?.role === "Admin" ? (
                    <>
                      <li>
                        <Link to="/profile">
                          {/* <i data-feather="user"></i> */}
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/change_password">
                          {/* <i data-feather="mail"></i> */}
                          <span>Change Password</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}

                  <li>
                    <Link to="/">
                      {/* <i data-feather="log-in"> </i> */}
                      <span onClick={clearData}>Log Out</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <script className="result-template" type="text/x-handlebars-template">
            <div className="ProfileCard u-cf">
              <div className="ProfileCard-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay m-0"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
              </div>
              <div className="ProfileCard-details">
                <div className="ProfileCard-realName">name</div>
              </div>
            </div>
          </script>
          <script className="empty-template" type="text/x-handlebars-template">
            <div className="EmptyMessage">
              Your search turned up 0 results. This most likely means the
              backend is down, yikes!
            </div>
          </script>
        </div>
      </div>
    </>
  );
}

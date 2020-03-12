import React from "react";

function Mlogcard() {
  return (
    <>
      <div className="M-loginWrapper">
        {/* <!-- ------------------移動的方塊----------------------> */}
        <div className="M-moveBrick1 Brick"></div>
        <div className="M-moveBrick2 Brick"></div>
        <div className="M-moveBrick3 Brick"></div>
        <div className="M-moveBrick4 Brick"></div>
        {/* <!-- 登陸卡 --> */}
        <div className="M-logCard">
          <div className="M-fakeLogo"></div>
          <h3>會員登入</h3>
          <div className="M-apiLog">
            <div className="M-icon"></div>
            <div className="M-icon"></div>
          </div>
          <h3>或電子郵件註冊</h3>
          <form className="M-logForm">
            <input
              type="text"
              className="M-loginInput"
              name="Email"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="M-loginInput"
              name="password"
              placeholder=""
            ></input>
            <br />
            <button className="M-loginBtn" style={{ display: "inline-block" }}>
              登入
            </button>
            <div className="M-loginSwitch"></div>
          </form>
        </div>
        {/* -----------------註冊卡--------------- */}
        <div className="M-regCard">
          <div className="M-fakeLogo"></div>
          <h3>帳號創建</h3>
          <div className="M-apiLog">
            <div className="M-icon"></div>
            <div className="M-icon"></div>
          </div>
          <h3>或電子郵件註冊</h3>
          <form className="M-logForm">
            <input
              type="text"
              className="M-loginInput"
              name="Email"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="M-loginInput"
              name="password"
              placeholder="Password"
            ></input>
            <input
              type="password"
              className="M-loginInput"
              name="2password"
              placeholder="Confirm Password"
            ></input>
            <br />
            <button className="M-regBtn" style={{ display: "inline-block" }}>
              註冊
            </button>
            <div className="M-regSwitch"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mlogcard;

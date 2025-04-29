import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="login-page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        style={{
          width: "60vw",
        }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Keep me logged in !</label>
          </div>
        </form>
        <div
          style={{
            textAlign: "center",
            padding: 20,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button type="button" className="btn btn-outline-primary">
            Log in
          </button>
          <Link to={"/signup"}>
            <button type="button" className="btn btn-outline-primary">
              Sign up ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

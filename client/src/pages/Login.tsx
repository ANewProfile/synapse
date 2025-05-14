import { Link } from "react-router-dom";
import "../css/base.css";

function Login() {
    return (
        <div className="login-page flex flex-col items-center justify-center h-[80vh]">
            <div className="w-[60vw]">
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
                        <label className="form-check-label">
                            Keep me logged in !
                        </label>
                    </div>
                </form>
                <div className="text-center p-[20] flex justify-around">
                    <button type="button" className="btn btn-outline-primary">
                        Log in
                    </button>
                    <Link to={"/signup"}>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            Sign up?
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

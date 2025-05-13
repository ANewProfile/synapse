import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/base.css";

/**
 * signup body will look like
 * user => username,password,confirmPass,name,email
 */
interface User {
    username: string;
    password: string;
    confirmPassword: string;
    name?: string;
    email: string;
}

const Signup = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });
    axios.post("http://localhost:3000/api/login").then((res) => {
        //logic after sending the req to backend
    });

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-[60vw]">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            @
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            placeholder="Your name: (optional)"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password: </label>
                        <input
                            type="confirmpassword"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your email here"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </div>

                    <div
                        style={{
                            textAlign: "center",
                            padding: 20,
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            Sign Up
                        </button>
                        <Link to={"/login"}>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                Login?
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;

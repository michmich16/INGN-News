import React, { useState } from "react";
import s from "./Login.module.scss";


export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Brugernavn:", username, "Password:", password);
    };

    return (
        <>
            <div className={s.loginStyle}>
                <div className={s.loginContent}>
                <h2>Log ind</h2>
                <form onSubmit={handleSubmit} className={s.form}>
                    <div className={s.formGroup}>
                        <label htmlFor="username" className={s.label}>
                            Brugernavn:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={s.input}
                        />
                    </div>

                    <div className={s.formGroup}>
                        <label htmlFor="password" className={s.label}>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={s.input}
                        />
                    </div>

                    <button type="submit" className={s.button}>
                        Log Ind
                    </button>
                </form>
                </div>
            </div>
        </>
    );
};

import s from './Login.module.scss'
export const Login = () => {

    const LoginForm = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Brugernavn:", username, "Password:", password);
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="username" style={{ display: "block", marginBottom: ".5rem" }}>
                        Brugernavn:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: ".5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: ".5rem" }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: ".5rem" }}
                    />
                </div>

                <button type="submit" style={{ width: "100%", padding: ".5rem", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
                    Log Ind
                </button>
            </form>


        </>
    )
}}
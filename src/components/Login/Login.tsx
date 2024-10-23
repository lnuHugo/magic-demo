import { useState } from "react";
import { magic } from "../../config/magic";
import { MagicUserMetadata } from "magic-sdk";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<MagicUserMetadata>();

  const handleLogin = async () => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await magic.user.getInfo();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.error("Fetching user went wrong: ", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>You are logged in!</p>
          <button onClick={fetchUser}>Show User</button>
          {user && (
            <>
              <p>{user.email}</p>
              <p>{user.publicAddress}</p>
            </>
          )}
        </>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Skriv in din e-post"
          />
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};

export default Login;

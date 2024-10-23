import "./App.css";
import Login from "./components/Login/Login";
import { magic } from "./config/magic";
import { connectContract, connectMagic } from "./services/ethersService";
import ArtscapeCollection from "./contracts/data/ArtscapeCollection.json";
import { settings } from "./contracts/data/settings";

function App() {

  const address = settings.artscapeMainContract
  const ABI = ArtscapeCollection.abi

  const connectToSC = async () => {
    try {
      const magicProvider = await connectMagic(magic);
      const contract = await connectContract(address, ABI, magicProvider);
      console.log(contract);
    } catch (error) {
      console.error("Error connecting magic to SC: ", error);
    }
  };

  return (
    <>
      <div>
        <h1>Magic Demo</h1>
        <Login />
        <button onClick={connectToSC}>Connect to smart contract</button>
      </div>
    </>
  );
}

export default App;

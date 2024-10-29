import "./App.css";
import Login from "./components/Login/Login";
import { magicWeb3 } from "./config/magic";
import { connectContract, connectMagic } from "./services/ethersService";
import ArtscapeCollection from "./contracts/data/ArtscapeCollection.json";
import { settings } from "./contracts/data/settings";
import { useState } from "react";

function App() {
  const [contract, setContract] = useState<any>();

  const address = settings.artscapeMainContract
  const ABI = ArtscapeCollection.abi  

  const connectToSC = async () => {
    try {
      const accounts = await magicWeb3.eth.getAccounts();
      const connectedContract = new magicWeb3.eth.Contract(ABI, address, {
        from: accounts[0],
      });
      setContract(connectedContract)
      console.log(connectedContract);
    } catch (error) {
      console.error("Error connecting magic to SC: ", error);
    }
  };

  const getMinterRole = async () => {
    try {
      const result = await contract.methods.MINTER_ROLE().call()
      console.log("DEFAULT_ADMIN_ROLE:", result);
      
    } catch (error) {
      console.error("Error fetching balance: ", error);
    }
  };

  const getFunctions = async () => {
    const functions = contract.options.jsonInterface.filter(
      (item: any) => item.type === "function"
    );
  
    functions.forEach((func: any) => {
      console.log(`Function name: ${func.name}`);
      console.log(`Inputs: ${JSON.stringify(func.inputs)}`);
      console.log(`Outputs: ${JSON.stringify(func.outputs)}`);
      console.log("---");
    });
  }

  const updateBalance = async (amount: number) => {
    console.log(amount);
    
  }

  return (
    <>
      <div>
        <h1>Magic Demo</h1>
        <Login />
        {!contract && <button onClick={connectToSC}>Connect to smart contract</button>}
        {contract && <>
        <button onClick={() => getMinterRole()}>Get Minter Role</button>
        <button onClick={() => updateBalance(100)}>Update Balance</button>
        <button onClick={() => getFunctions()}>Get functions</button></>}
      </div>
    </>
  );
}

export default App;

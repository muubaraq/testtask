import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Users from "./Components/Users";
import SuccessfulReg from "./Components/SuccessfulReg";
import { useGlobalContext } from "./Components/Context";

function App() {
  const { successfulReg } = useGlobalContext();
  return (
    <main className='App'>
      {successfulReg ? (
        <SuccessfulReg />
      ) : (
        <>
          <Navbar />
          <Header />
          <Users />
          <Form />
        </>
      )}
    </main>
  );
}

export default App;

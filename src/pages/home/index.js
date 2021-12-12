import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/connectors/injected';

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };


  return (
    <div>
      <button
        onClick={connect}
        style={{
          padding: 7,
          fontSize: 15,
          backgroundColor: active ? 'lightseagreen' : 'lightskyblue',
          color: '#333',
          border: 0,
          marginTop: 20,
        }}>
        {active ? 'Connected' : 'Connect a Wallet'}
      </button>{' '}
      <br />
      {account} <br />
      <button onClick={disconnect}>Deactivate</button>
    </div>
  );
};

export default Home;

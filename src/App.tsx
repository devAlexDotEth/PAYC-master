import { Container } from './styles';
import Home from './compositions/home';
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import DesignSystem from './compositions/design-system';

function App() {
  
  return (
    <Container>
      <Home />
      {/* <DesignSystem /> */}
    </Container>
  );
}

export default App;

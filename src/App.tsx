import SplitLayout from "./components/layout/SplitLayout";
import LeftPanel from "./components/identity/LeftPanel.tsx";
import RightPanel from "./components/sections/RightPanel.tsx";

const App = () => {
  return <SplitLayout leftPanel={<LeftPanel />} rightPanel={<RightPanel />} />;
};

export default App;

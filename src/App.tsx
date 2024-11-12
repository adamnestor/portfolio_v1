import SplitLayout from './components/layout/SplitLayout';
import LeftPanel from './components/identity/LeftPanel.tsx';

const App = () => {
  return (
    <SplitLayout 
      leftPanel={<LeftPanel />}
      rightPanel={<div />} // Still empty until Issue #4
    />
  );
};

export default App;

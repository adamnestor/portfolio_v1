interface SplitLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ leftPanel, rightPanel }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      {/* Fixed Left Panel - adjust width and add max-width */}
      <div className="w-full md:w-[400px] lg:w-[500px] md:fixed md:h-screen bg-background p-6">
        <div className="max-w-xl mx-auto h-full flex flex-col justify-between">
          {leftPanel}
        </div>
      </div>

      {/* Right Panel - adjust margin and max-width */}
      <div className="w-full md:ml-[400px] lg:ml-[500px] bg-background p-6">
        <div className="max-w-4xl mx-auto">{rightPanel}</div>
      </div>
    </div>
  );
};

export default SplitLayout;

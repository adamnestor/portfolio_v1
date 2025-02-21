interface SplitLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ leftPanel, rightPanel }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      {/* Fixed Left Panel - 500px md, 600px lg */}
      <div className="w-full md:w-[500px] lg:w-[600px] md:fixed md:h-screen bg-background p-8">
        <div className="max-w-2xl mx-auto h-full flex flex-col justify-between">
          {leftPanel}
        </div>
      </div>

      {/* Right Panel - matching margins with left panel width */}
      <div className="w-full md:ml-[500px] lg:ml-[600px] bg-background p-8">
        <div className="max-w-4xl mx-auto">{rightPanel}</div>
      </div>
    </div>
  );
};

export default SplitLayout;

interface SplitLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ leftPanel, rightPanel }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      {/* Fixed Left Panel */}
      <div className="w-full md:w-5/12 md:fixed md:h-screen bg-background p-6">
        <div className="max-w-md mx-auto h-full flex flex-col justify-between">
          {leftPanel}
        </div>
      </div>

      {/* Right Panel with offset */}
      <div className="w-full md:w-7/12 md:ml-[41.666667%] bg-background p-6">
        <div className="max-w-3xl mx-auto">{rightPanel}</div>
      </div>
    </div>
  );
};

export default SplitLayout;

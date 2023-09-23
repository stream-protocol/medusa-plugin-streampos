import React from "react";
import Container from "../../components/shared/installation-container";

const StreamPOSInstallation = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-4">StreamPOS Installation / Setup</h1>

      {/* Step 1: Download Software */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 1: Download Software</h2>
        <p>
          Begin by downloading the StreamPOS installation package from our official website.
        </p>
        <p>
          <a href="STREAM_OS_DOWNLOAD_LINK_HERE" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Download StreamOS
          </a>
        </p>
      </div>

      {/* Step 2: Install Software */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 2: Install Software</h2>
        <p>
          After downloading the StreamOS software, run the installer and follow the on-screen instructions to complete the installation process.
        </p>
      </div>

      {/* Step 3: Create Setup */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 3: Create Setup</h2>
        <p>
          Launch StreamPOS and create your initial setup. This includes configuring your store details, inventory, and payment options.
        </p>
      </div>

      {/* Step 4: Setup Finished */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 4: Setup Finished</h2>
        <p>
          Congratulations! Your StreamPOS installation and setup are now complete. You can start using StreamPOS to manage your store's operations efficiently.
        </p>
      </div>
      
      {/* Additional information or links can be included here */}
    </Container>
  );
};

export default StreamPOSInstallation;

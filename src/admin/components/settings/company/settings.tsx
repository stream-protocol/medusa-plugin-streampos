import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  // State to store settings data
  const [settings, setSettings] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate loading settings data from an API or backend
  useEffect(() => {
    // Simulate an API call to fetch settings
    setTimeout(() => {
      const fetchedSettings = {
        companyName: 'My Company',
        address: '123 Main St, City, Country',
        contactEmail: 'info@mycompany.com',
        currency: 'USD',
        timeZone: 'UTC',
      };
      setSettings(fetchedSettings);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Function to handle form submission (updating settings)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement logic to update settings in the backend
    // This might involve making an API request to save changes
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Company Name:
            <input
              type="text"
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Contact Email:
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <select
              value={settings.currency}
              onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              {/* Add more currency options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Time Zone:
            <input
              type="text"
              value={settings.timeZone}
              onChange={(e) => setSettings({ ...settings, timeZone: e.target.value })}
            />
          </label>
        </div>
        <div>
          <button type="submit">Save Settings</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;

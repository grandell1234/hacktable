import { useEffect } from 'react';

export default function Hacktable() {
  useEffect(() => {
    document.title = 'Hacktable';
  }, []);

  return (
    <div className="hacktable-container">
      <h1 className="hacktable-title">Hacktable BETA</h1>
      <p className="hacktable-description">
        A free Airtable replacement for HackClubbers.
      </p>
      <button
        className="hacktable-button"
        onClick={() => window.location.href = 'https://docs.hacktable.org'}
      >
        Docs
      </button>
    </div>
  );
}


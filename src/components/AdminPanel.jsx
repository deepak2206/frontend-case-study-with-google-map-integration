import React, { useState } from "react";
import { profiles } from "../services/data";

const AdminPanel = () => {
  const [adminProfiles, setAdminProfiles] = useState(profiles);
  const [newProfile, setNewProfile] = useState({ name: "", photo: "", description: "", lat: "", lng: "" });

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.photo) return;
    setAdminProfiles([...adminProfiles, { ...newProfile, id: adminProfiles.length + 1, location: { lat: parseFloat(newProfile.lat), lng: parseFloat(newProfile.lng) } }]);
    setNewProfile({ name: "", photo: "", description: "", lat: "", lng: "" });
  };

  const handleDeleteProfile = (id) => {
    setAdminProfiles(adminProfiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <input type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
      <input type="text" placeholder="Photo URL" value={newProfile.photo} onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })} />
      <input type="text" placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
      <input type="text" placeholder="Latitude" value={newProfile.lat} onChange={(e) => setNewProfile({ ...newProfile, lat: e.target.value })} />
      <input type="text" placeholder="Longitude" value={newProfile.lng} onChange={(e) => setNewProfile({ ...newProfile, lng: e.target.value })} />
      <button onClick={handleAddProfile}>Add Profile</button>

      <ul>
        {adminProfiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

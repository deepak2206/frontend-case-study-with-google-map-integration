import React, { useState } from "react";
import MapComponent from "./MapComponent";
import { profiles } from "../services/data";
import './css/ProfileList.css'

const ProfileList = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfiles = profiles.filter(
    (profile) => profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="profile-list">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <button onClick={() => setSelectedProfile(profile.location)}>Summary</button>
          </div>
        ))}
      </div>

      {selectedProfile && <MapComponent location={selectedProfile} />}
    </div>
  );
};

export default ProfileList;

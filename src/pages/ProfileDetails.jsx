import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../services/data";
import './css/ProfileDetails.css'

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileDetails;

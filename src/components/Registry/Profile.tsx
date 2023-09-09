import { useContext } from "react";
import { ProfileContext } from "@/Context/ProfileContext";

const Profile = () => {
  const { profiles } = useContext(ProfileContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <input
          className="p-2 mr-4 border border-gray-300 rounded-md"
          type="text"
          name="search"
          placeholder="search"
        />
        <button className="border border-gray-300 rounded-md p-2">
          Search
        </button>
      </div>
      <div className="flex">
        {profiles.map((profile: any) => (
          <div key={profile.id}>
            <div>{profile.id}</div>
            <div>{profile.name}</div>
            <div>{profile.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

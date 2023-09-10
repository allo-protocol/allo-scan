import { useContext } from "react";
import { ProfileContext } from "@/Context/ProfileContext";

const Profile = () => {
  const { profiles } = useContext(ProfileContext);

  const loadProfiles = () => {
    const profileData = [
      {
        anchor: "0x123",
      },
    ];

    return Object.values(profileData).map((profile) => (
      <tr key={profile.anchor}>
        <td>{profile.anchor}</td>
      </tr>
    ));
  };

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
        <table className="table table-auto mt-2">
          <thead>
            <tr>
              <th>Anchor</th>
            </tr>
          </thead>
          <tbody>{loadProfiles()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;

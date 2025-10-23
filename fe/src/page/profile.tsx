import profilebg from "../assets/user-bg.jpg";
import profilePict from "../assets/LoggedInPfp.png";
import ProfileInfo from "@/components/profile/profileInfo";

import { useAuth } from "@/contexts/AuthContext";

export default function Profile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div className="text-center mt-10">Kamu belum login</div>;
  }

  if (!user) {
    return <div className="text-center mt-10">Memuat data user...</div>;
  }

  return (
    <>
      <div className="w-full relative">
        <img
          src={profilebg}
          alt="banner"
          className="w-full h-[150px] md:h-[200px] object-cover"
        />

        {/* Profile Picture */}
        <div className="absolute left-6 top-[100px] md:left-12 md:top-[130px] flex flex-col items-center md:flex-row md:items-end">
          <img
            src={profilePict}
            alt="profile"
            className="
      rounded-full object-cover shadow-2xl
      w-[80px] h-[80px]
      sm:w-[100px] sm:h-[100px]
      md:w-[120px] md:h-[120px]
      lg:w-[140px] lg:h-[140px]
      transition-all duration-300
    "
          />
          <h2 className="text-4xl md:text-5xl mt-2 md:mt-0 md:pt-12 md:px-8 font-semibold text-center md:text-left">
            {user.name}
          </h2>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-[80px] md:mt-[100px]">
        <ProfileInfo
          role={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          name={user.name}
          memberId={user.id}
          email={user.email}
        />
      </div>
    </>
  );
}

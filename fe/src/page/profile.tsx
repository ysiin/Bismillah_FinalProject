import profilebg from "../assets/user-bg.jpg";
import profilePict from "../assets/LoggedInPfp.png";
import ProfileInfo from "@/components/profile/profileInfo";

export default function Profile() {
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
  <h2 className="text-4xl mt-2 md:mt-0 md:pt-12 md:px-8 font-semibold text-center md:text-left">
    User
  </h2>
</div>
      </div>

      {/* Profile Info */}
      <div className="mt-[80px] md:mt-[100px]">
        <ProfileInfo
          name="Akbar Ghazali"
          memberId="MBR12345"
          email="akbar@example.com"
          phone="+62 812 3456 7890"
        />
      </div>
    </>
  );
}

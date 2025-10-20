interface UserInfoProps {
  role: string;
  name: string;
  memberId: string;
  email: string;
}

export default function ProfileInfo({ role, name, memberId, email }: UserInfoProps) {
  return (
    <div className="container mx-auto px-2 md:px-10 pt-8 md:pt-0">
    <div className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 rounded-t-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-white">{role}</h2>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Name */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pb-4 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Name</span>
          <span className="text-base md:text-lg font-semibold text-gray-800 break-words sm:text-right">
            {name}
          </span>
        </div>

        {/* Member ID */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pb-4 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Member ID</span>
          <span className="text-base md:text-lg font-mono font-semibold text-gray-800 sm:text-right">
            {memberId}
          </span>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pb-4 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</span>
          <span className="text-base md:text-lg font-medium text-gray-800 break-all sm:text-right">
            {email}
          </span>
        </div>

      </div>
    </div>
  </div>
  );
}
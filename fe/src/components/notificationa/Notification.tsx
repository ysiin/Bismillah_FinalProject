import { Bell } from "lucide-react"
import { useState } from "react"

export default function Notification(){
    const[open, setOpen] = useState(false);

    const notifications = [
    {
      id: 1,
      message: "Kamu meminjam *Bumi Manusia*.",
      date: "2025-10-25",
      isRead: false,
    },
    {
      id: 2,
      message: "Tenggat pengembalian *Laskar Pelangi* tinggal 1 hari lagi.",
      date: "2025-10-26",
      isRead: false,
    },
    {
      id: 3,
      message: "Buku *Atomic Habits* telah ditambahkan.",
      date: "2025-10-20",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.isRead).length;

    return(
        <>
        <div className="relative">
            <button id="trigger dropdown"
                    onClick={() => setOpen(!open)}>
                <Bell />
                {unreadCount > 0 && (
          <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
            </button>

            {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b font-semibold">Notifikasi</div>
          <ul className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="p-4 text-center text-gray-500">
                Belum ada notifikasi
              </li>
            ) : (
              notifications.map((notif) => (
                <li
                  key={notif.id}
                  className={`px-4 py-3 border-b last:border-none cursor-pointer hover:bg-gray-50 ${
                    notif.isRead ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <p className="text-sm text-gray-800">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.date}</p>
                </li>
              ))
            )}
          </ul>
          
        </div>
      )}
        </div>
        </>
    )
}
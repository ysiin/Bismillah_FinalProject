import ChartBarStackedIcon from "../icon/chart-bar-stacked";
import HouseIcon from "../icon/house";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="py-10 px-4">
          <span className="border border-red-400 mx-5 py-5 px-15">Bukuku</span>
        </div>
        <ul className="flex flex-col gap-5">
          <div className="flex flex-row px-4 py-2">
            <HouseIcon />
            <li>Beranda</li>
          </div>
          <div className="flex flex-row px-4 py-2">
            <ChartBarStackedIcon />
            <li>Category</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

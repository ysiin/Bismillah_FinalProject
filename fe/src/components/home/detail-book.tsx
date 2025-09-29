interface setState {
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DetailBookPage({ setHideDetail }: setState) {
  return (
    <div
      className="h-full w-full text-white"
      onClick={() => setHideDetail(true)}
    >
      X
    </div>
  );
}

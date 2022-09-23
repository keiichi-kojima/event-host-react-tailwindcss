export default function ({ src }: { src: string }): JSX.Element {
  return (
    <div className="bg-white rounded-[10px] shadow flex items-center justify-center min-w-[48px] min-h-[56px] sm:min-w-[56px] sm:min-h-[56px] max-w-[48px] max-h-[56px] sm:max-w-[56px] sm:max-h-[56px]">
      <img src={src} alt="" width="26px" />
    </div>
  );
}

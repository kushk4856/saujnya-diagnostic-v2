export default function Heading({ children }) {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl text-nowrap font-openSans font-bold text-primary">
        {children}
      </h1>
      <div className="relative w-[85%] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-primary"></div>
    </div>
  );
}

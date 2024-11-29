/* eslint-disable react/prop-types */
export default function Heading({ children }) {
  return (
    <div className="flex items-end  md:justify-between justify-center">
      <h1 className="text-3xl text-nowrap font-openSans font-bold text-primary">
        {children}
      </h1>
      <div className="relative w-0 md:w-[85%] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-primary"></div>
    </div>
  );
}

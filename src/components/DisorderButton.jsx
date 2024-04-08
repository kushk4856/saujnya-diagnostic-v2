export default function DisorderButton({ test }) {
  return (
    <div className=" group hover:bg-primary custom-shadow rounded-md  p-4 flex items-center gap-4 cursor-pointer transition-all duration-500">
      <div className="w-[40px] h-[50] rounded-full bg-white flex justify-center items-center">
        <img src={test.icon} alt="" />
      </div>
      <h3 className="text-2xl group-hover:text-white font-openSans font-semibold text-black">
        {test.name}
      </h3>
    </div>
  );
}

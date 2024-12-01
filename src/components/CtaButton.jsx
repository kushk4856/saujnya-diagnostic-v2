/* eslint-disable react/prop-types */

export default function CtaButton({ children }) {
  return (
    <div className="bg-primary px-[2em] max-w-[200px] text-white py-[.3em] rounded-3xl">
      <p className="uppercase">{children}</p>
    </div>
  );
}

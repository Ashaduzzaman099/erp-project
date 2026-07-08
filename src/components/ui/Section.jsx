const Section = ({ title, children }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>

      {children}
    </div>
  );
};

export default Section;

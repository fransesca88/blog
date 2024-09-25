/* eslint-disable tailwindcss/no-custom-classname */
const StatCard = ({ title = "", icon = null, count = 0 }) => {
  return (
    <section className="card rounded-md border-2 border-solid border-gray-100 p-4">
      <header className="flex flex-row items-center gap-2">
        {icon ? icon : null}
        <p className="text-sm">{title}</p>
      </header>
      <div className="content">
        <span className="text-2xl font-semibold">{count}</span>
      </div>
    </section>
  );
};

export default StatCard;

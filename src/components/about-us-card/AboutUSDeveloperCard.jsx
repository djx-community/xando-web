// Developer details card component
export default function AboutUsDeveloperCard({ name, icon, url }) {
  return (
    <div className="p-4 flex">
      <h5 className="md:text-xl text-lg w-44">{name}</h5>
      <a className="pl-5" href={url} target="_blank">
        {icon}
      </a>
    </div>
  );
}

// General card component for the about us page
export default function AboutUsCard({ title, icon,url }) {
  return (
    <div className="p-5">
      <h5 className="flex  text-xl">{title}</h5>
      <a className="flex justify-center" href={url} target='_blank'>{icon}</a>
    </div>
  );
}

export default function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-blue-100 bg-opacity-10 p-7 rounded-xl shadow backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-2 text-blue-500">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

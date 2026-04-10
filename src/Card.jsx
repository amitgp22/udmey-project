export default function Card({ name, title, imgSrc }) {
  console.log({ name });
  return (
    <>
      <div className="p-4 w-80 mx-auto mt-4">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border-2 border-green-500 hover:border-pink-500 transition-colors duration-300 flex flex-col items-center">
          <img src={imgSrc} className="w-full h-80 object-cover flex-wrap  " />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{title}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-pink-500">
              OPEN ME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

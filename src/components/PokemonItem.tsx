import Image from "next/image";

const PokemonItem: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card border-0 align-items-center shadow p-3 mb-5 bg-body rounded"
        style={{ width: 250, height: 250 }}
      >
        <Image src={image} alt={name} width={130} height={130} />
        <div className="card-body position-relative">
          <h2 className="card-title text-capitalize position-absolute top-50 start-50 translate-middle">
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;

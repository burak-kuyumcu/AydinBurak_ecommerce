import { Link } from 'react-router-dom';

function ProductCard({
  id,
  title,
  department,
  oldPrice,
  price,
  image,
  detailPath,
}) {
  const cardContent = (
    <div className="flex cursor-pointer flex-col bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover md:h-[360px] lg:h-[300px]"
      />

      <div className="flex flex-col items-center gap-2.5 py-4 text-center">
        <h3 className="text-[16px] font-bold text-[#252B42]">{title}</h3>
        <p className="text-[14px] font-semibold text-[#737373]">{department}</p>

        <div className="flex items-center gap-1.5">
          <span className="text-[16px] font-bold text-[#BDBDBD] line-through">
            ${oldPrice}
          </span>
          <span className="text-[16px] font-bold text-[#23856D]">
            ${price}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
          <span className="h-4 w-4 rounded-full bg-[#23856D]" />
          <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
          <span className="h-4 w-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );

  if (detailPath) {
    return <Link to={detailPath}>{cardContent}</Link>;
  }

  return cardContent;
}

export default ProductCard;
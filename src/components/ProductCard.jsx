import { Link } from 'react-router-dom';

function ProductCard({ id, image, title, department, oldPrice, price }) {
  return (
    <Link to={`/product/${id}`} className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="h-75 w-full object-cover md:h-90 lg:h-75"
      />

      <div className="flex flex-col gap-2.5 py-4">
        <h3 className="text-[16px] font-bold text-[#252B42]">{title}</h3>

        <p className="text-[14px] font-semibold text-[#737373]">{department}</p>

        <div className="flex items-center justify-center gap-1">
          <span className="text-[14px] font-bold text-[#BDBDBD] line-through">
            ${oldPrice}
          </span>
          <span className="text-[14px] font-bold text-[#23856D]">
            ${price}
          </span>
        </div>

        <div className="flex justify-center gap-1.5">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]" />
          <span className="h-4 w-4 rounded-full bg-[#23856D]" />
          <span className="h-4 w-4 rounded-full bg-[#E77C40]" />
          <span className="h-4 w-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
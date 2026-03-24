function ProductCard({ image, title, department, oldPrice, price }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover"
      />

      <div className="flex flex-col gap-[10px] py-[16px]">
        <h3 className="text-[16px] font-bold text-[#252B42]">{title}</h3>

        <p className="text-[14px] font-semibold text-[#737373]">{department}</p>

        <div className="flex items-center justify-center gap-[5px]">
          <span className="text-[14px] font-bold text-[#BDBDBD] line-through">
            ${oldPrice}
          </span>
          <span className="text-[14px] font-bold text-[#23856D]">
            ${price}
          </span>
        </div>

        <div className="flex justify-center gap-[6px]">
          <span className="h-[16px] w-[16px] rounded-full bg-[#23A6F0]" />
          <span className="h-[16px] w-[16px] rounded-full bg-[#23856D]" />
          <span className="h-[16px] w-[16px] rounded-full bg-[#E77C40]" />
          <span className="h-[16px] w-[16px] rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
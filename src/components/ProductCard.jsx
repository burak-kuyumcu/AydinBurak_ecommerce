import { Link } from 'react-router-dom';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80';

function ProductCard({
  title,
  department,
  oldPrice,
  price,
  image,
  detailPath,
}) {
  const numericPrice = Number(price);
  const numericOldPrice = Number(oldPrice);

  const formattedPrice = Number.isFinite(numericPrice)
    ? numericPrice.toFixed(2)
    : price || '0.00';

  const formattedOldPrice =
    Number.isFinite(numericOldPrice)
      ? numericOldPrice.toFixed(2)
      : oldPrice;

  const shouldShowOldPrice =
    oldPrice !== undefined &&
    oldPrice !== null &&
    oldPrice !== '' &&
    Number.isFinite(numericOldPrice) &&
    Number.isFinite(numericPrice) &&
    numericOldPrice > numericPrice;

  const cardContent = (
    <div className="flex h-full cursor-pointer flex-col bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <img
        src={image || FALLBACK_IMAGE}
        alt={title || 'Product'}
        className="h-[300px] w-full object-cover md:h-[360px] lg:h-[300px]"
        onError={(event) => {
          if (event.currentTarget.src !== FALLBACK_IMAGE) {
            event.currentTarget.src = FALLBACK_IMAGE;
          }
        }}
      />

      <div className="flex flex-1 flex-col items-center gap-2.5 py-4 text-center">
        <h3 className="text-[16px] font-bold text-[#252B42]">
          {title || 'Product'}
        </h3>

        <p className="text-[14px] font-semibold text-[#737373]">
          {department || 'Category'}
        </p>

        <div className="flex items-center gap-1.5">
          {shouldShowOldPrice && (
            <span className="text-[16px] font-bold text-[#BDBDBD] line-through">
              ${formattedOldPrice}
            </span>
          )}

          <span className="text-[16px] font-bold text-[#23856D]">
            ${formattedPrice}
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
    return (
      <Link
        to={detailPath}
        className="block h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default ProductCard;
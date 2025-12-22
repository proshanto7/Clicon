import Image from "../ui/Image";

function CategoryItem({ item }) {
  let { categoryImg, categoryName } = item;

  return (
    <div className="overflow-hidden group py-6 px-7 border border-lightGray/20 rounded-sm cursor-pointer text-center shadow-category">
      <Image
        imgUrl={categoryImg}
        alt="laptop img"
        className="group-hover:scale-110 duration-300"
      />

      <p className="text-[16px] font-medium text-textColor mt-4">
        {categoryName}
      </p>
    </div>
  );
}

export default CategoryItem;

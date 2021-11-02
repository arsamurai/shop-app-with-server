import React from "react";
import cn from "classnames";

const Categories = React.memo(function Categories({
  activeItem,
  items,
  onChangeCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={cn(
            {active: activeItem === null}
          )}
          onClick={() => onChangeCategory(null)}
        >
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={cn(
              { active: activeItem === index },
              { discount: index === 4 }
            )}
            onClick={() => onChangeCategory(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;

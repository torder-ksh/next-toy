"use client";

import { useMenuQuery } from "@/queries/menu";
import clsx from "clsx";

const Lnb = () => {
  const { data } = useMenuQuery();
  return (
    <div className="w-52">
      <ul>
        {data.resultData.map((menu) => {
          console.log("@@@!@#!@#", menu.menuList);
          const subMenuList = menu.menuList;
          return menu.isUsed ? (
            <li key={menu.id}>
              <div>
                <p className={clsx("text-[#9c9c9c]", "")}>{menu.name}</p>
              </div>
              <ul>
                {/* {subMenuList.map((subMenu) =>
                  subMenuList.isUsed ? (
                    <li key={subMenu.id}>{subMenu.name}</li>
                  ) : null
                )} */}
              </ul>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Lnb;

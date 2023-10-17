import { requestGetUsedNavMenu } from "@/api/menu/menu";
import { useQuery } from "@tanstack/react-query";

export const menuQueryKey = {
  base: ["menu"] as const,
  menuList: () => [...menuQueryKey.base, "list"],
};

export const useMenuQuery = () => {
  return useQuery({
    queryKey: menuQueryKey.menuList(),
    queryFn: requestGetUsedNavMenu,
  });
};

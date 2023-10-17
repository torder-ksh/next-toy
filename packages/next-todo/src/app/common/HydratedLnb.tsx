import { menuQueryKey } from "@/queries/menu";
import getQueryClient from "../getQueryClient";
import Lnb from "./Lnb";
import { requestGetUsedNavMenu } from "@/api/menu/menu";
import { Hydrate, dehydrate } from "@tanstack/react-query";

const HydratedLnb = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: menuQueryKey.menuList(),
    queryFn: requestGetUsedNavMenu,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Lnb />
    </Hydrate>
  );
};

export default HydratedLnb;

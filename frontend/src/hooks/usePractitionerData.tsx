import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getPractitioners } from "../services";
import { QUERY_KEY } from "../constants";

export const useFetchPractitionerData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_PRACTITIONER],
    queryFn: getPractitioners,
  });
};

export const useMutatePractitionerData = (
  handleMutate: (data: any) => Promise<any>,
  handleSuccess: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      handleSuccess();
      queryClient.invalidateQueries([QUERY_KEY.GET_PRACTITIONER]);
    },
  });
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getPractitioners,
  createPractitioner,
  deletePractitioner,
  updatePractitioner,
} from "../services";

import { QUERY_KEY, SUCCESS_MESSAGE } from "../constants";

import { handleSuccess } from "../utils";

export const useFetchPractitionerData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_PRACTITIONER],
    queryFn: getPractitioners,
  });
};

export const useAddPractitionerData = () => {
  const queryClient = useQueryClient();
  return useMutation(createPractitioner, {
    onSuccess: () => {
      handleSuccess(SUCCESS_MESSAGE.ADD("practitioner"));
      queryClient.invalidateQueries([QUERY_KEY.GET_PRACTITIONER]);
    },
  });
};

export const useDeletePractitionerData = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePractitioner, {
    onSuccess: () => {
      handleSuccess(SUCCESS_MESSAGE.DELETE("practitioner"));
      queryClient.invalidateQueries([QUERY_KEY.GET_PRACTITIONER]);
    },
  });
};

export const useUpdatePractitionerData = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePractitioner, {
    onSuccess: () => {
      handleSuccess(SUCCESS_MESSAGE.UPDATE("practitioner"));
      queryClient.invalidateQueries([QUERY_KEY.GET_PRACTITIONER]);
    },
  });
};

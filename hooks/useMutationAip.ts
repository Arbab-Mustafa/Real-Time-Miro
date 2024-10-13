import { useMutation } from "convex/react";
import { useState } from "react";

const useMutationAip = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return { mutate, pending };
};

export default useMutationAip;

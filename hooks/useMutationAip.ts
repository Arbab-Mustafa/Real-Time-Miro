import { useMutation } from "convex/react";
import { useState } from "react";

const useMutationAip = (mutationFunction) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (payload) => {
    setPending(true);
    try {
      const result = await apiMutation(payload);
      return result;
    } catch (err) {
      // Rethrow error to be caught in calling functions
      throw err;
    } finally {
      setPending(false);
    }
  };

  return { mutate, pending };
};

export default useMutationAip;

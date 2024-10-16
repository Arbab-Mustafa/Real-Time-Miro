import { create } from "zustand";
const defaultValue = {
  id: "",
  title: "",
};

interface UseRenameModelProps {
  isOpen: boolean;
  initialValues: typeof defaultValue;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModel = create<UseRenameModelProps>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValues: { id, title },
    }),
  onClose: () => set({ isOpen: false, initialValues: defaultValue }),
  initialValues: defaultValue,
}));

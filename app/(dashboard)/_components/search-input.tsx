"use client";

import React, { useEffect, ChangeEvent, useState } from "react";
import qs from "query-string";
import { Search } from "lucide-react";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debounceValue] = useDebounce(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debounceValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute  top-1/2 left-3  transform  -translate-y-1/2 text-muted-foreground w-4 h-4" />

      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;

"use client";

import { useEffect } from "react";
import queryString from "query-string";
import { useMemoizedFn } from "ahooks";
import { atom, createStore, useAtom } from "jotai";
import { useRouter } from "next/navigation";
export const HashStore = createStore();
export const hashAtom = atom("");
export const useHashState = () => {
  const getCurrentHash = useMemoizedFn(() =>
    typeof window !== "undefined"
      ? window.location.hash.replace(/^#!?/, "")
      : ""
  );
  const router = useRouter();

  const [hash, _setHash] = useAtom(hashAtom);
  const setScrollHash = useMemoizedFn((newHash: string) => {
    let updatedUrl = window.location.href;
    updatedUrl = queryString.stringifyUrl({
      url: updatedUrl.split("#")[0],
      fragmentIdentifier: newHash,
    });

    router.replace(updatedUrl);
  });
  const setHash = useMemoizedFn((newHash: string) => {
    let updatedUrl = window.location.href;
    updatedUrl = queryString.stringifyUrl({
      url: updatedUrl.split("#")[0],
      fragmentIdentifier: newHash,
    });

    _setHash(newHash);
    history.pushState(null, "", updatedUrl);
  });
  useEffect(() => {
    const currentHash = getCurrentHash();
    _setHash(currentHash);
  }, [_setHash, getCurrentHash]);

  const handleHashChange = useMemoizedFn(() => {
    const currentHash = getCurrentHash();
    _setHash(currentHash);
  });

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  return [hash, setHash, setScrollHash] as const;
};

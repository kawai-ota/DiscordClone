import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
//typeof store.dispatchとすることによって、dispatchの型を取り出している。それを型ヘルパーするとuseDispatchが使用できるようになる。
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

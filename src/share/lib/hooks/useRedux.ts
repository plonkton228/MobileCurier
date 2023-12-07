﻿
import { AppDispatch, RootState } from "app/providers/Redux";
import { useDispatch, TypedUseSelectorHook , useSelector} from "react-redux"


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


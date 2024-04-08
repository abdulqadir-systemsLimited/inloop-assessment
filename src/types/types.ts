import { ReactNode } from "react";
import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native";

export interface Gif {
    id: string;
    title: string;
    url: string;
  }

export interface GifItemProps {
    title: string;
    url: string;
    id: string;
  }

export interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    keyboardType?: KeyboardTypeOptions | undefined
    style?: StyleProp<TextStyle>
  }

export interface PullToRefreshProps {
    refreshing: boolean;
    onRefresh: () => void;
    children: ReactNode
  }

export interface SearchBarProps {
    searchGif: string;
    onSearchGifChange: (text: string) => void;
    onSearch: () => void;
  }

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
  }
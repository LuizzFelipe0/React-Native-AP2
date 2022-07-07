import React, { createContext, useEffect, useState } from "react";
import { comicList,ComicPrice } from "../../screens/ComicList";

export interface CartContextType{
    ComicList?:comicList[],
    setComicList:(ComicList:comicList[])=>void;
}

export const CartContext=createContext<CartContextType>({
    ComicList:[{
        id:0,
        title:"",
        prices:[
            {price:0}
        ],
        thumbnail: {
            "path":"",
            "extension":""
        }
    }],
    setComicList:(ComicList:comicList[])=>{}
})
"use server";

import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export type Goods = {
  id: string;
  name: string;
  price: number;
};

/* 扩展global类型 */
declare global {
  /* eslint-disable no-var */
  var goodsList: Goods[];
  /* eslint-enable no-var */
}

global.goodsList = global.goodsList ?? ([] as Goods[]);

export async function addGoods(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const goods: Goods = {
    id: `G${Date.now()}_${Math.random()}`,
    name: formData.get("name") as string,
    price: parseFloat(formData.get("price") as string) ?? 0,
  };
  global.goodsList.push(goods);
  revalidateTag("goodsList");
  redirect("/crud");
}

export async function deleteGoods(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = data.get("id") as string;
  global.goodsList = global.goodsList.filter((goods) => goods.id !== id);
  revalidateTag("goodsList");
}

export async function updateGoods(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = data.get("id") as string;
  const goods: Goods = {
    id,
    name: data.get("name") as string,
    price: parseFloat(data.get("price") as string) ?? 0,
  };
  const index = global.goodsList.findIndex((goods) => goods.id === id);
  if (index !== -1) {
    global.goodsList[index] = goods;
  }
  revalidateTag("goodsList");
  revalidateTag("goodsItem");
  redirect("/crud",RedirectType.replace);
}
export async function getGoodsList() {
    "use cache"
    cacheTag("goodsList")
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return global.goodsList;
}
export async function getGoodsById(id: string) {
  return global.goodsList.find((goods) => goods.id === id);
}

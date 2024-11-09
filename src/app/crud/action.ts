"use server";

import { revalidatePath } from "next/cache";
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
    id: `G${Date.now()}_${(Math.random()*1000).toFixed(0)}`,
    name: formData.get("name") as string,
    price: parseFloat(formData.get("price") as string) ?? 0,
  };
  global.goodsList.push(goods);
  revalidatePath("/crud");
  revalidatePath("/crud/update/[id]","page");
  redirect("/crud", RedirectType.replace);
}

export async function deleteGoods(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = data.get("id") as string;
  global.goodsList = global.goodsList.filter((goods) => goods.id !== id);
  revalidatePath("/crud");
  revalidatePath("/crud/update/[id]","page");
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
  revalidatePath("/crud");
  revalidatePath("/crud/update/[id]","page");
  redirect("/crud", RedirectType.replace);
}
export async function getGoodsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return global.goodsList;
}
export async function getGoodsById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return global.goodsList.find((goods) => goods.id === id);
}

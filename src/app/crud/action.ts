"use server";

import { Goods, goodsService } from "@/service/goods.service";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
 

export async function addGoods(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const goods: Goods = {
    id: `G${Date.now()}_${(Math.random()*1000).toFixed(0)}`,
    name: formData.get("name") as string,
    price: parseFloat(formData.get("price") as string) ?? 0,
  };
  goodsService.addGoods(goods);
  revalidatePath("/crud");
  redirect("/crud");
}

export async function deleteGoods(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = data.get("id") as string;
  goodsService.deleteGoods(id);
  revalidatePath("/crud");
}

export async function updateGoods(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = data.get("id") as string;
  const goods: Goods = {
    id,
    name: data.get("name") as string,
    price: parseFloat(data.get("price") as string) ?? 0,
  };
  
  goodsService.updateGoods(id,goods)
  revalidatePath("/crud");
  redirect("/crud", RedirectType.replace);
}
export async function getGoodsList() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return goodsService.getGoodsList();
}
export async function getGoodsById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return goodsService.getGoodsById(id);
}

import "server-only";

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

class GoodsService {
  goodsList: Goods[];
  constructor() {
    this.goodsList = global.goodsList
  }
  async getGoodsList() {
    return this.goodsList;
  }
  async addGoods(goods: Goods) {
    this.goodsList.push(goods);
  }
  async deleteGoods(id: string) {
    const index = this.goodsList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.goodsList.splice(index, 1);
    }
  }
  async updateGoods(id: string, goods: Goods) {
    const index = this.goodsList.findIndex((item) => item.id === id);
    if (index > -1) {
      this.goodsList[index] = goods;
    }
  }
  async getGoodsById(id: string) {
    return this.goodsList.find((goods) => goods.id === id);
  }
}

export const goodsService = new GoodsService();

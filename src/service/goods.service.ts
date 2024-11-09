import 'server-only';

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
  getGoodsList() {
    return global.goodsList;
  }
  addGoods(goods: Goods) {
    global.goodsList.push(goods);
  }
  deleteGoods(id: string) {
    const index = global.goodsList.findIndex((item) => item.id === id);
    if (index > -1) {
      global.goodsList.splice(index, 1);
    }
  }
  updateGoods(id: string, goods: Goods) {
    const index = global.goodsList.findIndex((item) => item.id === id);
    if (index > -1) {
      global.goodsList[index] = goods;
    }
  }
  getGoodsById(id: string) {
    return global.goodsList.find((goods) => goods.id === id);
  }
}


export const goodsService = new GoodsService();
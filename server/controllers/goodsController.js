const uuid = require("uuid");
const ApiError = require("../error/apiError");
const path = require("path");
const { Goods } = require("../models/models");

class goodsController {
  async create(req, res, next) {
    try {
      const {
        name,
        sizes,
        description,
        sewing,
        price,
        category,
        discount,
        rating,
      } = req.body;
      const { imageUrl } = req.files;
      let fileName = uuid.v4() + ".jpg";
      imageUrl.mv(path.resolve(__dirname, "..", "static", fileName));

      const goods = await Goods.create({
        name,
        sizes,
        description,
        sewing,
        price,
        category,
        discount,
        rating,
        imageUrl: fileName,
      });

      return res.json(goods);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.query;
      const goodsItem = await Goods.findOne({ where: { id } });
      if (!goodsItem) {
        return next(ApiError.badRequest("Товар с таким id не найден!"));
      }
      goodsItem.destroy();
      return res.json({ message: `Товар с id=${id} успешно удален с базы!` });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    let { category, sort, order, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let goods;
    if (!category) {
      goods = await Goods.findAndCountAll({
        order: [[sort, order]],
        limit,
        offset,
      });
    } else {
      goods = await Goods.findAndCountAll({
        where: { category },
        order: [[sort, order]],
        limit,
        offset,
      });
    }

    return res.json(goods);
  }

  async getOne(req, res, next) {
    let { id } = req.params;
    const goodsItem = await Goods.findOne({ where: { id } });
    if (!goodsItem) {
      return next(next(ApiError.badRequest("Товар с таким id не найден!")));
    }
    return res.json(goodsItem);
  }
}

module.exports = new goodsController();

/**
 * Created by Administrator on 2017/8/8.
 */
module.exports = {

  tableName:"categories",

  attributes: {
    name : { type: 'string', unique: true, required: true },

    posts: {
      collection:'post',
      via:'category'
    }
  }
};

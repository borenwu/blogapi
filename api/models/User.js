/**
 * Created by Administrator on 2017/8/8.
 */
module.exports = {

  tableName:"users",

  attributes: {
    first_name : { type: 'string', required: true },
    last_name : { type: 'string', required:true },
    age : { type  : 'integer'},

    posts:{
      collection: 'post',
      via:'user'
    }
  }
};

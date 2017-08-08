/**
 * Created by Administrator on 2017/8/8.
 */

module.exports = {
  create: function (req,res) {
    let firstName = req.param('first_name')
    let lastName = req.param('last_name')
    let age = req.param('age')

    if(!firstName){
      return res.badRequest({err:'Invalid first name'});
    }

    if(!lastName){
      return res.badRequest({err:'Invalid last name'})
    }

    User.create({
      first_name:firstName,
      last_name:lastName,
      age:age
    }).then(user => {
      if(!user) return res.serverError({err:'Unable to create user'})

      return res.ok(user)
    }).catch(err => res.serverError(err.message))
  }
}

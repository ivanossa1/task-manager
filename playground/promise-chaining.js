require ('../src/db/mongoose')
const User = require('../src/models/user')

//60e3d4a9df3c1a14b8b470e2

/*User.findByIdAndUpdate('60e51759b6cd264a7c965e53', { age: 1 }).then((user) => {
    console.log(user)

    return User.countDocuments({ age: 1  })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/    

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
 }

 updateAgeAndCount('60e51759b6cd264a7c965e53', 2).then((count) => {
     console.log(count)
 }).catch((e) => {
     console.log(e)
 })

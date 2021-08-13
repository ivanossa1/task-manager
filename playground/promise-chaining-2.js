require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('60e51cfaed46bd47f0dc3aa4',).then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false  })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60e3cb417268ae3758cb020d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

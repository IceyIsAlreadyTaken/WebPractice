class TaskQueue {
  constructor() {
    this.hasTaskRunning = false
    this.tasks = []
  }

  add(task) {
    if (this.hasTaskRunning) {
      this.tasks.push(task)
    } else {
      this.hasTaskRunning = true
      var self = this
      task(function next() {
        if (self.tasks.length) {
          var nextTask = self.tasks.shift()
          nextTask(next)
        } else {
          self.hasTaskRunning = false
        }
      })
    }
    return this
  }
}




//作业：实现jQuery的queue功能
class TaskQueue {
  constructor() {

  }

  add(task) {

  }
}

var q = new TaskQueue()

q.add(next => {
  console.log(1)
  setTimeout(next, 1000)
})
.add(next => {
  console.log(2)
  setTimeout(next, 1000)
})
.add(next => {
  console.log(3)
  setTimeout(next, 1000)
})

//使得以上代码能够在输出1 2 3之间有1秒的停顿
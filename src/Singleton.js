/**
 * 单例模式
 */
// class Singleton {
//   constructor(name) {
//     this.name = name
//     this.instance = null
//   }

//   getName() {
//     console.log(this.name)
//   }

//   static getInstance(name) {
//     if (this.instance) {
//       this.instance = new Singleton(name)
//     }
//     return this.instance
//   }
// }

/**
 * 透明的单例
 */
// const Singleton = (function () {
//   let instance
//   class SingletonOrigin {
//     constructor(name) {
//       if (instance) return instance
//       this.name = name
//       return (instance = this)
//     }
//   }
//   return SingletonOrigin
// })()

/**
 * 代理单例
 */
// const Singleton = (function () {
//   class SingletonOrigin {
//     constructor(name) {
//       this.name = name
//     }

//     getName() {
//       console.log(this.name)
//     }
//   }
//   let instance
//   return function (name) {
//     if (!instance) instance = new SingletonOrigin(name)
//     return instance
//   }
// })()

/**
 * 惰性单例
 */
const getInstance = (function () {
  function createInstance(name) {
    return {
      name,
      getName() {
        console.log(this.name)
      },
    }
  }

  function getSingle(fn) {
    let res
    return function () {
      if (!res) res = fn.apply(this, arguments)
      return res
    }
  }

  return getSingle(createInstance)
})()

const a = getInstance('a')
const b = getInstance('b')
console.log(a === b)

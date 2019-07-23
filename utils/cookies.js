import Cookies from 'js-cookie'

export default {
  setItem(name, value) {
    Cookies.set(name, value, { expires: 1 });
  },
  getItem(name) {
    try {
      return Cookies.get(name)
    } catch (error) {
      return null
    } 
  },
  removeItem(name) {
    Cookies.remove(name)
  },
  cookieToJson(value){
    let obj = {} 
    if (value){
      let cookieArr = value.split(";")
      cookieArr.forEach((i) => {
          let arr = i.split("=");
          obj[arr[0]] =arr[1];
      })
    }
    return obj
  }
}

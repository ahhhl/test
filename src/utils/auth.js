import Cookies from 'js-cookie'
const  TokenKey = 'Admin-Token'

export function setToken (token) {
  Cookies.set(TokenKey,token)
}
export function getToken () {
  Cookies.get(TokenKey)
}
export function removeToken () {
  Cookies.remove(TokenKey)
}
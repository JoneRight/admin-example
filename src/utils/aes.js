import { AES, enc, mode, pad } from 'crypto-js'

// 加密, data为要加密的字符串
export function MS(data) {
  return AES.encrypt(data, enc.Latin1.parse('这里是跟后台商量好的key'), {
    iv: enc.Latin1.parse('这里是跟后台商量好的key'),
    mode: mode.CBC,
    padding: pad.ZeroPadding
  }).toString()
}
// 解密，data为要解密的字符串
export function DS(data) {
  return AES.decrypt(data, enc.Latin1.parse('这里是跟后台商量好的key'), {
    iv: enc.Latin1.parse('这里是跟后台商量好的key'),
    mode: mode.CBC,
    padding: pad.ZeroPadding
  }).toString(enc.Utf8)
}

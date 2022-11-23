/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  const translate = GLOBAL_CONFIG.translate
  const snackbarData = GLOBAL_CONFIG.Snackbar
  const defaultEncoding = translate.defaultEncoding // 網站默認語言，1: 繁體中文, 2: 簡體中文
  const translateDelay = translate.translateDelay // 延遲時間,若不在前, 要設定延遲翻譯時間, 如100表示100ms,默認為0
  const msgToTraditionalChinese = translate.msgToTraditionalChinese // 此處可以更改為你想要顯示的文字
  const msgToSimplifiedChinese = translate.msgToSimplifiedChinese // 同上，但兩處均不建議更改
  let currentEncoding = defaultEncoding
  const targetEncodingCookie = 'translate-chn-cht'
  let targetEncoding =
    saveToLocal.get(targetEncodingCookie) === undefined
      ? defaultEncoding
      : Number(saveToLocal.get('translate-chn-cht'))
  let translateButtonObject
  const isSnackbar = GLOBAL_CONFIG.Snackbar !== undefined

  function translateText(txt) {
    if (txt === '' || txt == null) return ''
    if (currentEncoding === 1 && targetEncoding === 2) return Simplized(txt)
    else if (currentEncoding === 2 && targetEncoding === 1) { return Traditionalized(txt) } else return txt
  }
  function translateBody(fobj) {
    let objs
    if (typeof fobj === 'object') objs = fobj.childNodes
    else objs = document.body.childNodes
    for (let i = 0; i < objs.length; i++) {
      const obj = objs.item(i)
      if (
        '||BR|HR|'.indexOf('|' + obj.tagName + '|') > 0 ||
        obj === translateButtonObject
      ) { continue }
      if (obj.title !== '' && obj.title != null) { obj.title = translateText(obj.title) }
      if (obj.alt !== '' && obj.alt != null) obj.alt = translateText(obj.alt)
      if (obj.placeholder !== '' && obj.placeholder != null) obj.placeholder = translateText(obj.placeholder)
      if (
        obj.tagName === 'INPUT' &&
        obj.value !== '' &&
        obj.type !== 'text' &&
        obj.type !== 'hidden'
      ) { obj.value = translateText(obj.value) }
      if (obj.nodeType === 3) obj.data = translateText(obj.data)
      else translateBody(obj)
    }
  }
  function translatePage() {
    if (targetEncoding === 1) {
      currentEncoding = 1
      targetEncoding = 2
      translateButtonObject.innerHTML = msgToTraditionalChinese
      saveToLocal.set(targetEncodingCookie, targetEncoding, 2)
      translateBody()
      if (isSnackbar) btf.snackbarShow(snackbarData.cht_to_chs)
    } else if (targetEncoding === 2) {
      currentEncoding = 2
      targetEncoding = 1
      translateButtonObject.innerHTML = msgToSimplifiedChinese
      saveToLocal.set(targetEncodingCookie, targetEncoding, 2)
      translateBody()
      if (isSnackbar) btf.snackbarShow(snackbarData.chs_to_cht)
    }
  }
  function JTPYStr() {
    return '1'
  }
  function FTPYStr() {
    return '2'
  }
  function Traditionalized(cc) {
    let str = ''
    const ss = JTPYStr()
    const tt = FTPYStr()
    for (let i = 0; i < cc.length; i++) {
      if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) !== -1) { str += tt.charAt(ss.indexOf(cc.charAt(i))) } else str += cc.charAt(i)
    }
    return str
  }
  function Simplized(cc) {
    let str = ''
    const ss = JTPYStr()
    const tt = FTPYStr()
    for (let i = 0; i < cc.length; i++) {
      if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) !== -1) { str += ss.charAt(tt.indexOf(cc.charAt(i))) } else str += cc.charAt(i)
    }
    return str
  }
  function translateInitialization() {
    translateButtonObject = document.getElementById('translateLink')
    if (translateButtonObject) {
      if (currentEncoding !== targetEncoding) {
        setTimeout(translateBody, translateDelay)
        if (targetEncoding === 1) translateButtonObject.innerHTML = msgToSimplifiedChinese
        else translateButtonObject.innerHTML = msgToTraditionalChinese
      }
      translateButtonObject.addEventListener('click', translatePage, false)
    }
  }
  translateInitialization()
  document.addEventListener('pjax:complete', translateInitialization)
})

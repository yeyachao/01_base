import Vue from "vue"
import VueI18n from "vue-i18n"
import en from "./lang/en"
import zh_CN from "./lang/zh_CN"

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale:"en",
  messages:{
    en,
    zh_CN
  }
})

export default i18n



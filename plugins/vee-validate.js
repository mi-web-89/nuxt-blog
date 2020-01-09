import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

// console.log('rules >>', rules)
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

const MSISDN = {
  ID: ['8', '08', '628']
}

const phone = v => {
  if (!v || !rules.numeric.validate(v))
    return false
  let _v = String(v)

  for (const e of MSISDN.ID)
    if (_v.startsWith(e))
      return true
  return false
}

// console.log('phone rules >>', phone)
extend('phone', phone)
Vue.prototype.$validatePhone = v => phone(v)

// const phoneOrEmailRule = {
//   getMessage(field, args) {
//     return `The ${field} must be either a valid phone number or e-mail`;
//   },
//   validate(value, args) {
//     // Custom regex for a phone number (supplied in the SO post: https://stackoverflow.com/q/50033651/2600825)
//     const MOBILEREG = /^((1[3578][0-9])+\d{8})$/;
//     return rules.email(value) || MOBILEREG.test(value);
//   }
// }
// extend('phoneOrEmail', phoneOrEmailRule)


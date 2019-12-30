import Vue from 'vue'
import { ValidationProvider, ValidationObserver} from 'vee-validate'
import PostList from '@/components/post/PostList'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
Vue.component('PostList', PostList)
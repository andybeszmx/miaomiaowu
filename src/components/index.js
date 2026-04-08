import ImgView from "./ImageView.vue"
import MmwSku from './mmwsku/index.vue'


export const componentPlugin = {
   install (app) {
    app.component('ImgView',ImgView)
    app.component('MmwSku',MmwSku)
  }
}
 

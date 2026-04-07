import ImgView from "./ImageView.vue"
import XtxSku from './xtxsku/index.vue'


export const componentPlugin = {
   install (app) {
    app.component('XtxImgView',ImgView)
    app.component('XtxSku',XtxSku)
  }
}
 

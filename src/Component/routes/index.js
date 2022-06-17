import Home from '../page/home/index'
import Iphone from '../page/iphone/index'
import Ipad from '../page/ipad/index'
import Mac from '../page/mac/index'
import AppleWatch from '../page/appleWatch/index'
import Sound from '../page/sound/index'
import Accessory from '../page/accessory/index'
import Service from '../page/service/index'
import Sale from '../page/sale/index'
import Installment from '../page/installment/index'
import Carts from "../page/cart/index"
import NotFound from "../page/notFound/index"
import Checkout from "../page/checkout/index"

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/iphone", component: Iphone },
  { path: "/ipad", component: Ipad },
  { path: "/mac", component: Mac },
  { path: "/apple-watch", component: AppleWatch },
  { path: "/am-thanh", component: Sound },
  { path: "/phu-kien", component: Accessory },
  { path: "/dich-vu", component: Service },
  { path: "/khuyen-mai", component: Sale },
  { path: "/tra-gop", component: Installment },
  { path: "/cart", component: Carts },
  { path: "*", component: NotFound },
  { path: "/checkout", component: Checkout }
]


export default publicRoutes
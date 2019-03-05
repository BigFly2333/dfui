import Input from '../input'
import Row from '../row'
import Col from '../col'

const components = [
  Input,
  Row,
  Col
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component((component.name), component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  Input,
  Row,
  Col,
  install
}
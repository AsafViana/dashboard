import { campanhaFranquias } from '../../service/database'

const campanha_franquias = JSON.parse(campanhaFranquias())

export { campanha_franquias }

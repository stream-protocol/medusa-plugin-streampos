import { ModuleExports } from "@medusajs/modules-sdk"

import Loader from "./loaders"
import { StreamPosService } from "./services"

const service = StreamPosService
const loaders = [Loader]

const moduleDefinition: ModuleExports = {
  service,
  loaders,
}

export default moduleDefinition
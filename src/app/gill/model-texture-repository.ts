import modelTextureRepositoryFactory  from "app/gill/model-texture-repository/factory";

import ModelTextureRepository         from "lib/gill/model-texture-repository.type";

import webglService                   from "app/gill/webgl/service";

const modelTextureRepository  = modelTextureRepositoryFactory.construct(
                                  webglService
                                );

export default modelTextureRepository;

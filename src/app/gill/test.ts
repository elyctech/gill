import gillAttributeValueMapFactory   from "app/gill/model/attribute-value-map/factory";
import gillBufferService              from "app/gill/buffer/service";
import gillChangedAttributeMapFactory from "app/gill/model/changed-attribute-map/factory";
import gillIndexCollectionFactory     from "app/gill/model/index-collection/factory";
import gillModelFactory               from "app/gill/model/factory";
import gillNumberFactory              from "app/gill/model/number/factory";
import gillProgramService             from "app/gill/program/service";
import gillProgramSourceFactory       from "app/gill/program/source/factory";
import gillUniformValueMapFactory     from "app/gill/model/uniform-value-map/factory";
import gillVector2Factory             from "app/gill/model/vector2/factory";
import gillVector3Factory             from "app/gill/model/vector3/factory";
import gillVertexCollectionFactory    from "app/gill/model/vertex/collection/factory";
import gillVertexFactory              from "app/gill/model/vertex/factory";

(<any>window).gillAttributeValueMapFactory    = gillAttributeValueMapFactory;
(<any>window).gillBufferService               = gillBufferService;
(<any>window).gillChangedAttributeMapFactory  = gillChangedAttributeMapFactory;
(<any>window).gillIndexCollectionFactory      = gillIndexCollectionFactory;
(<any>window).gillModelFactory                = gillModelFactory;
(<any>window).gillNumberFactory               = gillNumberFactory;
(<any>window).gillProgramService              = gillProgramService;
(<any>window).gillProgramSourceFactory        = gillProgramSourceFactory;
(<any>window).gillUniformValueMapFactory      = gillUniformValueMapFactory;
(<any>window).gillVector2Factory              = gillVector2Factory;
(<any>window).gillVector3Factory              = gillVector3Factory;
(<any>window).gillVertexCollectionFactory     = gillVertexCollectionFactory;
(<any>window).gillVertexFactory               = gillVertexFactory;

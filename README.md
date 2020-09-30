
<a name="readmemd"></a>

# controller-manager


<a name="_librarymd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd)

# @raydeck/controller-manager - v1.0.7

## Index

### Classes

* [Base](#classesbasemd)
* [DDBBase](#classesddbbasemd)
* [Lookup](#classeslookupmd)
* [Lookupable](#classeslookupablemd)
* [Relationship](#classesrelationshipmd)

### Functions

* [_clear](#_clear)
* [_clearValue](#_clearvalue)
* [clear](#clear)
* [clearValue](#clearvalue)
* [get](#get)
* [getIdsObjects](#getidsobjects)
* [getIdsPage](#getidspage)
* [getObject](#getobject)
* [getUri](#geturi)
* [getValuesObjects](#getvaluesobjects)
* [getValuesPage](#getvaluespage)
* [make](#make)
* [remove](#remove)
* [removeObject](#removeobject)
* [removeUri](#removeuri)
* [set](#set)
* [setObject](#setobject)
* [setUri](#seturi)

## Functions

###  _clear

▸ **_clear**(`id`: string, `prefix`: string, `lastCursor?`: undefined | string): *Promise‹void›*

*Defined in [Relationship.ts:124](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`prefix` | string |
`lastCursor?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  _clearValue

▸ **_clearValue**(`value`: string, `prefix`: string, `lastCursor?`: undefined | string): *Promise‹void›*

*Defined in [Relationship.ts:142](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |
`lastCursor?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(`id`: string, `prefix`: string): *Promise‹void›*

*Defined in [Relationship.ts:121](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  clearValue

▸ **clearValue**(`value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Relationship.ts:139](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: string, `value`: string, `prefix`: string): *Promise‹[Relationship](#classesrelationshipmd)‹››*

*Defined in [Relationship.ts:27](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹[Relationship](#classesrelationshipmd)‹››*

___

###  getIdsObjects

▸ **getIdsObjects**‹**T**›(`schemeOrClass`: Schemable | string, `value`: string, `prefix`: string, `lastKey?`: undefined | string): *Promise‹[T[], string | undefined]›*

*Defined in [Relationship.ts:85](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L85)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schemeOrClass` | Schemable &#124; string |
`value` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[T[], string | undefined]›*

___

###  getIdsPage

▸ **getIdsPage**(`value`: string, `prefix`: string, `lastKey?`: undefined | string): *Promise‹[string[], string | undefined]›*

*Defined in [Relationship.ts:68](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  getObject

▸ **getObject**‹**T**›(`id`: string): *Promise‹T›*

*Defined in [Lookup.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹T›*

___

###  getUri

▸ **getUri**(`id`: string): *Promise‹string›*

*Defined in [Lookup.ts:13](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹string›*

___

###  getValuesObjects

▸ **getValuesObjects**‹**T**›(`schemeOrClass`: Schemable | string, `id`: string, `prefix`: string, `lastKey?`: undefined | string): *Promise‹[T[], string | undefined]›*

*Defined in [Relationship.ts:48](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L48)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schemeOrClass` | Schemable &#124; string |
`id` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[T[], string | undefined]›*

___

###  getValuesPage

▸ **getValuesPage**(`id`: string, `prefix`: string, `lastKey?`: undefined | string): *Promise‹[string[], string | undefined]›*

*Defined in [Relationship.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  make

▸ **make**(`id`: string, `uri`: string): *Promise‹void›*

*Defined in [Lookup.ts:47](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`id`: string): *Promise‹void›*

*Defined in [Lookup.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  removeObject

▸ **removeObject**(`object`: Sessionable): *Promise‹void›*

*Defined in [Lookup.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | Sessionable |

**Returns:** *Promise‹void›*

___

###  removeUri

▸ **removeUri**(`uri`: string): *Promise‹void›*

*Defined in [Lookup.ts:56](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`id`: string, `value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Relationship.ts:107](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  setObject

▸ **setObject**(`id`: string, `object`: Sessionable): *Promise‹void›*

*Defined in [Lookup.ts:22](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`object` | Sessionable |

**Returns:** *Promise‹void›*

___

###  setUri

▸ **setUri**(`id`: string, `uri`: string): *Promise‹void›*

*Defined in [Lookup.ts:26](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`uri` | string |

**Returns:** *Promise‹void›*


<a name="classesbasemd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd) › [Base](#classesbasemd)

# Class: Base

## Hierarchy

* **Base**

  ↳ [DDBBase](#classesddbbasemd)

## Implements

* Sessionable

## Index

### Properties

* [id](#optional-id)
* [scheme](#scheme)
* [scheme](#static-scheme)

### Methods

* [delete](#abstract-delete)
* [exists](#exists)
* [get](#abstract-get)
* [getAll](#abstract-getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [mock](#mock)
* [runLater](#runlater)
* [set](#abstract-set)
* [toId](#toid)
* [trigger](#trigger)

## Properties

### `Optional` id

• **id**? : *undefined | object*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L6)*

___

###  scheme

• **scheme**: *string* = ""

*Defined in [Base.ts:50](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L50)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Defined in [Base.ts:51](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L51)*

## Methods

### `Abstract` delete

▸ **delete**(): *Promise‹void›*

*Defined in [Base.ts:13](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L13)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Defined in [Base.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

### `Abstract` get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Defined in [Base.ts:10](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L10)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T›*

___

### `Abstract` getAll

▸ **getAll**(): *Promise‹object›*

*Defined in [Base.ts:11](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L11)*

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Defined in [Base.ts:29](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L29)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L32)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Defined in [Base.ts:14](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getUri

▸ **getUri**(): *string*

*Defined in [Base.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L39)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Defined in [Base.ts:7](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L7)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  mock

▸ **mock**(): *object*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L36)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Defined in [Base.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`when` | Date |
`context?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

### `Abstract` set

▸ **set**(`key`: string, `value`: any): *Promise‹void›*

*Defined in [Base.ts:12](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Defined in [Base.ts:25](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Defined in [Base.ts:44](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesddbbasemd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd) › [DDBBase](#classesddbbasemd)

# Class: DDBBase

## Hierarchy

* [Base](#classesbasemd)

  ↳ **DDBBase**

  ↳ [Lookup](#classeslookupmd)

  ↳ [Relationship](#classesrelationshipmd)

  ↳ [Lookupable](#classeslookupablemd)

## Implements

* Sessionable

## Index

### Properties

* [ddb](#ddb)
* [id](#optional-id)
* [scheme](#scheme)
* [DDBHandler](#static-ddbhandler)
* [scheme](#static-scheme)

### Methods

* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L6)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:50](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L50)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Defined in [DDBBase.ts:64](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L64)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:51](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L51)*

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:61](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L61)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T›*

___

###  getAll

▸ **getAll**(): *Promise‹object›*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:45](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L45)*

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:29](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L29)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L32)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:14](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L39)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L5)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`id` | undefined &#124; string &#124; object | - |
`partitionKey` | string | "id" |
`tableName` | string | - |

**Returns:** *void*

___

###  load

▸ **load**(): *Promise‹this›*

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L36)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Defined in [DDBBase.ts:58](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`when` | Date |
`context?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string | object, `value?`: any): *Promise‹void›*

*Overrides [Base](#classesbasemd).[set](#abstract-set)*

*Defined in [DDBBase.ts:48](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Inherited from [Base](#classesbasemd).[toId](#toid)*

*Defined in [Base.ts:25](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[trigger](#trigger)*

*Defined in [Base.ts:44](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupmd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd) › [Lookup](#classeslookupmd)

# Class: Lookup

## Hierarchy

  ↳ [DDBBase](#classesddbbasemd)

  ↳ **Lookup**

## Implements

* Sessionable

## Index

### Constructors

* [constructor](#constructor)

### Properties

* [ddb](#ddb)
* [id](#optional-id)
* [scheme](#scheme)
* [DDBHandler](#static-ddbhandler)
* [scheme](#static-scheme)

### Methods

* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)

## Constructors

###  constructor

\+ **new Lookup**(`id?`: undefined | string): *[Lookup](#classeslookupmd)*

*Defined in [Lookup.ts:4](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookup.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Lookup](#classeslookupmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L6)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:50](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L50)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:64](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L64)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:51](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L51)*

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:61](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L61)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[get](#get)*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T›*

___

###  getAll

▸ **getAll**(): *Promise‹object›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:45](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L45)*

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:29](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L29)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L32)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:14](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L39)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L5)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`id` | undefined &#124; string &#124; object | - |
`partitionKey` | string | "id" |
`tableName` | string | - |

**Returns:** *void*

___

###  load

▸ **load**(): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[load](#load)*

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L36)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:58](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`when` | Date |
`context?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string | object, `value?`: any): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[set](#set)*

*Overrides [Base](#classesbasemd).[set](#abstract-set)*

*Defined in [DDBBase.ts:48](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Inherited from [Base](#classesbasemd).[toId](#toid)*

*Defined in [Base.ts:25](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[trigger](#trigger)*

*Defined in [Base.ts:44](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupablemd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd) › [Lookupable](#classeslookupablemd)

# Class: Lookupable

## Hierarchy

  ↳ [DDBBase](#classesddbbasemd)

  ↳ **Lookupable**

## Implements

* Sessionable

## Index

### Properties

* [ddb](#ddb)
* [id](#optional-id)
* [scheme](#scheme)
* [DDBHandler](#static-ddbhandler)
* [scheme](#static-scheme)

### Methods

* [addRelationship](#addrelationship)
* [clearLookups](#clearlookups)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [mock](#mock)
* [remove](#remove)
* [removeRelationship](#removerelationship)
* [removeValueRelationship](#removevaluerelationship)
* [runLater](#runlater)
* [set](#set)
* [setLookup](#setlookup)
* [toId](#toid)
* [trigger](#trigger)

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L6)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:50](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L50)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:64](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L64)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:51](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L51)*

## Methods

###  addRelationship

▸ **addRelationship**(`valueOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:16](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookupable.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`valueOrObject` | String &#124; [Base](#classesbasemd) |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  clearLookups

▸ **clearLookups**(): *Promise‹void›*

*Defined in [Lookupable.ts:13](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookupable.ts#L13)*

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:61](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L61)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[get](#get)*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T›*

___

###  getAll

▸ **getAll**(): *Promise‹object›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:45](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L45)*

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:29](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L29)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L32)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:14](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L39)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L5)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`id` | undefined &#124; string &#124; object | - |
`partitionKey` | string | "id" |
`tableName` | string | - |

**Returns:** *void*

___

###  load

▸ **load**(): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[load](#load)*

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L36)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:58](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  removeRelationship

▸ **removeRelationship**(`valueOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:23](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookupable.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`valueOrObject` | String &#124; [Base](#classesbasemd) |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  removeValueRelationship

▸ **removeValueRelationship**(`idOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookupable.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`idOrObject` | String &#124; [Base](#classesbasemd) |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`when` | Date |
`context?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string | object, `value?`: any): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[set](#set)*

*Overrides [Base](#classesbasemd).[set](#abstract-set)*

*Defined in [DDBBase.ts:48](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  setLookup

▸ **setLookup**(`value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:10](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Lookupable.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Inherited from [Base](#classesbasemd).[toId](#toid)*

*Defined in [Base.ts:25](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[trigger](#trigger)*

*Defined in [Base.ts:44](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesrelationshipmd"></a>

[@raydeck/controller-manager - v1.0.7](#readmemd) › [Relationship](#classesrelationshipmd)

# Class: Relationship

## Hierarchy

  ↳ [DDBBase](#classesddbbasemd)

  ↳ **Relationship**

## Implements

* Sessionable

## Index

### Constructors

* [constructor](#constructor)

### Properties

* [ddb](#ddb)
* [id](#optional-id)
* [scheme](#scheme)
* [DDBHandler](#static-ddbhandler)
* [scheme](#static-scheme)

### Methods

* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)

## Constructors

###  constructor

\+ **new Relationship**(`id?`: undefined | string): *[Relationship](#classesrelationshipmd)*

*Defined in [Relationship.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Relationship](#classesrelationshipmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L6)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:50](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L50)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:64](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L64)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:51](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L51)*

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:61](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L61)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[get](#get)*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T›*

___

###  getAll

▸ **getAll**(): *Promise‹object›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:45](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L45)*

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Overrides [Base](#classesbasemd).[getId](#getid)*

*Defined in [Relationship.ts:22](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L22)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L32)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:14](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:39](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L39)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L5)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`id` | undefined &#124; string &#124; object | - |
`partitionKey` | string | "id" |
`tableName` | string | - |

**Returns:** *void*

___

###  load

▸ **load**(): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[load](#load)*

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L36)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:58](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:52](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |
`when` | Date |
`context?` | undefined &#124; object |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string | object, `value?`: any): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[set](#set)*

*Overrides [Base](#classesbasemd).[set](#abstract-set)*

*Defined in [DDBBase.ts:48](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/DDBBase.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Overrides [Base](#classesbasemd).[toId](#toid)*

*Defined in [Relationship.ts:15](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Relationship.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* **id**: *string*

* **value**: *string*

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[trigger](#trigger)*

*Defined in [Base.ts:44](https://github.com/rhdeck/controller-manager/blob/1b9d2d2/src/Base.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

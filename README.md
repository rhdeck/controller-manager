
<a name="readmemd"></a>

# controller-manager


<a name="_librarymd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd)

# @raydeck/controller-manager - v1.13.0

## Index

### Classes

* [Base](#classesbasemd)
* [DDBBase](#classesddbbasemd)
* [Event](#classeseventmd)
* [Lookup](#classeslookupmd)
* [Lookupable](#classeslookupablemd)
* [Relationship](#classesrelationshipmd)

### Type aliases

* [CancelRunLater](#cancelrunlater)
* [MakeEvent](#makeevent)
* [RunLater](#runlater)

### Variables

* [cancelRunLater](#let-cancelrunlater)
* [makeEvent](#let-makeevent)
* [runLater](#let-runlater)

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
* [makeAddListener](#makeaddlistener)
* [page](#page)
* [remove](#remove)
* [removeObject](#removeobject)
* [removeUri](#removeuri)
* [set](#set)
* [setCancelRunLater](#setcancelrunlater)
* [setMakeEvent](#setmakeevent)
* [setObject](#setobject)
* [setRunLater](#setrunlater)
* [setUri](#seturi)

## Type aliases

###  CancelRunLater

Ƭ **CancelRunLater**: *function*

*Defined in [Base.ts:22](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L22)*

#### Type declaration:

▸ (`uri`: string, `event`: string): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`event` | string |

___

###  MakeEvent

Ƭ **MakeEvent**: *function*

*Defined in [Base.ts:6](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L6)*

#### Type declaration:

▸ (`params`: object): *Promise‹void›*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`context?` | undefined &#124; object |
`date?` | Date |
`event` | string |
`uri` | string |

___

###  RunLater

Ƭ **RunLater**: *function*

*Defined in [Base.ts:16](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L16)*

#### Type declaration:

▸ (`uri`: string, `event`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
`event` | string |
`when` | Date |
`context?` | undefined &#124; object |

## Variables

### `Let` cancelRunLater

• **cancelRunLater**: *undefined | [CancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L24)*

___

### `Let` makeEvent

• **makeEvent**: *undefined | [MakeEvent](#makeevent)*

*Defined in [Base.ts:12](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L12)*

___

### `Let` runLater

• **runLater**: *undefined | [RunLater](#runlater)*

*Defined in [Base.ts:23](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L23)*

## Functions

###  _clear

▸ **_clear**(`id`: string, `prefix`: string, `lastCursor?`: undefined | string): *Promise‹void›*

*Defined in [Relationship.ts:129](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L129)*

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

*Defined in [Relationship.ts:147](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L147)*

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

*Defined in [Relationship.ts:126](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  clearValue

▸ **clearValue**(`value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Relationship.ts:144](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: string, `value`: string, `prefix`: string): *Promise‹[Relationship](#classesrelationshipmd)‹››*

*Defined in [Relationship.ts:27](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L27)*

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

*Defined in [Relationship.ts:85](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L85)*

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

*Defined in [Relationship.ts:68](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  getObject

▸ **getObject**‹**T**›(`id`: string, `prefix`: string): *Promise‹T›*

*Defined in [Lookup.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | - |
`prefix` | string | "" |

**Returns:** *Promise‹T›*

___

###  getUri

▸ **getUri**(`id`: string, `prefix`: string): *Promise‹string›*

*Defined in [Lookup.ts:13](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | - |
`prefix` | string | "" |

**Returns:** *Promise‹string›*

___

###  getValuesObjects

▸ **getValuesObjects**‹**T**›(`schemeOrClass`: Schemable | string, `id`: string, `prefix`: string, `lastKey?`: undefined | string): *Promise‹[T[], string | undefined]›*

*Defined in [Relationship.ts:48](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L48)*

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

*Defined in [Relationship.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`prefix` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  make

▸ **make**(`payload`: object): *Promise‹void›*

*Defined in [Event.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L32)*

**Parameters:**

▪ **payload**: *object*

Name | Type |
------ | ------ |
`context?` | undefined &#124; object |
`date?` | Date |
`event` | string |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  makeAddListener

▸ **makeAddListener**‹**T**›(`scheme`: string): *(Anonymous function)*

*Defined in [Base.ts:104](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L104)*

**Type parameters:**

▪ **T**: *[Base](#classesbasemd)*

**Parameters:**

Name | Type |
------ | ------ |
`scheme` | string |

**Returns:** *(Anonymous function)*

___

###  page

▸ **page**(`objectOrId`: string | Sessionable, `lastKey?`: undefined | string): *Promise‹[events: Event[], newLastKey: string | undefined]›*

*Defined in [Event.ts:51](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`objectOrId` | string &#124; Sessionable |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[events: Event[], newLastKey: string | undefined]›*

___

###  remove

▸ **remove**(`id`: string): *Promise‹void›*

*Defined in [Lookup.ts:44](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  removeObject

▸ **removeObject**(`object`: Sessionable): *Promise‹void›*

*Defined in [Lookup.ts:58](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | Sessionable |

**Returns:** *Promise‹void›*

___

###  removeUri

▸ **removeUri**(`uri`: string): *Promise‹void›*

*Defined in [Lookup.ts:62](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`id`: string, `value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Relationship.ts:105](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  setCancelRunLater

▸ **setCancelRunLater**(`f`: [CancelRunLater](#cancelrunlater)): *void*

*Defined in [Base.ts:28](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [CancelRunLater](#cancelrunlater) |

**Returns:** *void*

___

###  setMakeEvent

▸ **setMakeEvent**(`f`: [MakeEvent](#makeevent)): *void*

*Defined in [Base.ts:13](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [MakeEvent](#makeevent) |

**Returns:** *void*

___

###  setObject

▸ **setObject**(`id`: string, `object`: Sessionable, `ttl?`: Date): *Promise‹void›*

*Defined in [Lookup.ts:22](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`object` | Sessionable |
`ttl?` | Date |

**Returns:** *Promise‹void›*

___

###  setRunLater

▸ **setRunLater**(`f`: [RunLater](#runlater)): *void*

*Defined in [Base.ts:25](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [RunLater](#runlater) |

**Returns:** *void*

___

###  setUri

▸ **setUri**(`id`: string, `uri`: string, `ttl?`: Date): *Promise‹void›*

*Defined in [Lookup.ts:26](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`uri` | string |
`ttl?` | Date |

**Returns:** *Promise‹void›*


<a name="classesbasemd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [Base](#classesbasemd)

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

* [cancelRunLater](#cancelrunlater)
* [delete](#abstract-delete)
* [exists](#exists)
* [get](#abstract-get)
* [getAll](#abstract-getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getUri](#geturi)
* [init](#init)
* [log](#log)
* [mock](#mock)
* [runLater](#runlater)
* [set](#abstract-set)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Properties

### `Optional` id

• **id**? : *undefined | object*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

### `Abstract` delete

▸ **delete**(): *Promise‹void›*

*Defined in [Base.ts:41](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L41)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

### `Abstract` get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Defined in [Base.ts:36](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L36)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Defined in [Base.ts:37](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L37)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Defined in [Base.ts:57](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L57)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

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

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Defined in [Base.ts:33](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L33)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Defined in [Base.ts:83](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [Base.ts:40](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Defined in [Base.ts:53](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesddbbasemd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [DDBBase](#classesddbbasemd)

# Class: DDBBase

## Hierarchy

* [Base](#classesbasemd)

  ↳ **DDBBase**

  ↳ [Event](#classeseventmd)

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

* [cancelRunLater](#cancelrunlater)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getSync](#getsync)
* [getUri](#geturi)
* [increment](#increment)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [log](#log)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Defined in [DDBBase.ts:98](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L98)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[cancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:95](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L95)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L30)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:66](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L66)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:57](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L57)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getSync

▸ **getSync**‹**T**›(`key`: string, `def?`: T): *T*

*Defined in [DDBBase.ts:71](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L71)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *T*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  increment

▸ **increment**(`key`: string, `byValue`: number): *Promise‹void›*

*Defined in [DDBBase.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`byValue` | number | 1 |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L5)*

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

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[log](#log)*

*Defined in [Base.ts:83](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Defined in [DDBBase.ts:92](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [DDBBase.ts:79](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L79)*

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

*Defined in [Base.ts:53](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L53)*

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

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[triggerNoLog](#triggernolog)*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeseventmd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [Event](#classeseventmd)

# Class: Event

## Hierarchy

  ↳ [DDBBase](#classesddbbasemd)

  ↳ **Event**

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

* [cancelRunLater](#cancelrunlater)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getSync](#getsync)
* [getUri](#geturi)
* [increment](#increment)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [log](#log)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Constructors

###  constructor

\+ **new Event**(`uri?`: undefined | string, `date?`: undefined | string): *[Event](#classeseventmd)*

*Defined in [Event.ts:7](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`uri?` | undefined &#124; string |
`date?` | undefined &#124; string |

**Returns:** *[Event](#classeseventmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:98](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L98)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[cancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:95](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L95)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

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

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L30)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:66](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L66)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Overrides [Base](#classesbasemd).[getId](#getid)*

*Defined in [Event.ts:23](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L23)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getSync

▸ **getSync**‹**T**›(`key`: string, `def?`: T): *T*

*Inherited from [DDBBase](#classesddbbasemd).[getSync](#getsync)*

*Defined in [DDBBase.ts:71](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L71)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *T*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  increment

▸ **increment**(`key`: string, `byValue`: number): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[increment](#increment)*

*Defined in [DDBBase.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`byValue` | number | 1 |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L5)*

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

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Overrides [Base](#classesbasemd).[log](#log)*

*Defined in [Event.ts:27](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:92](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [DDBBase.ts:79](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object | object*

*Overrides [Base](#classesbasemd).[toId](#toid)*

*Defined in [Event.ts:16](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Event.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object | object*

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[trigger](#trigger)*

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[triggerNoLog](#triggernolog)*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupmd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [Lookup](#classeslookupmd)

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

* [cancelRunLater](#cancelrunlater)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getSync](#getsync)
* [getUri](#geturi)
* [increment](#increment)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [log](#log)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Constructors

###  constructor

\+ **new Lookup**(`id?`: undefined | string): *[Lookup](#classeslookupmd)*

*Defined in [Lookup.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookup.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Lookup](#classeslookupmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:98](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L98)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[cancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:95](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L95)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

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

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L30)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:66](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L66)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:57](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L57)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getSync

▸ **getSync**‹**T**›(`key`: string, `def?`: T): *T*

*Inherited from [DDBBase](#classesddbbasemd).[getSync](#getsync)*

*Defined in [DDBBase.ts:71](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L71)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *T*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  increment

▸ **increment**(`key`: string, `byValue`: number): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[increment](#increment)*

*Defined in [DDBBase.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`byValue` | number | 1 |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L5)*

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

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[log](#log)*

*Defined in [Base.ts:83](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:92](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [DDBBase.ts:79](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L79)*

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

*Defined in [Base.ts:53](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L53)*

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

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[triggerNoLog](#triggernolog)*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupablemd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [Lookupable](#classeslookupablemd)

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
* [cancelRunLater](#cancelrunlater)
* [clearLookups](#clearlookups)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getSync](#getsync)
* [getUri](#geturi)
* [increment](#increment)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [log](#log)
* [mock](#mock)
* [remove](#remove)
* [removeLookup](#removelookup)
* [removeRelationship](#removerelationship)
* [removeValueRelationship](#removevaluerelationship)
* [runLater](#runlater)
* [set](#set)
* [setLookup](#setlookup)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:98](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L98)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  addRelationship

▸ **addRelationship**(`valueOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`valueOrObject` | String &#124; [Base](#classesbasemd) |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[cancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

###  clearLookups

▸ **clearLookups**(`prefix?`: undefined | string): *Promise‹void›*

*Defined in [Lookupable.ts:21](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:95](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L95)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

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

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L30)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:66](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L66)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

*Defined in [Base.ts:57](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L57)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getSync

▸ **getSync**‹**T**›(`key`: string, `def?`: T): *T*

*Inherited from [DDBBase](#classesddbbasemd).[getSync](#getsync)*

*Defined in [DDBBase.ts:71](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L71)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *T*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  increment

▸ **increment**(`key`: string, `byValue`: number): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[increment](#increment)*

*Defined in [DDBBase.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`byValue` | number | 1 |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L5)*

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

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[log](#log)*

*Defined in [Base.ts:83](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:92](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  removeLookup

▸ **removeLookup**(`value`: string, `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:13](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  removeRelationship

▸ **removeRelationship**(`valueOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:31](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`valueOrObject` | String &#124; [Base](#classesbasemd) |
`prefix` | string |

**Returns:** *Promise‹void›*

___

###  removeValueRelationship

▸ **removeValueRelationship**(`idOrObject`: String | [Base](#classesbasemd), `prefix`: string): *Promise‹void›*

*Defined in [Lookupable.ts:38](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L38)*

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

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [DDBBase.ts:79](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  setLookup

▸ **setLookup**(`value`: string, `prefix`: string, `ttl?`: Date): *Promise‹void›*

*Defined in [Lookupable.ts:10](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Lookupable.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`prefix` | string |
`ttl?` | Date |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

*Inherited from [Base](#classesbasemd).[toId](#toid)*

*Defined in [Base.ts:53](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L53)*

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

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[triggerNoLog](#triggernolog)*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesrelationshipmd"></a>

[@raydeck/controller-manager - v1.13.0](#readmemd) › [Relationship](#classesrelationshipmd)

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

* [cancelRunLater](#cancelrunlater)
* [delete](#delete)
* [exists](#exists)
* [get](#get)
* [getAll](#getall)
* [getId](#getid)
* [getIdObject](#getidobject)
* [getOptional](#getoptional)
* [getSync](#getsync)
* [getUri](#geturi)
* [increment](#increment)
* [init](#init)
* [load](#load)
* [loadFromItem](#loadfromitem)
* [log](#log)
* [mock](#mock)
* [remove](#remove)
* [runLater](#runlater)
* [set](#set)
* [toId](#toid)
* [trigger](#trigger)
* [triggerNoLog](#triggernolog)

## Constructors

###  constructor

\+ **new Relationship**(`id?`: undefined | string): *[Relationship](#classesrelationshipmd)*

*Defined in [Relationship.ts:6](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Relationship](#classesrelationshipmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

*Defined in [DDBBase.ts:4](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L4)*

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

*Defined in [Base.ts:32](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L32)*

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L89)*

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

*Defined in [DDBBase.ts:98](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L98)*

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

*Defined in [Base.ts:90](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L90)*

## Methods

###  cancelRunLater

▸ **cancelRunLater**(`eventName`: string): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[cancelRunLater](#cancelrunlater)*

*Defined in [Base.ts:99](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | string |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

*Defined in [DDBBase.ts:95](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L95)*

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

*Defined in [Base.ts:45](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L45)*

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

*Defined in [DDBBase.ts:30](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L30)*

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

▸ **getAll**‹**T**›(): *Promise‹T›*

*Inherited from [DDBBase](#classesddbbasemd).[getAll](#getall)*

*Overrides [Base](#classesbasemd).[getAll](#abstract-getall)*

*Defined in [DDBBase.ts:66](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L66)*

**Type parameters:**

▪ **T**: *object*

**Returns:** *Promise‹T›*

___

###  getId

▸ **getId**(): *string*

*Overrides [Base](#classesbasemd).[getId](#getid)*

*Defined in [Relationship.ts:22](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L22)*

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

*Defined in [Base.ts:60](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L60)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

*Defined in [Base.ts:42](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L42)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *Promise‹T | undefined›*

___

###  getSync

▸ **getSync**‹**T**›(`key`: string, `def?`: T): *T*

*Inherited from [DDBBase](#classesddbbasemd).[getSync](#getsync)*

*Defined in [DDBBase.ts:71](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L71)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`def?` | T |

**Returns:** *T*

___

###  getUri

▸ **getUri**(): *string*

*Inherited from [Base](#classesbasemd).[getUri](#geturi)*

*Defined in [Base.ts:67](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L67)*

**Returns:** *string*

___

###  increment

▸ **increment**(`key`: string, `byValue`: number): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[increment](#increment)*

*Defined in [DDBBase.ts:89](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L89)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`byValue` | number | 1 |

**Returns:** *Promise‹void›*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

*Defined in [DDBBase.ts:5](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L5)*

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

*Defined in [DDBBase.ts:17](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L17)*

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

*Defined in [DDBBase.ts:24](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  log

▸ **log**(`event`: string, `context`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[log](#log)*

*Defined in [Base.ts:83](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | - |
`context` | object | {} |

**Returns:** *Promise‹void›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

*Defined in [Base.ts:64](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L64)*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

*Defined in [DDBBase.ts:92](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

*Defined in [Base.ts:91](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L91)*

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

*Defined in [DDBBase.ts:79](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/DDBBase.ts#L79)*

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

*Defined in [Relationship.ts:15](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Relationship.ts#L15)*

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

*Defined in [Base.ts:72](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L72)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

___

###  triggerNoLog

▸ **triggerNoLog**(`eventName`: string, `data`: object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[triggerNoLog](#triggernolog)*

*Defined in [Base.ts:78](https://github.com/rhdeck/controller-manager/blob/c1249bf/src/Base.ts#L78)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="readmemd"></a>

# controller-manager


<a name="_librarymd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd)

# @raydeck/controller-manager - v1.0.2

## Index

### Classes

* [Base](#classesbasemd)
* [DDBBase](#classesddbbasemd)
* [Lookup](#classeslookupmd)
* [Lookupable](#classeslookupablemd)
* [Relationship](#classesrelationshipmd)

### Functions

* [clear](#clear)
* [clearValue](#clearvalue)
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

###  clear

▸ **clear**(`id`: string, `lastCursor?`: undefined | string): *Promise‹void›*

Defined in Relationship.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`lastCursor?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  clearValue

▸ **clearValue**(`value`: string, `lastCursor?`: undefined | string): *Promise‹void›*

Defined in Relationship.ts:117

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`lastCursor?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  getIdsObjects

▸ **getIdsObjects**‹**T**›(`schemeOrClass`: Schemable | string, `value`: string, `lastKey?`: undefined | string): *Promise‹[T[], string | undefined]›*

Defined in Relationship.ts:76

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schemeOrClass` | Schemable &#124; string |
`value` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[T[], string | undefined]›*

___

###  getIdsPage

▸ **getIdsPage**(`id`: string, `lastKey?`: undefined | string): *Promise‹[string[], string | undefined]›*

Defined in Relationship.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  getObject

▸ **getObject**‹**T**›(`id`: string): *Promise‹T›*

Defined in Lookup.ts:17

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

Defined in Lookup.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹string›*

___

###  getValuesObjects

▸ **getValuesObjects**‹**T**›(`schemeOrClass`: Schemable | string, `id`: string, `lastKey?`: undefined | string): *Promise‹[T[], string | undefined]›*

Defined in Relationship.ts:39

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`schemeOrClass` | Schemable &#124; string |
`id` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[T[], string | undefined]›*

___

###  getValuesPage

▸ **getValuesPage**(`id`: string, `lastKey?`: undefined | string): *Promise‹[string[], string | undefined]›*

Defined in Relationship.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`lastKey?` | undefined &#124; string |

**Returns:** *Promise‹[string[], string | undefined]›*

___

###  make

▸ **make**(`id`: string, `uri`: string): *Promise‹void›*

Defined in Lookup.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`id`: string): *Promise‹void›*

Defined in Lookup.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  removeObject

▸ **removeObject**(`object`: Sessionable): *Promise‹void›*

Defined in Lookup.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`object` | Sessionable |

**Returns:** *Promise‹void›*

___

###  removeUri

▸ **removeUri**(`uri`: string): *Promise‹void›*

Defined in Lookup.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`id`: string, `value`: string): *Promise‹void›*

Defined in Relationship.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`value` | string |

**Returns:** *Promise‹void›*

___

###  setObject

▸ **setObject**(`id`: string, `object`: Sessionable): *Promise‹void›*

Defined in Lookup.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`object` | Sessionable |

**Returns:** *Promise‹void›*

___

###  setUri

▸ **setUri**(`id`: string, `uri`: string): *Promise‹void›*

Defined in Lookup.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`uri` | string |

**Returns:** *Promise‹void›*


<a name="classesbasemd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd) › [Base](#classesbasemd)

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

Defined in Base.ts:6

___

###  scheme

• **scheme**: *string* = ""

Defined in Base.ts:50

___

### `Static` scheme

▪ **scheme**: *string* = ""

Defined in Base.ts:51

## Methods

### `Abstract` delete

▸ **delete**(): *Promise‹void›*

Defined in Base.ts:13

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

Defined in Base.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

### `Abstract` get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

Defined in Base.ts:10

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

Defined in Base.ts:11

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

Defined in Base.ts:29

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

Defined in Base.ts:32

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

Defined in Base.ts:14

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

Defined in Base.ts:39

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

Defined in Base.ts:7

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *void*

___

###  mock

▸ **mock**(): *object*

Defined in Base.ts:36

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

Defined in Base.ts:52

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

Defined in Base.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *Promise‹void›*

___

###  toId

▸ **toId**(`id`: string | object): *object*

Defined in Base.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; object |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  trigger

▸ **trigger**(`eventName`: string, `data`: object): *Promise‹void›*

Defined in Base.ts:44

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesddbbasemd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd) › [DDBBase](#classesddbbasemd)

# Class: DDBBase

## Hierarchy

* [Base](#classesbasemd)

  ↳ **DDBBase**

  ↳ [Lookup](#classeslookupmd)

  ↳ [Lookupable](#classeslookupablemd)

  ↳ [Relationship](#classesrelationshipmd)

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

Defined in DDBBase.ts:4

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

Defined in Base.ts:6

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:50

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

Defined in DDBBase.ts:64

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:51

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

Defined in DDBBase.ts:61

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

Defined in Base.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**‹**T**›(`key`: string, `def?`: T): *Promise‹T›*

*Overrides [Base](#classesbasemd).[get](#abstract-get)*

Defined in DDBBase.ts:30

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

Defined in DDBBase.ts:45

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

Defined in Base.ts:29

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

Defined in Base.ts:32

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

Defined in Base.ts:14

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

Defined in Base.ts:39

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Overrides [Base](#classesbasemd).[init](#init)*

Defined in DDBBase.ts:5

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

Defined in DDBBase.ts:17

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

Defined in DDBBase.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

Defined in Base.ts:36

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

Defined in DDBBase.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

Defined in Base.ts:52

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

Defined in DDBBase.ts:48

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

Defined in Base.ts:25

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

Defined in Base.ts:44

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupmd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd) › [Lookup](#classeslookupmd)

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

Defined in Lookup.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Lookup](#classeslookupmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

Defined in DDBBase.ts:4

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

Defined in Base.ts:6

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:50

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

Defined in DDBBase.ts:64

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:51

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

Defined in DDBBase.ts:61

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

Defined in Base.ts:17

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

Defined in DDBBase.ts:30

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

Defined in DDBBase.ts:45

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

Defined in Base.ts:29

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

Defined in Base.ts:32

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

Defined in Base.ts:14

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

Defined in Base.ts:39

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

Defined in DDBBase.ts:5

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

Defined in DDBBase.ts:17

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

Defined in DDBBase.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

Defined in Base.ts:36

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

Defined in DDBBase.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

Defined in Base.ts:52

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

Defined in DDBBase.ts:48

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

Defined in Base.ts:25

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

Defined in Base.ts:44

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classeslookupablemd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd) › [Lookupable](#classeslookupablemd)

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
* [setLookup](#setlookup)
* [toId](#toid)
* [trigger](#trigger)

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

Defined in DDBBase.ts:4

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

Defined in Base.ts:6

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:50

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

Defined in DDBBase.ts:64

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:51

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

Defined in DDBBase.ts:61

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

Defined in Base.ts:17

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

Defined in DDBBase.ts:30

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

Defined in DDBBase.ts:45

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Inherited from [Base](#classesbasemd).[getId](#getid)*

Defined in Base.ts:29

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

Defined in Base.ts:32

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

Defined in Base.ts:14

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

Defined in Base.ts:39

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

Defined in DDBBase.ts:5

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

Defined in DDBBase.ts:17

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

Defined in DDBBase.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

Defined in Base.ts:36

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

Defined in DDBBase.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

Defined in Base.ts:52

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

Defined in DDBBase.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; object |
`value?` | any |

**Returns:** *Promise‹void›*

___

###  setLookup

▸ **setLookup**(`value`: string, `prefix`: string): *Promise‹void›*

Defined in Lookupable.ts:5

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

Defined in Base.ts:25

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

Defined in Base.ts:44

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*


<a name="classesrelationshipmd"></a>

[@raydeck/controller-manager - v1.0.2](#readmemd) › [Relationship](#classesrelationshipmd)

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

Defined in Relationship.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`id?` | undefined &#124; string |

**Returns:** *[Relationship](#classesrelationshipmd)*

## Properties

###  ddb

• **ddb**: *DDBHandler*

*Inherited from [DDBBase](#classesddbbasemd).[ddb](#ddb)*

Defined in DDBBase.ts:4

___

### `Optional` id

• **id**? : *undefined | object*

*Inherited from [Base](#classesbasemd).[id](#optional-id)*

Defined in Base.ts:6

___

###  scheme

• **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:50

___

### `Static` DDBHandler

▪ **DDBHandler**: *DDBHandler* = DDBHandler

*Inherited from [DDBBase](#classesddbbasemd).[DDBHandler](#static-ddbhandler)*

Defined in DDBBase.ts:64

___

### `Static` scheme

▪ **scheme**: *string* = ""

*Inherited from [Base](#classesbasemd).[scheme](#scheme)*

Defined in Base.ts:51

## Methods

###  delete

▸ **delete**(): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[delete](#delete)*

*Overrides [Base](#classesbasemd).[delete](#abstract-delete)*

Defined in DDBBase.ts:61

**Returns:** *Promise‹void›*

___

###  exists

▸ **exists**(`key`: string): *Promise‹boolean›*

*Inherited from [Base](#classesbasemd).[exists](#exists)*

Defined in Base.ts:17

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

Defined in DDBBase.ts:30

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

Defined in DDBBase.ts:45

**Returns:** *Promise‹object›*

___

###  getId

▸ **getId**(): *string*

*Overrides [Base](#classesbasemd).[getId](#getid)*

Defined in Relationship.ts:21

**Returns:** *string*

___

###  getIdObject

▸ **getIdObject**(): *object*

*Inherited from [Base](#classesbasemd).[getIdObject](#getidobject)*

Defined in Base.ts:32

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  getOptional

▸ **getOptional**‹**T**›(`key`: string, `def?`: T): *Promise‹T | undefined›*

*Inherited from [Base](#classesbasemd).[getOptional](#getoptional)*

Defined in Base.ts:14

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

Defined in Base.ts:39

**Returns:** *string*

___

###  init

▸ **init**(`__namedParameters`: object): *void*

*Inherited from [DDBBase](#classesddbbasemd).[init](#init)*

*Overrides [Base](#classesbasemd).[init](#init)*

Defined in DDBBase.ts:5

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

Defined in DDBBase.ts:17

**Returns:** *Promise‹this›*

___

###  loadFromItem

▸ **loadFromItem**(`Item`: object): *Promise‹this›*

*Inherited from [DDBBase](#classesddbbasemd).[loadFromItem](#loadfromitem)*

Defined in DDBBase.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`Item` | object |

**Returns:** *Promise‹this›*

___

###  mock

▸ **mock**(): *object*

*Inherited from [Base](#classesbasemd).[mock](#mock)*

Defined in Base.ts:36

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  remove

▸ **remove**(`key`: string): *Promise‹void›*

*Inherited from [DDBBase](#classesddbbasemd).[remove](#remove)*

Defined in DDBBase.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  runLater

▸ **runLater**(`eventName`: string, `when`: Date, `context?`: undefined | object): *Promise‹void›*

*Inherited from [Base](#classesbasemd).[runLater](#runlater)*

Defined in Base.ts:52

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

Defined in DDBBase.ts:48

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

Defined in Relationship.ts:14

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

Defined in Base.ts:44

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`eventName` | string | - |
`data` | object | {} |

**Returns:** *Promise‹void›*

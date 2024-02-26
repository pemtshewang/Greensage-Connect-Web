
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Controller
 * 
 */
export type Controller = $Result.DefaultSelection<Prisma.$ControllerPayload>
/**
 * Model Reading
 * 
 */
export type Reading = $Result.DefaultSelection<Prisma.$ReadingPayload>
/**
 * Model WaterScheduleRecord
 * 
 */
export type WaterScheduleRecord = $Result.DefaultSelection<Prisma.$WaterScheduleRecordPayload>
/**
 * Model SoilMoistureThresholdRecord
 * 
 */
export type SoilMoistureThresholdRecord = $Result.DefaultSelection<Prisma.$SoilMoistureThresholdRecordPayload>
/**
 * Model HumidityThresholdRecord
 * 
 */
export type HumidityThresholdRecord = $Result.DefaultSelection<Prisma.$HumidityThresholdRecordPayload>
/**
 * Model TemperatureThresholdRecord
 * 
 */
export type TemperatureThresholdRecord = $Result.DefaultSelection<Prisma.$TemperatureThresholdRecordPayload>
/**
 * Model NewsFeeds
 * 
 */
export type NewsFeeds = $Result.DefaultSelection<Prisma.$NewsFeedsPayload>
/**
 * Model AccessToken
 * 
 */
export type AccessToken = $Result.DefaultSelection<Prisma.$AccessTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  Irrigation: 'Irrigation',
  Greenhouse: 'Greenhouse'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.controller`: Exposes CRUD operations for the **Controller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controllers
    * const controllers = await prisma.controller.findMany()
    * ```
    */
  get controller(): Prisma.ControllerDelegate<ExtArgs>;

  /**
   * `prisma.reading`: Exposes CRUD operations for the **Reading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Readings
    * const readings = await prisma.reading.findMany()
    * ```
    */
  get reading(): Prisma.ReadingDelegate<ExtArgs>;

  /**
   * `prisma.waterScheduleRecord`: Exposes CRUD operations for the **WaterScheduleRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterScheduleRecords
    * const waterScheduleRecords = await prisma.waterScheduleRecord.findMany()
    * ```
    */
  get waterScheduleRecord(): Prisma.WaterScheduleRecordDelegate<ExtArgs>;

  /**
   * `prisma.soilMoistureThresholdRecord`: Exposes CRUD operations for the **SoilMoistureThresholdRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoilMoistureThresholdRecords
    * const soilMoistureThresholdRecords = await prisma.soilMoistureThresholdRecord.findMany()
    * ```
    */
  get soilMoistureThresholdRecord(): Prisma.SoilMoistureThresholdRecordDelegate<ExtArgs>;

  /**
   * `prisma.humidityThresholdRecord`: Exposes CRUD operations for the **HumidityThresholdRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HumidityThresholdRecords
    * const humidityThresholdRecords = await prisma.humidityThresholdRecord.findMany()
    * ```
    */
  get humidityThresholdRecord(): Prisma.HumidityThresholdRecordDelegate<ExtArgs>;

  /**
   * `prisma.temperatureThresholdRecord`: Exposes CRUD operations for the **TemperatureThresholdRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemperatureThresholdRecords
    * const temperatureThresholdRecords = await prisma.temperatureThresholdRecord.findMany()
    * ```
    */
  get temperatureThresholdRecord(): Prisma.TemperatureThresholdRecordDelegate<ExtArgs>;

  /**
   * `prisma.newsFeeds`: Exposes CRUD operations for the **NewsFeeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsFeeds
    * const newsFeeds = await prisma.newsFeeds.findMany()
    * ```
    */
  get newsFeeds(): Prisma.NewsFeedsDelegate<ExtArgs>;

  /**
   * `prisma.accessToken`: Exposes CRUD operations for the **AccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessTokens
    * const accessTokens = await prisma.accessToken.findMany()
    * ```
    */
  get accessToken(): Prisma.AccessTokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    User: 'User',
    Controller: 'Controller',
    Reading: 'Reading',
    WaterScheduleRecord: 'WaterScheduleRecord',
    SoilMoistureThresholdRecord: 'SoilMoistureThresholdRecord',
    HumidityThresholdRecord: 'HumidityThresholdRecord',
    TemperatureThresholdRecord: 'TemperatureThresholdRecord',
    NewsFeeds: 'NewsFeeds',
    AccessToken: 'AccessToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'user' | 'controller' | 'reading' | 'waterScheduleRecord' | 'soilMoistureThresholdRecord' | 'humidityThresholdRecord' | 'temperatureThresholdRecord' | 'newsFeeds' | 'accessToken'
      txIsolationLevel: never
    },
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Controller: {
        payload: Prisma.$ControllerPayload<ExtArgs>
        fields: Prisma.ControllerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControllerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControllerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          findFirst: {
            args: Prisma.ControllerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControllerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          findMany: {
            args: Prisma.ControllerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>[]
          }
          create: {
            args: Prisma.ControllerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          createMany: {
            args: Prisma.ControllerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ControllerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          update: {
            args: Prisma.ControllerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          deleteMany: {
            args: Prisma.ControllerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ControllerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ControllerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ControllerPayload>
          }
          aggregate: {
            args: Prisma.ControllerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateController>
          }
          groupBy: {
            args: Prisma.ControllerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ControllerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ControllerFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ControllerAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ControllerCountArgs<ExtArgs>,
            result: $Utils.Optional<ControllerCountAggregateOutputType> | number
          }
        }
      }
      Reading: {
        payload: Prisma.$ReadingPayload<ExtArgs>
        fields: Prisma.ReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findFirst: {
            args: Prisma.ReadingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findMany: {
            args: Prisma.ReadingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          create: {
            args: Prisma.ReadingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          createMany: {
            args: Prisma.ReadingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReadingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          update: {
            args: Prisma.ReadingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          deleteMany: {
            args: Prisma.ReadingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReadingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          aggregate: {
            args: Prisma.ReadingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReading>
          }
          groupBy: {
            args: Prisma.ReadingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReadingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReadingFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReadingAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ReadingCountArgs<ExtArgs>,
            result: $Utils.Optional<ReadingCountAggregateOutputType> | number
          }
        }
      }
      WaterScheduleRecord: {
        payload: Prisma.$WaterScheduleRecordPayload<ExtArgs>
        fields: Prisma.WaterScheduleRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterScheduleRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterScheduleRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          findFirst: {
            args: Prisma.WaterScheduleRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterScheduleRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          findMany: {
            args: Prisma.WaterScheduleRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>[]
          }
          create: {
            args: Prisma.WaterScheduleRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          createMany: {
            args: Prisma.WaterScheduleRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WaterScheduleRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          update: {
            args: Prisma.WaterScheduleRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          deleteMany: {
            args: Prisma.WaterScheduleRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WaterScheduleRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WaterScheduleRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaterScheduleRecordPayload>
          }
          aggregate: {
            args: Prisma.WaterScheduleRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWaterScheduleRecord>
          }
          groupBy: {
            args: Prisma.WaterScheduleRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WaterScheduleRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WaterScheduleRecordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WaterScheduleRecordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WaterScheduleRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<WaterScheduleRecordCountAggregateOutputType> | number
          }
        }
      }
      SoilMoistureThresholdRecord: {
        payload: Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>
        fields: Prisma.SoilMoistureThresholdRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoilMoistureThresholdRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoilMoistureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          findFirst: {
            args: Prisma.SoilMoistureThresholdRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoilMoistureThresholdRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          findMany: {
            args: Prisma.SoilMoistureThresholdRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>[]
          }
          create: {
            args: Prisma.SoilMoistureThresholdRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          createMany: {
            args: Prisma.SoilMoistureThresholdRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SoilMoistureThresholdRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          update: {
            args: Prisma.SoilMoistureThresholdRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          deleteMany: {
            args: Prisma.SoilMoistureThresholdRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SoilMoistureThresholdRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SoilMoistureThresholdRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SoilMoistureThresholdRecordPayload>
          }
          aggregate: {
            args: Prisma.SoilMoistureThresholdRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSoilMoistureThresholdRecord>
          }
          groupBy: {
            args: Prisma.SoilMoistureThresholdRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SoilMoistureThresholdRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SoilMoistureThresholdRecordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SoilMoistureThresholdRecordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SoilMoistureThresholdRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<SoilMoistureThresholdRecordCountAggregateOutputType> | number
          }
        }
      }
      HumidityThresholdRecord: {
        payload: Prisma.$HumidityThresholdRecordPayload<ExtArgs>
        fields: Prisma.HumidityThresholdRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HumidityThresholdRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HumidityThresholdRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          findFirst: {
            args: Prisma.HumidityThresholdRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HumidityThresholdRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          findMany: {
            args: Prisma.HumidityThresholdRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>[]
          }
          create: {
            args: Prisma.HumidityThresholdRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          createMany: {
            args: Prisma.HumidityThresholdRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HumidityThresholdRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          update: {
            args: Prisma.HumidityThresholdRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          deleteMany: {
            args: Prisma.HumidityThresholdRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HumidityThresholdRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HumidityThresholdRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumidityThresholdRecordPayload>
          }
          aggregate: {
            args: Prisma.HumidityThresholdRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHumidityThresholdRecord>
          }
          groupBy: {
            args: Prisma.HumidityThresholdRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HumidityThresholdRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HumidityThresholdRecordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.HumidityThresholdRecordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.HumidityThresholdRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<HumidityThresholdRecordCountAggregateOutputType> | number
          }
        }
      }
      TemperatureThresholdRecord: {
        payload: Prisma.$TemperatureThresholdRecordPayload<ExtArgs>
        fields: Prisma.TemperatureThresholdRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemperatureThresholdRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemperatureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          findFirst: {
            args: Prisma.TemperatureThresholdRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemperatureThresholdRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          findMany: {
            args: Prisma.TemperatureThresholdRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>[]
          }
          create: {
            args: Prisma.TemperatureThresholdRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          createMany: {
            args: Prisma.TemperatureThresholdRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TemperatureThresholdRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          update: {
            args: Prisma.TemperatureThresholdRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          deleteMany: {
            args: Prisma.TemperatureThresholdRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemperatureThresholdRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemperatureThresholdRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemperatureThresholdRecordPayload>
          }
          aggregate: {
            args: Prisma.TemperatureThresholdRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemperatureThresholdRecord>
          }
          groupBy: {
            args: Prisma.TemperatureThresholdRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemperatureThresholdRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TemperatureThresholdRecordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TemperatureThresholdRecordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TemperatureThresholdRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<TemperatureThresholdRecordCountAggregateOutputType> | number
          }
        }
      }
      NewsFeeds: {
        payload: Prisma.$NewsFeedsPayload<ExtArgs>
        fields: Prisma.NewsFeedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFeedsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFeedsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          findFirst: {
            args: Prisma.NewsFeedsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFeedsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          findMany: {
            args: Prisma.NewsFeedsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>[]
          }
          create: {
            args: Prisma.NewsFeedsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          createMany: {
            args: Prisma.NewsFeedsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NewsFeedsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          update: {
            args: Prisma.NewsFeedsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          deleteMany: {
            args: Prisma.NewsFeedsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NewsFeedsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NewsFeedsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsFeedsPayload>
          }
          aggregate: {
            args: Prisma.NewsFeedsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNewsFeeds>
          }
          groupBy: {
            args: Prisma.NewsFeedsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NewsFeedsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NewsFeedsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.NewsFeedsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.NewsFeedsCountArgs<ExtArgs>,
            result: $Utils.Optional<NewsFeedsCountAggregateOutputType> | number
          }
        }
      }
      AccessToken: {
        payload: Prisma.$AccessTokenPayload<ExtArgs>
        fields: Prisma.AccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findFirst: {
            args: Prisma.AccessTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findMany: {
            args: Prisma.AccessTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          create: {
            args: Prisma.AccessTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          createMany: {
            args: Prisma.AccessTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccessTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          update: {
            args: Prisma.AccessTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccessTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccessTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccessTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          aggregate: {
            args: Prisma.AccessTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccessToken>
          }
          groupBy: {
            args: Prisma.AccessTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccessTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccessTokenFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccessTokenAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AccessTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<AccessTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    controllers: number
    accessToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controllers?: boolean | UserCountOutputTypeCountControllersArgs
    accessToken?: boolean | UserCountOutputTypeCountAccessTokenArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountControllersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControllerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }



  /**
   * Count Type ControllerCountOutputType
   */

  export type ControllerCountOutputType = {
    readings: number
    waterScheduleRecords: number
    soilMoistureThresholdRecords: number
    HumidityThresholdRecord: number
    TemperatureThresholdRecord: number
  }

  export type ControllerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | ControllerCountOutputTypeCountReadingsArgs
    waterScheduleRecords?: boolean | ControllerCountOutputTypeCountWaterScheduleRecordsArgs
    soilMoistureThresholdRecords?: boolean | ControllerCountOutputTypeCountSoilMoistureThresholdRecordsArgs
    HumidityThresholdRecord?: boolean | ControllerCountOutputTypeCountHumidityThresholdRecordArgs
    TemperatureThresholdRecord?: boolean | ControllerCountOutputTypeCountTemperatureThresholdRecordArgs
  }

  // Custom InputTypes

  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControllerCountOutputType
     */
    select?: ControllerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }


  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountWaterScheduleRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterScheduleRecordWhereInput
  }


  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountSoilMoistureThresholdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoilMoistureThresholdRecordWhereInput
  }


  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountHumidityThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumidityThresholdRecordWhereInput
  }


  /**
   * ControllerCountOutputType without action
   */
  export type ControllerCountOutputTypeCountTemperatureThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemperatureThresholdRecordWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    email: string | null
    password: string | null
    mqttBrokerUsername: string | null
    mqttBrokerPassword: string | null
    mqttBrokerPort: string | null
    mqttBrokerUrl: string | null
    isSuper: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    email: string | null
    password: string | null
    mqttBrokerUsername: string | null
    mqttBrokerPassword: string | null
    mqttBrokerPort: string | null
    mqttBrokerUrl: string | null
    isSuper: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    createdAt: number
    username: number
    email: number
    password: number
    mqttBrokerUsername: number
    mqttBrokerPassword: number
    mqttBrokerPort: number
    mqttBrokerUrl: number
    isSuper: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    password?: true
    mqttBrokerUsername?: true
    mqttBrokerPassword?: true
    mqttBrokerPort?: true
    mqttBrokerUrl?: true
    isSuper?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    password?: true
    mqttBrokerUsername?: true
    mqttBrokerPassword?: true
    mqttBrokerPort?: true
    mqttBrokerUrl?: true
    isSuper?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    email?: true
    password?: true
    mqttBrokerUsername?: true
    mqttBrokerPassword?: true
    mqttBrokerPort?: true
    mqttBrokerUrl?: true
    isSuper?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    createdAt: Date
    username: string
    email: string
    password: string
    mqttBrokerUsername: string | null
    mqttBrokerPassword: string | null
    mqttBrokerPort: string | null
    mqttBrokerUrl: string | null
    isSuper: boolean
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mqttBrokerUsername?: boolean
    mqttBrokerPassword?: boolean
    mqttBrokerPort?: boolean
    mqttBrokerUrl?: boolean
    isSuper?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    createdAt?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    mqttBrokerUsername?: boolean
    mqttBrokerPassword?: boolean
    mqttBrokerPort?: boolean
    mqttBrokerUrl?: boolean
    isSuper?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      username: string
      email: string
      password: string
      mqttBrokerUsername: string | null
      mqttBrokerPassword: string | null
      mqttBrokerPort: string | null
      mqttBrokerUrl: string | null
      isSuper: boolean
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AdminFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AdminAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly mqttBrokerUsername: FieldRef<"Admin", 'String'>
    readonly mqttBrokerPassword: FieldRef<"Admin", 'String'>
    readonly mqttBrokerPort: FieldRef<"Admin", 'String'>
    readonly mqttBrokerUrl: FieldRef<"Admin", 'String'>
    readonly isSuper: FieldRef<"Admin", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    otp: number | null
    greenhouseCount: number | null
    irrigationCount: number | null
    brokerPort: number | null
  }

  export type UserSumAggregateOutputType = {
    otp: number | null
    greenhouseCount: number | null
    irrigationCount: number | null
    brokerPort: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    cid: string | null
    mobile: string | null
    gewog: string | null
    dzongkhag: string | null
    registeredAt: Date | null
    verifiedAt: Date | null
    posLat: string | null
    posLong: string | null
    otp: number | null
    otpExpiresAt: Date | null
    greenhouseCount: number | null
    irrigationCount: number | null
    brokerId: string | null
    brokerPort: number | null
    brokerIp: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    cid: string | null
    mobile: string | null
    gewog: string | null
    dzongkhag: string | null
    registeredAt: Date | null
    verifiedAt: Date | null
    posLat: string | null
    posLong: string | null
    otp: number | null
    otpExpiresAt: Date | null
    greenhouseCount: number | null
    irrigationCount: number | null
    brokerId: string | null
    brokerPort: number | null
    brokerIp: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    cid: number
    mobile: number
    gewog: number
    dzongkhag: number
    registeredAt: number
    verifiedAt: number
    posLat: number
    posLong: number
    otp: number
    otpExpiresAt: number
    greenhouseCount: number
    irrigationCount: number
    brokerId: number
    brokerPort: number
    brokerIp: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    otp?: true
    greenhouseCount?: true
    irrigationCount?: true
    brokerPort?: true
  }

  export type UserSumAggregateInputType = {
    otp?: true
    greenhouseCount?: true
    irrigationCount?: true
    brokerPort?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    cid?: true
    mobile?: true
    gewog?: true
    dzongkhag?: true
    registeredAt?: true
    verifiedAt?: true
    posLat?: true
    posLong?: true
    otp?: true
    otpExpiresAt?: true
    greenhouseCount?: true
    irrigationCount?: true
    brokerId?: true
    brokerPort?: true
    brokerIp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    cid?: true
    mobile?: true
    gewog?: true
    dzongkhag?: true
    registeredAt?: true
    verifiedAt?: true
    posLat?: true
    posLong?: true
    otp?: true
    otpExpiresAt?: true
    greenhouseCount?: true
    irrigationCount?: true
    brokerId?: true
    brokerPort?: true
    brokerIp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    cid?: true
    mobile?: true
    gewog?: true
    dzongkhag?: true
    registeredAt?: true
    verifiedAt?: true
    posLat?: true
    posLong?: true
    otp?: true
    otpExpiresAt?: true
    greenhouseCount?: true
    irrigationCount?: true
    brokerId?: true
    brokerPort?: true
    brokerIp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt: Date
    verifiedAt: Date | null
    posLat: string | null
    posLong: string | null
    otp: number | null
    otpExpiresAt: Date | null
    greenhouseCount: number
    irrigationCount: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    cid?: boolean
    mobile?: boolean
    gewog?: boolean
    dzongkhag?: boolean
    registeredAt?: boolean
    verifiedAt?: boolean
    posLat?: boolean
    posLong?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    greenhouseCount?: boolean
    irrigationCount?: boolean
    brokerId?: boolean
    brokerPort?: boolean
    brokerIp?: boolean
    controllers?: boolean | User$controllersArgs<ExtArgs>
    accessToken?: boolean | User$accessTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    cid?: boolean
    mobile?: boolean
    gewog?: boolean
    dzongkhag?: boolean
    registeredAt?: boolean
    verifiedAt?: boolean
    posLat?: boolean
    posLong?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    greenhouseCount?: boolean
    irrigationCount?: boolean
    brokerId?: boolean
    brokerPort?: boolean
    brokerIp?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controllers?: boolean | User$controllersArgs<ExtArgs>
    accessToken?: boolean | User$accessTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      controllers: Prisma.$ControllerPayload<ExtArgs>[]
      accessToken: Prisma.$AccessTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      cid: string
      mobile: string
      gewog: string
      dzongkhag: string
      registeredAt: Date
      verifiedAt: Date | null
      posLat: string | null
      posLong: string | null
      otp: number | null
      otpExpiresAt: Date | null
      greenhouseCount: number
      irrigationCount: number
      brokerId: string
      brokerPort: number
      brokerIp: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controllers<T extends User$controllersArgs<ExtArgs> = {}>(args?: Subset<T, User$controllersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findMany'> | Null>;

    accessToken<T extends User$accessTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$accessTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly cid: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly gewog: FieldRef<"User", 'String'>
    readonly dzongkhag: FieldRef<"User", 'String'>
    readonly registeredAt: FieldRef<"User", 'DateTime'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly posLat: FieldRef<"User", 'String'>
    readonly posLong: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'Int'>
    readonly otpExpiresAt: FieldRef<"User", 'DateTime'>
    readonly greenhouseCount: FieldRef<"User", 'Int'>
    readonly irrigationCount: FieldRef<"User", 'Int'>
    readonly brokerId: FieldRef<"User", 'String'>
    readonly brokerPort: FieldRef<"User", 'Int'>
    readonly brokerIp: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.controllers
   */
  export type User$controllersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    where?: ControllerWhereInput
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    cursor?: ControllerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }


  /**
   * User.accessToken
   */
  export type User$accessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Controller
   */

  export type AggregateController = {
    _count: ControllerCountAggregateOutputType | null
    _min: ControllerMinAggregateOutputType | null
    _max: ControllerMaxAggregateOutputType | null
  }

  export type ControllerMinAggregateOutputType = {
    id: string | null
    controllerId: string | null
    type: $Enums.Type | null
    name: string | null
    userId: string | null
  }

  export type ControllerMaxAggregateOutputType = {
    id: string | null
    controllerId: string | null
    type: $Enums.Type | null
    name: string | null
    userId: string | null
  }

  export type ControllerCountAggregateOutputType = {
    id: number
    controllerId: number
    type: number
    name: number
    userId: number
    _all: number
  }


  export type ControllerMinAggregateInputType = {
    id?: true
    controllerId?: true
    type?: true
    name?: true
    userId?: true
  }

  export type ControllerMaxAggregateInputType = {
    id?: true
    controllerId?: true
    type?: true
    name?: true
    userId?: true
  }

  export type ControllerCountAggregateInputType = {
    id?: true
    controllerId?: true
    type?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type ControllerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controller to aggregate.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controllers
    **/
    _count?: true | ControllerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControllerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControllerMaxAggregateInputType
  }

  export type GetControllerAggregateType<T extends ControllerAggregateArgs> = {
        [P in keyof T & keyof AggregateController]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateController[P]>
      : GetScalarType<T[P], AggregateController[P]>
  }




  export type ControllerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControllerWhereInput
    orderBy?: ControllerOrderByWithAggregationInput | ControllerOrderByWithAggregationInput[]
    by: ControllerScalarFieldEnum[] | ControllerScalarFieldEnum
    having?: ControllerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControllerCountAggregateInputType | true
    _min?: ControllerMinAggregateInputType
    _max?: ControllerMaxAggregateInputType
  }

  export type ControllerGroupByOutputType = {
    id: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    _count: ControllerCountAggregateOutputType | null
    _min: ControllerMinAggregateOutputType | null
    _max: ControllerMaxAggregateOutputType | null
  }

  type GetControllerGroupByPayload<T extends ControllerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControllerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControllerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControllerGroupByOutputType[P]>
            : GetScalarType<T[P], ControllerGroupByOutputType[P]>
        }
      >
    >


  export type ControllerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    controllerId?: boolean
    type?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Controller$readingsArgs<ExtArgs>
    waterScheduleRecords?: boolean | Controller$waterScheduleRecordsArgs<ExtArgs>
    soilMoistureThresholdRecords?: boolean | Controller$soilMoistureThresholdRecordsArgs<ExtArgs>
    HumidityThresholdRecord?: boolean | Controller$HumidityThresholdRecordArgs<ExtArgs>
    TemperatureThresholdRecord?: boolean | Controller$TemperatureThresholdRecordArgs<ExtArgs>
    _count?: boolean | ControllerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controller"]>

  export type ControllerSelectScalar = {
    id?: boolean
    controllerId?: boolean
    type?: boolean
    name?: boolean
    userId?: boolean
  }

  export type ControllerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Controller$readingsArgs<ExtArgs>
    waterScheduleRecords?: boolean | Controller$waterScheduleRecordsArgs<ExtArgs>
    soilMoistureThresholdRecords?: boolean | Controller$soilMoistureThresholdRecordsArgs<ExtArgs>
    HumidityThresholdRecord?: boolean | Controller$HumidityThresholdRecordArgs<ExtArgs>
    TemperatureThresholdRecord?: boolean | Controller$TemperatureThresholdRecordArgs<ExtArgs>
    _count?: boolean | ControllerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ControllerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Controller"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      readings: Prisma.$ReadingPayload<ExtArgs>[]
      waterScheduleRecords: Prisma.$WaterScheduleRecordPayload<ExtArgs>[]
      soilMoistureThresholdRecords: Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>[]
      HumidityThresholdRecord: Prisma.$HumidityThresholdRecordPayload<ExtArgs>[]
      TemperatureThresholdRecord: Prisma.$TemperatureThresholdRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      controllerId: string
      type: $Enums.Type
      name: string
      userId: string
    }, ExtArgs["result"]["controller"]>
    composites: {}
  }


  type ControllerGetPayload<S extends boolean | null | undefined | ControllerDefaultArgs> = $Result.GetResult<Prisma.$ControllerPayload, S>

  type ControllerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ControllerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ControllerCountAggregateInputType | true
    }

  export interface ControllerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controller'], meta: { name: 'Controller' } }
    /**
     * Find zero or one Controller that matches the filter.
     * @param {ControllerFindUniqueArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ControllerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerFindUniqueArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controller that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ControllerFindUniqueOrThrowArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ControllerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindFirstArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ControllerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerFindFirstArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindFirstOrThrowArgs} args - Arguments to find a Controller
     * @example
     * // Get one Controller
     * const controller = await prisma.controller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ControllerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controllers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controllers
     * const controllers = await prisma.controller.findMany()
     * 
     * // Get first 10 Controllers
     * const controllers = await prisma.controller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controllerWithIdOnly = await prisma.controller.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ControllerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controller.
     * @param {ControllerCreateArgs} args - Arguments to create a Controller.
     * @example
     * // Create one Controller
     * const Controller = await prisma.controller.create({
     *   data: {
     *     // ... data to create a Controller
     *   }
     * })
     * 
    **/
    create<T extends ControllerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerCreateArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Controllers.
     *     @param {ControllerCreateManyArgs} args - Arguments to create many Controllers.
     *     @example
     *     // Create many Controllers
     *     const controller = await prisma.controller.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ControllerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Controller.
     * @param {ControllerDeleteArgs} args - Arguments to delete one Controller.
     * @example
     * // Delete one Controller
     * const Controller = await prisma.controller.delete({
     *   where: {
     *     // ... filter to delete one Controller
     *   }
     * })
     * 
    **/
    delete<T extends ControllerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerDeleteArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controller.
     * @param {ControllerUpdateArgs} args - Arguments to update one Controller.
     * @example
     * // Update one Controller
     * const controller = await prisma.controller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ControllerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerUpdateArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controllers.
     * @param {ControllerDeleteManyArgs} args - Arguments to filter Controllers to delete.
     * @example
     * // Delete a few Controllers
     * const { count } = await prisma.controller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ControllerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ControllerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controllers
     * const controller = await prisma.controller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ControllerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controller.
     * @param {ControllerUpsertArgs} args - Arguments to update or create a Controller.
     * @example
     * // Update or create a Controller
     * const controller = await prisma.controller.upsert({
     *   create: {
     *     // ... data to create a Controller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controller we want to update
     *   }
     * })
    **/
    upsert<T extends ControllerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ControllerUpsertArgs<ExtArgs>>
    ): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Controllers that matches the filter.
     * @param {ControllerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const controller = await prisma.controller.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ControllerFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Controller.
     * @param {ControllerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const controller = await prisma.controller.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ControllerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Controllers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerCountArgs} args - Arguments to filter Controllers to count.
     * @example
     * // Count the number of Controllers
     * const count = await prisma.controller.count({
     *   where: {
     *     // ... the filter for the Controllers we want to count
     *   }
     * })
    **/
    count<T extends ControllerCountArgs>(
      args?: Subset<T, ControllerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControllerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ControllerAggregateArgs>(args: Subset<T, ControllerAggregateArgs>): Prisma.PrismaPromise<GetControllerAggregateType<T>>

    /**
     * Group by Controller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControllerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ControllerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControllerGroupByArgs['orderBy'] }
        : { orderBy?: ControllerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ControllerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControllerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controller model
   */
  readonly fields: ControllerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControllerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    readings<T extends Controller$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Controller$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findMany'> | Null>;

    waterScheduleRecords<T extends Controller$waterScheduleRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Controller$waterScheduleRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    soilMoistureThresholdRecords<T extends Controller$soilMoistureThresholdRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Controller$soilMoistureThresholdRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    HumidityThresholdRecord<T extends Controller$HumidityThresholdRecordArgs<ExtArgs> = {}>(args?: Subset<T, Controller$HumidityThresholdRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    TemperatureThresholdRecord<T extends Controller$TemperatureThresholdRecordArgs<ExtArgs> = {}>(args?: Subset<T, Controller$TemperatureThresholdRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controller model
   */ 
  interface ControllerFieldRefs {
    readonly id: FieldRef<"Controller", 'String'>
    readonly controllerId: FieldRef<"Controller", 'String'>
    readonly type: FieldRef<"Controller", 'Type'>
    readonly name: FieldRef<"Controller", 'String'>
    readonly userId: FieldRef<"Controller", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Controller findUnique
   */
  export type ControllerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where: ControllerWhereUniqueInput
  }


  /**
   * Controller findUniqueOrThrow
   */
  export type ControllerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where: ControllerWhereUniqueInput
  }


  /**
   * Controller findFirst
   */
  export type ControllerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controllers.
     */
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }


  /**
   * Controller findFirstOrThrow
   */
  export type ControllerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controller to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controllers.
     */
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }


  /**
   * Controller findMany
   */
  export type ControllerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter, which Controllers to fetch.
     */
    where?: ControllerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controllers to fetch.
     */
    orderBy?: ControllerOrderByWithRelationInput | ControllerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controllers.
     */
    cursor?: ControllerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controllers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controllers.
     */
    skip?: number
    distinct?: ControllerScalarFieldEnum | ControllerScalarFieldEnum[]
  }


  /**
   * Controller create
   */
  export type ControllerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The data needed to create a Controller.
     */
    data: XOR<ControllerCreateInput, ControllerUncheckedCreateInput>
  }


  /**
   * Controller createMany
   */
  export type ControllerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Controllers.
     */
    data: ControllerCreateManyInput | ControllerCreateManyInput[]
  }


  /**
   * Controller update
   */
  export type ControllerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The data needed to update a Controller.
     */
    data: XOR<ControllerUpdateInput, ControllerUncheckedUpdateInput>
    /**
     * Choose, which Controller to update.
     */
    where: ControllerWhereUniqueInput
  }


  /**
   * Controller updateMany
   */
  export type ControllerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controllers.
     */
    data: XOR<ControllerUpdateManyMutationInput, ControllerUncheckedUpdateManyInput>
    /**
     * Filter which Controllers to update
     */
    where?: ControllerWhereInput
  }


  /**
   * Controller upsert
   */
  export type ControllerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * The filter to search for the Controller to update in case it exists.
     */
    where: ControllerWhereUniqueInput
    /**
     * In case the Controller found by the `where` argument doesn't exist, create a new Controller with this data.
     */
    create: XOR<ControllerCreateInput, ControllerUncheckedCreateInput>
    /**
     * In case the Controller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControllerUpdateInput, ControllerUncheckedUpdateInput>
  }


  /**
   * Controller delete
   */
  export type ControllerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
    /**
     * Filter which Controller to delete.
     */
    where: ControllerWhereUniqueInput
  }


  /**
   * Controller deleteMany
   */
  export type ControllerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controllers to delete
     */
    where?: ControllerWhereInput
  }


  /**
   * Controller findRaw
   */
  export type ControllerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Controller aggregateRaw
   */
  export type ControllerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Controller.readings
   */
  export type Controller$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }


  /**
   * Controller.waterScheduleRecords
   */
  export type Controller$waterScheduleRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    where?: WaterScheduleRecordWhereInput
    orderBy?: WaterScheduleRecordOrderByWithRelationInput | WaterScheduleRecordOrderByWithRelationInput[]
    cursor?: WaterScheduleRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterScheduleRecordScalarFieldEnum | WaterScheduleRecordScalarFieldEnum[]
  }


  /**
   * Controller.soilMoistureThresholdRecords
   */
  export type Controller$soilMoistureThresholdRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    where?: SoilMoistureThresholdRecordWhereInput
    orderBy?: SoilMoistureThresholdRecordOrderByWithRelationInput | SoilMoistureThresholdRecordOrderByWithRelationInput[]
    cursor?: SoilMoistureThresholdRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoilMoistureThresholdRecordScalarFieldEnum | SoilMoistureThresholdRecordScalarFieldEnum[]
  }


  /**
   * Controller.HumidityThresholdRecord
   */
  export type Controller$HumidityThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    where?: HumidityThresholdRecordWhereInput
    orderBy?: HumidityThresholdRecordOrderByWithRelationInput | HumidityThresholdRecordOrderByWithRelationInput[]
    cursor?: HumidityThresholdRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HumidityThresholdRecordScalarFieldEnum | HumidityThresholdRecordScalarFieldEnum[]
  }


  /**
   * Controller.TemperatureThresholdRecord
   */
  export type Controller$TemperatureThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    where?: TemperatureThresholdRecordWhereInput
    orderBy?: TemperatureThresholdRecordOrderByWithRelationInput | TemperatureThresholdRecordOrderByWithRelationInput[]
    cursor?: TemperatureThresholdRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemperatureThresholdRecordScalarFieldEnum | TemperatureThresholdRecordScalarFieldEnum[]
  }


  /**
   * Controller without action
   */
  export type ControllerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controller
     */
    select?: ControllerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ControllerInclude<ExtArgs> | null
  }



  /**
   * Model Reading
   */

  export type AggregateReading = {
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  export type ReadingAvgAggregateOutputType = {
    humidity: number | null
    temperature: number | null
    soilMoisture: number | null
    Pressure: number | null
  }

  export type ReadingSumAggregateOutputType = {
    humidity: number | null
    temperature: number | null
    soilMoisture: number | null
    Pressure: number | null
  }

  export type ReadingMinAggregateOutputType = {
    id: string | null
    humidity: number | null
    temperature: number | null
    soilMoisture: number | null
    recordedAt: Date | null
    Pressure: number | null
    controllerId: string | null
  }

  export type ReadingMaxAggregateOutputType = {
    id: string | null
    humidity: number | null
    temperature: number | null
    soilMoisture: number | null
    recordedAt: Date | null
    Pressure: number | null
    controllerId: string | null
  }

  export type ReadingCountAggregateOutputType = {
    id: number
    humidity: number
    temperature: number
    soilMoisture: number
    recordedAt: number
    Pressure: number
    controllerId: number
    _all: number
  }


  export type ReadingAvgAggregateInputType = {
    humidity?: true
    temperature?: true
    soilMoisture?: true
    Pressure?: true
  }

  export type ReadingSumAggregateInputType = {
    humidity?: true
    temperature?: true
    soilMoisture?: true
    Pressure?: true
  }

  export type ReadingMinAggregateInputType = {
    id?: true
    humidity?: true
    temperature?: true
    soilMoisture?: true
    recordedAt?: true
    Pressure?: true
    controllerId?: true
  }

  export type ReadingMaxAggregateInputType = {
    id?: true
    humidity?: true
    temperature?: true
    soilMoisture?: true
    recordedAt?: true
    Pressure?: true
    controllerId?: true
  }

  export type ReadingCountAggregateInputType = {
    id?: true
    humidity?: true
    temperature?: true
    soilMoisture?: true
    recordedAt?: true
    Pressure?: true
    controllerId?: true
    _all?: true
  }

  export type ReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reading to aggregate.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Readings
    **/
    _count?: true | ReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingMaxAggregateInputType
  }

  export type GetReadingAggregateType<T extends ReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReading[P]>
      : GetScalarType<T[P], AggregateReading[P]>
  }




  export type ReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithAggregationInput | ReadingOrderByWithAggregationInput[]
    by: ReadingScalarFieldEnum[] | ReadingScalarFieldEnum
    having?: ReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingCountAggregateInputType | true
    _avg?: ReadingAvgAggregateInputType
    _sum?: ReadingSumAggregateInputType
    _min?: ReadingMinAggregateInputType
    _max?: ReadingMaxAggregateInputType
  }

  export type ReadingGroupByOutputType = {
    id: string
    humidity: number | null
    temperature: number | null
    soilMoisture: number | null
    recordedAt: Date
    Pressure: number | null
    controllerId: string
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  type GetReadingGroupByPayload<T extends ReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingGroupByOutputType[P]>
        }
      >
    >


  export type ReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    humidity?: boolean
    temperature?: boolean
    soilMoisture?: boolean
    recordedAt?: boolean
    Pressure?: boolean
    controllerId?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectScalar = {
    id?: boolean
    humidity?: boolean
    temperature?: boolean
    soilMoisture?: boolean
    recordedAt?: boolean
    Pressure?: boolean
    controllerId?: boolean
  }

  export type ReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }


  export type $ReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reading"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      humidity: number | null
      temperature: number | null
      soilMoisture: number | null
      recordedAt: Date
      Pressure: number | null
      controllerId: string
    }, ExtArgs["result"]["reading"]>
    composites: {}
  }


  type ReadingGetPayload<S extends boolean | null | undefined | ReadingDefaultArgs> = $Result.GetResult<Prisma.$ReadingPayload, S>

  type ReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReadingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReadingCountAggregateInputType | true
    }

  export interface ReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reading'], meta: { name: 'Reading' } }
    /**
     * Find zero or one Reading that matches the filter.
     * @param {ReadingFindUniqueArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReadingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingFindUniqueArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reading that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReadingFindUniqueOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReadingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReadingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingFindFirstArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReadingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Readings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Readings
     * const readings = await prisma.reading.findMany()
     * 
     * // Get first 10 Readings
     * const readings = await prisma.reading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingWithIdOnly = await prisma.reading.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReadingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reading.
     * @param {ReadingCreateArgs} args - Arguments to create a Reading.
     * @example
     * // Create one Reading
     * const Reading = await prisma.reading.create({
     *   data: {
     *     // ... data to create a Reading
     *   }
     * })
     * 
    **/
    create<T extends ReadingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingCreateArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Readings.
     *     @param {ReadingCreateManyArgs} args - Arguments to create many Readings.
     *     @example
     *     // Create many Readings
     *     const reading = await prisma.reading.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReadingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reading.
     * @param {ReadingDeleteArgs} args - Arguments to delete one Reading.
     * @example
     * // Delete one Reading
     * const Reading = await prisma.reading.delete({
     *   where: {
     *     // ... filter to delete one Reading
     *   }
     * })
     * 
    **/
    delete<T extends ReadingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingDeleteArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reading.
     * @param {ReadingUpdateArgs} args - Arguments to update one Reading.
     * @example
     * // Update one Reading
     * const reading = await prisma.reading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReadingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingUpdateArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Readings.
     * @param {ReadingDeleteManyArgs} args - Arguments to filter Readings to delete.
     * @example
     * // Delete a few Readings
     * const { count } = await prisma.reading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReadingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReadingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReadingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reading.
     * @param {ReadingUpsertArgs} args - Arguments to update or create a Reading.
     * @example
     * // Update or create a Reading
     * const reading = await prisma.reading.upsert({
     *   create: {
     *     // ... data to create a Reading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reading we want to update
     *   }
     * })
    **/
    upsert<T extends ReadingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReadingUpsertArgs<ExtArgs>>
    ): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Readings that matches the filter.
     * @param {ReadingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reading = await prisma.reading.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ReadingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Reading.
     * @param {ReadingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reading = await prisma.reading.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ReadingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingCountArgs} args - Arguments to filter Readings to count.
     * @example
     * // Count the number of Readings
     * const count = await prisma.reading.count({
     *   where: {
     *     // ... the filter for the Readings we want to count
     *   }
     * })
    **/
    count<T extends ReadingCountArgs>(
      args?: Subset<T, ReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadingAggregateArgs>(args: Subset<T, ReadingAggregateArgs>): Prisma.PrismaPromise<GetReadingAggregateType<T>>

    /**
     * Group by Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingGroupByArgs['orderBy'] }
        : { orderBy?: ReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reading model
   */
  readonly fields: ReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reading model
   */ 
  interface ReadingFieldRefs {
    readonly id: FieldRef<"Reading", 'String'>
    readonly humidity: FieldRef<"Reading", 'Float'>
    readonly temperature: FieldRef<"Reading", 'Float'>
    readonly soilMoisture: FieldRef<"Reading", 'Float'>
    readonly recordedAt: FieldRef<"Reading", 'DateTime'>
    readonly Pressure: FieldRef<"Reading", 'Float'>
    readonly controllerId: FieldRef<"Reading", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Reading findUnique
   */
  export type ReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }


  /**
   * Reading findUniqueOrThrow
   */
  export type ReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }


  /**
   * Reading findFirst
   */
  export type ReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }


  /**
   * Reading findFirstOrThrow
   */
  export type ReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }


  /**
   * Reading findMany
   */
  export type ReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Readings to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }


  /**
   * Reading create
   */
  export type ReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a Reading.
     */
    data: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
  }


  /**
   * Reading createMany
   */
  export type ReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
  }


  /**
   * Reading update
   */
  export type ReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a Reading.
     */
    data: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
    /**
     * Choose, which Reading to update.
     */
    where: ReadingWhereUniqueInput
  }


  /**
   * Reading updateMany
   */
  export type ReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
  }


  /**
   * Reading upsert
   */
  export type ReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the Reading to update in case it exists.
     */
    where: ReadingWhereUniqueInput
    /**
     * In case the Reading found by the `where` argument doesn't exist, create a new Reading with this data.
     */
    create: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
    /**
     * In case the Reading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
  }


  /**
   * Reading delete
   */
  export type ReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter which Reading to delete.
     */
    where: ReadingWhereUniqueInput
  }


  /**
   * Reading deleteMany
   */
  export type ReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Readings to delete
     */
    where?: ReadingWhereInput
  }


  /**
   * Reading findRaw
   */
  export type ReadingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Reading aggregateRaw
   */
  export type ReadingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Reading without action
   */
  export type ReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReadingInclude<ExtArgs> | null
  }



  /**
   * Model WaterScheduleRecord
   */

  export type AggregateWaterScheduleRecord = {
    _count: WaterScheduleRecordCountAggregateOutputType | null
    _avg: WaterScheduleRecordAvgAggregateOutputType | null
    _sum: WaterScheduleRecordSumAggregateOutputType | null
    _min: WaterScheduleRecordMinAggregateOutputType | null
    _max: WaterScheduleRecordMaxAggregateOutputType | null
  }

  export type WaterScheduleRecordAvgAggregateOutputType = {
    repetitionDays: number | null
  }

  export type WaterScheduleRecordSumAggregateOutputType = {
    repetitionDays: number | null
  }

  export type WaterScheduleRecordMinAggregateOutputType = {
    id: string | null
    startTime: string | null
    endTime: string | null
    repetitionDays: number | null
    controllerId: string | null
  }

  export type WaterScheduleRecordMaxAggregateOutputType = {
    id: string | null
    startTime: string | null
    endTime: string | null
    repetitionDays: number | null
    controllerId: string | null
  }

  export type WaterScheduleRecordCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    repetitionDays: number
    controllerId: number
    _all: number
  }


  export type WaterScheduleRecordAvgAggregateInputType = {
    repetitionDays?: true
  }

  export type WaterScheduleRecordSumAggregateInputType = {
    repetitionDays?: true
  }

  export type WaterScheduleRecordMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    repetitionDays?: true
    controllerId?: true
  }

  export type WaterScheduleRecordMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    repetitionDays?: true
    controllerId?: true
  }

  export type WaterScheduleRecordCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    repetitionDays?: true
    controllerId?: true
    _all?: true
  }

  export type WaterScheduleRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterScheduleRecord to aggregate.
     */
    where?: WaterScheduleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterScheduleRecords to fetch.
     */
    orderBy?: WaterScheduleRecordOrderByWithRelationInput | WaterScheduleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterScheduleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterScheduleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterScheduleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterScheduleRecords
    **/
    _count?: true | WaterScheduleRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterScheduleRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterScheduleRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterScheduleRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterScheduleRecordMaxAggregateInputType
  }

  export type GetWaterScheduleRecordAggregateType<T extends WaterScheduleRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterScheduleRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterScheduleRecord[P]>
      : GetScalarType<T[P], AggregateWaterScheduleRecord[P]>
  }




  export type WaterScheduleRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterScheduleRecordWhereInput
    orderBy?: WaterScheduleRecordOrderByWithAggregationInput | WaterScheduleRecordOrderByWithAggregationInput[]
    by: WaterScheduleRecordScalarFieldEnum[] | WaterScheduleRecordScalarFieldEnum
    having?: WaterScheduleRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterScheduleRecordCountAggregateInputType | true
    _avg?: WaterScheduleRecordAvgAggregateInputType
    _sum?: WaterScheduleRecordSumAggregateInputType
    _min?: WaterScheduleRecordMinAggregateInputType
    _max?: WaterScheduleRecordMaxAggregateInputType
  }

  export type WaterScheduleRecordGroupByOutputType = {
    id: string
    startTime: string
    endTime: string
    repetitionDays: number
    controllerId: string
    _count: WaterScheduleRecordCountAggregateOutputType | null
    _avg: WaterScheduleRecordAvgAggregateOutputType | null
    _sum: WaterScheduleRecordSumAggregateOutputType | null
    _min: WaterScheduleRecordMinAggregateOutputType | null
    _max: WaterScheduleRecordMaxAggregateOutputType | null
  }

  type GetWaterScheduleRecordGroupByPayload<T extends WaterScheduleRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterScheduleRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterScheduleRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterScheduleRecordGroupByOutputType[P]>
            : GetScalarType<T[P], WaterScheduleRecordGroupByOutputType[P]>
        }
      >
    >


  export type WaterScheduleRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    repetitionDays?: boolean
    controllerId?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterScheduleRecord"]>

  export type WaterScheduleRecordSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    repetitionDays?: boolean
    controllerId?: boolean
  }

  export type WaterScheduleRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }


  export type $WaterScheduleRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterScheduleRecord"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: string
      endTime: string
      repetitionDays: number
      controllerId: string
    }, ExtArgs["result"]["waterScheduleRecord"]>
    composites: {}
  }


  type WaterScheduleRecordGetPayload<S extends boolean | null | undefined | WaterScheduleRecordDefaultArgs> = $Result.GetResult<Prisma.$WaterScheduleRecordPayload, S>

  type WaterScheduleRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaterScheduleRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaterScheduleRecordCountAggregateInputType | true
    }

  export interface WaterScheduleRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterScheduleRecord'], meta: { name: 'WaterScheduleRecord' } }
    /**
     * Find zero or one WaterScheduleRecord that matches the filter.
     * @param {WaterScheduleRecordFindUniqueArgs} args - Arguments to find a WaterScheduleRecord
     * @example
     * // Get one WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WaterScheduleRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WaterScheduleRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WaterScheduleRecordFindUniqueOrThrowArgs} args - Arguments to find a WaterScheduleRecord
     * @example
     * // Get one WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WaterScheduleRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WaterScheduleRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordFindFirstArgs} args - Arguments to find a WaterScheduleRecord
     * @example
     * // Get one WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WaterScheduleRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordFindFirstArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WaterScheduleRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordFindFirstOrThrowArgs} args - Arguments to find a WaterScheduleRecord
     * @example
     * // Get one WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WaterScheduleRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WaterScheduleRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterScheduleRecords
     * const waterScheduleRecords = await prisma.waterScheduleRecord.findMany()
     * 
     * // Get first 10 WaterScheduleRecords
     * const waterScheduleRecords = await prisma.waterScheduleRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterScheduleRecordWithIdOnly = await prisma.waterScheduleRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WaterScheduleRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WaterScheduleRecord.
     * @param {WaterScheduleRecordCreateArgs} args - Arguments to create a WaterScheduleRecord.
     * @example
     * // Create one WaterScheduleRecord
     * const WaterScheduleRecord = await prisma.waterScheduleRecord.create({
     *   data: {
     *     // ... data to create a WaterScheduleRecord
     *   }
     * })
     * 
    **/
    create<T extends WaterScheduleRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordCreateArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WaterScheduleRecords.
     *     @param {WaterScheduleRecordCreateManyArgs} args - Arguments to create many WaterScheduleRecords.
     *     @example
     *     // Create many WaterScheduleRecords
     *     const waterScheduleRecord = await prisma.waterScheduleRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WaterScheduleRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WaterScheduleRecord.
     * @param {WaterScheduleRecordDeleteArgs} args - Arguments to delete one WaterScheduleRecord.
     * @example
     * // Delete one WaterScheduleRecord
     * const WaterScheduleRecord = await prisma.waterScheduleRecord.delete({
     *   where: {
     *     // ... filter to delete one WaterScheduleRecord
     *   }
     * })
     * 
    **/
    delete<T extends WaterScheduleRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordDeleteArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WaterScheduleRecord.
     * @param {WaterScheduleRecordUpdateArgs} args - Arguments to update one WaterScheduleRecord.
     * @example
     * // Update one WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WaterScheduleRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordUpdateArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WaterScheduleRecords.
     * @param {WaterScheduleRecordDeleteManyArgs} args - Arguments to filter WaterScheduleRecords to delete.
     * @example
     * // Delete a few WaterScheduleRecords
     * const { count } = await prisma.waterScheduleRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WaterScheduleRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaterScheduleRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterScheduleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterScheduleRecords
     * const waterScheduleRecord = await prisma.waterScheduleRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WaterScheduleRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaterScheduleRecord.
     * @param {WaterScheduleRecordUpsertArgs} args - Arguments to update or create a WaterScheduleRecord.
     * @example
     * // Update or create a WaterScheduleRecord
     * const waterScheduleRecord = await prisma.waterScheduleRecord.upsert({
     *   create: {
     *     // ... data to create a WaterScheduleRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterScheduleRecord we want to update
     *   }
     * })
    **/
    upsert<T extends WaterScheduleRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WaterScheduleRecordUpsertArgs<ExtArgs>>
    ): Prisma__WaterScheduleRecordClient<$Result.GetResult<Prisma.$WaterScheduleRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more WaterScheduleRecords that matches the filter.
     * @param {WaterScheduleRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const waterScheduleRecord = await prisma.waterScheduleRecord.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WaterScheduleRecordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WaterScheduleRecord.
     * @param {WaterScheduleRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const waterScheduleRecord = await prisma.waterScheduleRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WaterScheduleRecordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of WaterScheduleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordCountArgs} args - Arguments to filter WaterScheduleRecords to count.
     * @example
     * // Count the number of WaterScheduleRecords
     * const count = await prisma.waterScheduleRecord.count({
     *   where: {
     *     // ... the filter for the WaterScheduleRecords we want to count
     *   }
     * })
    **/
    count<T extends WaterScheduleRecordCountArgs>(
      args?: Subset<T, WaterScheduleRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterScheduleRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterScheduleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaterScheduleRecordAggregateArgs>(args: Subset<T, WaterScheduleRecordAggregateArgs>): Prisma.PrismaPromise<GetWaterScheduleRecordAggregateType<T>>

    /**
     * Group by WaterScheduleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterScheduleRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaterScheduleRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterScheduleRecordGroupByArgs['orderBy'] }
        : { orderBy?: WaterScheduleRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaterScheduleRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterScheduleRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterScheduleRecord model
   */
  readonly fields: WaterScheduleRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterScheduleRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterScheduleRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WaterScheduleRecord model
   */ 
  interface WaterScheduleRecordFieldRefs {
    readonly id: FieldRef<"WaterScheduleRecord", 'String'>
    readonly startTime: FieldRef<"WaterScheduleRecord", 'String'>
    readonly endTime: FieldRef<"WaterScheduleRecord", 'String'>
    readonly repetitionDays: FieldRef<"WaterScheduleRecord", 'Int'>
    readonly controllerId: FieldRef<"WaterScheduleRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WaterScheduleRecord findUnique
   */
  export type WaterScheduleRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter, which WaterScheduleRecord to fetch.
     */
    where: WaterScheduleRecordWhereUniqueInput
  }


  /**
   * WaterScheduleRecord findUniqueOrThrow
   */
  export type WaterScheduleRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter, which WaterScheduleRecord to fetch.
     */
    where: WaterScheduleRecordWhereUniqueInput
  }


  /**
   * WaterScheduleRecord findFirst
   */
  export type WaterScheduleRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter, which WaterScheduleRecord to fetch.
     */
    where?: WaterScheduleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterScheduleRecords to fetch.
     */
    orderBy?: WaterScheduleRecordOrderByWithRelationInput | WaterScheduleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterScheduleRecords.
     */
    cursor?: WaterScheduleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterScheduleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterScheduleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterScheduleRecords.
     */
    distinct?: WaterScheduleRecordScalarFieldEnum | WaterScheduleRecordScalarFieldEnum[]
  }


  /**
   * WaterScheduleRecord findFirstOrThrow
   */
  export type WaterScheduleRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter, which WaterScheduleRecord to fetch.
     */
    where?: WaterScheduleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterScheduleRecords to fetch.
     */
    orderBy?: WaterScheduleRecordOrderByWithRelationInput | WaterScheduleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterScheduleRecords.
     */
    cursor?: WaterScheduleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterScheduleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterScheduleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterScheduleRecords.
     */
    distinct?: WaterScheduleRecordScalarFieldEnum | WaterScheduleRecordScalarFieldEnum[]
  }


  /**
   * WaterScheduleRecord findMany
   */
  export type WaterScheduleRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter, which WaterScheduleRecords to fetch.
     */
    where?: WaterScheduleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterScheduleRecords to fetch.
     */
    orderBy?: WaterScheduleRecordOrderByWithRelationInput | WaterScheduleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterScheduleRecords.
     */
    cursor?: WaterScheduleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterScheduleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterScheduleRecords.
     */
    skip?: number
    distinct?: WaterScheduleRecordScalarFieldEnum | WaterScheduleRecordScalarFieldEnum[]
  }


  /**
   * WaterScheduleRecord create
   */
  export type WaterScheduleRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterScheduleRecord.
     */
    data: XOR<WaterScheduleRecordCreateInput, WaterScheduleRecordUncheckedCreateInput>
  }


  /**
   * WaterScheduleRecord createMany
   */
  export type WaterScheduleRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterScheduleRecords.
     */
    data: WaterScheduleRecordCreateManyInput | WaterScheduleRecordCreateManyInput[]
  }


  /**
   * WaterScheduleRecord update
   */
  export type WaterScheduleRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterScheduleRecord.
     */
    data: XOR<WaterScheduleRecordUpdateInput, WaterScheduleRecordUncheckedUpdateInput>
    /**
     * Choose, which WaterScheduleRecord to update.
     */
    where: WaterScheduleRecordWhereUniqueInput
  }


  /**
   * WaterScheduleRecord updateMany
   */
  export type WaterScheduleRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterScheduleRecords.
     */
    data: XOR<WaterScheduleRecordUpdateManyMutationInput, WaterScheduleRecordUncheckedUpdateManyInput>
    /**
     * Filter which WaterScheduleRecords to update
     */
    where?: WaterScheduleRecordWhereInput
  }


  /**
   * WaterScheduleRecord upsert
   */
  export type WaterScheduleRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterScheduleRecord to update in case it exists.
     */
    where: WaterScheduleRecordWhereUniqueInput
    /**
     * In case the WaterScheduleRecord found by the `where` argument doesn't exist, create a new WaterScheduleRecord with this data.
     */
    create: XOR<WaterScheduleRecordCreateInput, WaterScheduleRecordUncheckedCreateInput>
    /**
     * In case the WaterScheduleRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterScheduleRecordUpdateInput, WaterScheduleRecordUncheckedUpdateInput>
  }


  /**
   * WaterScheduleRecord delete
   */
  export type WaterScheduleRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
    /**
     * Filter which WaterScheduleRecord to delete.
     */
    where: WaterScheduleRecordWhereUniqueInput
  }


  /**
   * WaterScheduleRecord deleteMany
   */
  export type WaterScheduleRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterScheduleRecords to delete
     */
    where?: WaterScheduleRecordWhereInput
  }


  /**
   * WaterScheduleRecord findRaw
   */
  export type WaterScheduleRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WaterScheduleRecord aggregateRaw
   */
  export type WaterScheduleRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WaterScheduleRecord without action
   */
  export type WaterScheduleRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterScheduleRecord
     */
    select?: WaterScheduleRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaterScheduleRecordInclude<ExtArgs> | null
  }



  /**
   * Model SoilMoistureThresholdRecord
   */

  export type AggregateSoilMoistureThresholdRecord = {
    _count: SoilMoistureThresholdRecordCountAggregateOutputType | null
    _avg: SoilMoistureThresholdRecordAvgAggregateOutputType | null
    _sum: SoilMoistureThresholdRecordSumAggregateOutputType | null
    _min: SoilMoistureThresholdRecordMinAggregateOutputType | null
    _max: SoilMoistureThresholdRecordMaxAggregateOutputType | null
  }

  export type SoilMoistureThresholdRecordAvgAggregateOutputType = {
    value: number | null
  }

  export type SoilMoistureThresholdRecordSumAggregateOutputType = {
    value: number | null
  }

  export type SoilMoistureThresholdRecordMinAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type SoilMoistureThresholdRecordMaxAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type SoilMoistureThresholdRecordCountAggregateOutputType = {
    id: number
    recordedAt: number
    value: number
    controllerId: number
    _all: number
  }


  export type SoilMoistureThresholdRecordAvgAggregateInputType = {
    value?: true
  }

  export type SoilMoistureThresholdRecordSumAggregateInputType = {
    value?: true
  }

  export type SoilMoistureThresholdRecordMinAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type SoilMoistureThresholdRecordMaxAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type SoilMoistureThresholdRecordCountAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
    _all?: true
  }

  export type SoilMoistureThresholdRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoilMoistureThresholdRecord to aggregate.
     */
    where?: SoilMoistureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoilMoistureThresholdRecords to fetch.
     */
    orderBy?: SoilMoistureThresholdRecordOrderByWithRelationInput | SoilMoistureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoilMoistureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoilMoistureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoilMoistureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoilMoistureThresholdRecords
    **/
    _count?: true | SoilMoistureThresholdRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoilMoistureThresholdRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoilMoistureThresholdRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoilMoistureThresholdRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoilMoistureThresholdRecordMaxAggregateInputType
  }

  export type GetSoilMoistureThresholdRecordAggregateType<T extends SoilMoistureThresholdRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSoilMoistureThresholdRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoilMoistureThresholdRecord[P]>
      : GetScalarType<T[P], AggregateSoilMoistureThresholdRecord[P]>
  }




  export type SoilMoistureThresholdRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoilMoistureThresholdRecordWhereInput
    orderBy?: SoilMoistureThresholdRecordOrderByWithAggregationInput | SoilMoistureThresholdRecordOrderByWithAggregationInput[]
    by: SoilMoistureThresholdRecordScalarFieldEnum[] | SoilMoistureThresholdRecordScalarFieldEnum
    having?: SoilMoistureThresholdRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoilMoistureThresholdRecordCountAggregateInputType | true
    _avg?: SoilMoistureThresholdRecordAvgAggregateInputType
    _sum?: SoilMoistureThresholdRecordSumAggregateInputType
    _min?: SoilMoistureThresholdRecordMinAggregateInputType
    _max?: SoilMoistureThresholdRecordMaxAggregateInputType
  }

  export type SoilMoistureThresholdRecordGroupByOutputType = {
    id: string
    recordedAt: Date
    value: number
    controllerId: string
    _count: SoilMoistureThresholdRecordCountAggregateOutputType | null
    _avg: SoilMoistureThresholdRecordAvgAggregateOutputType | null
    _sum: SoilMoistureThresholdRecordSumAggregateOutputType | null
    _min: SoilMoistureThresholdRecordMinAggregateOutputType | null
    _max: SoilMoistureThresholdRecordMaxAggregateOutputType | null
  }

  type GetSoilMoistureThresholdRecordGroupByPayload<T extends SoilMoistureThresholdRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoilMoistureThresholdRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoilMoistureThresholdRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoilMoistureThresholdRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SoilMoistureThresholdRecordGroupByOutputType[P]>
        }
      >
    >


  export type SoilMoistureThresholdRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soilMoistureThresholdRecord"]>

  export type SoilMoistureThresholdRecordSelectScalar = {
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
  }

  export type SoilMoistureThresholdRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }


  export type $SoilMoistureThresholdRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoilMoistureThresholdRecord"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recordedAt: Date
      value: number
      controllerId: string
    }, ExtArgs["result"]["soilMoistureThresholdRecord"]>
    composites: {}
  }


  type SoilMoistureThresholdRecordGetPayload<S extends boolean | null | undefined | SoilMoistureThresholdRecordDefaultArgs> = $Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload, S>

  type SoilMoistureThresholdRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SoilMoistureThresholdRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SoilMoistureThresholdRecordCountAggregateInputType | true
    }

  export interface SoilMoistureThresholdRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoilMoistureThresholdRecord'], meta: { name: 'SoilMoistureThresholdRecord' } }
    /**
     * Find zero or one SoilMoistureThresholdRecord that matches the filter.
     * @param {SoilMoistureThresholdRecordFindUniqueArgs} args - Arguments to find a SoilMoistureThresholdRecord
     * @example
     * // Get one SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SoilMoistureThresholdRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SoilMoistureThresholdRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SoilMoistureThresholdRecordFindUniqueOrThrowArgs} args - Arguments to find a SoilMoistureThresholdRecord
     * @example
     * // Get one SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SoilMoistureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SoilMoistureThresholdRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordFindFirstArgs} args - Arguments to find a SoilMoistureThresholdRecord
     * @example
     * // Get one SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SoilMoistureThresholdRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordFindFirstArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SoilMoistureThresholdRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordFindFirstOrThrowArgs} args - Arguments to find a SoilMoistureThresholdRecord
     * @example
     * // Get one SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SoilMoistureThresholdRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SoilMoistureThresholdRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoilMoistureThresholdRecords
     * const soilMoistureThresholdRecords = await prisma.soilMoistureThresholdRecord.findMany()
     * 
     * // Get first 10 SoilMoistureThresholdRecords
     * const soilMoistureThresholdRecords = await prisma.soilMoistureThresholdRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soilMoistureThresholdRecordWithIdOnly = await prisma.soilMoistureThresholdRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SoilMoistureThresholdRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SoilMoistureThresholdRecord.
     * @param {SoilMoistureThresholdRecordCreateArgs} args - Arguments to create a SoilMoistureThresholdRecord.
     * @example
     * // Create one SoilMoistureThresholdRecord
     * const SoilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.create({
     *   data: {
     *     // ... data to create a SoilMoistureThresholdRecord
     *   }
     * })
     * 
    **/
    create<T extends SoilMoistureThresholdRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordCreateArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SoilMoistureThresholdRecords.
     *     @param {SoilMoistureThresholdRecordCreateManyArgs} args - Arguments to create many SoilMoistureThresholdRecords.
     *     @example
     *     // Create many SoilMoistureThresholdRecords
     *     const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SoilMoistureThresholdRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SoilMoistureThresholdRecord.
     * @param {SoilMoistureThresholdRecordDeleteArgs} args - Arguments to delete one SoilMoistureThresholdRecord.
     * @example
     * // Delete one SoilMoistureThresholdRecord
     * const SoilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.delete({
     *   where: {
     *     // ... filter to delete one SoilMoistureThresholdRecord
     *   }
     * })
     * 
    **/
    delete<T extends SoilMoistureThresholdRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordDeleteArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SoilMoistureThresholdRecord.
     * @param {SoilMoistureThresholdRecordUpdateArgs} args - Arguments to update one SoilMoistureThresholdRecord.
     * @example
     * // Update one SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SoilMoistureThresholdRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordUpdateArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SoilMoistureThresholdRecords.
     * @param {SoilMoistureThresholdRecordDeleteManyArgs} args - Arguments to filter SoilMoistureThresholdRecords to delete.
     * @example
     * // Delete a few SoilMoistureThresholdRecords
     * const { count } = await prisma.soilMoistureThresholdRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SoilMoistureThresholdRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoilMoistureThresholdRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoilMoistureThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoilMoistureThresholdRecords
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SoilMoistureThresholdRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SoilMoistureThresholdRecord.
     * @param {SoilMoistureThresholdRecordUpsertArgs} args - Arguments to update or create a SoilMoistureThresholdRecord.
     * @example
     * // Update or create a SoilMoistureThresholdRecord
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.upsert({
     *   create: {
     *     // ... data to create a SoilMoistureThresholdRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoilMoistureThresholdRecord we want to update
     *   }
     * })
    **/
    upsert<T extends SoilMoistureThresholdRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SoilMoistureThresholdRecordUpsertArgs<ExtArgs>>
    ): Prisma__SoilMoistureThresholdRecordClient<$Result.GetResult<Prisma.$SoilMoistureThresholdRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more SoilMoistureThresholdRecords that matches the filter.
     * @param {SoilMoistureThresholdRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SoilMoistureThresholdRecordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SoilMoistureThresholdRecord.
     * @param {SoilMoistureThresholdRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const soilMoistureThresholdRecord = await prisma.soilMoistureThresholdRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SoilMoistureThresholdRecordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of SoilMoistureThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordCountArgs} args - Arguments to filter SoilMoistureThresholdRecords to count.
     * @example
     * // Count the number of SoilMoistureThresholdRecords
     * const count = await prisma.soilMoistureThresholdRecord.count({
     *   where: {
     *     // ... the filter for the SoilMoistureThresholdRecords we want to count
     *   }
     * })
    **/
    count<T extends SoilMoistureThresholdRecordCountArgs>(
      args?: Subset<T, SoilMoistureThresholdRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoilMoistureThresholdRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoilMoistureThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoilMoistureThresholdRecordAggregateArgs>(args: Subset<T, SoilMoistureThresholdRecordAggregateArgs>): Prisma.PrismaPromise<GetSoilMoistureThresholdRecordAggregateType<T>>

    /**
     * Group by SoilMoistureThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilMoistureThresholdRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoilMoistureThresholdRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoilMoistureThresholdRecordGroupByArgs['orderBy'] }
        : { orderBy?: SoilMoistureThresholdRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoilMoistureThresholdRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoilMoistureThresholdRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoilMoistureThresholdRecord model
   */
  readonly fields: SoilMoistureThresholdRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoilMoistureThresholdRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoilMoistureThresholdRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SoilMoistureThresholdRecord model
   */ 
  interface SoilMoistureThresholdRecordFieldRefs {
    readonly id: FieldRef<"SoilMoistureThresholdRecord", 'String'>
    readonly recordedAt: FieldRef<"SoilMoistureThresholdRecord", 'DateTime'>
    readonly value: FieldRef<"SoilMoistureThresholdRecord", 'Float'>
    readonly controllerId: FieldRef<"SoilMoistureThresholdRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SoilMoistureThresholdRecord findUnique
   */
  export type SoilMoistureThresholdRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which SoilMoistureThresholdRecord to fetch.
     */
    where: SoilMoistureThresholdRecordWhereUniqueInput
  }


  /**
   * SoilMoistureThresholdRecord findUniqueOrThrow
   */
  export type SoilMoistureThresholdRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which SoilMoistureThresholdRecord to fetch.
     */
    where: SoilMoistureThresholdRecordWhereUniqueInput
  }


  /**
   * SoilMoistureThresholdRecord findFirst
   */
  export type SoilMoistureThresholdRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which SoilMoistureThresholdRecord to fetch.
     */
    where?: SoilMoistureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoilMoistureThresholdRecords to fetch.
     */
    orderBy?: SoilMoistureThresholdRecordOrderByWithRelationInput | SoilMoistureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoilMoistureThresholdRecords.
     */
    cursor?: SoilMoistureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoilMoistureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoilMoistureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoilMoistureThresholdRecords.
     */
    distinct?: SoilMoistureThresholdRecordScalarFieldEnum | SoilMoistureThresholdRecordScalarFieldEnum[]
  }


  /**
   * SoilMoistureThresholdRecord findFirstOrThrow
   */
  export type SoilMoistureThresholdRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which SoilMoistureThresholdRecord to fetch.
     */
    where?: SoilMoistureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoilMoistureThresholdRecords to fetch.
     */
    orderBy?: SoilMoistureThresholdRecordOrderByWithRelationInput | SoilMoistureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoilMoistureThresholdRecords.
     */
    cursor?: SoilMoistureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoilMoistureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoilMoistureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoilMoistureThresholdRecords.
     */
    distinct?: SoilMoistureThresholdRecordScalarFieldEnum | SoilMoistureThresholdRecordScalarFieldEnum[]
  }


  /**
   * SoilMoistureThresholdRecord findMany
   */
  export type SoilMoistureThresholdRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which SoilMoistureThresholdRecords to fetch.
     */
    where?: SoilMoistureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoilMoistureThresholdRecords to fetch.
     */
    orderBy?: SoilMoistureThresholdRecordOrderByWithRelationInput | SoilMoistureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoilMoistureThresholdRecords.
     */
    cursor?: SoilMoistureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoilMoistureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoilMoistureThresholdRecords.
     */
    skip?: number
    distinct?: SoilMoistureThresholdRecordScalarFieldEnum | SoilMoistureThresholdRecordScalarFieldEnum[]
  }


  /**
   * SoilMoistureThresholdRecord create
   */
  export type SoilMoistureThresholdRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SoilMoistureThresholdRecord.
     */
    data: XOR<SoilMoistureThresholdRecordCreateInput, SoilMoistureThresholdRecordUncheckedCreateInput>
  }


  /**
   * SoilMoistureThresholdRecord createMany
   */
  export type SoilMoistureThresholdRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoilMoistureThresholdRecords.
     */
    data: SoilMoistureThresholdRecordCreateManyInput | SoilMoistureThresholdRecordCreateManyInput[]
  }


  /**
   * SoilMoistureThresholdRecord update
   */
  export type SoilMoistureThresholdRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SoilMoistureThresholdRecord.
     */
    data: XOR<SoilMoistureThresholdRecordUpdateInput, SoilMoistureThresholdRecordUncheckedUpdateInput>
    /**
     * Choose, which SoilMoistureThresholdRecord to update.
     */
    where: SoilMoistureThresholdRecordWhereUniqueInput
  }


  /**
   * SoilMoistureThresholdRecord updateMany
   */
  export type SoilMoistureThresholdRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoilMoistureThresholdRecords.
     */
    data: XOR<SoilMoistureThresholdRecordUpdateManyMutationInput, SoilMoistureThresholdRecordUncheckedUpdateManyInput>
    /**
     * Filter which SoilMoistureThresholdRecords to update
     */
    where?: SoilMoistureThresholdRecordWhereInput
  }


  /**
   * SoilMoistureThresholdRecord upsert
   */
  export type SoilMoistureThresholdRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SoilMoistureThresholdRecord to update in case it exists.
     */
    where: SoilMoistureThresholdRecordWhereUniqueInput
    /**
     * In case the SoilMoistureThresholdRecord found by the `where` argument doesn't exist, create a new SoilMoistureThresholdRecord with this data.
     */
    create: XOR<SoilMoistureThresholdRecordCreateInput, SoilMoistureThresholdRecordUncheckedCreateInput>
    /**
     * In case the SoilMoistureThresholdRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoilMoistureThresholdRecordUpdateInput, SoilMoistureThresholdRecordUncheckedUpdateInput>
  }


  /**
   * SoilMoistureThresholdRecord delete
   */
  export type SoilMoistureThresholdRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter which SoilMoistureThresholdRecord to delete.
     */
    where: SoilMoistureThresholdRecordWhereUniqueInput
  }


  /**
   * SoilMoistureThresholdRecord deleteMany
   */
  export type SoilMoistureThresholdRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoilMoistureThresholdRecords to delete
     */
    where?: SoilMoistureThresholdRecordWhereInput
  }


  /**
   * SoilMoistureThresholdRecord findRaw
   */
  export type SoilMoistureThresholdRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SoilMoistureThresholdRecord aggregateRaw
   */
  export type SoilMoistureThresholdRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SoilMoistureThresholdRecord without action
   */
  export type SoilMoistureThresholdRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilMoistureThresholdRecord
     */
    select?: SoilMoistureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoilMoistureThresholdRecordInclude<ExtArgs> | null
  }



  /**
   * Model HumidityThresholdRecord
   */

  export type AggregateHumidityThresholdRecord = {
    _count: HumidityThresholdRecordCountAggregateOutputType | null
    _avg: HumidityThresholdRecordAvgAggregateOutputType | null
    _sum: HumidityThresholdRecordSumAggregateOutputType | null
    _min: HumidityThresholdRecordMinAggregateOutputType | null
    _max: HumidityThresholdRecordMaxAggregateOutputType | null
  }

  export type HumidityThresholdRecordAvgAggregateOutputType = {
    value: number | null
  }

  export type HumidityThresholdRecordSumAggregateOutputType = {
    value: number | null
  }

  export type HumidityThresholdRecordMinAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type HumidityThresholdRecordMaxAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type HumidityThresholdRecordCountAggregateOutputType = {
    id: number
    recordedAt: number
    value: number
    controllerId: number
    _all: number
  }


  export type HumidityThresholdRecordAvgAggregateInputType = {
    value?: true
  }

  export type HumidityThresholdRecordSumAggregateInputType = {
    value?: true
  }

  export type HumidityThresholdRecordMinAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type HumidityThresholdRecordMaxAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type HumidityThresholdRecordCountAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
    _all?: true
  }

  export type HumidityThresholdRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumidityThresholdRecord to aggregate.
     */
    where?: HumidityThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumidityThresholdRecords to fetch.
     */
    orderBy?: HumidityThresholdRecordOrderByWithRelationInput | HumidityThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HumidityThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumidityThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumidityThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HumidityThresholdRecords
    **/
    _count?: true | HumidityThresholdRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HumidityThresholdRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HumidityThresholdRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumidityThresholdRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumidityThresholdRecordMaxAggregateInputType
  }

  export type GetHumidityThresholdRecordAggregateType<T extends HumidityThresholdRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHumidityThresholdRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumidityThresholdRecord[P]>
      : GetScalarType<T[P], AggregateHumidityThresholdRecord[P]>
  }




  export type HumidityThresholdRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumidityThresholdRecordWhereInput
    orderBy?: HumidityThresholdRecordOrderByWithAggregationInput | HumidityThresholdRecordOrderByWithAggregationInput[]
    by: HumidityThresholdRecordScalarFieldEnum[] | HumidityThresholdRecordScalarFieldEnum
    having?: HumidityThresholdRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumidityThresholdRecordCountAggregateInputType | true
    _avg?: HumidityThresholdRecordAvgAggregateInputType
    _sum?: HumidityThresholdRecordSumAggregateInputType
    _min?: HumidityThresholdRecordMinAggregateInputType
    _max?: HumidityThresholdRecordMaxAggregateInputType
  }

  export type HumidityThresholdRecordGroupByOutputType = {
    id: string
    recordedAt: Date
    value: number
    controllerId: string
    _count: HumidityThresholdRecordCountAggregateOutputType | null
    _avg: HumidityThresholdRecordAvgAggregateOutputType | null
    _sum: HumidityThresholdRecordSumAggregateOutputType | null
    _min: HumidityThresholdRecordMinAggregateOutputType | null
    _max: HumidityThresholdRecordMaxAggregateOutputType | null
  }

  type GetHumidityThresholdRecordGroupByPayload<T extends HumidityThresholdRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumidityThresholdRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumidityThresholdRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumidityThresholdRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HumidityThresholdRecordGroupByOutputType[P]>
        }
      >
    >


  export type HumidityThresholdRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humidityThresholdRecord"]>

  export type HumidityThresholdRecordSelectScalar = {
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
  }

  export type HumidityThresholdRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }


  export type $HumidityThresholdRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HumidityThresholdRecord"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recordedAt: Date
      value: number
      controllerId: string
    }, ExtArgs["result"]["humidityThresholdRecord"]>
    composites: {}
  }


  type HumidityThresholdRecordGetPayload<S extends boolean | null | undefined | HumidityThresholdRecordDefaultArgs> = $Result.GetResult<Prisma.$HumidityThresholdRecordPayload, S>

  type HumidityThresholdRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HumidityThresholdRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HumidityThresholdRecordCountAggregateInputType | true
    }

  export interface HumidityThresholdRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HumidityThresholdRecord'], meta: { name: 'HumidityThresholdRecord' } }
    /**
     * Find zero or one HumidityThresholdRecord that matches the filter.
     * @param {HumidityThresholdRecordFindUniqueArgs} args - Arguments to find a HumidityThresholdRecord
     * @example
     * // Get one HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HumidityThresholdRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HumidityThresholdRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HumidityThresholdRecordFindUniqueOrThrowArgs} args - Arguments to find a HumidityThresholdRecord
     * @example
     * // Get one HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HumidityThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HumidityThresholdRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordFindFirstArgs} args - Arguments to find a HumidityThresholdRecord
     * @example
     * // Get one HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HumidityThresholdRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordFindFirstArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HumidityThresholdRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordFindFirstOrThrowArgs} args - Arguments to find a HumidityThresholdRecord
     * @example
     * // Get one HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HumidityThresholdRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HumidityThresholdRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HumidityThresholdRecords
     * const humidityThresholdRecords = await prisma.humidityThresholdRecord.findMany()
     * 
     * // Get first 10 HumidityThresholdRecords
     * const humidityThresholdRecords = await prisma.humidityThresholdRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const humidityThresholdRecordWithIdOnly = await prisma.humidityThresholdRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HumidityThresholdRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HumidityThresholdRecord.
     * @param {HumidityThresholdRecordCreateArgs} args - Arguments to create a HumidityThresholdRecord.
     * @example
     * // Create one HumidityThresholdRecord
     * const HumidityThresholdRecord = await prisma.humidityThresholdRecord.create({
     *   data: {
     *     // ... data to create a HumidityThresholdRecord
     *   }
     * })
     * 
    **/
    create<T extends HumidityThresholdRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordCreateArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HumidityThresholdRecords.
     *     @param {HumidityThresholdRecordCreateManyArgs} args - Arguments to create many HumidityThresholdRecords.
     *     @example
     *     // Create many HumidityThresholdRecords
     *     const humidityThresholdRecord = await prisma.humidityThresholdRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HumidityThresholdRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HumidityThresholdRecord.
     * @param {HumidityThresholdRecordDeleteArgs} args - Arguments to delete one HumidityThresholdRecord.
     * @example
     * // Delete one HumidityThresholdRecord
     * const HumidityThresholdRecord = await prisma.humidityThresholdRecord.delete({
     *   where: {
     *     // ... filter to delete one HumidityThresholdRecord
     *   }
     * })
     * 
    **/
    delete<T extends HumidityThresholdRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordDeleteArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HumidityThresholdRecord.
     * @param {HumidityThresholdRecordUpdateArgs} args - Arguments to update one HumidityThresholdRecord.
     * @example
     * // Update one HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HumidityThresholdRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordUpdateArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HumidityThresholdRecords.
     * @param {HumidityThresholdRecordDeleteManyArgs} args - Arguments to filter HumidityThresholdRecords to delete.
     * @example
     * // Delete a few HumidityThresholdRecords
     * const { count } = await prisma.humidityThresholdRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HumidityThresholdRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumidityThresholdRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HumidityThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HumidityThresholdRecords
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HumidityThresholdRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HumidityThresholdRecord.
     * @param {HumidityThresholdRecordUpsertArgs} args - Arguments to update or create a HumidityThresholdRecord.
     * @example
     * // Update or create a HumidityThresholdRecord
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.upsert({
     *   create: {
     *     // ... data to create a HumidityThresholdRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HumidityThresholdRecord we want to update
     *   }
     * })
    **/
    upsert<T extends HumidityThresholdRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HumidityThresholdRecordUpsertArgs<ExtArgs>>
    ): Prisma__HumidityThresholdRecordClient<$Result.GetResult<Prisma.$HumidityThresholdRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more HumidityThresholdRecords that matches the filter.
     * @param {HumidityThresholdRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: HumidityThresholdRecordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HumidityThresholdRecord.
     * @param {HumidityThresholdRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const humidityThresholdRecord = await prisma.humidityThresholdRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: HumidityThresholdRecordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of HumidityThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordCountArgs} args - Arguments to filter HumidityThresholdRecords to count.
     * @example
     * // Count the number of HumidityThresholdRecords
     * const count = await prisma.humidityThresholdRecord.count({
     *   where: {
     *     // ... the filter for the HumidityThresholdRecords we want to count
     *   }
     * })
    **/
    count<T extends HumidityThresholdRecordCountArgs>(
      args?: Subset<T, HumidityThresholdRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumidityThresholdRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HumidityThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HumidityThresholdRecordAggregateArgs>(args: Subset<T, HumidityThresholdRecordAggregateArgs>): Prisma.PrismaPromise<GetHumidityThresholdRecordAggregateType<T>>

    /**
     * Group by HumidityThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumidityThresholdRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HumidityThresholdRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HumidityThresholdRecordGroupByArgs['orderBy'] }
        : { orderBy?: HumidityThresholdRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HumidityThresholdRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumidityThresholdRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HumidityThresholdRecord model
   */
  readonly fields: HumidityThresholdRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HumidityThresholdRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HumidityThresholdRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HumidityThresholdRecord model
   */ 
  interface HumidityThresholdRecordFieldRefs {
    readonly id: FieldRef<"HumidityThresholdRecord", 'String'>
    readonly recordedAt: FieldRef<"HumidityThresholdRecord", 'DateTime'>
    readonly value: FieldRef<"HumidityThresholdRecord", 'Float'>
    readonly controllerId: FieldRef<"HumidityThresholdRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HumidityThresholdRecord findUnique
   */
  export type HumidityThresholdRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which HumidityThresholdRecord to fetch.
     */
    where: HumidityThresholdRecordWhereUniqueInput
  }


  /**
   * HumidityThresholdRecord findUniqueOrThrow
   */
  export type HumidityThresholdRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which HumidityThresholdRecord to fetch.
     */
    where: HumidityThresholdRecordWhereUniqueInput
  }


  /**
   * HumidityThresholdRecord findFirst
   */
  export type HumidityThresholdRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which HumidityThresholdRecord to fetch.
     */
    where?: HumidityThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumidityThresholdRecords to fetch.
     */
    orderBy?: HumidityThresholdRecordOrderByWithRelationInput | HumidityThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumidityThresholdRecords.
     */
    cursor?: HumidityThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumidityThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumidityThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumidityThresholdRecords.
     */
    distinct?: HumidityThresholdRecordScalarFieldEnum | HumidityThresholdRecordScalarFieldEnum[]
  }


  /**
   * HumidityThresholdRecord findFirstOrThrow
   */
  export type HumidityThresholdRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which HumidityThresholdRecord to fetch.
     */
    where?: HumidityThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumidityThresholdRecords to fetch.
     */
    orderBy?: HumidityThresholdRecordOrderByWithRelationInput | HumidityThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumidityThresholdRecords.
     */
    cursor?: HumidityThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumidityThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumidityThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumidityThresholdRecords.
     */
    distinct?: HumidityThresholdRecordScalarFieldEnum | HumidityThresholdRecordScalarFieldEnum[]
  }


  /**
   * HumidityThresholdRecord findMany
   */
  export type HumidityThresholdRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which HumidityThresholdRecords to fetch.
     */
    where?: HumidityThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumidityThresholdRecords to fetch.
     */
    orderBy?: HumidityThresholdRecordOrderByWithRelationInput | HumidityThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HumidityThresholdRecords.
     */
    cursor?: HumidityThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumidityThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumidityThresholdRecords.
     */
    skip?: number
    distinct?: HumidityThresholdRecordScalarFieldEnum | HumidityThresholdRecordScalarFieldEnum[]
  }


  /**
   * HumidityThresholdRecord create
   */
  export type HumidityThresholdRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HumidityThresholdRecord.
     */
    data: XOR<HumidityThresholdRecordCreateInput, HumidityThresholdRecordUncheckedCreateInput>
  }


  /**
   * HumidityThresholdRecord createMany
   */
  export type HumidityThresholdRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HumidityThresholdRecords.
     */
    data: HumidityThresholdRecordCreateManyInput | HumidityThresholdRecordCreateManyInput[]
  }


  /**
   * HumidityThresholdRecord update
   */
  export type HumidityThresholdRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HumidityThresholdRecord.
     */
    data: XOR<HumidityThresholdRecordUpdateInput, HumidityThresholdRecordUncheckedUpdateInput>
    /**
     * Choose, which HumidityThresholdRecord to update.
     */
    where: HumidityThresholdRecordWhereUniqueInput
  }


  /**
   * HumidityThresholdRecord updateMany
   */
  export type HumidityThresholdRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HumidityThresholdRecords.
     */
    data: XOR<HumidityThresholdRecordUpdateManyMutationInput, HumidityThresholdRecordUncheckedUpdateManyInput>
    /**
     * Filter which HumidityThresholdRecords to update
     */
    where?: HumidityThresholdRecordWhereInput
  }


  /**
   * HumidityThresholdRecord upsert
   */
  export type HumidityThresholdRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HumidityThresholdRecord to update in case it exists.
     */
    where: HumidityThresholdRecordWhereUniqueInput
    /**
     * In case the HumidityThresholdRecord found by the `where` argument doesn't exist, create a new HumidityThresholdRecord with this data.
     */
    create: XOR<HumidityThresholdRecordCreateInput, HumidityThresholdRecordUncheckedCreateInput>
    /**
     * In case the HumidityThresholdRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HumidityThresholdRecordUpdateInput, HumidityThresholdRecordUncheckedUpdateInput>
  }


  /**
   * HumidityThresholdRecord delete
   */
  export type HumidityThresholdRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter which HumidityThresholdRecord to delete.
     */
    where: HumidityThresholdRecordWhereUniqueInput
  }


  /**
   * HumidityThresholdRecord deleteMany
   */
  export type HumidityThresholdRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumidityThresholdRecords to delete
     */
    where?: HumidityThresholdRecordWhereInput
  }


  /**
   * HumidityThresholdRecord findRaw
   */
  export type HumidityThresholdRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * HumidityThresholdRecord aggregateRaw
   */
  export type HumidityThresholdRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * HumidityThresholdRecord without action
   */
  export type HumidityThresholdRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumidityThresholdRecord
     */
    select?: HumidityThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HumidityThresholdRecordInclude<ExtArgs> | null
  }



  /**
   * Model TemperatureThresholdRecord
   */

  export type AggregateTemperatureThresholdRecord = {
    _count: TemperatureThresholdRecordCountAggregateOutputType | null
    _avg: TemperatureThresholdRecordAvgAggregateOutputType | null
    _sum: TemperatureThresholdRecordSumAggregateOutputType | null
    _min: TemperatureThresholdRecordMinAggregateOutputType | null
    _max: TemperatureThresholdRecordMaxAggregateOutputType | null
  }

  export type TemperatureThresholdRecordAvgAggregateOutputType = {
    value: number | null
  }

  export type TemperatureThresholdRecordSumAggregateOutputType = {
    value: number | null
  }

  export type TemperatureThresholdRecordMinAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type TemperatureThresholdRecordMaxAggregateOutputType = {
    id: string | null
    recordedAt: Date | null
    value: number | null
    controllerId: string | null
  }

  export type TemperatureThresholdRecordCountAggregateOutputType = {
    id: number
    recordedAt: number
    value: number
    controllerId: number
    _all: number
  }


  export type TemperatureThresholdRecordAvgAggregateInputType = {
    value?: true
  }

  export type TemperatureThresholdRecordSumAggregateInputType = {
    value?: true
  }

  export type TemperatureThresholdRecordMinAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type TemperatureThresholdRecordMaxAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
  }

  export type TemperatureThresholdRecordCountAggregateInputType = {
    id?: true
    recordedAt?: true
    value?: true
    controllerId?: true
    _all?: true
  }

  export type TemperatureThresholdRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureThresholdRecord to aggregate.
     */
    where?: TemperatureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureThresholdRecords to fetch.
     */
    orderBy?: TemperatureThresholdRecordOrderByWithRelationInput | TemperatureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemperatureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemperatureThresholdRecords
    **/
    _count?: true | TemperatureThresholdRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemperatureThresholdRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemperatureThresholdRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemperatureThresholdRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemperatureThresholdRecordMaxAggregateInputType
  }

  export type GetTemperatureThresholdRecordAggregateType<T extends TemperatureThresholdRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTemperatureThresholdRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemperatureThresholdRecord[P]>
      : GetScalarType<T[P], AggregateTemperatureThresholdRecord[P]>
  }




  export type TemperatureThresholdRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemperatureThresholdRecordWhereInput
    orderBy?: TemperatureThresholdRecordOrderByWithAggregationInput | TemperatureThresholdRecordOrderByWithAggregationInput[]
    by: TemperatureThresholdRecordScalarFieldEnum[] | TemperatureThresholdRecordScalarFieldEnum
    having?: TemperatureThresholdRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemperatureThresholdRecordCountAggregateInputType | true
    _avg?: TemperatureThresholdRecordAvgAggregateInputType
    _sum?: TemperatureThresholdRecordSumAggregateInputType
    _min?: TemperatureThresholdRecordMinAggregateInputType
    _max?: TemperatureThresholdRecordMaxAggregateInputType
  }

  export type TemperatureThresholdRecordGroupByOutputType = {
    id: string
    recordedAt: Date
    value: number
    controllerId: string
    _count: TemperatureThresholdRecordCountAggregateOutputType | null
    _avg: TemperatureThresholdRecordAvgAggregateOutputType | null
    _sum: TemperatureThresholdRecordSumAggregateOutputType | null
    _min: TemperatureThresholdRecordMinAggregateOutputType | null
    _max: TemperatureThresholdRecordMaxAggregateOutputType | null
  }

  type GetTemperatureThresholdRecordGroupByPayload<T extends TemperatureThresholdRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemperatureThresholdRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemperatureThresholdRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemperatureThresholdRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TemperatureThresholdRecordGroupByOutputType[P]>
        }
      >
    >


  export type TemperatureThresholdRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temperatureThresholdRecord"]>

  export type TemperatureThresholdRecordSelectScalar = {
    id?: boolean
    recordedAt?: boolean
    value?: boolean
    controllerId?: boolean
  }

  export type TemperatureThresholdRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controller?: boolean | ControllerDefaultArgs<ExtArgs>
  }


  export type $TemperatureThresholdRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemperatureThresholdRecord"
    objects: {
      controller: Prisma.$ControllerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recordedAt: Date
      value: number
      controllerId: string
    }, ExtArgs["result"]["temperatureThresholdRecord"]>
    composites: {}
  }


  type TemperatureThresholdRecordGetPayload<S extends boolean | null | undefined | TemperatureThresholdRecordDefaultArgs> = $Result.GetResult<Prisma.$TemperatureThresholdRecordPayload, S>

  type TemperatureThresholdRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemperatureThresholdRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemperatureThresholdRecordCountAggregateInputType | true
    }

  export interface TemperatureThresholdRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemperatureThresholdRecord'], meta: { name: 'TemperatureThresholdRecord' } }
    /**
     * Find zero or one TemperatureThresholdRecord that matches the filter.
     * @param {TemperatureThresholdRecordFindUniqueArgs} args - Arguments to find a TemperatureThresholdRecord
     * @example
     * // Get one TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemperatureThresholdRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemperatureThresholdRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TemperatureThresholdRecordFindUniqueOrThrowArgs} args - Arguments to find a TemperatureThresholdRecord
     * @example
     * // Get one TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemperatureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemperatureThresholdRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordFindFirstArgs} args - Arguments to find a TemperatureThresholdRecord
     * @example
     * // Get one TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemperatureThresholdRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordFindFirstArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemperatureThresholdRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordFindFirstOrThrowArgs} args - Arguments to find a TemperatureThresholdRecord
     * @example
     * // Get one TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemperatureThresholdRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemperatureThresholdRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemperatureThresholdRecords
     * const temperatureThresholdRecords = await prisma.temperatureThresholdRecord.findMany()
     * 
     * // Get first 10 TemperatureThresholdRecords
     * const temperatureThresholdRecords = await prisma.temperatureThresholdRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temperatureThresholdRecordWithIdOnly = await prisma.temperatureThresholdRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemperatureThresholdRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemperatureThresholdRecord.
     * @param {TemperatureThresholdRecordCreateArgs} args - Arguments to create a TemperatureThresholdRecord.
     * @example
     * // Create one TemperatureThresholdRecord
     * const TemperatureThresholdRecord = await prisma.temperatureThresholdRecord.create({
     *   data: {
     *     // ... data to create a TemperatureThresholdRecord
     *   }
     * })
     * 
    **/
    create<T extends TemperatureThresholdRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordCreateArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemperatureThresholdRecords.
     *     @param {TemperatureThresholdRecordCreateManyArgs} args - Arguments to create many TemperatureThresholdRecords.
     *     @example
     *     // Create many TemperatureThresholdRecords
     *     const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TemperatureThresholdRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemperatureThresholdRecord.
     * @param {TemperatureThresholdRecordDeleteArgs} args - Arguments to delete one TemperatureThresholdRecord.
     * @example
     * // Delete one TemperatureThresholdRecord
     * const TemperatureThresholdRecord = await prisma.temperatureThresholdRecord.delete({
     *   where: {
     *     // ... filter to delete one TemperatureThresholdRecord
     *   }
     * })
     * 
    **/
    delete<T extends TemperatureThresholdRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordDeleteArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemperatureThresholdRecord.
     * @param {TemperatureThresholdRecordUpdateArgs} args - Arguments to update one TemperatureThresholdRecord.
     * @example
     * // Update one TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemperatureThresholdRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordUpdateArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemperatureThresholdRecords.
     * @param {TemperatureThresholdRecordDeleteManyArgs} args - Arguments to filter TemperatureThresholdRecords to delete.
     * @example
     * // Delete a few TemperatureThresholdRecords
     * const { count } = await prisma.temperatureThresholdRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemperatureThresholdRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemperatureThresholdRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemperatureThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemperatureThresholdRecords
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemperatureThresholdRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemperatureThresholdRecord.
     * @param {TemperatureThresholdRecordUpsertArgs} args - Arguments to update or create a TemperatureThresholdRecord.
     * @example
     * // Update or create a TemperatureThresholdRecord
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.upsert({
     *   create: {
     *     // ... data to create a TemperatureThresholdRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemperatureThresholdRecord we want to update
     *   }
     * })
    **/
    upsert<T extends TemperatureThresholdRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemperatureThresholdRecordUpsertArgs<ExtArgs>>
    ): Prisma__TemperatureThresholdRecordClient<$Result.GetResult<Prisma.$TemperatureThresholdRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TemperatureThresholdRecords that matches the filter.
     * @param {TemperatureThresholdRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TemperatureThresholdRecordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TemperatureThresholdRecord.
     * @param {TemperatureThresholdRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const temperatureThresholdRecord = await prisma.temperatureThresholdRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TemperatureThresholdRecordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TemperatureThresholdRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordCountArgs} args - Arguments to filter TemperatureThresholdRecords to count.
     * @example
     * // Count the number of TemperatureThresholdRecords
     * const count = await prisma.temperatureThresholdRecord.count({
     *   where: {
     *     // ... the filter for the TemperatureThresholdRecords we want to count
     *   }
     * })
    **/
    count<T extends TemperatureThresholdRecordCountArgs>(
      args?: Subset<T, TemperatureThresholdRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemperatureThresholdRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemperatureThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemperatureThresholdRecordAggregateArgs>(args: Subset<T, TemperatureThresholdRecordAggregateArgs>): Prisma.PrismaPromise<GetTemperatureThresholdRecordAggregateType<T>>

    /**
     * Group by TemperatureThresholdRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureThresholdRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemperatureThresholdRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemperatureThresholdRecordGroupByArgs['orderBy'] }
        : { orderBy?: TemperatureThresholdRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemperatureThresholdRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemperatureThresholdRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemperatureThresholdRecord model
   */
  readonly fields: TemperatureThresholdRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemperatureThresholdRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemperatureThresholdRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controller<T extends ControllerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControllerDefaultArgs<ExtArgs>>): Prisma__ControllerClient<$Result.GetResult<Prisma.$ControllerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemperatureThresholdRecord model
   */ 
  interface TemperatureThresholdRecordFieldRefs {
    readonly id: FieldRef<"TemperatureThresholdRecord", 'String'>
    readonly recordedAt: FieldRef<"TemperatureThresholdRecord", 'DateTime'>
    readonly value: FieldRef<"TemperatureThresholdRecord", 'Float'>
    readonly controllerId: FieldRef<"TemperatureThresholdRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TemperatureThresholdRecord findUnique
   */
  export type TemperatureThresholdRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureThresholdRecord to fetch.
     */
    where: TemperatureThresholdRecordWhereUniqueInput
  }


  /**
   * TemperatureThresholdRecord findUniqueOrThrow
   */
  export type TemperatureThresholdRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureThresholdRecord to fetch.
     */
    where: TemperatureThresholdRecordWhereUniqueInput
  }


  /**
   * TemperatureThresholdRecord findFirst
   */
  export type TemperatureThresholdRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureThresholdRecord to fetch.
     */
    where?: TemperatureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureThresholdRecords to fetch.
     */
    orderBy?: TemperatureThresholdRecordOrderByWithRelationInput | TemperatureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureThresholdRecords.
     */
    cursor?: TemperatureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureThresholdRecords.
     */
    distinct?: TemperatureThresholdRecordScalarFieldEnum | TemperatureThresholdRecordScalarFieldEnum[]
  }


  /**
   * TemperatureThresholdRecord findFirstOrThrow
   */
  export type TemperatureThresholdRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureThresholdRecord to fetch.
     */
    where?: TemperatureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureThresholdRecords to fetch.
     */
    orderBy?: TemperatureThresholdRecordOrderByWithRelationInput | TemperatureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureThresholdRecords.
     */
    cursor?: TemperatureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureThresholdRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureThresholdRecords.
     */
    distinct?: TemperatureThresholdRecordScalarFieldEnum | TemperatureThresholdRecordScalarFieldEnum[]
  }


  /**
   * TemperatureThresholdRecord findMany
   */
  export type TemperatureThresholdRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemperatureThresholdRecords to fetch.
     */
    where?: TemperatureThresholdRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureThresholdRecords to fetch.
     */
    orderBy?: TemperatureThresholdRecordOrderByWithRelationInput | TemperatureThresholdRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemperatureThresholdRecords.
     */
    cursor?: TemperatureThresholdRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureThresholdRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureThresholdRecords.
     */
    skip?: number
    distinct?: TemperatureThresholdRecordScalarFieldEnum | TemperatureThresholdRecordScalarFieldEnum[]
  }


  /**
   * TemperatureThresholdRecord create
   */
  export type TemperatureThresholdRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TemperatureThresholdRecord.
     */
    data: XOR<TemperatureThresholdRecordCreateInput, TemperatureThresholdRecordUncheckedCreateInput>
  }


  /**
   * TemperatureThresholdRecord createMany
   */
  export type TemperatureThresholdRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemperatureThresholdRecords.
     */
    data: TemperatureThresholdRecordCreateManyInput | TemperatureThresholdRecordCreateManyInput[]
  }


  /**
   * TemperatureThresholdRecord update
   */
  export type TemperatureThresholdRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TemperatureThresholdRecord.
     */
    data: XOR<TemperatureThresholdRecordUpdateInput, TemperatureThresholdRecordUncheckedUpdateInput>
    /**
     * Choose, which TemperatureThresholdRecord to update.
     */
    where: TemperatureThresholdRecordWhereUniqueInput
  }


  /**
   * TemperatureThresholdRecord updateMany
   */
  export type TemperatureThresholdRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemperatureThresholdRecords.
     */
    data: XOR<TemperatureThresholdRecordUpdateManyMutationInput, TemperatureThresholdRecordUncheckedUpdateManyInput>
    /**
     * Filter which TemperatureThresholdRecords to update
     */
    where?: TemperatureThresholdRecordWhereInput
  }


  /**
   * TemperatureThresholdRecord upsert
   */
  export type TemperatureThresholdRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TemperatureThresholdRecord to update in case it exists.
     */
    where: TemperatureThresholdRecordWhereUniqueInput
    /**
     * In case the TemperatureThresholdRecord found by the `where` argument doesn't exist, create a new TemperatureThresholdRecord with this data.
     */
    create: XOR<TemperatureThresholdRecordCreateInput, TemperatureThresholdRecordUncheckedCreateInput>
    /**
     * In case the TemperatureThresholdRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemperatureThresholdRecordUpdateInput, TemperatureThresholdRecordUncheckedUpdateInput>
  }


  /**
   * TemperatureThresholdRecord delete
   */
  export type TemperatureThresholdRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
    /**
     * Filter which TemperatureThresholdRecord to delete.
     */
    where: TemperatureThresholdRecordWhereUniqueInput
  }


  /**
   * TemperatureThresholdRecord deleteMany
   */
  export type TemperatureThresholdRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureThresholdRecords to delete
     */
    where?: TemperatureThresholdRecordWhereInput
  }


  /**
   * TemperatureThresholdRecord findRaw
   */
  export type TemperatureThresholdRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TemperatureThresholdRecord aggregateRaw
   */
  export type TemperatureThresholdRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TemperatureThresholdRecord without action
   */
  export type TemperatureThresholdRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureThresholdRecord
     */
    select?: TemperatureThresholdRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemperatureThresholdRecordInclude<ExtArgs> | null
  }



  /**
   * Model NewsFeeds
   */

  export type AggregateNewsFeeds = {
    _count: NewsFeedsCountAggregateOutputType | null
    _min: NewsFeedsMinAggregateOutputType | null
    _max: NewsFeedsMaxAggregateOutputType | null
  }

  export type NewsFeedsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    content: string | null
    image: string | null
    author: string | null
    isPublic: boolean | null
  }

  export type NewsFeedsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    title: string | null
    content: string | null
    image: string | null
    author: string | null
    isPublic: boolean | null
  }

  export type NewsFeedsCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    image: number
    author: number
    isPublic: number
    _all: number
  }


  export type NewsFeedsMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    image?: true
    author?: true
    isPublic?: true
  }

  export type NewsFeedsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    image?: true
    author?: true
    isPublic?: true
  }

  export type NewsFeedsCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    image?: true
    author?: true
    isPublic?: true
    _all?: true
  }

  export type NewsFeedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsFeeds to aggregate.
     */
    where?: NewsFeedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedsOrderByWithRelationInput | NewsFeedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsFeedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsFeeds
    **/
    _count?: true | NewsFeedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsFeedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsFeedsMaxAggregateInputType
  }

  export type GetNewsFeedsAggregateType<T extends NewsFeedsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsFeeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsFeeds[P]>
      : GetScalarType<T[P], AggregateNewsFeeds[P]>
  }




  export type NewsFeedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsFeedsWhereInput
    orderBy?: NewsFeedsOrderByWithAggregationInput | NewsFeedsOrderByWithAggregationInput[]
    by: NewsFeedsScalarFieldEnum[] | NewsFeedsScalarFieldEnum
    having?: NewsFeedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsFeedsCountAggregateInputType | true
    _min?: NewsFeedsMinAggregateInputType
    _max?: NewsFeedsMaxAggregateInputType
  }

  export type NewsFeedsGroupByOutputType = {
    id: string
    createdAt: Date
    title: string
    content: string
    image: string
    author: string
    isPublic: boolean
    _count: NewsFeedsCountAggregateOutputType | null
    _min: NewsFeedsMinAggregateOutputType | null
    _max: NewsFeedsMaxAggregateOutputType | null
  }

  type GetNewsFeedsGroupByPayload<T extends NewsFeedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsFeedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsFeedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsFeedsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsFeedsGroupByOutputType[P]>
        }
      >
    >


  export type NewsFeedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    author?: boolean
    isPublic?: boolean
  }, ExtArgs["result"]["newsFeeds"]>

  export type NewsFeedsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    author?: boolean
    isPublic?: boolean
  }


  export type $NewsFeedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsFeeds"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      title: string
      content: string
      image: string
      author: string
      isPublic: boolean
    }, ExtArgs["result"]["newsFeeds"]>
    composites: {}
  }


  type NewsFeedsGetPayload<S extends boolean | null | undefined | NewsFeedsDefaultArgs> = $Result.GetResult<Prisma.$NewsFeedsPayload, S>

  type NewsFeedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsFeedsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsFeedsCountAggregateInputType | true
    }

  export interface NewsFeedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsFeeds'], meta: { name: 'NewsFeeds' } }
    /**
     * Find zero or one NewsFeeds that matches the filter.
     * @param {NewsFeedsFindUniqueArgs} args - Arguments to find a NewsFeeds
     * @example
     * // Get one NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NewsFeedsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsFindUniqueArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NewsFeeds that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NewsFeedsFindUniqueOrThrowArgs} args - Arguments to find a NewsFeeds
     * @example
     * // Get one NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NewsFeedsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NewsFeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsFindFirstArgs} args - Arguments to find a NewsFeeds
     * @example
     * // Get one NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NewsFeedsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsFindFirstArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NewsFeeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsFindFirstOrThrowArgs} args - Arguments to find a NewsFeeds
     * @example
     * // Get one NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NewsFeedsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NewsFeeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findMany()
     * 
     * // Get first 10 NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsFeedsWithIdOnly = await prisma.newsFeeds.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NewsFeedsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NewsFeeds.
     * @param {NewsFeedsCreateArgs} args - Arguments to create a NewsFeeds.
     * @example
     * // Create one NewsFeeds
     * const NewsFeeds = await prisma.newsFeeds.create({
     *   data: {
     *     // ... data to create a NewsFeeds
     *   }
     * })
     * 
    **/
    create<T extends NewsFeedsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsCreateArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NewsFeeds.
     *     @param {NewsFeedsCreateManyArgs} args - Arguments to create many NewsFeeds.
     *     @example
     *     // Create many NewsFeeds
     *     const newsFeeds = await prisma.newsFeeds.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NewsFeedsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsFeeds.
     * @param {NewsFeedsDeleteArgs} args - Arguments to delete one NewsFeeds.
     * @example
     * // Delete one NewsFeeds
     * const NewsFeeds = await prisma.newsFeeds.delete({
     *   where: {
     *     // ... filter to delete one NewsFeeds
     *   }
     * })
     * 
    **/
    delete<T extends NewsFeedsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsDeleteArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NewsFeeds.
     * @param {NewsFeedsUpdateArgs} args - Arguments to update one NewsFeeds.
     * @example
     * // Update one NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NewsFeedsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsUpdateArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NewsFeeds.
     * @param {NewsFeedsDeleteManyArgs} args - Arguments to filter NewsFeeds to delete.
     * @example
     * // Delete a few NewsFeeds
     * const { count } = await prisma.newsFeeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NewsFeedsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFeedsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NewsFeedsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsFeeds.
     * @param {NewsFeedsUpsertArgs} args - Arguments to update or create a NewsFeeds.
     * @example
     * // Update or create a NewsFeeds
     * const newsFeeds = await prisma.newsFeeds.upsert({
     *   create: {
     *     // ... data to create a NewsFeeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsFeeds we want to update
     *   }
     * })
    **/
    upsert<T extends NewsFeedsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFeedsUpsertArgs<ExtArgs>>
    ): Prisma__NewsFeedsClient<$Result.GetResult<Prisma.$NewsFeedsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more NewsFeeds that matches the filter.
     * @param {NewsFeedsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const newsFeeds = await prisma.newsFeeds.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: NewsFeedsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NewsFeeds.
     * @param {NewsFeedsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const newsFeeds = await prisma.newsFeeds.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: NewsFeedsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsCountArgs} args - Arguments to filter NewsFeeds to count.
     * @example
     * // Count the number of NewsFeeds
     * const count = await prisma.newsFeeds.count({
     *   where: {
     *     // ... the filter for the NewsFeeds we want to count
     *   }
     * })
    **/
    count<T extends NewsFeedsCountArgs>(
      args?: Subset<T, NewsFeedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsFeedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsFeedsAggregateArgs>(args: Subset<T, NewsFeedsAggregateArgs>): Prisma.PrismaPromise<GetNewsFeedsAggregateType<T>>

    /**
     * Group by NewsFeeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFeedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsFeedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsFeedsGroupByArgs['orderBy'] }
        : { orderBy?: NewsFeedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsFeedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsFeedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsFeeds model
   */
  readonly fields: NewsFeedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsFeeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsFeedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NewsFeeds model
   */ 
  interface NewsFeedsFieldRefs {
    readonly id: FieldRef<"NewsFeeds", 'String'>
    readonly createdAt: FieldRef<"NewsFeeds", 'DateTime'>
    readonly title: FieldRef<"NewsFeeds", 'String'>
    readonly content: FieldRef<"NewsFeeds", 'String'>
    readonly image: FieldRef<"NewsFeeds", 'String'>
    readonly author: FieldRef<"NewsFeeds", 'String'>
    readonly isPublic: FieldRef<"NewsFeeds", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * NewsFeeds findUnique
   */
  export type NewsFeedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where: NewsFeedsWhereUniqueInput
  }


  /**
   * NewsFeeds findUniqueOrThrow
   */
  export type NewsFeedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where: NewsFeedsWhereUniqueInput
  }


  /**
   * NewsFeeds findFirst
   */
  export type NewsFeedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where?: NewsFeedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedsOrderByWithRelationInput | NewsFeedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsFeeds.
     */
    cursor?: NewsFeedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsFeeds.
     */
    distinct?: NewsFeedsScalarFieldEnum | NewsFeedsScalarFieldEnum[]
  }


  /**
   * NewsFeeds findFirstOrThrow
   */
  export type NewsFeedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where?: NewsFeedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedsOrderByWithRelationInput | NewsFeedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsFeeds.
     */
    cursor?: NewsFeedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsFeeds.
     */
    distinct?: NewsFeedsScalarFieldEnum | NewsFeedsScalarFieldEnum[]
  }


  /**
   * NewsFeeds findMany
   */
  export type NewsFeedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter, which NewsFeeds to fetch.
     */
    where?: NewsFeedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsFeeds to fetch.
     */
    orderBy?: NewsFeedsOrderByWithRelationInput | NewsFeedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsFeeds.
     */
    cursor?: NewsFeedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsFeeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsFeeds.
     */
    skip?: number
    distinct?: NewsFeedsScalarFieldEnum | NewsFeedsScalarFieldEnum[]
  }


  /**
   * NewsFeeds create
   */
  export type NewsFeedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * The data needed to create a NewsFeeds.
     */
    data: XOR<NewsFeedsCreateInput, NewsFeedsUncheckedCreateInput>
  }


  /**
   * NewsFeeds createMany
   */
  export type NewsFeedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsFeeds.
     */
    data: NewsFeedsCreateManyInput | NewsFeedsCreateManyInput[]
  }


  /**
   * NewsFeeds update
   */
  export type NewsFeedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * The data needed to update a NewsFeeds.
     */
    data: XOR<NewsFeedsUpdateInput, NewsFeedsUncheckedUpdateInput>
    /**
     * Choose, which NewsFeeds to update.
     */
    where: NewsFeedsWhereUniqueInput
  }


  /**
   * NewsFeeds updateMany
   */
  export type NewsFeedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsFeeds.
     */
    data: XOR<NewsFeedsUpdateManyMutationInput, NewsFeedsUncheckedUpdateManyInput>
    /**
     * Filter which NewsFeeds to update
     */
    where?: NewsFeedsWhereInput
  }


  /**
   * NewsFeeds upsert
   */
  export type NewsFeedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * The filter to search for the NewsFeeds to update in case it exists.
     */
    where: NewsFeedsWhereUniqueInput
    /**
     * In case the NewsFeeds found by the `where` argument doesn't exist, create a new NewsFeeds with this data.
     */
    create: XOR<NewsFeedsCreateInput, NewsFeedsUncheckedCreateInput>
    /**
     * In case the NewsFeeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsFeedsUpdateInput, NewsFeedsUncheckedUpdateInput>
  }


  /**
   * NewsFeeds delete
   */
  export type NewsFeedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
    /**
     * Filter which NewsFeeds to delete.
     */
    where: NewsFeedsWhereUniqueInput
  }


  /**
   * NewsFeeds deleteMany
   */
  export type NewsFeedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsFeeds to delete
     */
    where?: NewsFeedsWhereInput
  }


  /**
   * NewsFeeds findRaw
   */
  export type NewsFeedsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * NewsFeeds aggregateRaw
   */
  export type NewsFeedsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * NewsFeeds without action
   */
  export type NewsFeedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsFeeds
     */
    select?: NewsFeedsSelect<ExtArgs> | null
  }



  /**
   * Model AccessToken
   */

  export type AggregateAccessToken = {
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  export type AccessTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AccessTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AccessTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type AccessTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AccessTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AccessTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessToken to aggregate.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessTokens
    **/
    _count?: true | AccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessTokenMaxAggregateInputType
  }

  export type GetAccessTokenAggregateType<T extends AccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessToken[P]>
      : GetScalarType<T[P], AggregateAccessToken[P]>
  }




  export type AccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithAggregationInput | AccessTokenOrderByWithAggregationInput[]
    by: AccessTokenScalarFieldEnum[] | AccessTokenScalarFieldEnum
    having?: AccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessTokenCountAggregateInputType | true
    _min?: AccessTokenMinAggregateInputType
    _max?: AccessTokenMaxAggregateInputType
  }

  export type AccessTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    createdAt: Date
    expiresAt: Date
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  type GetAccessTokenGroupByPayload<T extends AccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessToken"]>

  export type AccessTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type AccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["accessToken"]>
    composites: {}
  }


  type AccessTokenGetPayload<S extends boolean | null | undefined | AccessTokenDefaultArgs> = $Result.GetResult<Prisma.$AccessTokenPayload, S>

  type AccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccessTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccessTokenCountAggregateInputType | true
    }

  export interface AccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessToken'], meta: { name: 'AccessToken' } }
    /**
     * Find zero or one AccessToken that matches the filter.
     * @param {AccessTokenFindUniqueArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccessTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccessToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccessTokenFindUniqueOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccessTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccessTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindFirstArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccessTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessTokens
     * const accessTokens = await prisma.accessToken.findMany()
     * 
     * // Get first 10 AccessTokens
     * const accessTokens = await prisma.accessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccessTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccessToken.
     * @param {AccessTokenCreateArgs} args - Arguments to create a AccessToken.
     * @example
     * // Create one AccessToken
     * const AccessToken = await prisma.accessToken.create({
     *   data: {
     *     // ... data to create a AccessToken
     *   }
     * })
     * 
    **/
    create<T extends AccessTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenCreateArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccessTokens.
     *     @param {AccessTokenCreateManyArgs} args - Arguments to create many AccessTokens.
     *     @example
     *     // Create many AccessTokens
     *     const accessToken = await prisma.accessToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccessTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessToken.
     * @param {AccessTokenDeleteArgs} args - Arguments to delete one AccessToken.
     * @example
     * // Delete one AccessToken
     * const AccessToken = await prisma.accessToken.delete({
     *   where: {
     *     // ... filter to delete one AccessToken
     *   }
     * })
     * 
    **/
    delete<T extends AccessTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenDeleteArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccessToken.
     * @param {AccessTokenUpdateArgs} args - Arguments to update one AccessToken.
     * @example
     * // Update one AccessToken
     * const accessToken = await prisma.accessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccessTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpdateArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccessTokens.
     * @param {AccessTokenDeleteManyArgs} args - Arguments to filter AccessTokens to delete.
     * @example
     * // Delete a few AccessTokens
     * const { count } = await prisma.accessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccessTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessTokens
     * const accessToken = await prisma.accessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccessTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessToken.
     * @param {AccessTokenUpsertArgs} args - Arguments to update or create a AccessToken.
     * @example
     * // Update or create a AccessToken
     * const accessToken = await prisma.accessToken.upsert({
     *   create: {
     *     // ... data to create a AccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessToken we want to update
     *   }
     * })
    **/
    upsert<T extends AccessTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpsertArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * @param {AccessTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AccessTokenFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccessToken.
     * @param {AccessTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AccessTokenAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenCountArgs} args - Arguments to filter AccessTokens to count.
     * @example
     * // Count the number of AccessTokens
     * const count = await prisma.accessToken.count({
     *   where: {
     *     // ... the filter for the AccessTokens we want to count
     *   }
     * })
    **/
    count<T extends AccessTokenCountArgs>(
      args?: Subset<T, AccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessTokenAggregateArgs>(args: Subset<T, AccessTokenAggregateArgs>): Prisma.PrismaPromise<GetAccessTokenAggregateType<T>>

    /**
     * Group by AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccessTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessToken model
   */
  readonly fields: AccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccessToken model
   */ 
  interface AccessTokenFieldRefs {
    readonly id: FieldRef<"AccessToken", 'String'>
    readonly token: FieldRef<"AccessToken", 'String'>
    readonly userId: FieldRef<"AccessToken", 'String'>
    readonly createdAt: FieldRef<"AccessToken", 'DateTime'>
    readonly expiresAt: FieldRef<"AccessToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AccessToken findUnique
   */
  export type AccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken findUniqueOrThrow
   */
  export type AccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken findFirst
   */
  export type AccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken findFirstOrThrow
   */
  export type AccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken findMany
   */
  export type AccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken create
   */
  export type AccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessToken.
     */
    data: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
  }


  /**
   * AccessToken createMany
   */
  export type AccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokenCreateManyInput | AccessTokenCreateManyInput[]
  }


  /**
   * AccessToken update
   */
  export type AccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessToken.
     */
    data: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
    /**
     * Choose, which AccessToken to update.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken updateMany
   */
  export type AccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokenWhereInput
  }


  /**
   * AccessToken upsert
   */
  export type AccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessToken to update in case it exists.
     */
    where: AccessTokenWhereUniqueInput
    /**
     * In case the AccessToken found by the `where` argument doesn't exist, create a new AccessToken with this data.
     */
    create: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
    /**
     * In case the AccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
  }


  /**
   * AccessToken delete
   */
  export type AccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter which AccessToken to delete.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken deleteMany
   */
  export type AccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to delete
     */
    where?: AccessTokenWhereInput
  }


  /**
   * AccessToken findRaw
   */
  export type AccessTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccessToken aggregateRaw
   */
  export type AccessTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccessToken without action
   */
  export type AccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessTokenInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const AdminScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    username: 'username',
    email: 'email',
    password: 'password',
    mqttBrokerUsername: 'mqttBrokerUsername',
    mqttBrokerPassword: 'mqttBrokerPassword',
    mqttBrokerPort: 'mqttBrokerPort',
    mqttBrokerUrl: 'mqttBrokerUrl',
    isSuper: 'isSuper'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    cid: 'cid',
    mobile: 'mobile',
    gewog: 'gewog',
    dzongkhag: 'dzongkhag',
    registeredAt: 'registeredAt',
    verifiedAt: 'verifiedAt',
    posLat: 'posLat',
    posLong: 'posLong',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    greenhouseCount: 'greenhouseCount',
    irrigationCount: 'irrigationCount',
    brokerId: 'brokerId',
    brokerPort: 'brokerPort',
    brokerIp: 'brokerIp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ControllerScalarFieldEnum: {
    id: 'id',
    controllerId: 'controllerId',
    type: 'type',
    name: 'name',
    userId: 'userId'
  };

  export type ControllerScalarFieldEnum = (typeof ControllerScalarFieldEnum)[keyof typeof ControllerScalarFieldEnum]


  export const ReadingScalarFieldEnum: {
    id: 'id',
    humidity: 'humidity',
    temperature: 'temperature',
    soilMoisture: 'soilMoisture',
    recordedAt: 'recordedAt',
    Pressure: 'Pressure',
    controllerId: 'controllerId'
  };

  export type ReadingScalarFieldEnum = (typeof ReadingScalarFieldEnum)[keyof typeof ReadingScalarFieldEnum]


  export const WaterScheduleRecordScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    repetitionDays: 'repetitionDays',
    controllerId: 'controllerId'
  };

  export type WaterScheduleRecordScalarFieldEnum = (typeof WaterScheduleRecordScalarFieldEnum)[keyof typeof WaterScheduleRecordScalarFieldEnum]


  export const SoilMoistureThresholdRecordScalarFieldEnum: {
    id: 'id',
    recordedAt: 'recordedAt',
    value: 'value',
    controllerId: 'controllerId'
  };

  export type SoilMoistureThresholdRecordScalarFieldEnum = (typeof SoilMoistureThresholdRecordScalarFieldEnum)[keyof typeof SoilMoistureThresholdRecordScalarFieldEnum]


  export const HumidityThresholdRecordScalarFieldEnum: {
    id: 'id',
    recordedAt: 'recordedAt',
    value: 'value',
    controllerId: 'controllerId'
  };

  export type HumidityThresholdRecordScalarFieldEnum = (typeof HumidityThresholdRecordScalarFieldEnum)[keyof typeof HumidityThresholdRecordScalarFieldEnum]


  export const TemperatureThresholdRecordScalarFieldEnum: {
    id: 'id',
    recordedAt: 'recordedAt',
    value: 'value',
    controllerId: 'controllerId'
  };

  export type TemperatureThresholdRecordScalarFieldEnum = (typeof TemperatureThresholdRecordScalarFieldEnum)[keyof typeof TemperatureThresholdRecordScalarFieldEnum]


  export const NewsFeedsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    image: 'image',
    author: 'author',
    isPublic: 'isPublic'
  };

  export type NewsFeedsScalarFieldEnum = (typeof NewsFeedsScalarFieldEnum)[keyof typeof NewsFeedsScalarFieldEnum]


  export const AccessTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type AccessTokenScalarFieldEnum = (typeof AccessTokenScalarFieldEnum)[keyof typeof AccessTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    username?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    mqttBrokerUsername?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerPassword?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerPort?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerUrl?: StringNullableFilter<"Admin"> | string | null
    isSuper?: BoolFilter<"Admin"> | boolean
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mqttBrokerUsername?: SortOrder
    mqttBrokerPassword?: SortOrder
    mqttBrokerPort?: SortOrder
    mqttBrokerUrl?: SortOrder
    isSuper?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    password?: StringFilter<"Admin"> | string
    mqttBrokerUsername?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerPassword?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerPort?: StringNullableFilter<"Admin"> | string | null
    mqttBrokerUrl?: StringNullableFilter<"Admin"> | string | null
    isSuper?: BoolFilter<"Admin"> | boolean
  }, "id" | "username" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mqttBrokerUsername?: SortOrder
    mqttBrokerPassword?: SortOrder
    mqttBrokerPort?: SortOrder
    mqttBrokerUrl?: SortOrder
    isSuper?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    mqttBrokerUsername?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    mqttBrokerPassword?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    mqttBrokerPort?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    mqttBrokerUrl?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    isSuper?: BoolWithAggregatesFilter<"Admin"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cid?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    gewog?: StringFilter<"User"> | string
    dzongkhag?: StringFilter<"User"> | string
    registeredAt?: DateTimeFilter<"User"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    posLat?: StringNullableFilter<"User"> | string | null
    posLong?: StringNullableFilter<"User"> | string | null
    otp?: IntNullableFilter<"User"> | number | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    greenhouseCount?: IntFilter<"User"> | number
    irrigationCount?: IntFilter<"User"> | number
    brokerId?: StringFilter<"User"> | string
    brokerPort?: IntFilter<"User"> | number
    brokerIp?: StringFilter<"User"> | string
    controllers?: ControllerListRelationFilter
    accessToken?: AccessTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    cid?: SortOrder
    mobile?: SortOrder
    gewog?: SortOrder
    dzongkhag?: SortOrder
    registeredAt?: SortOrder
    verifiedAt?: SortOrder
    posLat?: SortOrder
    posLong?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerId?: SortOrder
    brokerPort?: SortOrder
    brokerIp?: SortOrder
    controllers?: ControllerOrderByRelationAggregateInput
    accessToken?: AccessTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    cid?: string
    mobile?: string
    brokerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    gewog?: StringFilter<"User"> | string
    dzongkhag?: StringFilter<"User"> | string
    registeredAt?: DateTimeFilter<"User"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    posLat?: StringNullableFilter<"User"> | string | null
    posLong?: StringNullableFilter<"User"> | string | null
    otp?: IntNullableFilter<"User"> | number | null
    otpExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    greenhouseCount?: IntFilter<"User"> | number
    irrigationCount?: IntFilter<"User"> | number
    brokerPort?: IntFilter<"User"> | number
    brokerIp?: StringFilter<"User"> | string
    controllers?: ControllerListRelationFilter
    accessToken?: AccessTokenListRelationFilter
  }, "id" | "username" | "cid" | "mobile" | "brokerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    cid?: SortOrder
    mobile?: SortOrder
    gewog?: SortOrder
    dzongkhag?: SortOrder
    registeredAt?: SortOrder
    verifiedAt?: SortOrder
    posLat?: SortOrder
    posLong?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerId?: SortOrder
    brokerPort?: SortOrder
    brokerIp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    cid?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    gewog?: StringWithAggregatesFilter<"User"> | string
    dzongkhag?: StringWithAggregatesFilter<"User"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    posLat?: StringNullableWithAggregatesFilter<"User"> | string | null
    posLong?: StringNullableWithAggregatesFilter<"User"> | string | null
    otp?: IntNullableWithAggregatesFilter<"User"> | number | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    greenhouseCount?: IntWithAggregatesFilter<"User"> | number
    irrigationCount?: IntWithAggregatesFilter<"User"> | number
    brokerId?: StringWithAggregatesFilter<"User"> | string
    brokerPort?: IntWithAggregatesFilter<"User"> | number
    brokerIp?: StringWithAggregatesFilter<"User"> | string
  }

  export type ControllerWhereInput = {
    AND?: ControllerWhereInput | ControllerWhereInput[]
    OR?: ControllerWhereInput[]
    NOT?: ControllerWhereInput | ControllerWhereInput[]
    id?: StringFilter<"Controller"> | string
    controllerId?: StringFilter<"Controller"> | string
    type?: EnumTypeFilter<"Controller"> | $Enums.Type
    name?: StringFilter<"Controller"> | string
    userId?: StringFilter<"Controller"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    readings?: ReadingListRelationFilter
    waterScheduleRecords?: WaterScheduleRecordListRelationFilter
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordListRelationFilter
    HumidityThresholdRecord?: HumidityThresholdRecordListRelationFilter
    TemperatureThresholdRecord?: TemperatureThresholdRecordListRelationFilter
  }

  export type ControllerOrderByWithRelationInput = {
    id?: SortOrder
    controllerId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    readings?: ReadingOrderByRelationAggregateInput
    waterScheduleRecords?: WaterScheduleRecordOrderByRelationAggregateInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordOrderByRelationAggregateInput
    HumidityThresholdRecord?: HumidityThresholdRecordOrderByRelationAggregateInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordOrderByRelationAggregateInput
  }

  export type ControllerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    controllerId?: string
    AND?: ControllerWhereInput | ControllerWhereInput[]
    OR?: ControllerWhereInput[]
    NOT?: ControllerWhereInput | ControllerWhereInput[]
    type?: EnumTypeFilter<"Controller"> | $Enums.Type
    name?: StringFilter<"Controller"> | string
    userId?: StringFilter<"Controller"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    readings?: ReadingListRelationFilter
    waterScheduleRecords?: WaterScheduleRecordListRelationFilter
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordListRelationFilter
    HumidityThresholdRecord?: HumidityThresholdRecordListRelationFilter
    TemperatureThresholdRecord?: TemperatureThresholdRecordListRelationFilter
  }, "id" | "controllerId">

  export type ControllerOrderByWithAggregationInput = {
    id?: SortOrder
    controllerId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: ControllerCountOrderByAggregateInput
    _max?: ControllerMaxOrderByAggregateInput
    _min?: ControllerMinOrderByAggregateInput
  }

  export type ControllerScalarWhereWithAggregatesInput = {
    AND?: ControllerScalarWhereWithAggregatesInput | ControllerScalarWhereWithAggregatesInput[]
    OR?: ControllerScalarWhereWithAggregatesInput[]
    NOT?: ControllerScalarWhereWithAggregatesInput | ControllerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Controller"> | string
    controllerId?: StringWithAggregatesFilter<"Controller"> | string
    type?: EnumTypeWithAggregatesFilter<"Controller"> | $Enums.Type
    name?: StringWithAggregatesFilter<"Controller"> | string
    userId?: StringWithAggregatesFilter<"Controller"> | string
  }

  export type ReadingWhereInput = {
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    id?: StringFilter<"Reading"> | string
    humidity?: FloatNullableFilter<"Reading"> | number | null
    temperature?: FloatNullableFilter<"Reading"> | number | null
    soilMoisture?: FloatNullableFilter<"Reading"> | number | null
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
    Pressure?: FloatNullableFilter<"Reading"> | number | null
    controllerId?: StringFilter<"Reading"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }

  export type ReadingOrderByWithRelationInput = {
    id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    recordedAt?: SortOrder
    Pressure?: SortOrder
    controllerId?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type ReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    humidity?: FloatNullableFilter<"Reading"> | number | null
    temperature?: FloatNullableFilter<"Reading"> | number | null
    soilMoisture?: FloatNullableFilter<"Reading"> | number | null
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
    Pressure?: FloatNullableFilter<"Reading"> | number | null
    controllerId?: StringFilter<"Reading"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }, "id">

  export type ReadingOrderByWithAggregationInput = {
    id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    recordedAt?: SortOrder
    Pressure?: SortOrder
    controllerId?: SortOrder
    _count?: ReadingCountOrderByAggregateInput
    _avg?: ReadingAvgOrderByAggregateInput
    _max?: ReadingMaxOrderByAggregateInput
    _min?: ReadingMinOrderByAggregateInput
    _sum?: ReadingSumOrderByAggregateInput
  }

  export type ReadingScalarWhereWithAggregatesInput = {
    AND?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    OR?: ReadingScalarWhereWithAggregatesInput[]
    NOT?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reading"> | string
    humidity?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    soilMoisture?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    recordedAt?: DateTimeWithAggregatesFilter<"Reading"> | Date | string
    Pressure?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    controllerId?: StringWithAggregatesFilter<"Reading"> | string
  }

  export type WaterScheduleRecordWhereInput = {
    AND?: WaterScheduleRecordWhereInput | WaterScheduleRecordWhereInput[]
    OR?: WaterScheduleRecordWhereInput[]
    NOT?: WaterScheduleRecordWhereInput | WaterScheduleRecordWhereInput[]
    id?: StringFilter<"WaterScheduleRecord"> | string
    startTime?: StringFilter<"WaterScheduleRecord"> | string
    endTime?: StringFilter<"WaterScheduleRecord"> | string
    repetitionDays?: IntFilter<"WaterScheduleRecord"> | number
    controllerId?: StringFilter<"WaterScheduleRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }

  export type WaterScheduleRecordOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    repetitionDays?: SortOrder
    controllerId?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type WaterScheduleRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterScheduleRecordWhereInput | WaterScheduleRecordWhereInput[]
    OR?: WaterScheduleRecordWhereInput[]
    NOT?: WaterScheduleRecordWhereInput | WaterScheduleRecordWhereInput[]
    startTime?: StringFilter<"WaterScheduleRecord"> | string
    endTime?: StringFilter<"WaterScheduleRecord"> | string
    repetitionDays?: IntFilter<"WaterScheduleRecord"> | number
    controllerId?: StringFilter<"WaterScheduleRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }, "id">

  export type WaterScheduleRecordOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    repetitionDays?: SortOrder
    controllerId?: SortOrder
    _count?: WaterScheduleRecordCountOrderByAggregateInput
    _avg?: WaterScheduleRecordAvgOrderByAggregateInput
    _max?: WaterScheduleRecordMaxOrderByAggregateInput
    _min?: WaterScheduleRecordMinOrderByAggregateInput
    _sum?: WaterScheduleRecordSumOrderByAggregateInput
  }

  export type WaterScheduleRecordScalarWhereWithAggregatesInput = {
    AND?: WaterScheduleRecordScalarWhereWithAggregatesInput | WaterScheduleRecordScalarWhereWithAggregatesInput[]
    OR?: WaterScheduleRecordScalarWhereWithAggregatesInput[]
    NOT?: WaterScheduleRecordScalarWhereWithAggregatesInput | WaterScheduleRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterScheduleRecord"> | string
    startTime?: StringWithAggregatesFilter<"WaterScheduleRecord"> | string
    endTime?: StringWithAggregatesFilter<"WaterScheduleRecord"> | string
    repetitionDays?: IntWithAggregatesFilter<"WaterScheduleRecord"> | number
    controllerId?: StringWithAggregatesFilter<"WaterScheduleRecord"> | string
  }

  export type SoilMoistureThresholdRecordWhereInput = {
    AND?: SoilMoistureThresholdRecordWhereInput | SoilMoistureThresholdRecordWhereInput[]
    OR?: SoilMoistureThresholdRecordWhereInput[]
    NOT?: SoilMoistureThresholdRecordWhereInput | SoilMoistureThresholdRecordWhereInput[]
    id?: StringFilter<"SoilMoistureThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"SoilMoistureThresholdRecord"> | Date | string
    value?: FloatFilter<"SoilMoistureThresholdRecord"> | number
    controllerId?: StringFilter<"SoilMoistureThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }

  export type SoilMoistureThresholdRecordOrderByWithRelationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type SoilMoistureThresholdRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SoilMoistureThresholdRecordWhereInput | SoilMoistureThresholdRecordWhereInput[]
    OR?: SoilMoistureThresholdRecordWhereInput[]
    NOT?: SoilMoistureThresholdRecordWhereInput | SoilMoistureThresholdRecordWhereInput[]
    recordedAt?: DateTimeFilter<"SoilMoistureThresholdRecord"> | Date | string
    value?: FloatFilter<"SoilMoistureThresholdRecord"> | number
    controllerId?: StringFilter<"SoilMoistureThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }, "id">

  export type SoilMoistureThresholdRecordOrderByWithAggregationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    _count?: SoilMoistureThresholdRecordCountOrderByAggregateInput
    _avg?: SoilMoistureThresholdRecordAvgOrderByAggregateInput
    _max?: SoilMoistureThresholdRecordMaxOrderByAggregateInput
    _min?: SoilMoistureThresholdRecordMinOrderByAggregateInput
    _sum?: SoilMoistureThresholdRecordSumOrderByAggregateInput
  }

  export type SoilMoistureThresholdRecordScalarWhereWithAggregatesInput = {
    AND?: SoilMoistureThresholdRecordScalarWhereWithAggregatesInput | SoilMoistureThresholdRecordScalarWhereWithAggregatesInput[]
    OR?: SoilMoistureThresholdRecordScalarWhereWithAggregatesInput[]
    NOT?: SoilMoistureThresholdRecordScalarWhereWithAggregatesInput | SoilMoistureThresholdRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SoilMoistureThresholdRecord"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"SoilMoistureThresholdRecord"> | Date | string
    value?: FloatWithAggregatesFilter<"SoilMoistureThresholdRecord"> | number
    controllerId?: StringWithAggregatesFilter<"SoilMoistureThresholdRecord"> | string
  }

  export type HumidityThresholdRecordWhereInput = {
    AND?: HumidityThresholdRecordWhereInput | HumidityThresholdRecordWhereInput[]
    OR?: HumidityThresholdRecordWhereInput[]
    NOT?: HumidityThresholdRecordWhereInput | HumidityThresholdRecordWhereInput[]
    id?: StringFilter<"HumidityThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"HumidityThresholdRecord"> | Date | string
    value?: FloatFilter<"HumidityThresholdRecord"> | number
    controllerId?: StringFilter<"HumidityThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }

  export type HumidityThresholdRecordOrderByWithRelationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type HumidityThresholdRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HumidityThresholdRecordWhereInput | HumidityThresholdRecordWhereInput[]
    OR?: HumidityThresholdRecordWhereInput[]
    NOT?: HumidityThresholdRecordWhereInput | HumidityThresholdRecordWhereInput[]
    recordedAt?: DateTimeFilter<"HumidityThresholdRecord"> | Date | string
    value?: FloatFilter<"HumidityThresholdRecord"> | number
    controllerId?: StringFilter<"HumidityThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }, "id">

  export type HumidityThresholdRecordOrderByWithAggregationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    _count?: HumidityThresholdRecordCountOrderByAggregateInput
    _avg?: HumidityThresholdRecordAvgOrderByAggregateInput
    _max?: HumidityThresholdRecordMaxOrderByAggregateInput
    _min?: HumidityThresholdRecordMinOrderByAggregateInput
    _sum?: HumidityThresholdRecordSumOrderByAggregateInput
  }

  export type HumidityThresholdRecordScalarWhereWithAggregatesInput = {
    AND?: HumidityThresholdRecordScalarWhereWithAggregatesInput | HumidityThresholdRecordScalarWhereWithAggregatesInput[]
    OR?: HumidityThresholdRecordScalarWhereWithAggregatesInput[]
    NOT?: HumidityThresholdRecordScalarWhereWithAggregatesInput | HumidityThresholdRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HumidityThresholdRecord"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"HumidityThresholdRecord"> | Date | string
    value?: FloatWithAggregatesFilter<"HumidityThresholdRecord"> | number
    controllerId?: StringWithAggregatesFilter<"HumidityThresholdRecord"> | string
  }

  export type TemperatureThresholdRecordWhereInput = {
    AND?: TemperatureThresholdRecordWhereInput | TemperatureThresholdRecordWhereInput[]
    OR?: TemperatureThresholdRecordWhereInput[]
    NOT?: TemperatureThresholdRecordWhereInput | TemperatureThresholdRecordWhereInput[]
    id?: StringFilter<"TemperatureThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"TemperatureThresholdRecord"> | Date | string
    value?: FloatFilter<"TemperatureThresholdRecord"> | number
    controllerId?: StringFilter<"TemperatureThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }

  export type TemperatureThresholdRecordOrderByWithRelationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    controller?: ControllerOrderByWithRelationInput
  }

  export type TemperatureThresholdRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemperatureThresholdRecordWhereInput | TemperatureThresholdRecordWhereInput[]
    OR?: TemperatureThresholdRecordWhereInput[]
    NOT?: TemperatureThresholdRecordWhereInput | TemperatureThresholdRecordWhereInput[]
    recordedAt?: DateTimeFilter<"TemperatureThresholdRecord"> | Date | string
    value?: FloatFilter<"TemperatureThresholdRecord"> | number
    controllerId?: StringFilter<"TemperatureThresholdRecord"> | string
    controller?: XOR<ControllerRelationFilter, ControllerWhereInput>
  }, "id">

  export type TemperatureThresholdRecordOrderByWithAggregationInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
    _count?: TemperatureThresholdRecordCountOrderByAggregateInput
    _avg?: TemperatureThresholdRecordAvgOrderByAggregateInput
    _max?: TemperatureThresholdRecordMaxOrderByAggregateInput
    _min?: TemperatureThresholdRecordMinOrderByAggregateInput
    _sum?: TemperatureThresholdRecordSumOrderByAggregateInput
  }

  export type TemperatureThresholdRecordScalarWhereWithAggregatesInput = {
    AND?: TemperatureThresholdRecordScalarWhereWithAggregatesInput | TemperatureThresholdRecordScalarWhereWithAggregatesInput[]
    OR?: TemperatureThresholdRecordScalarWhereWithAggregatesInput[]
    NOT?: TemperatureThresholdRecordScalarWhereWithAggregatesInput | TemperatureThresholdRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemperatureThresholdRecord"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"TemperatureThresholdRecord"> | Date | string
    value?: FloatWithAggregatesFilter<"TemperatureThresholdRecord"> | number
    controllerId?: StringWithAggregatesFilter<"TemperatureThresholdRecord"> | string
  }

  export type NewsFeedsWhereInput = {
    AND?: NewsFeedsWhereInput | NewsFeedsWhereInput[]
    OR?: NewsFeedsWhereInput[]
    NOT?: NewsFeedsWhereInput | NewsFeedsWhereInput[]
    id?: StringFilter<"NewsFeeds"> | string
    createdAt?: DateTimeFilter<"NewsFeeds"> | Date | string
    title?: StringFilter<"NewsFeeds"> | string
    content?: StringFilter<"NewsFeeds"> | string
    image?: StringFilter<"NewsFeeds"> | string
    author?: StringFilter<"NewsFeeds"> | string
    isPublic?: BoolFilter<"NewsFeeds"> | boolean
  }

  export type NewsFeedsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    author?: SortOrder
    isPublic?: SortOrder
  }

  export type NewsFeedsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsFeedsWhereInput | NewsFeedsWhereInput[]
    OR?: NewsFeedsWhereInput[]
    NOT?: NewsFeedsWhereInput | NewsFeedsWhereInput[]
    createdAt?: DateTimeFilter<"NewsFeeds"> | Date | string
    title?: StringFilter<"NewsFeeds"> | string
    content?: StringFilter<"NewsFeeds"> | string
    image?: StringFilter<"NewsFeeds"> | string
    author?: StringFilter<"NewsFeeds"> | string
    isPublic?: BoolFilter<"NewsFeeds"> | boolean
  }, "id">

  export type NewsFeedsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    author?: SortOrder
    isPublic?: SortOrder
    _count?: NewsFeedsCountOrderByAggregateInput
    _max?: NewsFeedsMaxOrderByAggregateInput
    _min?: NewsFeedsMinOrderByAggregateInput
  }

  export type NewsFeedsScalarWhereWithAggregatesInput = {
    AND?: NewsFeedsScalarWhereWithAggregatesInput | NewsFeedsScalarWhereWithAggregatesInput[]
    OR?: NewsFeedsScalarWhereWithAggregatesInput[]
    NOT?: NewsFeedsScalarWhereWithAggregatesInput | NewsFeedsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsFeeds"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsFeeds"> | Date | string
    title?: StringWithAggregatesFilter<"NewsFeeds"> | string
    content?: StringWithAggregatesFilter<"NewsFeeds"> | string
    image?: StringWithAggregatesFilter<"NewsFeeds"> | string
    author?: StringWithAggregatesFilter<"NewsFeeds"> | string
    isPublic?: BoolWithAggregatesFilter<"NewsFeeds"> | boolean
  }

  export type AccessTokenWhereInput = {
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    userId?: StringFilter<"AccessToken"> | string
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    userId?: string
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId">

  export type AccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: AccessTokenCountOrderByAggregateInput
    _max?: AccessTokenMaxOrderByAggregateInput
    _min?: AccessTokenMinOrderByAggregateInput
  }

  export type AccessTokenScalarWhereWithAggregatesInput = {
    AND?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    OR?: AccessTokenScalarWhereWithAggregatesInput[]
    NOT?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessToken"> | string
    token?: StringWithAggregatesFilter<"AccessToken"> | string
    userId?: StringWithAggregatesFilter<"AccessToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    password: string
    mqttBrokerUsername?: string | null
    mqttBrokerPassword?: string | null
    mqttBrokerPort?: string | null
    mqttBrokerUrl?: string | null
    isSuper: boolean
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    password: string
    mqttBrokerUsername?: string | null
    mqttBrokerPassword?: string | null
    mqttBrokerPort?: string | null
    mqttBrokerUrl?: string | null
    isSuper: boolean
  }

  export type AdminUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mqttBrokerUsername?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPassword?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPort?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuper?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mqttBrokerUsername?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPassword?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPort?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuper?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminCreateManyInput = {
    id?: string
    createdAt?: Date | string
    username: string
    email: string
    password: string
    mqttBrokerUsername?: string | null
    mqttBrokerPassword?: string | null
    mqttBrokerPort?: string | null
    mqttBrokerUrl?: string | null
    isSuper: boolean
  }

  export type AdminUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mqttBrokerUsername?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPassword?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPort?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuper?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mqttBrokerUsername?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPassword?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerPort?: NullableStringFieldUpdateOperationsInput | string | null
    mqttBrokerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isSuper?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    controllers?: ControllerCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    controllers?: ControllerUncheckedCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    controllers?: ControllerUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    controllers?: ControllerUncheckedUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
  }

  export type ControllerCreateInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    readings?: ReadingCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerUpdateInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateManyInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
  }

  export type ControllerUpdateManyMutationInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ControllerUncheckedUpdateManyInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingCreateInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
    controller: ControllerCreateNestedOneWithoutReadingsInput
  }

  export type ReadingUncheckedCreateInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
    controllerId: string
  }

  export type ReadingUpdateInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    controller?: ControllerUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type ReadingUncheckedUpdateInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingCreateManyInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
    controllerId: string
  }

  export type ReadingUpdateManyMutationInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReadingUncheckedUpdateManyInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type WaterScheduleRecordCreateInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
    controller: ControllerCreateNestedOneWithoutWaterScheduleRecordsInput
  }

  export type WaterScheduleRecordUncheckedCreateInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
    controllerId: string
  }

  export type WaterScheduleRecordUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
    controller?: ControllerUpdateOneRequiredWithoutWaterScheduleRecordsNestedInput
  }

  export type WaterScheduleRecordUncheckedUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type WaterScheduleRecordCreateManyInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
    controllerId: string
  }

  export type WaterScheduleRecordUpdateManyMutationInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
  }

  export type WaterScheduleRecordUncheckedUpdateManyInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type SoilMoistureThresholdRecordCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controller: ControllerCreateNestedOneWithoutSoilMoistureThresholdRecordsInput
  }

  export type SoilMoistureThresholdRecordUncheckedCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type SoilMoistureThresholdRecordUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controller?: ControllerUpdateOneRequiredWithoutSoilMoistureThresholdRecordsNestedInput
  }

  export type SoilMoistureThresholdRecordUncheckedUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type SoilMoistureThresholdRecordCreateManyInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type SoilMoistureThresholdRecordUpdateManyMutationInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SoilMoistureThresholdRecordUncheckedUpdateManyInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type HumidityThresholdRecordCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controller: ControllerCreateNestedOneWithoutHumidityThresholdRecordInput
  }

  export type HumidityThresholdRecordUncheckedCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type HumidityThresholdRecordUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controller?: ControllerUpdateOneRequiredWithoutHumidityThresholdRecordNestedInput
  }

  export type HumidityThresholdRecordUncheckedUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type HumidityThresholdRecordCreateManyInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type HumidityThresholdRecordUpdateManyMutationInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HumidityThresholdRecordUncheckedUpdateManyInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureThresholdRecordCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controller: ControllerCreateNestedOneWithoutTemperatureThresholdRecordInput
  }

  export type TemperatureThresholdRecordUncheckedCreateInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type TemperatureThresholdRecordUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controller?: ControllerUpdateOneRequiredWithoutTemperatureThresholdRecordNestedInput
  }

  export type TemperatureThresholdRecordUncheckedUpdateInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type TemperatureThresholdRecordCreateManyInput = {
    id?: string
    recordedAt?: Date | string
    value: number
    controllerId: string
  }

  export type TemperatureThresholdRecordUpdateManyMutationInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TemperatureThresholdRecordUncheckedUpdateManyInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
    controllerId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsFeedsCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    content: string
    image: string
    author: string
    isPublic: boolean
  }

  export type NewsFeedsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    title: string
    content: string
    image: string
    author: string
    isPublic: boolean
  }

  export type NewsFeedsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewsFeedsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewsFeedsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    title: string
    content: string
    image: string
    author: string
    isPublic: boolean
  }

  export type NewsFeedsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NewsFeedsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccessTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccessTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccessTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mqttBrokerUsername?: SortOrder
    mqttBrokerPassword?: SortOrder
    mqttBrokerPort?: SortOrder
    mqttBrokerUrl?: SortOrder
    isSuper?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mqttBrokerUsername?: SortOrder
    mqttBrokerPassword?: SortOrder
    mqttBrokerPort?: SortOrder
    mqttBrokerUrl?: SortOrder
    isSuper?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mqttBrokerUsername?: SortOrder
    mqttBrokerPassword?: SortOrder
    mqttBrokerPort?: SortOrder
    mqttBrokerUrl?: SortOrder
    isSuper?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ControllerListRelationFilter = {
    every?: ControllerWhereInput
    some?: ControllerWhereInput
    none?: ControllerWhereInput
  }

  export type AccessTokenListRelationFilter = {
    every?: AccessTokenWhereInput
    some?: AccessTokenWhereInput
    none?: AccessTokenWhereInput
  }

  export type ControllerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    cid?: SortOrder
    mobile?: SortOrder
    gewog?: SortOrder
    dzongkhag?: SortOrder
    registeredAt?: SortOrder
    verifiedAt?: SortOrder
    posLat?: SortOrder
    posLong?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerId?: SortOrder
    brokerPort?: SortOrder
    brokerIp?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    otp?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerPort?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    cid?: SortOrder
    mobile?: SortOrder
    gewog?: SortOrder
    dzongkhag?: SortOrder
    registeredAt?: SortOrder
    verifiedAt?: SortOrder
    posLat?: SortOrder
    posLong?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerId?: SortOrder
    brokerPort?: SortOrder
    brokerIp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    cid?: SortOrder
    mobile?: SortOrder
    gewog?: SortOrder
    dzongkhag?: SortOrder
    registeredAt?: SortOrder
    verifiedAt?: SortOrder
    posLat?: SortOrder
    posLong?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerId?: SortOrder
    brokerPort?: SortOrder
    brokerIp?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    otp?: SortOrder
    greenhouseCount?: SortOrder
    irrigationCount?: SortOrder
    brokerPort?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReadingListRelationFilter = {
    every?: ReadingWhereInput
    some?: ReadingWhereInput
    none?: ReadingWhereInput
  }

  export type WaterScheduleRecordListRelationFilter = {
    every?: WaterScheduleRecordWhereInput
    some?: WaterScheduleRecordWhereInput
    none?: WaterScheduleRecordWhereInput
  }

  export type SoilMoistureThresholdRecordListRelationFilter = {
    every?: SoilMoistureThresholdRecordWhereInput
    some?: SoilMoistureThresholdRecordWhereInput
    none?: SoilMoistureThresholdRecordWhereInput
  }

  export type HumidityThresholdRecordListRelationFilter = {
    every?: HumidityThresholdRecordWhereInput
    some?: HumidityThresholdRecordWhereInput
    none?: HumidityThresholdRecordWhereInput
  }

  export type TemperatureThresholdRecordListRelationFilter = {
    every?: TemperatureThresholdRecordWhereInput
    some?: TemperatureThresholdRecordWhereInput
    none?: TemperatureThresholdRecordWhereInput
  }

  export type ReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterScheduleRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoilMoistureThresholdRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HumidityThresholdRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemperatureThresholdRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ControllerCountOrderByAggregateInput = {
    id?: SortOrder
    controllerId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type ControllerMaxOrderByAggregateInput = {
    id?: SortOrder
    controllerId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type ControllerMinOrderByAggregateInput = {
    id?: SortOrder
    controllerId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ControllerRelationFilter = {
    is?: ControllerWhereInput
    isNot?: ControllerWhereInput
  }

  export type ReadingCountOrderByAggregateInput = {
    id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    recordedAt?: SortOrder
    Pressure?: SortOrder
    controllerId?: SortOrder
  }

  export type ReadingAvgOrderByAggregateInput = {
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    Pressure?: SortOrder
  }

  export type ReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    recordedAt?: SortOrder
    Pressure?: SortOrder
    controllerId?: SortOrder
  }

  export type ReadingMinOrderByAggregateInput = {
    id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    recordedAt?: SortOrder
    Pressure?: SortOrder
    controllerId?: SortOrder
  }

  export type ReadingSumOrderByAggregateInput = {
    humidity?: SortOrder
    temperature?: SortOrder
    soilMoisture?: SortOrder
    Pressure?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type WaterScheduleRecordCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    repetitionDays?: SortOrder
    controllerId?: SortOrder
  }

  export type WaterScheduleRecordAvgOrderByAggregateInput = {
    repetitionDays?: SortOrder
  }

  export type WaterScheduleRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    repetitionDays?: SortOrder
    controllerId?: SortOrder
  }

  export type WaterScheduleRecordMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    repetitionDays?: SortOrder
    controllerId?: SortOrder
  }

  export type WaterScheduleRecordSumOrderByAggregateInput = {
    repetitionDays?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SoilMoistureThresholdRecordCountOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type SoilMoistureThresholdRecordAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type SoilMoistureThresholdRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type SoilMoistureThresholdRecordMinOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type SoilMoistureThresholdRecordSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HumidityThresholdRecordCountOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type HumidityThresholdRecordAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type HumidityThresholdRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type HumidityThresholdRecordMinOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type HumidityThresholdRecordSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type TemperatureThresholdRecordCountOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type TemperatureThresholdRecordAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type TemperatureThresholdRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type TemperatureThresholdRecordMinOrderByAggregateInput = {
    id?: SortOrder
    recordedAt?: SortOrder
    value?: SortOrder
    controllerId?: SortOrder
  }

  export type TemperatureThresholdRecordSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type NewsFeedsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    author?: SortOrder
    isPublic?: SortOrder
  }

  export type NewsFeedsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    author?: SortOrder
    isPublic?: SortOrder
  }

  export type NewsFeedsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    author?: SortOrder
    isPublic?: SortOrder
  }

  export type AccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ControllerCreateNestedManyWithoutUserInput = {
    create?: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput> | ControllerCreateWithoutUserInput[] | ControllerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutUserInput | ControllerCreateOrConnectWithoutUserInput[]
    createMany?: ControllerCreateManyUserInputEnvelope
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
  }

  export type AccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type ControllerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput> | ControllerCreateWithoutUserInput[] | ControllerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutUserInput | ControllerCreateOrConnectWithoutUserInput[]
    createMany?: ControllerCreateManyUserInputEnvelope
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ControllerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput> | ControllerCreateWithoutUserInput[] | ControllerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutUserInput | ControllerCreateOrConnectWithoutUserInput[]
    upsert?: ControllerUpsertWithWhereUniqueWithoutUserInput | ControllerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ControllerCreateManyUserInputEnvelope
    set?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    disconnect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    delete?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    update?: ControllerUpdateWithWhereUniqueWithoutUserInput | ControllerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ControllerUpdateManyWithWhereWithoutUserInput | ControllerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
  }

  export type AccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type ControllerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput> | ControllerCreateWithoutUserInput[] | ControllerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControllerCreateOrConnectWithoutUserInput | ControllerCreateOrConnectWithoutUserInput[]
    upsert?: ControllerUpsertWithWhereUniqueWithoutUserInput | ControllerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ControllerCreateManyUserInputEnvelope
    set?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    disconnect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    delete?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    connect?: ControllerWhereUniqueInput | ControllerWhereUniqueInput[]
    update?: ControllerUpdateWithWhereUniqueWithoutUserInput | ControllerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ControllerUpdateManyWithWhereWithoutUserInput | ControllerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutControllersInput = {
    create?: XOR<UserCreateWithoutControllersInput, UserUncheckedCreateWithoutControllersInput>
    connectOrCreate?: UserCreateOrConnectWithoutControllersInput
    connect?: UserWhereUniqueInput
  }

  export type ReadingCreateNestedManyWithoutControllerInput = {
    create?: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput> | ReadingCreateWithoutControllerInput[] | ReadingUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutControllerInput | ReadingCreateOrConnectWithoutControllerInput[]
    createMany?: ReadingCreateManyControllerInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type WaterScheduleRecordCreateNestedManyWithoutControllerInput = {
    create?: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput> | WaterScheduleRecordCreateWithoutControllerInput[] | WaterScheduleRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: WaterScheduleRecordCreateOrConnectWithoutControllerInput | WaterScheduleRecordCreateOrConnectWithoutControllerInput[]
    createMany?: WaterScheduleRecordCreateManyControllerInputEnvelope
    connect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
  }

  export type SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput = {
    create?: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput> | SoilMoistureThresholdRecordCreateWithoutControllerInput[] | SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput | SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: SoilMoistureThresholdRecordCreateManyControllerInputEnvelope
    connect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
  }

  export type HumidityThresholdRecordCreateNestedManyWithoutControllerInput = {
    create?: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput> | HumidityThresholdRecordCreateWithoutControllerInput[] | HumidityThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: HumidityThresholdRecordCreateOrConnectWithoutControllerInput | HumidityThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: HumidityThresholdRecordCreateManyControllerInputEnvelope
    connect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
  }

  export type TemperatureThresholdRecordCreateNestedManyWithoutControllerInput = {
    create?: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput> | TemperatureThresholdRecordCreateWithoutControllerInput[] | TemperatureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: TemperatureThresholdRecordCreateOrConnectWithoutControllerInput | TemperatureThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: TemperatureThresholdRecordCreateManyControllerInputEnvelope
    connect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput> | ReadingCreateWithoutControllerInput[] | ReadingUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutControllerInput | ReadingCreateOrConnectWithoutControllerInput[]
    createMany?: ReadingCreateManyControllerInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput> | WaterScheduleRecordCreateWithoutControllerInput[] | WaterScheduleRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: WaterScheduleRecordCreateOrConnectWithoutControllerInput | WaterScheduleRecordCreateOrConnectWithoutControllerInput[]
    createMany?: WaterScheduleRecordCreateManyControllerInputEnvelope
    connect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
  }

  export type SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput> | SoilMoistureThresholdRecordCreateWithoutControllerInput[] | SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput | SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: SoilMoistureThresholdRecordCreateManyControllerInputEnvelope
    connect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
  }

  export type HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput> | HumidityThresholdRecordCreateWithoutControllerInput[] | HumidityThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: HumidityThresholdRecordCreateOrConnectWithoutControllerInput | HumidityThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: HumidityThresholdRecordCreateManyControllerInputEnvelope
    connect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
  }

  export type TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput = {
    create?: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput> | TemperatureThresholdRecordCreateWithoutControllerInput[] | TemperatureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: TemperatureThresholdRecordCreateOrConnectWithoutControllerInput | TemperatureThresholdRecordCreateOrConnectWithoutControllerInput[]
    createMany?: TemperatureThresholdRecordCreateManyControllerInputEnvelope
    connect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type UserUpdateOneRequiredWithoutControllersNestedInput = {
    create?: XOR<UserCreateWithoutControllersInput, UserUncheckedCreateWithoutControllersInput>
    connectOrCreate?: UserCreateOrConnectWithoutControllersInput
    upsert?: UserUpsertWithoutControllersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutControllersInput, UserUpdateWithoutControllersInput>, UserUncheckedUpdateWithoutControllersInput>
  }

  export type ReadingUpdateManyWithoutControllerNestedInput = {
    create?: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput> | ReadingCreateWithoutControllerInput[] | ReadingUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutControllerInput | ReadingCreateOrConnectWithoutControllerInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutControllerInput | ReadingUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: ReadingCreateManyControllerInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutControllerInput | ReadingUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutControllerInput | ReadingUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type WaterScheduleRecordUpdateManyWithoutControllerNestedInput = {
    create?: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput> | WaterScheduleRecordCreateWithoutControllerInput[] | WaterScheduleRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: WaterScheduleRecordCreateOrConnectWithoutControllerInput | WaterScheduleRecordCreateOrConnectWithoutControllerInput[]
    upsert?: WaterScheduleRecordUpsertWithWhereUniqueWithoutControllerInput | WaterScheduleRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: WaterScheduleRecordCreateManyControllerInputEnvelope
    set?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    disconnect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    delete?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    connect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    update?: WaterScheduleRecordUpdateWithWhereUniqueWithoutControllerInput | WaterScheduleRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: WaterScheduleRecordUpdateManyWithWhereWithoutControllerInput | WaterScheduleRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: WaterScheduleRecordScalarWhereInput | WaterScheduleRecordScalarWhereInput[]
  }

  export type SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput = {
    create?: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput> | SoilMoistureThresholdRecordCreateWithoutControllerInput[] | SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput | SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: SoilMoistureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | SoilMoistureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: SoilMoistureThresholdRecordCreateManyControllerInputEnvelope
    set?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    disconnect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    delete?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    connect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    update?: SoilMoistureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | SoilMoistureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: SoilMoistureThresholdRecordUpdateManyWithWhereWithoutControllerInput | SoilMoistureThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: SoilMoistureThresholdRecordScalarWhereInput | SoilMoistureThresholdRecordScalarWhereInput[]
  }

  export type HumidityThresholdRecordUpdateManyWithoutControllerNestedInput = {
    create?: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput> | HumidityThresholdRecordCreateWithoutControllerInput[] | HumidityThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: HumidityThresholdRecordCreateOrConnectWithoutControllerInput | HumidityThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: HumidityThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | HumidityThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: HumidityThresholdRecordCreateManyControllerInputEnvelope
    set?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    disconnect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    delete?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    connect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    update?: HumidityThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | HumidityThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: HumidityThresholdRecordUpdateManyWithWhereWithoutControllerInput | HumidityThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: HumidityThresholdRecordScalarWhereInput | HumidityThresholdRecordScalarWhereInput[]
  }

  export type TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput = {
    create?: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput> | TemperatureThresholdRecordCreateWithoutControllerInput[] | TemperatureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: TemperatureThresholdRecordCreateOrConnectWithoutControllerInput | TemperatureThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: TemperatureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | TemperatureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: TemperatureThresholdRecordCreateManyControllerInputEnvelope
    set?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    disconnect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    delete?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    connect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    update?: TemperatureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | TemperatureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: TemperatureThresholdRecordUpdateManyWithWhereWithoutControllerInput | TemperatureThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: TemperatureThresholdRecordScalarWhereInput | TemperatureThresholdRecordScalarWhereInput[]
  }

  export type ReadingUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput> | ReadingCreateWithoutControllerInput[] | ReadingUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutControllerInput | ReadingCreateOrConnectWithoutControllerInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutControllerInput | ReadingUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: ReadingCreateManyControllerInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutControllerInput | ReadingUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutControllerInput | ReadingUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput> | WaterScheduleRecordCreateWithoutControllerInput[] | WaterScheduleRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: WaterScheduleRecordCreateOrConnectWithoutControllerInput | WaterScheduleRecordCreateOrConnectWithoutControllerInput[]
    upsert?: WaterScheduleRecordUpsertWithWhereUniqueWithoutControllerInput | WaterScheduleRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: WaterScheduleRecordCreateManyControllerInputEnvelope
    set?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    disconnect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    delete?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    connect?: WaterScheduleRecordWhereUniqueInput | WaterScheduleRecordWhereUniqueInput[]
    update?: WaterScheduleRecordUpdateWithWhereUniqueWithoutControllerInput | WaterScheduleRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: WaterScheduleRecordUpdateManyWithWhereWithoutControllerInput | WaterScheduleRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: WaterScheduleRecordScalarWhereInput | WaterScheduleRecordScalarWhereInput[]
  }

  export type SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput> | SoilMoistureThresholdRecordCreateWithoutControllerInput[] | SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput | SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: SoilMoistureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | SoilMoistureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: SoilMoistureThresholdRecordCreateManyControllerInputEnvelope
    set?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    disconnect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    delete?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    connect?: SoilMoistureThresholdRecordWhereUniqueInput | SoilMoistureThresholdRecordWhereUniqueInput[]
    update?: SoilMoistureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | SoilMoistureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: SoilMoistureThresholdRecordUpdateManyWithWhereWithoutControllerInput | SoilMoistureThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: SoilMoistureThresholdRecordScalarWhereInput | SoilMoistureThresholdRecordScalarWhereInput[]
  }

  export type HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput> | HumidityThresholdRecordCreateWithoutControllerInput[] | HumidityThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: HumidityThresholdRecordCreateOrConnectWithoutControllerInput | HumidityThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: HumidityThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | HumidityThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: HumidityThresholdRecordCreateManyControllerInputEnvelope
    set?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    disconnect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    delete?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    connect?: HumidityThresholdRecordWhereUniqueInput | HumidityThresholdRecordWhereUniqueInput[]
    update?: HumidityThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | HumidityThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: HumidityThresholdRecordUpdateManyWithWhereWithoutControllerInput | HumidityThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: HumidityThresholdRecordScalarWhereInput | HumidityThresholdRecordScalarWhereInput[]
  }

  export type TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput = {
    create?: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput> | TemperatureThresholdRecordCreateWithoutControllerInput[] | TemperatureThresholdRecordUncheckedCreateWithoutControllerInput[]
    connectOrCreate?: TemperatureThresholdRecordCreateOrConnectWithoutControllerInput | TemperatureThresholdRecordCreateOrConnectWithoutControllerInput[]
    upsert?: TemperatureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput | TemperatureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput[]
    createMany?: TemperatureThresholdRecordCreateManyControllerInputEnvelope
    set?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    disconnect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    delete?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    connect?: TemperatureThresholdRecordWhereUniqueInput | TemperatureThresholdRecordWhereUniqueInput[]
    update?: TemperatureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput | TemperatureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput[]
    updateMany?: TemperatureThresholdRecordUpdateManyWithWhereWithoutControllerInput | TemperatureThresholdRecordUpdateManyWithWhereWithoutControllerInput[]
    deleteMany?: TemperatureThresholdRecordScalarWhereInput | TemperatureThresholdRecordScalarWhereInput[]
  }

  export type ControllerCreateNestedOneWithoutReadingsInput = {
    create?: XOR<ControllerCreateWithoutReadingsInput, ControllerUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutReadingsInput
    connect?: ControllerWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ControllerUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<ControllerCreateWithoutReadingsInput, ControllerUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutReadingsInput
    upsert?: ControllerUpsertWithoutReadingsInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutReadingsInput, ControllerUpdateWithoutReadingsInput>, ControllerUncheckedUpdateWithoutReadingsInput>
  }

  export type ControllerCreateNestedOneWithoutWaterScheduleRecordsInput = {
    create?: XOR<ControllerCreateWithoutWaterScheduleRecordsInput, ControllerUncheckedCreateWithoutWaterScheduleRecordsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutWaterScheduleRecordsInput
    connect?: ControllerWhereUniqueInput
  }

  export type ControllerUpdateOneRequiredWithoutWaterScheduleRecordsNestedInput = {
    create?: XOR<ControllerCreateWithoutWaterScheduleRecordsInput, ControllerUncheckedCreateWithoutWaterScheduleRecordsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutWaterScheduleRecordsInput
    upsert?: ControllerUpsertWithoutWaterScheduleRecordsInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutWaterScheduleRecordsInput, ControllerUpdateWithoutWaterScheduleRecordsInput>, ControllerUncheckedUpdateWithoutWaterScheduleRecordsInput>
  }

  export type ControllerCreateNestedOneWithoutSoilMoistureThresholdRecordsInput = {
    create?: XOR<ControllerCreateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedCreateWithoutSoilMoistureThresholdRecordsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutSoilMoistureThresholdRecordsInput
    connect?: ControllerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ControllerUpdateOneRequiredWithoutSoilMoistureThresholdRecordsNestedInput = {
    create?: XOR<ControllerCreateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedCreateWithoutSoilMoistureThresholdRecordsInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutSoilMoistureThresholdRecordsInput
    upsert?: ControllerUpsertWithoutSoilMoistureThresholdRecordsInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutSoilMoistureThresholdRecordsInput, ControllerUpdateWithoutSoilMoistureThresholdRecordsInput>, ControllerUncheckedUpdateWithoutSoilMoistureThresholdRecordsInput>
  }

  export type ControllerCreateNestedOneWithoutHumidityThresholdRecordInput = {
    create?: XOR<ControllerCreateWithoutHumidityThresholdRecordInput, ControllerUncheckedCreateWithoutHumidityThresholdRecordInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutHumidityThresholdRecordInput
    connect?: ControllerWhereUniqueInput
  }

  export type ControllerUpdateOneRequiredWithoutHumidityThresholdRecordNestedInput = {
    create?: XOR<ControllerCreateWithoutHumidityThresholdRecordInput, ControllerUncheckedCreateWithoutHumidityThresholdRecordInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutHumidityThresholdRecordInput
    upsert?: ControllerUpsertWithoutHumidityThresholdRecordInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutHumidityThresholdRecordInput, ControllerUpdateWithoutHumidityThresholdRecordInput>, ControllerUncheckedUpdateWithoutHumidityThresholdRecordInput>
  }

  export type ControllerCreateNestedOneWithoutTemperatureThresholdRecordInput = {
    create?: XOR<ControllerCreateWithoutTemperatureThresholdRecordInput, ControllerUncheckedCreateWithoutTemperatureThresholdRecordInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutTemperatureThresholdRecordInput
    connect?: ControllerWhereUniqueInput
  }

  export type ControllerUpdateOneRequiredWithoutTemperatureThresholdRecordNestedInput = {
    create?: XOR<ControllerCreateWithoutTemperatureThresholdRecordInput, ControllerUncheckedCreateWithoutTemperatureThresholdRecordInput>
    connectOrCreate?: ControllerCreateOrConnectWithoutTemperatureThresholdRecordInput
    upsert?: ControllerUpsertWithoutTemperatureThresholdRecordInput
    connect?: ControllerWhereUniqueInput
    update?: XOR<XOR<ControllerUpdateToOneWithWhereWithoutTemperatureThresholdRecordInput, ControllerUpdateWithoutTemperatureThresholdRecordInput>, ControllerUncheckedUpdateWithoutTemperatureThresholdRecordInput>
  }

  export type UserCreateNestedOneWithoutAccessTokenInput = {
    create?: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccessTokenNestedInput = {
    create?: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput
    upsert?: UserUpsertWithoutAccessTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessTokenInput, UserUpdateWithoutAccessTokenInput>, UserUncheckedUpdateWithoutAccessTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ControllerCreateWithoutUserInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    readings?: ReadingCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutUserInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutUserInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput>
  }

  export type ControllerCreateManyUserInputEnvelope = {
    data: ControllerCreateManyUserInput | ControllerCreateManyUserInput[]
  }

  export type AccessTokenCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccessTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccessTokenCreateOrConnectWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenCreateManyUserInputEnvelope = {
    data: AccessTokenCreateManyUserInput | AccessTokenCreateManyUserInput[]
  }

  export type ControllerUpsertWithWhereUniqueWithoutUserInput = {
    where: ControllerWhereUniqueInput
    update: XOR<ControllerUpdateWithoutUserInput, ControllerUncheckedUpdateWithoutUserInput>
    create: XOR<ControllerCreateWithoutUserInput, ControllerUncheckedCreateWithoutUserInput>
  }

  export type ControllerUpdateWithWhereUniqueWithoutUserInput = {
    where: ControllerWhereUniqueInput
    data: XOR<ControllerUpdateWithoutUserInput, ControllerUncheckedUpdateWithoutUserInput>
  }

  export type ControllerUpdateManyWithWhereWithoutUserInput = {
    where: ControllerScalarWhereInput
    data: XOR<ControllerUpdateManyMutationInput, ControllerUncheckedUpdateManyWithoutUserInput>
  }

  export type ControllerScalarWhereInput = {
    AND?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
    OR?: ControllerScalarWhereInput[]
    NOT?: ControllerScalarWhereInput | ControllerScalarWhereInput[]
    id?: StringFilter<"Controller"> | string
    controllerId?: StringFilter<"Controller"> | string
    type?: EnumTypeFilter<"Controller"> | $Enums.Type
    name?: StringFilter<"Controller"> | string
    userId?: StringFilter<"Controller"> | string
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessTokenScalarWhereInput = {
    AND?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    OR?: AccessTokenScalarWhereInput[]
    NOT?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    userId?: StringFilter<"AccessToken"> | string
    createdAt?: DateTimeFilter<"AccessToken"> | Date | string
    expiresAt?: DateTimeFilter<"AccessToken"> | Date | string
  }

  export type UserCreateWithoutControllersInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    accessToken?: AccessTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutControllersInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutControllersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutControllersInput, UserUncheckedCreateWithoutControllersInput>
  }

  export type ReadingCreateWithoutControllerInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
  }

  export type ReadingUncheckedCreateWithoutControllerInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
  }

  export type ReadingCreateOrConnectWithoutControllerInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput>
  }

  export type ReadingCreateManyControllerInputEnvelope = {
    data: ReadingCreateManyControllerInput | ReadingCreateManyControllerInput[]
  }

  export type WaterScheduleRecordCreateWithoutControllerInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
  }

  export type WaterScheduleRecordUncheckedCreateWithoutControllerInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
  }

  export type WaterScheduleRecordCreateOrConnectWithoutControllerInput = {
    where: WaterScheduleRecordWhereUniqueInput
    create: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput>
  }

  export type WaterScheduleRecordCreateManyControllerInputEnvelope = {
    data: WaterScheduleRecordCreateManyControllerInput | WaterScheduleRecordCreateManyControllerInput[]
  }

  export type SoilMoistureThresholdRecordCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type SoilMoistureThresholdRecordCreateOrConnectWithoutControllerInput = {
    where: SoilMoistureThresholdRecordWhereUniqueInput
    create: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type SoilMoistureThresholdRecordCreateManyControllerInputEnvelope = {
    data: SoilMoistureThresholdRecordCreateManyControllerInput | SoilMoistureThresholdRecordCreateManyControllerInput[]
  }

  export type HumidityThresholdRecordCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type HumidityThresholdRecordUncheckedCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type HumidityThresholdRecordCreateOrConnectWithoutControllerInput = {
    where: HumidityThresholdRecordWhereUniqueInput
    create: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type HumidityThresholdRecordCreateManyControllerInputEnvelope = {
    data: HumidityThresholdRecordCreateManyControllerInput | HumidityThresholdRecordCreateManyControllerInput[]
  }

  export type TemperatureThresholdRecordCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type TemperatureThresholdRecordUncheckedCreateWithoutControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type TemperatureThresholdRecordCreateOrConnectWithoutControllerInput = {
    where: TemperatureThresholdRecordWhereUniqueInput
    create: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type TemperatureThresholdRecordCreateManyControllerInputEnvelope = {
    data: TemperatureThresholdRecordCreateManyControllerInput | TemperatureThresholdRecordCreateManyControllerInput[]
  }

  export type UserUpsertWithoutControllersInput = {
    update: XOR<UserUpdateWithoutControllersInput, UserUncheckedUpdateWithoutControllersInput>
    create: XOR<UserCreateWithoutControllersInput, UserUncheckedCreateWithoutControllersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutControllersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutControllersInput, UserUncheckedUpdateWithoutControllersInput>
  }

  export type UserUpdateWithoutControllersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    accessToken?: AccessTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutControllersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    accessToken?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReadingUpsertWithWhereUniqueWithoutControllerInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutControllerInput, ReadingUncheckedUpdateWithoutControllerInput>
    create: XOR<ReadingCreateWithoutControllerInput, ReadingUncheckedCreateWithoutControllerInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutControllerInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutControllerInput, ReadingUncheckedUpdateWithoutControllerInput>
  }

  export type ReadingUpdateManyWithWhereWithoutControllerInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutControllerInput>
  }

  export type ReadingScalarWhereInput = {
    AND?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    OR?: ReadingScalarWhereInput[]
    NOT?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    id?: StringFilter<"Reading"> | string
    humidity?: FloatNullableFilter<"Reading"> | number | null
    temperature?: FloatNullableFilter<"Reading"> | number | null
    soilMoisture?: FloatNullableFilter<"Reading"> | number | null
    recordedAt?: DateTimeFilter<"Reading"> | Date | string
    Pressure?: FloatNullableFilter<"Reading"> | number | null
    controllerId?: StringFilter<"Reading"> | string
  }

  export type WaterScheduleRecordUpsertWithWhereUniqueWithoutControllerInput = {
    where: WaterScheduleRecordWhereUniqueInput
    update: XOR<WaterScheduleRecordUpdateWithoutControllerInput, WaterScheduleRecordUncheckedUpdateWithoutControllerInput>
    create: XOR<WaterScheduleRecordCreateWithoutControllerInput, WaterScheduleRecordUncheckedCreateWithoutControllerInput>
  }

  export type WaterScheduleRecordUpdateWithWhereUniqueWithoutControllerInput = {
    where: WaterScheduleRecordWhereUniqueInput
    data: XOR<WaterScheduleRecordUpdateWithoutControllerInput, WaterScheduleRecordUncheckedUpdateWithoutControllerInput>
  }

  export type WaterScheduleRecordUpdateManyWithWhereWithoutControllerInput = {
    where: WaterScheduleRecordScalarWhereInput
    data: XOR<WaterScheduleRecordUpdateManyMutationInput, WaterScheduleRecordUncheckedUpdateManyWithoutControllerInput>
  }

  export type WaterScheduleRecordScalarWhereInput = {
    AND?: WaterScheduleRecordScalarWhereInput | WaterScheduleRecordScalarWhereInput[]
    OR?: WaterScheduleRecordScalarWhereInput[]
    NOT?: WaterScheduleRecordScalarWhereInput | WaterScheduleRecordScalarWhereInput[]
    id?: StringFilter<"WaterScheduleRecord"> | string
    startTime?: StringFilter<"WaterScheduleRecord"> | string
    endTime?: StringFilter<"WaterScheduleRecord"> | string
    repetitionDays?: IntFilter<"WaterScheduleRecord"> | number
    controllerId?: StringFilter<"WaterScheduleRecord"> | string
  }

  export type SoilMoistureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput = {
    where: SoilMoistureThresholdRecordWhereUniqueInput
    update: XOR<SoilMoistureThresholdRecordUpdateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedUpdateWithoutControllerInput>
    create: XOR<SoilMoistureThresholdRecordCreateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type SoilMoistureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput = {
    where: SoilMoistureThresholdRecordWhereUniqueInput
    data: XOR<SoilMoistureThresholdRecordUpdateWithoutControllerInput, SoilMoistureThresholdRecordUncheckedUpdateWithoutControllerInput>
  }

  export type SoilMoistureThresholdRecordUpdateManyWithWhereWithoutControllerInput = {
    where: SoilMoistureThresholdRecordScalarWhereInput
    data: XOR<SoilMoistureThresholdRecordUpdateManyMutationInput, SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerInput>
  }

  export type SoilMoistureThresholdRecordScalarWhereInput = {
    AND?: SoilMoistureThresholdRecordScalarWhereInput | SoilMoistureThresholdRecordScalarWhereInput[]
    OR?: SoilMoistureThresholdRecordScalarWhereInput[]
    NOT?: SoilMoistureThresholdRecordScalarWhereInput | SoilMoistureThresholdRecordScalarWhereInput[]
    id?: StringFilter<"SoilMoistureThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"SoilMoistureThresholdRecord"> | Date | string
    value?: FloatFilter<"SoilMoistureThresholdRecord"> | number
    controllerId?: StringFilter<"SoilMoistureThresholdRecord"> | string
  }

  export type HumidityThresholdRecordUpsertWithWhereUniqueWithoutControllerInput = {
    where: HumidityThresholdRecordWhereUniqueInput
    update: XOR<HumidityThresholdRecordUpdateWithoutControllerInput, HumidityThresholdRecordUncheckedUpdateWithoutControllerInput>
    create: XOR<HumidityThresholdRecordCreateWithoutControllerInput, HumidityThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type HumidityThresholdRecordUpdateWithWhereUniqueWithoutControllerInput = {
    where: HumidityThresholdRecordWhereUniqueInput
    data: XOR<HumidityThresholdRecordUpdateWithoutControllerInput, HumidityThresholdRecordUncheckedUpdateWithoutControllerInput>
  }

  export type HumidityThresholdRecordUpdateManyWithWhereWithoutControllerInput = {
    where: HumidityThresholdRecordScalarWhereInput
    data: XOR<HumidityThresholdRecordUpdateManyMutationInput, HumidityThresholdRecordUncheckedUpdateManyWithoutControllerInput>
  }

  export type HumidityThresholdRecordScalarWhereInput = {
    AND?: HumidityThresholdRecordScalarWhereInput | HumidityThresholdRecordScalarWhereInput[]
    OR?: HumidityThresholdRecordScalarWhereInput[]
    NOT?: HumidityThresholdRecordScalarWhereInput | HumidityThresholdRecordScalarWhereInput[]
    id?: StringFilter<"HumidityThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"HumidityThresholdRecord"> | Date | string
    value?: FloatFilter<"HumidityThresholdRecord"> | number
    controllerId?: StringFilter<"HumidityThresholdRecord"> | string
  }

  export type TemperatureThresholdRecordUpsertWithWhereUniqueWithoutControllerInput = {
    where: TemperatureThresholdRecordWhereUniqueInput
    update: XOR<TemperatureThresholdRecordUpdateWithoutControllerInput, TemperatureThresholdRecordUncheckedUpdateWithoutControllerInput>
    create: XOR<TemperatureThresholdRecordCreateWithoutControllerInput, TemperatureThresholdRecordUncheckedCreateWithoutControllerInput>
  }

  export type TemperatureThresholdRecordUpdateWithWhereUniqueWithoutControllerInput = {
    where: TemperatureThresholdRecordWhereUniqueInput
    data: XOR<TemperatureThresholdRecordUpdateWithoutControllerInput, TemperatureThresholdRecordUncheckedUpdateWithoutControllerInput>
  }

  export type TemperatureThresholdRecordUpdateManyWithWhereWithoutControllerInput = {
    where: TemperatureThresholdRecordScalarWhereInput
    data: XOR<TemperatureThresholdRecordUpdateManyMutationInput, TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerInput>
  }

  export type TemperatureThresholdRecordScalarWhereInput = {
    AND?: TemperatureThresholdRecordScalarWhereInput | TemperatureThresholdRecordScalarWhereInput[]
    OR?: TemperatureThresholdRecordScalarWhereInput[]
    NOT?: TemperatureThresholdRecordScalarWhereInput | TemperatureThresholdRecordScalarWhereInput[]
    id?: StringFilter<"TemperatureThresholdRecord"> | string
    recordedAt?: DateTimeFilter<"TemperatureThresholdRecord"> | Date | string
    value?: FloatFilter<"TemperatureThresholdRecord"> | number
    controllerId?: StringFilter<"TemperatureThresholdRecord"> | string
  }

  export type ControllerCreateWithoutReadingsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutReadingsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutReadingsInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutReadingsInput, ControllerUncheckedCreateWithoutReadingsInput>
  }

  export type ControllerUpsertWithoutReadingsInput = {
    update: XOR<ControllerUpdateWithoutReadingsInput, ControllerUncheckedUpdateWithoutReadingsInput>
    create: XOR<ControllerCreateWithoutReadingsInput, ControllerUncheckedCreateWithoutReadingsInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutReadingsInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutReadingsInput, ControllerUncheckedUpdateWithoutReadingsInput>
  }

  export type ControllerUpdateWithoutReadingsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutReadingsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateWithoutWaterScheduleRecordsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    readings?: ReadingCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutWaterScheduleRecordsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutWaterScheduleRecordsInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutWaterScheduleRecordsInput, ControllerUncheckedCreateWithoutWaterScheduleRecordsInput>
  }

  export type ControllerUpsertWithoutWaterScheduleRecordsInput = {
    update: XOR<ControllerUpdateWithoutWaterScheduleRecordsInput, ControllerUncheckedUpdateWithoutWaterScheduleRecordsInput>
    create: XOR<ControllerCreateWithoutWaterScheduleRecordsInput, ControllerUncheckedCreateWithoutWaterScheduleRecordsInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutWaterScheduleRecordsInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutWaterScheduleRecordsInput, ControllerUncheckedUpdateWithoutWaterScheduleRecordsInput>
  }

  export type ControllerUpdateWithoutWaterScheduleRecordsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutWaterScheduleRecordsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateWithoutSoilMoistureThresholdRecordsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    readings?: ReadingCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutSoilMoistureThresholdRecordsInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutSoilMoistureThresholdRecordsInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedCreateWithoutSoilMoistureThresholdRecordsInput>
  }

  export type ControllerUpsertWithoutSoilMoistureThresholdRecordsInput = {
    update: XOR<ControllerUpdateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedUpdateWithoutSoilMoistureThresholdRecordsInput>
    create: XOR<ControllerCreateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedCreateWithoutSoilMoistureThresholdRecordsInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutSoilMoistureThresholdRecordsInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutSoilMoistureThresholdRecordsInput, ControllerUncheckedUpdateWithoutSoilMoistureThresholdRecordsInput>
  }

  export type ControllerUpdateWithoutSoilMoistureThresholdRecordsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutSoilMoistureThresholdRecordsInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateWithoutHumidityThresholdRecordInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    readings?: ReadingCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutHumidityThresholdRecordInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutHumidityThresholdRecordInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutHumidityThresholdRecordInput, ControllerUncheckedCreateWithoutHumidityThresholdRecordInput>
  }

  export type ControllerUpsertWithoutHumidityThresholdRecordInput = {
    update: XOR<ControllerUpdateWithoutHumidityThresholdRecordInput, ControllerUncheckedUpdateWithoutHumidityThresholdRecordInput>
    create: XOR<ControllerCreateWithoutHumidityThresholdRecordInput, ControllerUncheckedCreateWithoutHumidityThresholdRecordInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutHumidityThresholdRecordInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutHumidityThresholdRecordInput, ControllerUncheckedUpdateWithoutHumidityThresholdRecordInput>
  }

  export type ControllerUpdateWithoutHumidityThresholdRecordInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutHumidityThresholdRecordInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerCreateWithoutTemperatureThresholdRecordInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    user: UserCreateNestedOneWithoutControllersInput
    readings?: ReadingCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordCreateNestedManyWithoutControllerInput
  }

  export type ControllerUncheckedCreateWithoutTemperatureThresholdRecordInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
    userId: string
    readings?: ReadingUncheckedCreateNestedManyWithoutControllerInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedCreateNestedManyWithoutControllerInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedCreateNestedManyWithoutControllerInput
  }

  export type ControllerCreateOrConnectWithoutTemperatureThresholdRecordInput = {
    where: ControllerWhereUniqueInput
    create: XOR<ControllerCreateWithoutTemperatureThresholdRecordInput, ControllerUncheckedCreateWithoutTemperatureThresholdRecordInput>
  }

  export type ControllerUpsertWithoutTemperatureThresholdRecordInput = {
    update: XOR<ControllerUpdateWithoutTemperatureThresholdRecordInput, ControllerUncheckedUpdateWithoutTemperatureThresholdRecordInput>
    create: XOR<ControllerCreateWithoutTemperatureThresholdRecordInput, ControllerUncheckedCreateWithoutTemperatureThresholdRecordInput>
    where?: ControllerWhereInput
  }

  export type ControllerUpdateToOneWithWhereWithoutTemperatureThresholdRecordInput = {
    where?: ControllerWhereInput
    data: XOR<ControllerUpdateWithoutTemperatureThresholdRecordInput, ControllerUncheckedUpdateWithoutTemperatureThresholdRecordInput>
  }

  export type ControllerUpdateWithoutTemperatureThresholdRecordInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutControllersNestedInput
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutTemperatureThresholdRecordInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type UserCreateWithoutAccessTokenInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    controllers?: ControllerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessTokenInput = {
    id?: string
    username: string
    password: string
    cid: string
    mobile: string
    gewog: string
    dzongkhag: string
    registeredAt?: Date | string
    verifiedAt?: Date | string | null
    posLat?: string | null
    posLong?: string | null
    otp?: number | null
    otpExpiresAt?: Date | string | null
    greenhouseCount?: number
    irrigationCount?: number
    brokerId: string
    brokerPort: number
    brokerIp: string
    controllers?: ControllerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
  }

  export type UserUpsertWithoutAccessTokenInput = {
    update: XOR<UserUpdateWithoutAccessTokenInput, UserUncheckedUpdateWithoutAccessTokenInput>
    create: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessTokenInput, UserUncheckedUpdateWithoutAccessTokenInput>
  }

  export type UserUpdateWithoutAccessTokenInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    controllers?: ControllerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessTokenInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gewog?: StringFieldUpdateOperationsInput | string
    dzongkhag?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posLat?: NullableStringFieldUpdateOperationsInput | string | null
    posLong?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouseCount?: IntFieldUpdateOperationsInput | number
    irrigationCount?: IntFieldUpdateOperationsInput | number
    brokerId?: StringFieldUpdateOperationsInput | string
    brokerPort?: IntFieldUpdateOperationsInput | number
    brokerIp?: StringFieldUpdateOperationsInput | string
    controllers?: ControllerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ControllerCreateManyUserInput = {
    id?: string
    controllerId: string
    type: $Enums.Type
    name: string
  }

  export type AccessTokenCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ControllerUpdateWithoutUserInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateWithoutUserInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
    readings?: ReadingUncheckedUpdateManyWithoutControllerNestedInput
    waterScheduleRecords?: WaterScheduleRecordUncheckedUpdateManyWithoutControllerNestedInput
    soilMoistureThresholdRecords?: SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    HumidityThresholdRecord?: HumidityThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
    TemperatureThresholdRecord?: TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerNestedInput
  }

  export type ControllerUncheckedUpdateManyWithoutUserInput = {
    controllerId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AccessTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateManyControllerInput = {
    id?: string
    humidity?: number | null
    temperature?: number | null
    soilMoisture?: number | null
    recordedAt?: Date | string
    Pressure?: number | null
  }

  export type WaterScheduleRecordCreateManyControllerInput = {
    id?: string
    startTime: string
    endTime: string
    repetitionDays: number
  }

  export type SoilMoistureThresholdRecordCreateManyControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type HumidityThresholdRecordCreateManyControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type TemperatureThresholdRecordCreateManyControllerInput = {
    id?: string
    recordedAt?: Date | string
    value: number
  }

  export type ReadingUpdateWithoutControllerInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReadingUncheckedUpdateWithoutControllerInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReadingUncheckedUpdateManyWithoutControllerInput = {
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    soilMoisture?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pressure?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WaterScheduleRecordUpdateWithoutControllerInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
  }

  export type WaterScheduleRecordUncheckedUpdateWithoutControllerInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
  }

  export type WaterScheduleRecordUncheckedUpdateManyWithoutControllerInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    repetitionDays?: IntFieldUpdateOperationsInput | number
  }

  export type SoilMoistureThresholdRecordUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SoilMoistureThresholdRecordUncheckedUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SoilMoistureThresholdRecordUncheckedUpdateManyWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HumidityThresholdRecordUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HumidityThresholdRecordUncheckedUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HumidityThresholdRecordUncheckedUpdateManyWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TemperatureThresholdRecordUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TemperatureThresholdRecordUncheckedUpdateWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TemperatureThresholdRecordUncheckedUpdateManyWithoutControllerInput = {
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ControllerCountOutputTypeDefaultArgs instead
     */
    export type ControllerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ControllerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ControllerDefaultArgs instead
     */
    export type ControllerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ControllerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReadingDefaultArgs instead
     */
    export type ReadingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReadingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaterScheduleRecordDefaultArgs instead
     */
    export type WaterScheduleRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaterScheduleRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SoilMoistureThresholdRecordDefaultArgs instead
     */
    export type SoilMoistureThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SoilMoistureThresholdRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HumidityThresholdRecordDefaultArgs instead
     */
    export type HumidityThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HumidityThresholdRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemperatureThresholdRecordDefaultArgs instead
     */
    export type TemperatureThresholdRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemperatureThresholdRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsFeedsDefaultArgs instead
     */
    export type NewsFeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsFeedsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessTokenDefaultArgs instead
     */
    export type AccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessTokenDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
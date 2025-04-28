
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Plano
 * 
 */
export type Plano = $Result.DefaultSelection<Prisma.$PlanoPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model AlunoTurma
 * 
 */
export type AlunoTurma = $Result.DefaultSelection<Prisma.$AlunoTurmaPayload>
/**
 * Model Modulo
 * 
 */
export type Modulo = $Result.DefaultSelection<Prisma.$ModuloPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Apostila
 * 
 */
export type Apostila = $Result.DefaultSelection<Prisma.$ApostilaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model ProgressoAluno
 * 
 */
export type ProgressoAluno = $Result.DefaultSelection<Prisma.$ProgressoAlunoPayload>
/**
 * Model Parceria
 * 
 */
export type Parceria = $Result.DefaultSelection<Prisma.$ParceriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  aluno: 'aluno',
  professor: 'professor',
  admin: 'admin'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plano`: Exposes CRUD operations for the **Plano** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planos
    * const planos = await prisma.plano.findMany()
    * ```
    */
  get plano(): Prisma.PlanoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alunoTurma`: Exposes CRUD operations for the **AlunoTurma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlunoTurmas
    * const alunoTurmas = await prisma.alunoTurma.findMany()
    * ```
    */
  get alunoTurma(): Prisma.AlunoTurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **Modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.ModuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apostila`: Exposes CRUD operations for the **Apostila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apostilas
    * const apostilas = await prisma.apostila.findMany()
    * ```
    */
  get apostila(): Prisma.ApostilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressoAluno`: Exposes CRUD operations for the **ProgressoAluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressoAlunos
    * const progressoAlunos = await prisma.progressoAluno.findMany()
    * ```
    */
  get progressoAluno(): Prisma.ProgressoAlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parceria`: Exposes CRUD operations for the **Parceria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcerias
    * const parcerias = await prisma.parceria.findMany()
    * ```
    */
  get parceria(): Prisma.ParceriaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Plano: 'Plano',
    Curso: 'Curso',
    Turma: 'Turma',
    AlunoTurma: 'AlunoTurma',
    Modulo: 'Modulo',
    Video: 'Video',
    Apostila: 'Apostila',
    Avaliacao: 'Avaliacao',
    ProgressoAluno: 'ProgressoAluno',
    Parceria: 'Parceria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "plano" | "curso" | "turma" | "alunoTurma" | "modulo" | "video" | "apostila" | "avaliacao" | "progressoAluno" | "parceria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Plano: {
        payload: Prisma.$PlanoPayload<ExtArgs>
        fields: Prisma.PlanoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findFirst: {
            args: Prisma.PlanoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findMany: {
            args: Prisma.PlanoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>[]
          }
          create: {
            args: Prisma.PlanoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          createMany: {
            args: Prisma.PlanoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          update: {
            args: Prisma.PlanoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          deleteMany: {
            args: Prisma.PlanoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          aggregate: {
            args: Prisma.PlanoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlano>
          }
          groupBy: {
            args: Prisma.PlanoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanoCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      AlunoTurma: {
        payload: Prisma.$AlunoTurmaPayload<ExtArgs>
        fields: Prisma.AlunoTurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoTurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoTurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          findFirst: {
            args: Prisma.AlunoTurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoTurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          findMany: {
            args: Prisma.AlunoTurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>[]
          }
          create: {
            args: Prisma.AlunoTurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          createMany: {
            args: Prisma.AlunoTurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoTurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          update: {
            args: Prisma.AlunoTurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          deleteMany: {
            args: Prisma.AlunoTurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoTurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoTurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoTurmaPayload>
          }
          aggregate: {
            args: Prisma.AlunoTurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlunoTurma>
          }
          groupBy: {
            args: Prisma.AlunoTurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoTurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoTurmaCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoTurmaCountAggregateOutputType> | number
          }
        }
      }
      Modulo: {
        payload: Prisma.$ModuloPayload<ExtArgs>
        fields: Prisma.ModuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findFirst: {
            args: Prisma.ModuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findMany: {
            args: Prisma.ModuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          create: {
            args: Prisma.ModuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          createMany: {
            args: Prisma.ModuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          update: {
            args: Prisma.ModuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          deleteMany: {
            args: Prisma.ModuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.ModuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Apostila: {
        payload: Prisma.$ApostilaPayload<ExtArgs>
        fields: Prisma.ApostilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApostilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApostilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          findFirst: {
            args: Prisma.ApostilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApostilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          findMany: {
            args: Prisma.ApostilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>[]
          }
          create: {
            args: Prisma.ApostilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          createMany: {
            args: Prisma.ApostilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApostilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          update: {
            args: Prisma.ApostilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          deleteMany: {
            args: Prisma.ApostilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApostilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApostilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApostilaPayload>
          }
          aggregate: {
            args: Prisma.ApostilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApostila>
          }
          groupBy: {
            args: Prisma.ApostilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApostilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApostilaCountArgs<ExtArgs>
            result: $Utils.Optional<ApostilaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      ProgressoAluno: {
        payload: Prisma.$ProgressoAlunoPayload<ExtArgs>
        fields: Prisma.ProgressoAlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoAlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoAlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          findFirst: {
            args: Prisma.ProgressoAlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoAlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          findMany: {
            args: Prisma.ProgressoAlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>[]
          }
          create: {
            args: Prisma.ProgressoAlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          createMany: {
            args: Prisma.ProgressoAlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgressoAlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          update: {
            args: Prisma.ProgressoAlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoAlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoAlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgressoAlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAlunoPayload>
          }
          aggregate: {
            args: Prisma.ProgressoAlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoAluno>
          }
          groupBy: {
            args: Prisma.ProgressoAlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoAlunoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAlunoCountAggregateOutputType> | number
          }
        }
      }
      Parceria: {
        payload: Prisma.$ParceriaPayload<ExtArgs>
        fields: Prisma.ParceriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParceriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParceriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          findFirst: {
            args: Prisma.ParceriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParceriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          findMany: {
            args: Prisma.ParceriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>[]
          }
          create: {
            args: Prisma.ParceriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          createMany: {
            args: Prisma.ParceriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParceriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          update: {
            args: Prisma.ParceriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          deleteMany: {
            args: Prisma.ParceriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParceriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParceriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceriaPayload>
          }
          aggregate: {
            args: Prisma.ParceriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParceria>
          }
          groupBy: {
            args: Prisma.ParceriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParceriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParceriaCountArgs<ExtArgs>
            result: $Utils.Optional<ParceriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    plano?: PlanoOmit
    curso?: CursoOmit
    turma?: TurmaOmit
    alunoTurma?: AlunoTurmaOmit
    modulo?: ModuloOmit
    video?: VideoOmit
    apostila?: ApostilaOmit
    avaliacao?: AvaliacaoOmit
    progressoAluno?: ProgressoAlunoOmit
    parceria?: ParceriaOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    turmas: number
    parcerias: number
    progresso: number
    Turma: number
    AlunoTurma: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | UsuarioCountOutputTypeCountTurmasArgs
    parcerias?: boolean | UsuarioCountOutputTypeCountParceriasArgs
    progresso?: boolean | UsuarioCountOutputTypeCountProgressoArgs
    Turma?: boolean | UsuarioCountOutputTypeCountTurmaArgs
    AlunoTurma?: boolean | UsuarioCountOutputTypeCountAlunoTurmaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParceriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAlunoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAlunoTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
  }


  /**
   * Count Type PlanoCountOutputType
   */

  export type PlanoCountOutputType = {
    usuarios: number
  }

  export type PlanoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PlanoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoCountOutputType
     */
    select?: PlanoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    turmas: number
    modulos: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | CursoCountOutputTypeCountTurmasArgs
    modulos?: boolean | CursoCountOutputTypeCountModulosArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountModulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunos: number
    AlunoTurma: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
    AlunoTurma?: boolean | TurmaCountOutputTypeCountAlunoTurmaArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunoTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
  }


  /**
   * Count Type ModuloCountOutputType
   */

  export type ModuloCountOutputType = {
    videos: number
    apostilas: number
    avaliacoes: number
  }

  export type ModuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ModuloCountOutputTypeCountVideosArgs
    apostilas?: boolean | ModuloCountOutputTypeCountApostilasArgs
    avaliacoes?: boolean | ModuloCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuloCountOutputType
     */
    select?: ModuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountApostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApostilaWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    progresso: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | VideoCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAlunoWhereInput
  }


  /**
   * Count Type ApostilaCountOutputType
   */

  export type ApostilaCountOutputType = {
    progresso: number
  }

  export type ApostilaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | ApostilaCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApostilaCountOutputType
     */
    select?: ApostilaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApostilaCountOutputType without action
   */
  export type ApostilaCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAlunoWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    progresso: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresso?: boolean | AvaliacaoCountOutputTypeCountProgressoArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountProgressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAlunoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    planoId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    dataCadastro: Date | null
    planoId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    dataCadastro: Date | null
    planoId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    dataCadastro: number
    planoId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    planoId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    dataCadastro?: true
    planoId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro: Date
    planoId: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
    plano?: boolean | Usuario$planoArgs<ExtArgs>
    turmas?: boolean | Usuario$turmasArgs<ExtArgs>
    parcerias?: boolean | Usuario$parceriasArgs<ExtArgs>
    progresso?: boolean | Usuario$progressoArgs<ExtArgs>
    Turma?: boolean | Usuario$TurmaArgs<ExtArgs>
    AlunoTurma?: boolean | Usuario$AlunoTurmaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    dataCadastro?: boolean
    planoId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo" | "dataCadastro" | "planoId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plano?: boolean | Usuario$planoArgs<ExtArgs>
    turmas?: boolean | Usuario$turmasArgs<ExtArgs>
    parcerias?: boolean | Usuario$parceriasArgs<ExtArgs>
    progresso?: boolean | Usuario$progressoArgs<ExtArgs>
    Turma?: boolean | Usuario$TurmaArgs<ExtArgs>
    AlunoTurma?: boolean | Usuario$AlunoTurmaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      plano: Prisma.$PlanoPayload<ExtArgs> | null
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
      parcerias: Prisma.$ParceriaPayload<ExtArgs>[]
      progresso: Prisma.$ProgressoAlunoPayload<ExtArgs>[]
      Turma: Prisma.$TurmaPayload<ExtArgs>[]
      AlunoTurma: Prisma.$AlunoTurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      tipo: $Enums.TipoUsuario
      dataCadastro: Date
      planoId: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plano<T extends Usuario$planoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$planoArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    turmas<T extends Usuario$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parcerias<T extends Usuario$parceriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$parceriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progresso<T extends Usuario$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Turma<T extends Usuario$TurmaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AlunoTurma<T extends Usuario$AlunoTurmaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$AlunoTurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
    readonly dataCadastro: FieldRef<"Usuario", 'DateTime'>
    readonly planoId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.plano
   */
  export type Usuario$planoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    where?: PlanoWhereInput
  }

  /**
   * Usuario.turmas
   */
  export type Usuario$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Usuario.parcerias
   */
  export type Usuario$parceriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    where?: ParceriaWhereInput
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    cursor?: ParceriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Usuario.progresso
   */
  export type Usuario$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    where?: ProgressoAlunoWhereInput
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    cursor?: ProgressoAlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * Usuario.Turma
   */
  export type Usuario$TurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Usuario.AlunoTurma
   */
  export type Usuario$AlunoTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    cursor?: AlunoTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Plano
   */

  export type AggregatePlano = {
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  export type PlanoAvgAggregateOutputType = {
    id: number | null
  }

  export type PlanoSumAggregateOutputType = {
    id: number | null
  }

  export type PlanoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type PlanoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type PlanoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type PlanoAvgAggregateInputType = {
    id?: true
  }

  export type PlanoSumAggregateInputType = {
    id?: true
  }

  export type PlanoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type PlanoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type PlanoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type PlanoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plano to aggregate.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planos
    **/
    _count?: true | PlanoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanoMaxAggregateInputType
  }

  export type GetPlanoAggregateType<T extends PlanoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlano]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlano[P]>
      : GetScalarType<T[P], AggregatePlano[P]>
  }




  export type PlanoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanoWhereInput
    orderBy?: PlanoOrderByWithAggregationInput | PlanoOrderByWithAggregationInput[]
    by: PlanoScalarFieldEnum[] | PlanoScalarFieldEnum
    having?: PlanoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanoCountAggregateInputType | true
    _avg?: PlanoAvgAggregateInputType
    _sum?: PlanoSumAggregateInputType
    _min?: PlanoMinAggregateInputType
    _max?: PlanoMaxAggregateInputType
  }

  export type PlanoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  type GetPlanoGroupByPayload<T extends PlanoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanoGroupByOutputType[P]>
        }
      >
    >


  export type PlanoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    usuarios?: boolean | Plano$usuariosArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plano"]>



  export type PlanoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type PlanoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["plano"]>
  export type PlanoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Plano$usuariosArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlanoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plano"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["plano"]>
    composites: {}
  }

  type PlanoGetPayload<S extends boolean | null | undefined | PlanoDefaultArgs> = $Result.GetResult<Prisma.$PlanoPayload, S>

  type PlanoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanoCountAggregateInputType | true
    }

  export interface PlanoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plano'], meta: { name: 'Plano' } }
    /**
     * Find zero or one Plano that matches the filter.
     * @param {PlanoFindUniqueArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanoFindUniqueArgs>(args: SelectSubset<T, PlanoFindUniqueArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plano that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanoFindUniqueOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanoFindFirstArgs>(args?: SelectSubset<T, PlanoFindFirstArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plano that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planos
     * const planos = await prisma.plano.findMany()
     * 
     * // Get first 10 Planos
     * const planos = await prisma.plano.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planoWithIdOnly = await prisma.plano.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanoFindManyArgs>(args?: SelectSubset<T, PlanoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plano.
     * @param {PlanoCreateArgs} args - Arguments to create a Plano.
     * @example
     * // Create one Plano
     * const Plano = await prisma.plano.create({
     *   data: {
     *     // ... data to create a Plano
     *   }
     * })
     * 
     */
    create<T extends PlanoCreateArgs>(args: SelectSubset<T, PlanoCreateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planos.
     * @param {PlanoCreateManyArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const plano = await prisma.plano.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanoCreateManyArgs>(args?: SelectSubset<T, PlanoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plano.
     * @param {PlanoDeleteArgs} args - Arguments to delete one Plano.
     * @example
     * // Delete one Plano
     * const Plano = await prisma.plano.delete({
     *   where: {
     *     // ... filter to delete one Plano
     *   }
     * })
     * 
     */
    delete<T extends PlanoDeleteArgs>(args: SelectSubset<T, PlanoDeleteArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plano.
     * @param {PlanoUpdateArgs} args - Arguments to update one Plano.
     * @example
     * // Update one Plano
     * const plano = await prisma.plano.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanoUpdateArgs>(args: SelectSubset<T, PlanoUpdateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planos.
     * @param {PlanoDeleteManyArgs} args - Arguments to filter Planos to delete.
     * @example
     * // Delete a few Planos
     * const { count } = await prisma.plano.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanoDeleteManyArgs>(args?: SelectSubset<T, PlanoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planos
     * const plano = await prisma.plano.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanoUpdateManyArgs>(args: SelectSubset<T, PlanoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plano.
     * @param {PlanoUpsertArgs} args - Arguments to update or create a Plano.
     * @example
     * // Update or create a Plano
     * const plano = await prisma.plano.upsert({
     *   create: {
     *     // ... data to create a Plano
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plano we want to update
     *   }
     * })
     */
    upsert<T extends PlanoUpsertArgs>(args: SelectSubset<T, PlanoUpsertArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoCountArgs} args - Arguments to filter Planos to count.
     * @example
     * // Count the number of Planos
     * const count = await prisma.plano.count({
     *   where: {
     *     // ... the filter for the Planos we want to count
     *   }
     * })
    **/
    count<T extends PlanoCountArgs>(
      args?: Subset<T, PlanoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanoAggregateArgs>(args: Subset<T, PlanoAggregateArgs>): Prisma.PrismaPromise<GetPlanoAggregateType<T>>

    /**
     * Group by Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoGroupByArgs} args - Group by arguments.
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
      T extends PlanoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanoGroupByArgs['orderBy'] }
        : { orderBy?: PlanoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plano model
   */
  readonly fields: PlanoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plano.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Plano$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Plano$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plano model
   */
  interface PlanoFieldRefs {
    readonly id: FieldRef<"Plano", 'Int'>
    readonly nome: FieldRef<"Plano", 'String'>
    readonly descricao: FieldRef<"Plano", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plano findUnique
   */
  export type PlanoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findUniqueOrThrow
   */
  export type PlanoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findFirst
   */
  export type PlanoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findFirstOrThrow
   */
  export type PlanoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findMany
   */
  export type PlanoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Planos to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano create
   */
  export type PlanoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plano.
     */
    data: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
  }

  /**
   * Plano createMany
   */
  export type PlanoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planos.
     */
    data: PlanoCreateManyInput | PlanoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plano update
   */
  export type PlanoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plano.
     */
    data: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
    /**
     * Choose, which Plano to update.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano updateMany
   */
  export type PlanoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planos.
     */
    data: XOR<PlanoUpdateManyMutationInput, PlanoUncheckedUpdateManyInput>
    /**
     * Filter which Planos to update
     */
    where?: PlanoWhereInput
    /**
     * Limit how many Planos to update.
     */
    limit?: number
  }

  /**
   * Plano upsert
   */
  export type PlanoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plano to update in case it exists.
     */
    where: PlanoWhereUniqueInput
    /**
     * In case the Plano found by the `where` argument doesn't exist, create a new Plano with this data.
     */
    create: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
    /**
     * In case the Plano was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
  }

  /**
   * Plano delete
   */
  export type PlanoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter which Plano to delete.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano deleteMany
   */
  export type PlanoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planos to delete
     */
    where?: PlanoWhereInput
    /**
     * Limit how many Planos to delete.
     */
    limit?: number
  }

  /**
   * Plano.usuarios
   */
  export type Plano$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Plano without action
   */
  export type PlanoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plano
     */
    omit?: PlanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    cargaHoraria: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    cargaHoraria: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    cargaHoraria: number | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    cargaHoraria: number | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoria: number
    cargaHoraria: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    cargaHoraria?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    cargaHoraria?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    cargaHoraria?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    cargaHoraria?: boolean
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>



  export type CursoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    cargaHoraria?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "categoria" | "cargaHoraria", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
      modulos: Prisma.$ModuloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      categoria: string
      cargaHoraria: number
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turmas<T extends Curso$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modulos<T extends Curso$modulosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$modulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly titulo: FieldRef<"Curso", 'String'>
    readonly descricao: FieldRef<"Curso", 'String'>
    readonly categoria: FieldRef<"Curso", 'String'>
    readonly cargaHoraria: FieldRef<"Curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.turmas
   */
  export type Curso$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso.modulos
   */
  export type Curso$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    cursor?: ModuloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cursoId: number | null
    professorId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    cursoId: number
    professorId: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaSumAggregateInputType = {
    id?: true
    cursoId?: true
    professorId?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    professorId?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date
    dataFim: Date
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | UsuarioDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    AlunoTurma?: boolean | Turma$AlunoTurmaArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>



  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    professorId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cursoId" | "professorId" | "dataInicio" | "dataFim", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | UsuarioDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    AlunoTurma?: boolean | Turma$AlunoTurmaArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      professor: Prisma.$UsuarioPayload<ExtArgs>
      alunos: Prisma.$UsuarioPayload<ExtArgs>[]
      AlunoTurma: Prisma.$AlunoTurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cursoId: number
      professorId: number
      dataInicio: Date
      dataFim: Date
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AlunoTurma<T extends Turma$AlunoTurmaArgs<ExtArgs> = {}>(args?: Subset<T, Turma$AlunoTurmaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'Int'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly cursoId: FieldRef<"Turma", 'Int'>
    readonly professorId: FieldRef<"Turma", 'Int'>
    readonly dataInicio: FieldRef<"Turma", 'DateTime'>
    readonly dataFim: FieldRef<"Turma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Turma.AlunoTurma
   */
  export type Turma$AlunoTurmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    cursor?: AlunoTurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model AlunoTurma
   */

  export type AggregateAlunoTurma = {
    _count: AlunoTurmaCountAggregateOutputType | null
    _avg: AlunoTurmaAvgAggregateOutputType | null
    _sum: AlunoTurmaSumAggregateOutputType | null
    _min: AlunoTurmaMinAggregateOutputType | null
    _max: AlunoTurmaMaxAggregateOutputType | null
  }

  export type AlunoTurmaAvgAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaSumAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaMinAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaMaxAggregateOutputType = {
    alunoId: number | null
    turmaId: number | null
  }

  export type AlunoTurmaCountAggregateOutputType = {
    alunoId: number
    turmaId: number
    _all: number
  }


  export type AlunoTurmaAvgAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaSumAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaMinAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaMaxAggregateInputType = {
    alunoId?: true
    turmaId?: true
  }

  export type AlunoTurmaCountAggregateInputType = {
    alunoId?: true
    turmaId?: true
    _all?: true
  }

  export type AlunoTurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunoTurma to aggregate.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlunoTurmas
    **/
    _count?: true | AlunoTurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoTurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoTurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoTurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoTurmaMaxAggregateInputType
  }

  export type GetAlunoTurmaAggregateType<T extends AlunoTurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunoTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunoTurma[P]>
      : GetScalarType<T[P], AggregateAlunoTurma[P]>
  }




  export type AlunoTurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoTurmaWhereInput
    orderBy?: AlunoTurmaOrderByWithAggregationInput | AlunoTurmaOrderByWithAggregationInput[]
    by: AlunoTurmaScalarFieldEnum[] | AlunoTurmaScalarFieldEnum
    having?: AlunoTurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoTurmaCountAggregateInputType | true
    _avg?: AlunoTurmaAvgAggregateInputType
    _sum?: AlunoTurmaSumAggregateInputType
    _min?: AlunoTurmaMinAggregateInputType
    _max?: AlunoTurmaMaxAggregateInputType
  }

  export type AlunoTurmaGroupByOutputType = {
    alunoId: number
    turmaId: number
    _count: AlunoTurmaCountAggregateOutputType | null
    _avg: AlunoTurmaAvgAggregateOutputType | null
    _sum: AlunoTurmaSumAggregateOutputType | null
    _min: AlunoTurmaMinAggregateOutputType | null
    _max: AlunoTurmaMaxAggregateOutputType | null
  }

  type GetAlunoTurmaGroupByPayload<T extends AlunoTurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoTurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoTurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoTurmaGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoTurmaGroupByOutputType[P]>
        }
      >
    >


  export type AlunoTurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    turmaId?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alunoTurma"]>



  export type AlunoTurmaSelectScalar = {
    alunoId?: boolean
    turmaId?: boolean
  }

  export type AlunoTurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "turmaId", ExtArgs["result"]["alunoTurma"]>
  export type AlunoTurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }

  export type $AlunoTurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlunoTurma"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      turmaId: number
    }, ExtArgs["result"]["alunoTurma"]>
    composites: {}
  }

  type AlunoTurmaGetPayload<S extends boolean | null | undefined | AlunoTurmaDefaultArgs> = $Result.GetResult<Prisma.$AlunoTurmaPayload, S>

  type AlunoTurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoTurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoTurmaCountAggregateInputType | true
    }

  export interface AlunoTurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlunoTurma'], meta: { name: 'AlunoTurma' } }
    /**
     * Find zero or one AlunoTurma that matches the filter.
     * @param {AlunoTurmaFindUniqueArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoTurmaFindUniqueArgs>(args: SelectSubset<T, AlunoTurmaFindUniqueArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlunoTurma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoTurmaFindUniqueOrThrowArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoTurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoTurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunoTurma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindFirstArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoTurmaFindFirstArgs>(args?: SelectSubset<T, AlunoTurmaFindFirstArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlunoTurma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindFirstOrThrowArgs} args - Arguments to find a AlunoTurma
     * @example
     * // Get one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoTurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoTurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlunoTurmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlunoTurmas
     * const alunoTurmas = await prisma.alunoTurma.findMany()
     * 
     * // Get first 10 AlunoTurmas
     * const alunoTurmas = await prisma.alunoTurma.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const alunoTurmaWithAlunoIdOnly = await prisma.alunoTurma.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends AlunoTurmaFindManyArgs>(args?: SelectSubset<T, AlunoTurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlunoTurma.
     * @param {AlunoTurmaCreateArgs} args - Arguments to create a AlunoTurma.
     * @example
     * // Create one AlunoTurma
     * const AlunoTurma = await prisma.alunoTurma.create({
     *   data: {
     *     // ... data to create a AlunoTurma
     *   }
     * })
     * 
     */
    create<T extends AlunoTurmaCreateArgs>(args: SelectSubset<T, AlunoTurmaCreateArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlunoTurmas.
     * @param {AlunoTurmaCreateManyArgs} args - Arguments to create many AlunoTurmas.
     * @example
     * // Create many AlunoTurmas
     * const alunoTurma = await prisma.alunoTurma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoTurmaCreateManyArgs>(args?: SelectSubset<T, AlunoTurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlunoTurma.
     * @param {AlunoTurmaDeleteArgs} args - Arguments to delete one AlunoTurma.
     * @example
     * // Delete one AlunoTurma
     * const AlunoTurma = await prisma.alunoTurma.delete({
     *   where: {
     *     // ... filter to delete one AlunoTurma
     *   }
     * })
     * 
     */
    delete<T extends AlunoTurmaDeleteArgs>(args: SelectSubset<T, AlunoTurmaDeleteArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlunoTurma.
     * @param {AlunoTurmaUpdateArgs} args - Arguments to update one AlunoTurma.
     * @example
     * // Update one AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoTurmaUpdateArgs>(args: SelectSubset<T, AlunoTurmaUpdateArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlunoTurmas.
     * @param {AlunoTurmaDeleteManyArgs} args - Arguments to filter AlunoTurmas to delete.
     * @example
     * // Delete a few AlunoTurmas
     * const { count } = await prisma.alunoTurma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoTurmaDeleteManyArgs>(args?: SelectSubset<T, AlunoTurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlunoTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlunoTurmas
     * const alunoTurma = await prisma.alunoTurma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoTurmaUpdateManyArgs>(args: SelectSubset<T, AlunoTurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlunoTurma.
     * @param {AlunoTurmaUpsertArgs} args - Arguments to update or create a AlunoTurma.
     * @example
     * // Update or create a AlunoTurma
     * const alunoTurma = await prisma.alunoTurma.upsert({
     *   create: {
     *     // ... data to create a AlunoTurma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlunoTurma we want to update
     *   }
     * })
     */
    upsert<T extends AlunoTurmaUpsertArgs>(args: SelectSubset<T, AlunoTurmaUpsertArgs<ExtArgs>>): Prisma__AlunoTurmaClient<$Result.GetResult<Prisma.$AlunoTurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlunoTurmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaCountArgs} args - Arguments to filter AlunoTurmas to count.
     * @example
     * // Count the number of AlunoTurmas
     * const count = await prisma.alunoTurma.count({
     *   where: {
     *     // ... the filter for the AlunoTurmas we want to count
     *   }
     * })
    **/
    count<T extends AlunoTurmaCountArgs>(
      args?: Subset<T, AlunoTurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoTurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlunoTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoTurmaAggregateArgs>(args: Subset<T, AlunoTurmaAggregateArgs>): Prisma.PrismaPromise<GetAlunoTurmaAggregateType<T>>

    /**
     * Group by AlunoTurma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoTurmaGroupByArgs} args - Group by arguments.
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
      T extends AlunoTurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoTurmaGroupByArgs['orderBy'] }
        : { orderBy?: AlunoTurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoTurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlunoTurma model
   */
  readonly fields: AlunoTurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlunoTurma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoTurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlunoTurma model
   */
  interface AlunoTurmaFieldRefs {
    readonly alunoId: FieldRef<"AlunoTurma", 'Int'>
    readonly turmaId: FieldRef<"AlunoTurma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlunoTurma findUnique
   */
  export type AlunoTurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma findUniqueOrThrow
   */
  export type AlunoTurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma findFirst
   */
  export type AlunoTurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunoTurmas.
     */
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma findFirstOrThrow
   */
  export type AlunoTurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurma to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlunoTurmas.
     */
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma findMany
   */
  export type AlunoTurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter, which AlunoTurmas to fetch.
     */
    where?: AlunoTurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlunoTurmas to fetch.
     */
    orderBy?: AlunoTurmaOrderByWithRelationInput | AlunoTurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlunoTurmas.
     */
    cursor?: AlunoTurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlunoTurmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlunoTurmas.
     */
    skip?: number
    distinct?: AlunoTurmaScalarFieldEnum | AlunoTurmaScalarFieldEnum[]
  }

  /**
   * AlunoTurma create
   */
  export type AlunoTurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a AlunoTurma.
     */
    data: XOR<AlunoTurmaCreateInput, AlunoTurmaUncheckedCreateInput>
  }

  /**
   * AlunoTurma createMany
   */
  export type AlunoTurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlunoTurmas.
     */
    data: AlunoTurmaCreateManyInput | AlunoTurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlunoTurma update
   */
  export type AlunoTurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a AlunoTurma.
     */
    data: XOR<AlunoTurmaUpdateInput, AlunoTurmaUncheckedUpdateInput>
    /**
     * Choose, which AlunoTurma to update.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma updateMany
   */
  export type AlunoTurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlunoTurmas.
     */
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyInput>
    /**
     * Filter which AlunoTurmas to update
     */
    where?: AlunoTurmaWhereInput
    /**
     * Limit how many AlunoTurmas to update.
     */
    limit?: number
  }

  /**
   * AlunoTurma upsert
   */
  export type AlunoTurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the AlunoTurma to update in case it exists.
     */
    where: AlunoTurmaWhereUniqueInput
    /**
     * In case the AlunoTurma found by the `where` argument doesn't exist, create a new AlunoTurma with this data.
     */
    create: XOR<AlunoTurmaCreateInput, AlunoTurmaUncheckedCreateInput>
    /**
     * In case the AlunoTurma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoTurmaUpdateInput, AlunoTurmaUncheckedUpdateInput>
  }

  /**
   * AlunoTurma delete
   */
  export type AlunoTurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
    /**
     * Filter which AlunoTurma to delete.
     */
    where: AlunoTurmaWhereUniqueInput
  }

  /**
   * AlunoTurma deleteMany
   */
  export type AlunoTurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlunoTurmas to delete
     */
    where?: AlunoTurmaWhereInput
    /**
     * Limit how many AlunoTurmas to delete.
     */
    limit?: number
  }

  /**
   * AlunoTurma without action
   */
  export type AlunoTurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoTurma
     */
    select?: AlunoTurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlunoTurma
     */
    omit?: AlunoTurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoTurmaInclude<ExtArgs> | null
  }


  /**
   * Model Modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloMinAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    cursoId: number
    titulo: number
    ordem: number
    _all: number
  }


  export type ModuloAvgAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloSumAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloMinAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulo to aggregate.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type ModuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithAggregationInput | ModuloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: ModuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _avg?: ModuloAvgAggregateInputType
    _sum?: ModuloSumAggregateInputType
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: number
    cursoId: number
    titulo: string
    ordem: number
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type ModuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    videos?: boolean | Modulo$videosArgs<ExtArgs>
    apostilas?: boolean | Modulo$apostilasArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>



  export type ModuloSelectScalar = {
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
  }

  export type ModuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cursoId" | "titulo" | "ordem", ExtArgs["result"]["modulo"]>
  export type ModuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    videos?: boolean | Modulo$videosArgs<ExtArgs>
    apostilas?: boolean | Modulo$apostilasArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modulo"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
      apostilas: Prisma.$ApostilaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cursoId: number
      titulo: string
      ordem: number
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = $Result.GetResult<Prisma.$ModuloPayload, S>

  type ModuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface ModuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modulo'], meta: { name: 'Modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {ModuloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuloFindUniqueArgs>(args: SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuloFindFirstArgs>(args?: SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuloFindManyArgs>(args?: SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulo.
     * @param {ModuloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends ModuloCreateArgs>(args: SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {ModuloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuloCreateManyArgs>(args?: SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modulo.
     * @param {ModuloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends ModuloDeleteArgs>(args: SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulo.
     * @param {ModuloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuloUpdateArgs>(args: SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {ModuloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuloDeleteManyArgs>(args?: SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuloUpdateManyArgs>(args: SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulo.
     * @param {ModuloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends ModuloUpsertArgs>(args: SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends ModuloCountArgs>(
      args?: Subset<T, ModuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloGroupByArgs} args - Group by arguments.
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
      T extends ModuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuloGroupByArgs['orderBy'] }
        : { orderBy?: ModuloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modulo model
   */
  readonly fields: ModuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends Modulo$videosArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apostilas<T extends Modulo$apostilasArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$apostilasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Modulo$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Modulo model
   */
  interface ModuloFieldRefs {
    readonly id: FieldRef<"Modulo", 'Int'>
    readonly cursoId: FieldRef<"Modulo", 'Int'>
    readonly titulo: FieldRef<"Modulo", 'String'>
    readonly ordem: FieldRef<"Modulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Modulo findUnique
   */
  export type ModuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findUniqueOrThrow
   */
  export type ModuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findFirst
   */
  export type ModuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findFirstOrThrow
   */
  export type ModuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findMany
   */
  export type ModuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulos to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo create
   */
  export type ModuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to create a Modulo.
     */
    data: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
  }

  /**
   * Modulo createMany
   */
  export type ModuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modulo update
   */
  export type ModuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to update a Modulo.
     */
    data: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
    /**
     * Choose, which Modulo to update.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo updateMany
   */
  export type ModuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
  }

  /**
   * Modulo upsert
   */
  export type ModuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The filter to search for the Modulo to update in case it exists.
     */
    where: ModuloWhereUniqueInput
    /**
     * In case the Modulo found by the `where` argument doesn't exist, create a new Modulo with this data.
     */
    create: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
    /**
     * In case the Modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
  }

  /**
   * Modulo delete
   */
  export type ModuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter which Modulo to delete.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo deleteMany
   */
  export type ModuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulos to delete
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to delete.
     */
    limit?: number
  }

  /**
   * Modulo.videos
   */
  export type Modulo$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Modulo.apostilas
   */
  export type Modulo$apostilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    where?: ApostilaWhereInput
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    cursor?: ApostilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Modulo.avaliacoes
   */
  export type Modulo$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Modulo without action
   */
  export type ModuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracao: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    urlVideo: string | null
    duracao: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    urlVideo: string | null
    duracao: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    urlVideo: number
    duracao: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    moduloId?: true
    duracao?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    urlVideo?: true
    duracao?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    urlVideo?: boolean
    duracao?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Video$progressoArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    urlVideo?: boolean
    duracao?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "urlVideo" | "duracao", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Video$progressoArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoAlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      urlVideo: string
      duracao: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Video$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Video$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly moduloId: FieldRef<"Video", 'Int'>
    readonly titulo: FieldRef<"Video", 'String'>
    readonly urlVideo: FieldRef<"Video", 'String'>
    readonly duracao: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.progresso
   */
  export type Video$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    where?: ProgressoAlunoWhereInput
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    cursor?: ProgressoAlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Apostila
   */

  export type AggregateApostila = {
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  export type ApostilaAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type ApostilaMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivoUrl: string | null
  }

  export type ApostilaMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    arquivoUrl: string | null
  }

  export type ApostilaCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    arquivoUrl: number
    _all: number
  }


  export type ApostilaAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type ApostilaMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
  }

  export type ApostilaMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
  }

  export type ApostilaCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    arquivoUrl?: true
    _all?: true
  }

  export type ApostilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apostila to aggregate.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apostilas
    **/
    _count?: true | ApostilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApostilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApostilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApostilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApostilaMaxAggregateInputType
  }

  export type GetApostilaAggregateType<T extends ApostilaAggregateArgs> = {
        [P in keyof T & keyof AggregateApostila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApostila[P]>
      : GetScalarType<T[P], AggregateApostila[P]>
  }




  export type ApostilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApostilaWhereInput
    orderBy?: ApostilaOrderByWithAggregationInput | ApostilaOrderByWithAggregationInput[]
    by: ApostilaScalarFieldEnum[] | ApostilaScalarFieldEnum
    having?: ApostilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApostilaCountAggregateInputType | true
    _avg?: ApostilaAvgAggregateInputType
    _sum?: ApostilaSumAggregateInputType
    _min?: ApostilaMinAggregateInputType
    _max?: ApostilaMaxAggregateInputType
  }

  export type ApostilaGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    arquivoUrl: string
    _count: ApostilaCountAggregateOutputType | null
    _avg: ApostilaAvgAggregateOutputType | null
    _sum: ApostilaSumAggregateOutputType | null
    _min: ApostilaMinAggregateOutputType | null
    _max: ApostilaMaxAggregateOutputType | null
  }

  type GetApostilaGroupByPayload<T extends ApostilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApostilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApostilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
            : GetScalarType<T[P], ApostilaGroupByOutputType[P]>
        }
      >
    >


  export type ApostilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivoUrl?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Apostila$progressoArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apostila"]>



  export type ApostilaSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    arquivoUrl?: boolean
  }

  export type ApostilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "arquivoUrl", ExtArgs["result"]["apostila"]>
  export type ApostilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Apostila$progressoArgs<ExtArgs>
    _count?: boolean | ApostilaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApostilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apostila"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoAlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      arquivoUrl: string
    }, ExtArgs["result"]["apostila"]>
    composites: {}
  }

  type ApostilaGetPayload<S extends boolean | null | undefined | ApostilaDefaultArgs> = $Result.GetResult<Prisma.$ApostilaPayload, S>

  type ApostilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApostilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApostilaCountAggregateInputType | true
    }

  export interface ApostilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apostila'], meta: { name: 'Apostila' } }
    /**
     * Find zero or one Apostila that matches the filter.
     * @param {ApostilaFindUniqueArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApostilaFindUniqueArgs>(args: SelectSubset<T, ApostilaFindUniqueArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apostila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApostilaFindUniqueOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApostilaFindUniqueOrThrowArgs>(args: SelectSubset<T, ApostilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindFirstArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApostilaFindFirstArgs>(args?: SelectSubset<T, ApostilaFindFirstArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apostila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindFirstOrThrowArgs} args - Arguments to find a Apostila
     * @example
     * // Get one Apostila
     * const apostila = await prisma.apostila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApostilaFindFirstOrThrowArgs>(args?: SelectSubset<T, ApostilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apostilas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apostilas
     * const apostilas = await prisma.apostila.findMany()
     * 
     * // Get first 10 Apostilas
     * const apostilas = await prisma.apostila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apostilaWithIdOnly = await prisma.apostila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApostilaFindManyArgs>(args?: SelectSubset<T, ApostilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apostila.
     * @param {ApostilaCreateArgs} args - Arguments to create a Apostila.
     * @example
     * // Create one Apostila
     * const Apostila = await prisma.apostila.create({
     *   data: {
     *     // ... data to create a Apostila
     *   }
     * })
     * 
     */
    create<T extends ApostilaCreateArgs>(args: SelectSubset<T, ApostilaCreateArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apostilas.
     * @param {ApostilaCreateManyArgs} args - Arguments to create many Apostilas.
     * @example
     * // Create many Apostilas
     * const apostila = await prisma.apostila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApostilaCreateManyArgs>(args?: SelectSubset<T, ApostilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apostila.
     * @param {ApostilaDeleteArgs} args - Arguments to delete one Apostila.
     * @example
     * // Delete one Apostila
     * const Apostila = await prisma.apostila.delete({
     *   where: {
     *     // ... filter to delete one Apostila
     *   }
     * })
     * 
     */
    delete<T extends ApostilaDeleteArgs>(args: SelectSubset<T, ApostilaDeleteArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apostila.
     * @param {ApostilaUpdateArgs} args - Arguments to update one Apostila.
     * @example
     * // Update one Apostila
     * const apostila = await prisma.apostila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApostilaUpdateArgs>(args: SelectSubset<T, ApostilaUpdateArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apostilas.
     * @param {ApostilaDeleteManyArgs} args - Arguments to filter Apostilas to delete.
     * @example
     * // Delete a few Apostilas
     * const { count } = await prisma.apostila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApostilaDeleteManyArgs>(args?: SelectSubset<T, ApostilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apostilas
     * const apostila = await prisma.apostila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApostilaUpdateManyArgs>(args: SelectSubset<T, ApostilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apostila.
     * @param {ApostilaUpsertArgs} args - Arguments to update or create a Apostila.
     * @example
     * // Update or create a Apostila
     * const apostila = await prisma.apostila.upsert({
     *   create: {
     *     // ... data to create a Apostila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apostila we want to update
     *   }
     * })
     */
    upsert<T extends ApostilaUpsertArgs>(args: SelectSubset<T, ApostilaUpsertArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apostilas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaCountArgs} args - Arguments to filter Apostilas to count.
     * @example
     * // Count the number of Apostilas
     * const count = await prisma.apostila.count({
     *   where: {
     *     // ... the filter for the Apostilas we want to count
     *   }
     * })
    **/
    count<T extends ApostilaCountArgs>(
      args?: Subset<T, ApostilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApostilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApostilaAggregateArgs>(args: Subset<T, ApostilaAggregateArgs>): Prisma.PrismaPromise<GetApostilaAggregateType<T>>

    /**
     * Group by Apostila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostilaGroupByArgs} args - Group by arguments.
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
      T extends ApostilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApostilaGroupByArgs['orderBy'] }
        : { orderBy?: ApostilaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApostilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApostilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apostila model
   */
  readonly fields: ApostilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apostila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApostilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Apostila$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Apostila$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Apostila model
   */
  interface ApostilaFieldRefs {
    readonly id: FieldRef<"Apostila", 'Int'>
    readonly moduloId: FieldRef<"Apostila", 'Int'>
    readonly titulo: FieldRef<"Apostila", 'String'>
    readonly arquivoUrl: FieldRef<"Apostila", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Apostila findUnique
   */
  export type ApostilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila findUniqueOrThrow
   */
  export type ApostilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila findFirst
   */
  export type ApostilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila findFirstOrThrow
   */
  export type ApostilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostila to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apostilas.
     */
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila findMany
   */
  export type ApostilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter, which Apostilas to fetch.
     */
    where?: ApostilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apostilas to fetch.
     */
    orderBy?: ApostilaOrderByWithRelationInput | ApostilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apostilas.
     */
    cursor?: ApostilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apostilas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apostilas.
     */
    skip?: number
    distinct?: ApostilaScalarFieldEnum | ApostilaScalarFieldEnum[]
  }

  /**
   * Apostila create
   */
  export type ApostilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The data needed to create a Apostila.
     */
    data: XOR<ApostilaCreateInput, ApostilaUncheckedCreateInput>
  }

  /**
   * Apostila createMany
   */
  export type ApostilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apostilas.
     */
    data: ApostilaCreateManyInput | ApostilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apostila update
   */
  export type ApostilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The data needed to update a Apostila.
     */
    data: XOR<ApostilaUpdateInput, ApostilaUncheckedUpdateInput>
    /**
     * Choose, which Apostila to update.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila updateMany
   */
  export type ApostilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apostilas.
     */
    data: XOR<ApostilaUpdateManyMutationInput, ApostilaUncheckedUpdateManyInput>
    /**
     * Filter which Apostilas to update
     */
    where?: ApostilaWhereInput
    /**
     * Limit how many Apostilas to update.
     */
    limit?: number
  }

  /**
   * Apostila upsert
   */
  export type ApostilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * The filter to search for the Apostila to update in case it exists.
     */
    where: ApostilaWhereUniqueInput
    /**
     * In case the Apostila found by the `where` argument doesn't exist, create a new Apostila with this data.
     */
    create: XOR<ApostilaCreateInput, ApostilaUncheckedCreateInput>
    /**
     * In case the Apostila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApostilaUpdateInput, ApostilaUncheckedUpdateInput>
  }

  /**
   * Apostila delete
   */
  export type ApostilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
    /**
     * Filter which Apostila to delete.
     */
    where: ApostilaWhereUniqueInput
  }

  /**
   * Apostila deleteMany
   */
  export type ApostilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apostilas to delete
     */
    where?: ApostilaWhereInput
    /**
     * Limit how many Apostilas to delete.
     */
    limit?: number
  }

  /**
   * Apostila.progresso
   */
  export type Apostila$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    where?: ProgressoAlunoWhereInput
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    cursor?: ProgressoAlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * Apostila without action
   */
  export type ApostilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apostila
     */
    select?: ApostilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apostila
     */
    omit?: ApostilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApostilaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    descricao: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    descricao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    moduloId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    descricao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    descricao: string
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Avaliacao$progressoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>



  export type AvaliacaoSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    descricao?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduloId" | "titulo" | "descricao", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progresso?: boolean | Avaliacao$progressoArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progresso: Prisma.$ProgressoAlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      descricao: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progresso<T extends Avaliacao$progressoArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$progressoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly moduloId: FieldRef<"Avaliacao", 'Int'>
    readonly titulo: FieldRef<"Avaliacao", 'String'>
    readonly descricao: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.progresso
   */
  export type Avaliacao$progressoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    where?: ProgressoAlunoWhereInput
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    cursor?: ProgressoAlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model ProgressoAluno
   */

  export type AggregateProgressoAluno = {
    _count: ProgressoAlunoCountAggregateOutputType | null
    _avg: ProgressoAlunoAvgAggregateOutputType | null
    _sum: ProgressoAlunoSumAggregateOutputType | null
    _min: ProgressoAlunoMinAggregateOutputType | null
    _max: ProgressoAlunoMaxAggregateOutputType | null
  }

  export type ProgressoAlunoAvgAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    apostilaId: number | null
    avaliacaoId: number | null
    progressoVideo: number | null
    notaAvaliacao: Decimal | null
  }

  export type ProgressoAlunoSumAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    apostilaId: number | null
    avaliacaoId: number | null
    progressoVideo: number | null
    notaAvaliacao: Decimal | null
  }

  export type ProgressoAlunoMinAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    apostilaId: number | null
    avaliacaoId: number | null
    progressoVideo: number | null
    baixouApostila: boolean | null
    notaAvaliacao: Decimal | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoAlunoMaxAggregateOutputType = {
    alunoId: number | null
    videoId: number | null
    apostilaId: number | null
    avaliacaoId: number | null
    progressoVideo: number | null
    baixouApostila: boolean | null
    notaAvaliacao: Decimal | null
    dataUltimaInteracao: Date | null
  }

  export type ProgressoAlunoCountAggregateOutputType = {
    alunoId: number
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: number
    notaAvaliacao: number
    dataUltimaInteracao: number
    _all: number
  }


  export type ProgressoAlunoAvgAggregateInputType = {
    alunoId?: true
    videoId?: true
    apostilaId?: true
    avaliacaoId?: true
    progressoVideo?: true
    notaAvaliacao?: true
  }

  export type ProgressoAlunoSumAggregateInputType = {
    alunoId?: true
    videoId?: true
    apostilaId?: true
    avaliacaoId?: true
    progressoVideo?: true
    notaAvaliacao?: true
  }

  export type ProgressoAlunoMinAggregateInputType = {
    alunoId?: true
    videoId?: true
    apostilaId?: true
    avaliacaoId?: true
    progressoVideo?: true
    baixouApostila?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoAlunoMaxAggregateInputType = {
    alunoId?: true
    videoId?: true
    apostilaId?: true
    avaliacaoId?: true
    progressoVideo?: true
    baixouApostila?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
  }

  export type ProgressoAlunoCountAggregateInputType = {
    alunoId?: true
    videoId?: true
    apostilaId?: true
    avaliacaoId?: true
    progressoVideo?: true
    baixouApostila?: true
    notaAvaliacao?: true
    dataUltimaInteracao?: true
    _all?: true
  }

  export type ProgressoAlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAluno to aggregate.
     */
    where?: ProgressoAlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAlunos to fetch.
     */
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoAlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAlunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAlunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressoAlunos
    **/
    _count?: true | ProgressoAlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoAlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoAlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoAlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoAlunoMaxAggregateInputType
  }

  export type GetProgressoAlunoAggregateType<T extends ProgressoAlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoAluno[P]>
      : GetScalarType<T[P], AggregateProgressoAluno[P]>
  }




  export type ProgressoAlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAlunoWhereInput
    orderBy?: ProgressoAlunoOrderByWithAggregationInput | ProgressoAlunoOrderByWithAggregationInput[]
    by: ProgressoAlunoScalarFieldEnum[] | ProgressoAlunoScalarFieldEnum
    having?: ProgressoAlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoAlunoCountAggregateInputType | true
    _avg?: ProgressoAlunoAvgAggregateInputType
    _sum?: ProgressoAlunoSumAggregateInputType
    _min?: ProgressoAlunoMinAggregateInputType
    _max?: ProgressoAlunoMaxAggregateInputType
  }

  export type ProgressoAlunoGroupByOutputType = {
    alunoId: number
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal
    dataUltimaInteracao: Date
    _count: ProgressoAlunoCountAggregateOutputType | null
    _avg: ProgressoAlunoAvgAggregateOutputType | null
    _sum: ProgressoAlunoSumAggregateOutputType | null
    _min: ProgressoAlunoMinAggregateOutputType | null
    _max: ProgressoAlunoMaxAggregateOutputType | null
  }

  type GetProgressoAlunoGroupByPayload<T extends ProgressoAlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoAlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoAlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoAlunoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoAlunoGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoAlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alunoId?: boolean
    videoId?: boolean
    apostilaId?: boolean
    avaliacaoId?: boolean
    progressoVideo?: boolean
    baixouApostila?: boolean
    notaAvaliacao?: boolean
    dataUltimaInteracao?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    apostila?: boolean | ApostilaDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoAluno"]>



  export type ProgressoAlunoSelectScalar = {
    alunoId?: boolean
    videoId?: boolean
    apostilaId?: boolean
    avaliacaoId?: boolean
    progressoVideo?: boolean
    baixouApostila?: boolean
    notaAvaliacao?: boolean
    dataUltimaInteracao?: boolean
  }

  export type ProgressoAlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alunoId" | "videoId" | "apostilaId" | "avaliacaoId" | "progressoVideo" | "baixouApostila" | "notaAvaliacao" | "dataUltimaInteracao", ExtArgs["result"]["progressoAluno"]>
  export type ProgressoAlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    apostila?: boolean | ApostilaDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }

  export type $ProgressoAlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressoAluno"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
      apostila: Prisma.$ApostilaPayload<ExtArgs>
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alunoId: number
      videoId: number
      apostilaId: number
      avaliacaoId: number
      progressoVideo: number
      baixouApostila: boolean
      notaAvaliacao: Prisma.Decimal
      dataUltimaInteracao: Date
    }, ExtArgs["result"]["progressoAluno"]>
    composites: {}
  }

  type ProgressoAlunoGetPayload<S extends boolean | null | undefined | ProgressoAlunoDefaultArgs> = $Result.GetResult<Prisma.$ProgressoAlunoPayload, S>

  type ProgressoAlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressoAlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoAlunoCountAggregateInputType | true
    }

  export interface ProgressoAlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressoAluno'], meta: { name: 'ProgressoAluno' } }
    /**
     * Find zero or one ProgressoAluno that matches the filter.
     * @param {ProgressoAlunoFindUniqueArgs} args - Arguments to find a ProgressoAluno
     * @example
     * // Get one ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoAlunoFindUniqueArgs>(args: SelectSubset<T, ProgressoAlunoFindUniqueArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressoAluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressoAlunoFindUniqueOrThrowArgs} args - Arguments to find a ProgressoAluno
     * @example
     * // Get one ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoAlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoAlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoAluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoFindFirstArgs} args - Arguments to find a ProgressoAluno
     * @example
     * // Get one ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoAlunoFindFirstArgs>(args?: SelectSubset<T, ProgressoAlunoFindFirstArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressoAluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoFindFirstOrThrowArgs} args - Arguments to find a ProgressoAluno
     * @example
     * // Get one ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoAlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoAlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressoAlunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressoAlunos
     * const progressoAlunos = await prisma.progressoAluno.findMany()
     * 
     * // Get first 10 ProgressoAlunos
     * const progressoAlunos = await prisma.progressoAluno.findMany({ take: 10 })
     * 
     * // Only select the `alunoId`
     * const progressoAlunoWithAlunoIdOnly = await prisma.progressoAluno.findMany({ select: { alunoId: true } })
     * 
     */
    findMany<T extends ProgressoAlunoFindManyArgs>(args?: SelectSubset<T, ProgressoAlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressoAluno.
     * @param {ProgressoAlunoCreateArgs} args - Arguments to create a ProgressoAluno.
     * @example
     * // Create one ProgressoAluno
     * const ProgressoAluno = await prisma.progressoAluno.create({
     *   data: {
     *     // ... data to create a ProgressoAluno
     *   }
     * })
     * 
     */
    create<T extends ProgressoAlunoCreateArgs>(args: SelectSubset<T, ProgressoAlunoCreateArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressoAlunos.
     * @param {ProgressoAlunoCreateManyArgs} args - Arguments to create many ProgressoAlunos.
     * @example
     * // Create many ProgressoAlunos
     * const progressoAluno = await prisma.progressoAluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoAlunoCreateManyArgs>(args?: SelectSubset<T, ProgressoAlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgressoAluno.
     * @param {ProgressoAlunoDeleteArgs} args - Arguments to delete one ProgressoAluno.
     * @example
     * // Delete one ProgressoAluno
     * const ProgressoAluno = await prisma.progressoAluno.delete({
     *   where: {
     *     // ... filter to delete one ProgressoAluno
     *   }
     * })
     * 
     */
    delete<T extends ProgressoAlunoDeleteArgs>(args: SelectSubset<T, ProgressoAlunoDeleteArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressoAluno.
     * @param {ProgressoAlunoUpdateArgs} args - Arguments to update one ProgressoAluno.
     * @example
     * // Update one ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoAlunoUpdateArgs>(args: SelectSubset<T, ProgressoAlunoUpdateArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressoAlunos.
     * @param {ProgressoAlunoDeleteManyArgs} args - Arguments to filter ProgressoAlunos to delete.
     * @example
     * // Delete a few ProgressoAlunos
     * const { count } = await prisma.progressoAluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoAlunoDeleteManyArgs>(args?: SelectSubset<T, ProgressoAlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressoAlunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressoAlunos
     * const progressoAluno = await prisma.progressoAluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoAlunoUpdateManyArgs>(args: SelectSubset<T, ProgressoAlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressoAluno.
     * @param {ProgressoAlunoUpsertArgs} args - Arguments to update or create a ProgressoAluno.
     * @example
     * // Update or create a ProgressoAluno
     * const progressoAluno = await prisma.progressoAluno.upsert({
     *   create: {
     *     // ... data to create a ProgressoAluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressoAluno we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoAlunoUpsertArgs>(args: SelectSubset<T, ProgressoAlunoUpsertArgs<ExtArgs>>): Prisma__ProgressoAlunoClient<$Result.GetResult<Prisma.$ProgressoAlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressoAlunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoCountArgs} args - Arguments to filter ProgressoAlunos to count.
     * @example
     * // Count the number of ProgressoAlunos
     * const count = await prisma.progressoAluno.count({
     *   where: {
     *     // ... the filter for the ProgressoAlunos we want to count
     *   }
     * })
    **/
    count<T extends ProgressoAlunoCountArgs>(
      args?: Subset<T, ProgressoAlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoAlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressoAluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressoAlunoAggregateArgs>(args: Subset<T, ProgressoAlunoAggregateArgs>): Prisma.PrismaPromise<GetProgressoAlunoAggregateType<T>>

    /**
     * Group by ProgressoAluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAlunoGroupByArgs} args - Group by arguments.
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
      T extends ProgressoAlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoAlunoGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoAlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressoAlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressoAluno model
   */
  readonly fields: ProgressoAlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressoAluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoAlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apostila<T extends ApostilaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApostilaDefaultArgs<ExtArgs>>): Prisma__ApostilaClient<$Result.GetResult<Prisma.$ApostilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProgressoAluno model
   */
  interface ProgressoAlunoFieldRefs {
    readonly alunoId: FieldRef<"ProgressoAluno", 'Int'>
    readonly videoId: FieldRef<"ProgressoAluno", 'Int'>
    readonly apostilaId: FieldRef<"ProgressoAluno", 'Int'>
    readonly avaliacaoId: FieldRef<"ProgressoAluno", 'Int'>
    readonly progressoVideo: FieldRef<"ProgressoAluno", 'Int'>
    readonly baixouApostila: FieldRef<"ProgressoAluno", 'Boolean'>
    readonly notaAvaliacao: FieldRef<"ProgressoAluno", 'Decimal'>
    readonly dataUltimaInteracao: FieldRef<"ProgressoAluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressoAluno findUnique
   */
  export type ProgressoAlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAluno to fetch.
     */
    where: ProgressoAlunoWhereUniqueInput
  }

  /**
   * ProgressoAluno findUniqueOrThrow
   */
  export type ProgressoAlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAluno to fetch.
     */
    where: ProgressoAlunoWhereUniqueInput
  }

  /**
   * ProgressoAluno findFirst
   */
  export type ProgressoAlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAluno to fetch.
     */
    where?: ProgressoAlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAlunos to fetch.
     */
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAlunos.
     */
    cursor?: ProgressoAlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAlunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAlunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAlunos.
     */
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * ProgressoAluno findFirstOrThrow
   */
  export type ProgressoAlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAluno to fetch.
     */
    where?: ProgressoAlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAlunos to fetch.
     */
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAlunos.
     */
    cursor?: ProgressoAlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAlunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAlunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAlunos.
     */
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * ProgressoAluno findMany
   */
  export type ProgressoAlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAlunos to fetch.
     */
    where?: ProgressoAlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAlunos to fetch.
     */
    orderBy?: ProgressoAlunoOrderByWithRelationInput | ProgressoAlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressoAlunos.
     */
    cursor?: ProgressoAlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAlunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAlunos.
     */
    skip?: number
    distinct?: ProgressoAlunoScalarFieldEnum | ProgressoAlunoScalarFieldEnum[]
  }

  /**
   * ProgressoAluno create
   */
  export type ProgressoAlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressoAluno.
     */
    data: XOR<ProgressoAlunoCreateInput, ProgressoAlunoUncheckedCreateInput>
  }

  /**
   * ProgressoAluno createMany
   */
  export type ProgressoAlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressoAlunos.
     */
    data: ProgressoAlunoCreateManyInput | ProgressoAlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressoAluno update
   */
  export type ProgressoAlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressoAluno.
     */
    data: XOR<ProgressoAlunoUpdateInput, ProgressoAlunoUncheckedUpdateInput>
    /**
     * Choose, which ProgressoAluno to update.
     */
    where: ProgressoAlunoWhereUniqueInput
  }

  /**
   * ProgressoAluno updateMany
   */
  export type ProgressoAlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressoAlunos.
     */
    data: XOR<ProgressoAlunoUpdateManyMutationInput, ProgressoAlunoUncheckedUpdateManyInput>
    /**
     * Filter which ProgressoAlunos to update
     */
    where?: ProgressoAlunoWhereInput
    /**
     * Limit how many ProgressoAlunos to update.
     */
    limit?: number
  }

  /**
   * ProgressoAluno upsert
   */
  export type ProgressoAlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressoAluno to update in case it exists.
     */
    where: ProgressoAlunoWhereUniqueInput
    /**
     * In case the ProgressoAluno found by the `where` argument doesn't exist, create a new ProgressoAluno with this data.
     */
    create: XOR<ProgressoAlunoCreateInput, ProgressoAlunoUncheckedCreateInput>
    /**
     * In case the ProgressoAluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoAlunoUpdateInput, ProgressoAlunoUncheckedUpdateInput>
  }

  /**
   * ProgressoAluno delete
   */
  export type ProgressoAlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
    /**
     * Filter which ProgressoAluno to delete.
     */
    where: ProgressoAlunoWhereUniqueInput
  }

  /**
   * ProgressoAluno deleteMany
   */
  export type ProgressoAlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAlunos to delete
     */
    where?: ProgressoAlunoWhereInput
    /**
     * Limit how many ProgressoAlunos to delete.
     */
    limit?: number
  }

  /**
   * ProgressoAluno without action
   */
  export type ProgressoAlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAluno
     */
    select?: ProgressoAlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressoAluno
     */
    omit?: ProgressoAlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAlunoInclude<ExtArgs> | null
  }


  /**
   * Model Parceria
   */

  export type AggregateParceria = {
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  export type ParceriaAvgAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentualPlataforma: Decimal | null
  }

  export type ParceriaSumAggregateOutputType = {
    id: number | null
    alunoId: number | null
    percentualPlataforma: Decimal | null
  }

  export type ParceriaMinAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricaoProjeto: string | null
    percentualPlataforma: Decimal | null
    dataAssinatura: Date | null
    contratoUrl: string | null
  }

  export type ParceriaMaxAggregateOutputType = {
    id: number | null
    alunoId: number | null
    descricaoProjeto: string | null
    percentualPlataforma: Decimal | null
    dataAssinatura: Date | null
    contratoUrl: string | null
  }

  export type ParceriaCountAggregateOutputType = {
    id: number
    alunoId: number
    descricaoProjeto: number
    percentualPlataforma: number
    dataAssinatura: number
    contratoUrl: number
    _all: number
  }


  export type ParceriaAvgAggregateInputType = {
    id?: true
    alunoId?: true
    percentualPlataforma?: true
  }

  export type ParceriaSumAggregateInputType = {
    id?: true
    alunoId?: true
    percentualPlataforma?: true
  }

  export type ParceriaMinAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
  }

  export type ParceriaMaxAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
  }

  export type ParceriaCountAggregateInputType = {
    id?: true
    alunoId?: true
    descricaoProjeto?: true
    percentualPlataforma?: true
    dataAssinatura?: true
    contratoUrl?: true
    _all?: true
  }

  export type ParceriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceria to aggregate.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcerias
    **/
    _count?: true | ParceriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParceriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParceriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParceriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParceriaMaxAggregateInputType
  }

  export type GetParceriaAggregateType<T extends ParceriaAggregateArgs> = {
        [P in keyof T & keyof AggregateParceria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParceria[P]>
      : GetScalarType<T[P], AggregateParceria[P]>
  }




  export type ParceriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceriaWhereInput
    orderBy?: ParceriaOrderByWithAggregationInput | ParceriaOrderByWithAggregationInput[]
    by: ParceriaScalarFieldEnum[] | ParceriaScalarFieldEnum
    having?: ParceriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParceriaCountAggregateInputType | true
    _avg?: ParceriaAvgAggregateInputType
    _sum?: ParceriaSumAggregateInputType
    _min?: ParceriaMinAggregateInputType
    _max?: ParceriaMaxAggregateInputType
  }

  export type ParceriaGroupByOutputType = {
    id: number
    alunoId: number
    descricaoProjeto: string
    percentualPlataforma: Decimal
    dataAssinatura: Date
    contratoUrl: string
    _count: ParceriaCountAggregateOutputType | null
    _avg: ParceriaAvgAggregateOutputType | null
    _sum: ParceriaSumAggregateOutputType | null
    _min: ParceriaMinAggregateOutputType | null
    _max: ParceriaMaxAggregateOutputType | null
  }

  type GetParceriaGroupByPayload<T extends ParceriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParceriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParceriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
            : GetScalarType<T[P], ParceriaGroupByOutputType[P]>
        }
      >
    >


  export type ParceriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    descricaoProjeto?: boolean
    percentualPlataforma?: boolean
    dataAssinatura?: boolean
    contratoUrl?: boolean
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parceria"]>



  export type ParceriaSelectScalar = {
    id?: boolean
    alunoId?: boolean
    descricaoProjeto?: boolean
    percentualPlataforma?: boolean
    dataAssinatura?: boolean
    contratoUrl?: boolean
  }

  export type ParceriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "descricaoProjeto" | "percentualPlataforma" | "dataAssinatura" | "contratoUrl", ExtArgs["result"]["parceria"]>
  export type ParceriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ParceriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parceria"
    objects: {
      aluno: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoId: number
      descricaoProjeto: string
      percentualPlataforma: Prisma.Decimal
      dataAssinatura: Date
      contratoUrl: string
    }, ExtArgs["result"]["parceria"]>
    composites: {}
  }

  type ParceriaGetPayload<S extends boolean | null | undefined | ParceriaDefaultArgs> = $Result.GetResult<Prisma.$ParceriaPayload, S>

  type ParceriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParceriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParceriaCountAggregateInputType | true
    }

  export interface ParceriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parceria'], meta: { name: 'Parceria' } }
    /**
     * Find zero or one Parceria that matches the filter.
     * @param {ParceriaFindUniqueArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParceriaFindUniqueArgs>(args: SelectSubset<T, ParceriaFindUniqueArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parceria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParceriaFindUniqueOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParceriaFindUniqueOrThrowArgs>(args: SelectSubset<T, ParceriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindFirstArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParceriaFindFirstArgs>(args?: SelectSubset<T, ParceriaFindFirstArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parceria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindFirstOrThrowArgs} args - Arguments to find a Parceria
     * @example
     * // Get one Parceria
     * const parceria = await prisma.parceria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParceriaFindFirstOrThrowArgs>(args?: SelectSubset<T, ParceriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcerias
     * const parcerias = await prisma.parceria.findMany()
     * 
     * // Get first 10 Parcerias
     * const parcerias = await prisma.parceria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parceriaWithIdOnly = await prisma.parceria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParceriaFindManyArgs>(args?: SelectSubset<T, ParceriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parceria.
     * @param {ParceriaCreateArgs} args - Arguments to create a Parceria.
     * @example
     * // Create one Parceria
     * const Parceria = await prisma.parceria.create({
     *   data: {
     *     // ... data to create a Parceria
     *   }
     * })
     * 
     */
    create<T extends ParceriaCreateArgs>(args: SelectSubset<T, ParceriaCreateArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcerias.
     * @param {ParceriaCreateManyArgs} args - Arguments to create many Parcerias.
     * @example
     * // Create many Parcerias
     * const parceria = await prisma.parceria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParceriaCreateManyArgs>(args?: SelectSubset<T, ParceriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parceria.
     * @param {ParceriaDeleteArgs} args - Arguments to delete one Parceria.
     * @example
     * // Delete one Parceria
     * const Parceria = await prisma.parceria.delete({
     *   where: {
     *     // ... filter to delete one Parceria
     *   }
     * })
     * 
     */
    delete<T extends ParceriaDeleteArgs>(args: SelectSubset<T, ParceriaDeleteArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parceria.
     * @param {ParceriaUpdateArgs} args - Arguments to update one Parceria.
     * @example
     * // Update one Parceria
     * const parceria = await prisma.parceria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParceriaUpdateArgs>(args: SelectSubset<T, ParceriaUpdateArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcerias.
     * @param {ParceriaDeleteManyArgs} args - Arguments to filter Parcerias to delete.
     * @example
     * // Delete a few Parcerias
     * const { count } = await prisma.parceria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParceriaDeleteManyArgs>(args?: SelectSubset<T, ParceriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcerias
     * const parceria = await prisma.parceria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParceriaUpdateManyArgs>(args: SelectSubset<T, ParceriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parceria.
     * @param {ParceriaUpsertArgs} args - Arguments to update or create a Parceria.
     * @example
     * // Update or create a Parceria
     * const parceria = await prisma.parceria.upsert({
     *   create: {
     *     // ... data to create a Parceria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parceria we want to update
     *   }
     * })
     */
    upsert<T extends ParceriaUpsertArgs>(args: SelectSubset<T, ParceriaUpsertArgs<ExtArgs>>): Prisma__ParceriaClient<$Result.GetResult<Prisma.$ParceriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaCountArgs} args - Arguments to filter Parcerias to count.
     * @example
     * // Count the number of Parcerias
     * const count = await prisma.parceria.count({
     *   where: {
     *     // ... the filter for the Parcerias we want to count
     *   }
     * })
    **/
    count<T extends ParceriaCountArgs>(
      args?: Subset<T, ParceriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParceriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParceriaAggregateArgs>(args: Subset<T, ParceriaAggregateArgs>): Prisma.PrismaPromise<GetParceriaAggregateType<T>>

    /**
     * Group by Parceria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceriaGroupByArgs} args - Group by arguments.
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
      T extends ParceriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParceriaGroupByArgs['orderBy'] }
        : { orderBy?: ParceriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParceriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParceriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parceria model
   */
  readonly fields: ParceriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parceria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParceriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parceria model
   */
  interface ParceriaFieldRefs {
    readonly id: FieldRef<"Parceria", 'Int'>
    readonly alunoId: FieldRef<"Parceria", 'Int'>
    readonly descricaoProjeto: FieldRef<"Parceria", 'String'>
    readonly percentualPlataforma: FieldRef<"Parceria", 'Decimal'>
    readonly dataAssinatura: FieldRef<"Parceria", 'DateTime'>
    readonly contratoUrl: FieldRef<"Parceria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parceria findUnique
   */
  export type ParceriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria findUniqueOrThrow
   */
  export type ParceriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria findFirst
   */
  export type ParceriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria findFirstOrThrow
   */
  export type ParceriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parceria to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcerias.
     */
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria findMany
   */
  export type ParceriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter, which Parcerias to fetch.
     */
    where?: ParceriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcerias to fetch.
     */
    orderBy?: ParceriaOrderByWithRelationInput | ParceriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcerias.
     */
    cursor?: ParceriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcerias.
     */
    skip?: number
    distinct?: ParceriaScalarFieldEnum | ParceriaScalarFieldEnum[]
  }

  /**
   * Parceria create
   */
  export type ParceriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Parceria.
     */
    data: XOR<ParceriaCreateInput, ParceriaUncheckedCreateInput>
  }

  /**
   * Parceria createMany
   */
  export type ParceriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcerias.
     */
    data: ParceriaCreateManyInput | ParceriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceria update
   */
  export type ParceriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Parceria.
     */
    data: XOR<ParceriaUpdateInput, ParceriaUncheckedUpdateInput>
    /**
     * Choose, which Parceria to update.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria updateMany
   */
  export type ParceriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcerias.
     */
    data: XOR<ParceriaUpdateManyMutationInput, ParceriaUncheckedUpdateManyInput>
    /**
     * Filter which Parcerias to update
     */
    where?: ParceriaWhereInput
    /**
     * Limit how many Parcerias to update.
     */
    limit?: number
  }

  /**
   * Parceria upsert
   */
  export type ParceriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Parceria to update in case it exists.
     */
    where: ParceriaWhereUniqueInput
    /**
     * In case the Parceria found by the `where` argument doesn't exist, create a new Parceria with this data.
     */
    create: XOR<ParceriaCreateInput, ParceriaUncheckedCreateInput>
    /**
     * In case the Parceria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParceriaUpdateInput, ParceriaUncheckedUpdateInput>
  }

  /**
   * Parceria delete
   */
  export type ParceriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
    /**
     * Filter which Parceria to delete.
     */
    where: ParceriaWhereUniqueInput
  }

  /**
   * Parceria deleteMany
   */
  export type ParceriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcerias to delete
     */
    where?: ParceriaWhereInput
    /**
     * Limit how many Parcerias to delete.
     */
    limit?: number
  }

  /**
   * Parceria without action
   */
  export type ParceriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceria
     */
    select?: ParceriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parceria
     */
    omit?: ParceriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    dataCadastro: 'dataCadastro',
    planoId: 'planoId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PlanoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type PlanoScalarFieldEnum = (typeof PlanoScalarFieldEnum)[keyof typeof PlanoScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria',
    cargaHoraria: 'cargaHoraria'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cursoId: 'cursoId',
    professorId: 'professorId',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const AlunoTurmaScalarFieldEnum: {
    alunoId: 'alunoId',
    turmaId: 'turmaId'
  };

  export type AlunoTurmaScalarFieldEnum = (typeof AlunoTurmaScalarFieldEnum)[keyof typeof AlunoTurmaScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    cursoId: 'cursoId',
    titulo: 'titulo',
    ordem: 'ordem'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    urlVideo: 'urlVideo',
    duracao: 'duracao'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ApostilaScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    arquivoUrl: 'arquivoUrl'
  };

  export type ApostilaScalarFieldEnum = (typeof ApostilaScalarFieldEnum)[keyof typeof ApostilaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const ProgressoAlunoScalarFieldEnum: {
    alunoId: 'alunoId',
    videoId: 'videoId',
    apostilaId: 'apostilaId',
    avaliacaoId: 'avaliacaoId',
    progressoVideo: 'progressoVideo',
    baixouApostila: 'baixouApostila',
    notaAvaliacao: 'notaAvaliacao',
    dataUltimaInteracao: 'dataUltimaInteracao'
  };

  export type ProgressoAlunoScalarFieldEnum = (typeof ProgressoAlunoScalarFieldEnum)[keyof typeof ProgressoAlunoScalarFieldEnum]


  export const ParceriaScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    descricaoProjeto: 'descricaoProjeto',
    percentualPlataforma: 'percentualPlataforma',
    dataAssinatura: 'dataAssinatura',
    contratoUrl: 'contratoUrl'
  };

  export type ParceriaScalarFieldEnum = (typeof ParceriaScalarFieldEnum)[keyof typeof ParceriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const PlanoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type PlanoOrderByRelevanceFieldEnum = (typeof PlanoOrderByRelevanceFieldEnum)[keyof typeof PlanoOrderByRelevanceFieldEnum]


  export const CursoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria'
  };

  export type CursoOrderByRelevanceFieldEnum = (typeof CursoOrderByRelevanceFieldEnum)[keyof typeof CursoOrderByRelevanceFieldEnum]


  export const TurmaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type TurmaOrderByRelevanceFieldEnum = (typeof TurmaOrderByRelevanceFieldEnum)[keyof typeof TurmaOrderByRelevanceFieldEnum]


  export const ModuloOrderByRelevanceFieldEnum: {
    titulo: 'titulo'
  };

  export type ModuloOrderByRelevanceFieldEnum = (typeof ModuloOrderByRelevanceFieldEnum)[keyof typeof ModuloOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    urlVideo: 'urlVideo'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  export const ApostilaOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    arquivoUrl: 'arquivoUrl'
  };

  export type ApostilaOrderByRelevanceFieldEnum = (typeof ApostilaOrderByRelevanceFieldEnum)[keyof typeof ApostilaOrderByRelevanceFieldEnum]


  export const AvaliacaoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao'
  };

  export type AvaliacaoOrderByRelevanceFieldEnum = (typeof AvaliacaoOrderByRelevanceFieldEnum)[keyof typeof AvaliacaoOrderByRelevanceFieldEnum]


  export const ParceriaOrderByRelevanceFieldEnum: {
    descricaoProjeto: 'descricaoProjeto',
    contratoUrl: 'contratoUrl'
  };

  export type ParceriaOrderByRelevanceFieldEnum = (typeof ParceriaOrderByRelevanceFieldEnum)[keyof typeof ParceriaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntNullableFilter<"Usuario"> | number | null
    plano?: XOR<PlanoNullableScalarRelationFilter, PlanoWhereInput> | null
    turmas?: TurmaListRelationFilter
    parcerias?: ParceriaListRelationFilter
    progresso?: ProgressoAlunoListRelationFilter
    Turma?: TurmaListRelationFilter
    AlunoTurma?: AlunoTurmaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrderInput | SortOrder
    plano?: PlanoOrderByWithRelationInput
    turmas?: TurmaOrderByRelationAggregateInput
    parcerias?: ParceriaOrderByRelationAggregateInput
    progresso?: ProgressoAlunoOrderByRelationAggregateInput
    Turma?: TurmaOrderByRelationAggregateInput
    AlunoTurma?: AlunoTurmaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntNullableFilter<"Usuario"> | number | null
    plano?: XOR<PlanoNullableScalarRelationFilter, PlanoWhereInput> | null
    turmas?: TurmaListRelationFilter
    parcerias?: ParceriaListRelationFilter
    progresso?: ProgressoAlunoListRelationFilter
    Turma?: TurmaListRelationFilter
    AlunoTurma?: AlunoTurmaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    planoId?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type PlanoWhereInput = {
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    id?: IntFilter<"Plano"> | number
    nome?: StringFilter<"Plano"> | string
    descricao?: StringNullableFilter<"Plano"> | string | null
    usuarios?: UsuarioListRelationFilter
  }

  export type PlanoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: PlanoOrderByRelevanceInput
  }

  export type PlanoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    nome?: StringFilter<"Plano"> | string
    descricao?: StringNullableFilter<"Plano"> | string | null
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type PlanoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: PlanoCountOrderByAggregateInput
    _avg?: PlanoAvgOrderByAggregateInput
    _max?: PlanoMaxOrderByAggregateInput
    _min?: PlanoMinOrderByAggregateInput
    _sum?: PlanoSumOrderByAggregateInput
  }

  export type PlanoScalarWhereWithAggregatesInput = {
    AND?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    OR?: PlanoScalarWhereWithAggregatesInput[]
    NOT?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plano"> | number
    nome?: StringWithAggregatesFilter<"Plano"> | string
    descricao?: StringNullableWithAggregatesFilter<"Plano"> | string | null
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    categoria?: StringFilter<"Curso"> | string
    cargaHoraria?: IntFilter<"Curso"> | number
    turmas?: TurmaListRelationFilter
    modulos?: ModuloListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
    modulos?: ModuloOrderByRelationAggregateInput
    _relevance?: CursoOrderByRelevanceInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    categoria?: StringFilter<"Curso"> | string
    cargaHoraria?: IntFilter<"Curso"> | number
    turmas?: TurmaListRelationFilter
    modulos?: ModuloListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    titulo?: StringWithAggregatesFilter<"Curso"> | string
    descricao?: StringWithAggregatesFilter<"Curso"> | string
    categoria?: StringWithAggregatesFilter<"Curso"> | string
    cargaHoraria?: IntWithAggregatesFilter<"Curso"> | number
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
    dataInicio?: DateTimeFilter<"Turma"> | Date | string
    dataFim?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    alunos?: UsuarioListRelationFilter
    AlunoTurma?: AlunoTurmaListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    curso?: CursoOrderByWithRelationInput
    professor?: UsuarioOrderByWithRelationInput
    alunos?: UsuarioOrderByRelationAggregateInput
    AlunoTurma?: AlunoTurmaOrderByRelationAggregateInput
    _relevance?: TurmaOrderByRelevanceInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
    dataInicio?: DateTimeFilter<"Turma"> | Date | string
    dataFim?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    alunos?: UsuarioListRelationFilter
    AlunoTurma?: AlunoTurmaListRelationFilter
  }, "id">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turma"> | number
    nome?: StringWithAggregatesFilter<"Turma"> | string
    cursoId?: IntWithAggregatesFilter<"Turma"> | number
    professorId?: IntWithAggregatesFilter<"Turma"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
  }

  export type AlunoTurmaWhereInput = {
    AND?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    OR?: AlunoTurmaWhereInput[]
    NOT?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }

  export type AlunoTurmaOrderByWithRelationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
  }

  export type AlunoTurmaWhereUniqueInput = Prisma.AtLeast<{
    alunoId_turmaId?: AlunoTurmaAlunoIdTurmaIdCompoundUniqueInput
    AND?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    OR?: AlunoTurmaWhereInput[]
    NOT?: AlunoTurmaWhereInput | AlunoTurmaWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }, "alunoId_turmaId">

  export type AlunoTurmaOrderByWithAggregationInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
    _count?: AlunoTurmaCountOrderByAggregateInput
    _avg?: AlunoTurmaAvgOrderByAggregateInput
    _max?: AlunoTurmaMaxOrderByAggregateInput
    _min?: AlunoTurmaMinOrderByAggregateInput
    _sum?: AlunoTurmaSumOrderByAggregateInput
  }

  export type AlunoTurmaScalarWhereWithAggregatesInput = {
    AND?: AlunoTurmaScalarWhereWithAggregatesInput | AlunoTurmaScalarWhereWithAggregatesInput[]
    OR?: AlunoTurmaScalarWhereWithAggregatesInput[]
    NOT?: AlunoTurmaScalarWhereWithAggregatesInput | AlunoTurmaScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"AlunoTurma"> | number
    turmaId?: IntWithAggregatesFilter<"AlunoTurma"> | number
  }

  export type ModuloWhereInput = {
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    videos?: VideoListRelationFilter
    apostilas?: ApostilaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type ModuloOrderByWithRelationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    curso?: CursoOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
    apostilas?: ApostilaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    _relevance?: ModuloOrderByRelevanceInput
  }

  export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    videos?: VideoListRelationFilter
    apostilas?: ApostilaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type ModuloOrderByWithAggregationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    _count?: ModuloCountOrderByAggregateInput
    _avg?: ModuloAvgOrderByAggregateInput
    _max?: ModuloMaxOrderByAggregateInput
    _min?: ModuloMinOrderByAggregateInput
    _sum?: ModuloSumOrderByAggregateInput
  }

  export type ModuloScalarWhereWithAggregatesInput = {
    AND?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    OR?: ModuloScalarWhereWithAggregatesInput[]
    NOT?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Modulo"> | number
    cursoId?: IntWithAggregatesFilter<"Modulo"> | number
    titulo?: StringWithAggregatesFilter<"Modulo"> | string
    ordem?: IntWithAggregatesFilter<"Modulo"> | number
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    urlVideo?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoAlunoOrderByRelationAggregateInput
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    urlVideo?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    moduloId?: IntWithAggregatesFilter<"Video"> | number
    titulo?: StringWithAggregatesFilter<"Video"> | string
    urlVideo?: StringWithAggregatesFilter<"Video"> | string
    duracao?: IntWithAggregatesFilter<"Video"> | number
  }

  export type ApostilaWhereInput = {
    AND?: ApostilaWhereInput | ApostilaWhereInput[]
    OR?: ApostilaWhereInput[]
    NOT?: ApostilaWhereInput | ApostilaWhereInput[]
    id?: IntFilter<"Apostila"> | number
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivoUrl?: StringFilter<"Apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }

  export type ApostilaOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoAlunoOrderByRelationAggregateInput
    _relevance?: ApostilaOrderByRelevanceInput
  }

  export type ApostilaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApostilaWhereInput | ApostilaWhereInput[]
    OR?: ApostilaWhereInput[]
    NOT?: ApostilaWhereInput | ApostilaWhereInput[]
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivoUrl?: StringFilter<"Apostila"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }, "id">

  export type ApostilaOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
    _count?: ApostilaCountOrderByAggregateInput
    _avg?: ApostilaAvgOrderByAggregateInput
    _max?: ApostilaMaxOrderByAggregateInput
    _min?: ApostilaMinOrderByAggregateInput
    _sum?: ApostilaSumOrderByAggregateInput
  }

  export type ApostilaScalarWhereWithAggregatesInput = {
    AND?: ApostilaScalarWhereWithAggregatesInput | ApostilaScalarWhereWithAggregatesInput[]
    OR?: ApostilaScalarWhereWithAggregatesInput[]
    NOT?: ApostilaScalarWhereWithAggregatesInput | ApostilaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apostila"> | number
    moduloId?: IntWithAggregatesFilter<"Apostila"> | number
    titulo?: StringWithAggregatesFilter<"Apostila"> | string
    arquivoUrl?: StringWithAggregatesFilter<"Apostila"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progresso?: ProgressoAlunoOrderByRelationAggregateInput
    _relevance?: AvaliacaoOrderByRelevanceInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    progresso?: ProgressoAlunoListRelationFilter
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    moduloId?: IntWithAggregatesFilter<"Avaliacao"> | number
    titulo?: StringWithAggregatesFilter<"Avaliacao"> | string
    descricao?: StringWithAggregatesFilter<"Avaliacao"> | string
  }

  export type ProgressoAlunoWhereInput = {
    AND?: ProgressoAlunoWhereInput | ProgressoAlunoWhereInput[]
    OR?: ProgressoAlunoWhereInput[]
    NOT?: ProgressoAlunoWhereInput | ProgressoAlunoWhereInput[]
    alunoId?: IntFilter<"ProgressoAluno"> | number
    videoId?: IntFilter<"ProgressoAluno"> | number
    apostilaId?: IntFilter<"ProgressoAluno"> | number
    avaliacaoId?: IntFilter<"ProgressoAluno"> | number
    progressoVideo?: IntFilter<"ProgressoAluno"> | number
    baixouApostila?: BoolFilter<"ProgressoAluno"> | boolean
    notaAvaliacao?: DecimalFilter<"ProgressoAluno"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"ProgressoAluno"> | Date | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, ApostilaWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }

  export type ProgressoAlunoOrderByWithRelationInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    baixouApostila?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
    apostila?: ApostilaOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByWithRelationInput
  }

  export type ProgressoAlunoWhereUniqueInput = Prisma.AtLeast<{
    alunoId_videoId_apostilaId_avaliacaoId?: ProgressoAlunoAlunoIdVideoIdApostilaIdAvaliacaoIdCompoundUniqueInput
    AND?: ProgressoAlunoWhereInput | ProgressoAlunoWhereInput[]
    OR?: ProgressoAlunoWhereInput[]
    NOT?: ProgressoAlunoWhereInput | ProgressoAlunoWhereInput[]
    alunoId?: IntFilter<"ProgressoAluno"> | number
    videoId?: IntFilter<"ProgressoAluno"> | number
    apostilaId?: IntFilter<"ProgressoAluno"> | number
    avaliacaoId?: IntFilter<"ProgressoAluno"> | number
    progressoVideo?: IntFilter<"ProgressoAluno"> | number
    baixouApostila?: BoolFilter<"ProgressoAluno"> | boolean
    notaAvaliacao?: DecimalFilter<"ProgressoAluno"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"ProgressoAluno"> | Date | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    apostila?: XOR<ApostilaScalarRelationFilter, ApostilaWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }, "alunoId_videoId_apostilaId_avaliacaoId">

  export type ProgressoAlunoOrderByWithAggregationInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    baixouApostila?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
    _count?: ProgressoAlunoCountOrderByAggregateInput
    _avg?: ProgressoAlunoAvgOrderByAggregateInput
    _max?: ProgressoAlunoMaxOrderByAggregateInput
    _min?: ProgressoAlunoMinOrderByAggregateInput
    _sum?: ProgressoAlunoSumOrderByAggregateInput
  }

  export type ProgressoAlunoScalarWhereWithAggregatesInput = {
    AND?: ProgressoAlunoScalarWhereWithAggregatesInput | ProgressoAlunoScalarWhereWithAggregatesInput[]
    OR?: ProgressoAlunoScalarWhereWithAggregatesInput[]
    NOT?: ProgressoAlunoScalarWhereWithAggregatesInput | ProgressoAlunoScalarWhereWithAggregatesInput[]
    alunoId?: IntWithAggregatesFilter<"ProgressoAluno"> | number
    videoId?: IntWithAggregatesFilter<"ProgressoAluno"> | number
    apostilaId?: IntWithAggregatesFilter<"ProgressoAluno"> | number
    avaliacaoId?: IntWithAggregatesFilter<"ProgressoAluno"> | number
    progressoVideo?: IntWithAggregatesFilter<"ProgressoAluno"> | number
    baixouApostila?: BoolWithAggregatesFilter<"ProgressoAluno"> | boolean
    notaAvaliacao?: DecimalWithAggregatesFilter<"ProgressoAluno"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeWithAggregatesFilter<"ProgressoAluno"> | Date | string
  }

  export type ParceriaWhereInput = {
    AND?: ParceriaWhereInput | ParceriaWhereInput[]
    OR?: ParceriaWhereInput[]
    NOT?: ParceriaWhereInput | ParceriaWhereInput[]
    id?: IntFilter<"Parceria"> | number
    alunoId?: IntFilter<"Parceria"> | number
    descricaoProjeto?: StringFilter<"Parceria"> | string
    percentualPlataforma?: DecimalFilter<"Parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"Parceria"> | Date | string
    contratoUrl?: StringFilter<"Parceria"> | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ParceriaOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
    aluno?: UsuarioOrderByWithRelationInput
    _relevance?: ParceriaOrderByRelevanceInput
  }

  export type ParceriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParceriaWhereInput | ParceriaWhereInput[]
    OR?: ParceriaWhereInput[]
    NOT?: ParceriaWhereInput | ParceriaWhereInput[]
    alunoId?: IntFilter<"Parceria"> | number
    descricaoProjeto?: StringFilter<"Parceria"> | string
    percentualPlataforma?: DecimalFilter<"Parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"Parceria"> | Date | string
    contratoUrl?: StringFilter<"Parceria"> | string
    aluno?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ParceriaOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
    _count?: ParceriaCountOrderByAggregateInput
    _avg?: ParceriaAvgOrderByAggregateInput
    _max?: ParceriaMaxOrderByAggregateInput
    _min?: ParceriaMinOrderByAggregateInput
    _sum?: ParceriaSumOrderByAggregateInput
  }

  export type ParceriaScalarWhereWithAggregatesInput = {
    AND?: ParceriaScalarWhereWithAggregatesInput | ParceriaScalarWhereWithAggregatesInput[]
    OR?: ParceriaScalarWhereWithAggregatesInput[]
    NOT?: ParceriaScalarWhereWithAggregatesInput | ParceriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parceria"> | number
    alunoId?: IntWithAggregatesFilter<"Parceria"> | number
    descricaoProjeto?: StringWithAggregatesFilter<"Parceria"> | string
    percentualPlataforma?: DecimalWithAggregatesFilter<"Parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeWithAggregatesFilter<"Parceria"> | Date | string
    contratoUrl?: StringWithAggregatesFilter<"Parceria"> | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlanoCreateInput = {
    nome: string
    descricao?: string | null
    usuarios?: UsuarioCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type PlanoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CursoCreateInput = {
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    turmas?: TurmaCreateNestedManyWithoutCursoInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
  }

  export type CursoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
  }

  export type TurmaCreateInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: UsuarioCreateNestedOneWithoutTurmaInput
    alunos?: UsuarioCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunos?: UsuarioUncheckedCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: UsuarioUpdateOneRequiredWithoutTurmaNestedInput
    alunos?: UsuarioUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: UsuarioUncheckedUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type TurmaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoTurmaCreateInput = {
    aluno: UsuarioCreateNestedOneWithoutAlunoTurmaInput
    turma: TurmaCreateNestedOneWithoutAlunoTurmaInput
  }

  export type AlunoTurmaUncheckedCreateInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaUpdateInput = {
    aluno?: UsuarioUpdateOneRequiredWithoutAlunoTurmaNestedInput
    turma?: TurmaUpdateOneRequiredWithoutAlunoTurmaNestedInput
  }

  export type AlunoTurmaUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaCreateManyInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaUpdateManyMutationInput = {

  }

  export type AlunoTurmaUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloCreateInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloCreateManyInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
  }

  export type ModuloUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateInput = {
    titulo: string
    urlVideo: string
    duracao: number
    modulo: ModuloCreateNestedOneWithoutVideosInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutVideosNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type VideoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type ApostilaCreateInput = {
    titulo: string
    arquivoUrl: string
    modulo: ModuloCreateNestedOneWithoutApostilasInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutApostilasNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
  }

  export type ApostilaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ApostilaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    titulo: string
    descricao: string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAlunoCreateInput = {
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    aluno: UsuarioCreateNestedOneWithoutProgressoInput
    video: VideoCreateNestedOneWithoutProgressoInput
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAlunoUncheckedCreateInput = {
    alunoId: number
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoUpdateInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoNestedInput
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAlunoUncheckedUpdateInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoCreateManyInput = {
    alunoId: number
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoUpdateManyMutationInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoUncheckedUpdateManyInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaCreateInput = {
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
    aluno: UsuarioCreateNestedOneWithoutParceriasInput
  }

  export type ParceriaUncheckedCreateInput = {
    id?: number
    alunoId: number
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type ParceriaUpdateInput = {
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
    aluno?: UsuarioUpdateOneRequiredWithoutParceriasNestedInput
  }

  export type ParceriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParceriaCreateManyInput = {
    id?: number
    alunoId: number
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type ParceriaUpdateManyMutationInput = {
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParceriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoId?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlanoNullableScalarRelationFilter = {
    is?: PlanoWhereInput | null
    isNot?: PlanoWhereInput | null
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type ParceriaListRelationFilter = {
    every?: ParceriaWhereInput
    some?: ParceriaWhereInput
    none?: ParceriaWhereInput
  }

  export type ProgressoAlunoListRelationFilter = {
    every?: ProgressoAlunoWhereInput
    some?: ProgressoAlunoWhereInput
    none?: ProgressoAlunoWhereInput
  }

  export type AlunoTurmaListRelationFilter = {
    every?: AlunoTurmaWhereInput
    some?: AlunoTurmaWhereInput
    none?: AlunoTurmaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParceriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressoAlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoTurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    dataCadastro?: SortOrder
    planoId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    planoId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanoOrderByRelevanceInput = {
    fields: PlanoOrderByRelevanceFieldEnum | PlanoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlanoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PlanoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlanoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PlanoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type PlanoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ModuloListRelationFilter = {
    every?: ModuloWhereInput
    some?: ModuloWhereInput
    none?: ModuloWhereInput
  }

  export type ModuloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoOrderByRelevanceInput = {
    fields: CursoOrderByRelevanceFieldEnum | CursoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
    cargaHoraria?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TurmaOrderByRelevanceInput = {
    fields: TurmaOrderByRelevanceFieldEnum | TurmaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type AlunoTurmaAlunoIdTurmaIdCompoundUniqueInput = {
    alunoId: number
    turmaId: number
  }

  export type AlunoTurmaCountOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaMinOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type AlunoTurmaSumOrderByAggregateInput = {
    alunoId?: SortOrder
    turmaId?: SortOrder
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type ApostilaListRelationFilter = {
    every?: ApostilaWhereInput
    some?: ApostilaWhereInput
    none?: ApostilaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApostilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuloOrderByRelevanceInput = {
    fields: ModuloOrderByRelevanceFieldEnum | ModuloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModuloCountOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMaxOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMinOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloScalarRelationFilter = {
    is?: ModuloWhereInput
    isNot?: ModuloWhereInput
  }

  export type VideoOrderByRelevanceInput = {
    fields: VideoOrderByRelevanceFieldEnum | VideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    urlVideo?: SortOrder
    duracao?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracao?: SortOrder
  }

  export type ApostilaOrderByRelevanceInput = {
    fields: ApostilaOrderByRelevanceFieldEnum | ApostilaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApostilaCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type ApostilaAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type ApostilaMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type ApostilaMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    arquivoUrl?: SortOrder
  }

  export type ApostilaSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoOrderByRelevanceInput = {
    fields: AvaliacaoOrderByRelevanceFieldEnum | AvaliacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type ApostilaScalarRelationFilter = {
    is?: ApostilaWhereInput
    isNot?: ApostilaWhereInput
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: AvaliacaoWhereInput
    isNot?: AvaliacaoWhereInput
  }

  export type ProgressoAlunoAlunoIdVideoIdApostilaIdAvaliacaoIdCompoundUniqueInput = {
    alunoId: number
    videoId: number
    apostilaId: number
    avaliacaoId: number
  }

  export type ProgressoAlunoCountOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    baixouApostila?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type ProgressoAlunoAvgOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    notaAvaliacao?: SortOrder
  }

  export type ProgressoAlunoMaxOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    baixouApostila?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type ProgressoAlunoMinOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    baixouApostila?: SortOrder
    notaAvaliacao?: SortOrder
    dataUltimaInteracao?: SortOrder
  }

  export type ProgressoAlunoSumOrderByAggregateInput = {
    alunoId?: SortOrder
    videoId?: SortOrder
    apostilaId?: SortOrder
    avaliacaoId?: SortOrder
    progressoVideo?: SortOrder
    notaAvaliacao?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ParceriaOrderByRelevanceInput = {
    fields: ParceriaOrderByRelevanceFieldEnum | ParceriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParceriaCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type ParceriaAvgOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentualPlataforma?: SortOrder
  }

  export type ParceriaMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type ParceriaMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    descricaoProjeto?: SortOrder
    percentualPlataforma?: SortOrder
    dataAssinatura?: SortOrder
    contratoUrl?: SortOrder
  }

  export type ParceriaSumOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    percentualPlataforma?: SortOrder
  }

  export type PlanoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutUsuariosInput
    connect?: PlanoWhereUniqueInput
  }

  export type TurmaCreateNestedManyWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput> | TurmaCreateWithoutAlunosInput[] | TurmaUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput | TurmaCreateOrConnectWithoutAlunosInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ParceriaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
  }

  export type ProgressoAlunoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput> | ProgressoAlunoCreateWithoutAlunoInput[] | ProgressoAlunoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAlunoInput | ProgressoAlunoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoAlunoCreateManyAlunoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type TurmaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type AlunoTurmaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput> | TurmaCreateWithoutAlunosInput[] | TurmaUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput | TurmaCreateOrConnectWithoutAlunosInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ParceriaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
  }

  export type ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput> | ProgressoAlunoCreateWithoutAlunoInput[] | ProgressoAlunoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAlunoInput | ProgressoAlunoCreateOrConnectWithoutAlunoInput[]
    createMany?: ProgressoAlunoCreateManyAlunoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanoUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutUsuariosInput
    upsert?: PlanoUpsertWithoutUsuariosInput
    disconnect?: PlanoWhereInput | boolean
    delete?: PlanoWhereInput | boolean
    connect?: PlanoWhereUniqueInput
    update?: XOR<XOR<PlanoUpdateToOneWithWhereWithoutUsuariosInput, PlanoUpdateWithoutUsuariosInput>, PlanoUncheckedUpdateWithoutUsuariosInput>
  }

  export type TurmaUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput> | TurmaCreateWithoutAlunosInput[] | TurmaUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput | TurmaCreateOrConnectWithoutAlunosInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutAlunosInput | TurmaUpsertWithWhereUniqueWithoutAlunosInput[]
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutAlunosInput | TurmaUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutAlunosInput | TurmaUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ParceriaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    upsert?: ParceriaUpsertWithWhereUniqueWithoutAlunoInput | ParceriaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    set?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    disconnect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    delete?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    update?: ParceriaUpdateWithWhereUniqueWithoutAlunoInput | ParceriaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ParceriaUpdateManyWithWhereWithoutAlunoInput | ParceriaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
  }

  export type ProgressoAlunoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput> | ProgressoAlunoCreateWithoutAlunoInput[] | ProgressoAlunoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAlunoInput | ProgressoAlunoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoAlunoCreateManyAlunoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutAlunoInput | ProgressoAlunoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type TurmaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type AlunoTurmaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutAlunoInput | AlunoTurmaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurmaUncheckedUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput> | TurmaCreateWithoutAlunosInput[] | TurmaUncheckedCreateWithoutAlunosInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput | TurmaCreateOrConnectWithoutAlunosInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutAlunosInput | TurmaUpsertWithWhereUniqueWithoutAlunosInput[]
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutAlunosInput | TurmaUpdateWithWhereUniqueWithoutAlunosInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutAlunosInput | TurmaUpdateManyWithWhereWithoutAlunosInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ParceriaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput> | ParceriaCreateWithoutAlunoInput[] | ParceriaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ParceriaCreateOrConnectWithoutAlunoInput | ParceriaCreateOrConnectWithoutAlunoInput[]
    upsert?: ParceriaUpsertWithWhereUniqueWithoutAlunoInput | ParceriaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ParceriaCreateManyAlunoInputEnvelope
    set?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    disconnect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    delete?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    connect?: ParceriaWhereUniqueInput | ParceriaWhereUniqueInput[]
    update?: ParceriaUpdateWithWhereUniqueWithoutAlunoInput | ParceriaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ParceriaUpdateManyWithWhereWithoutAlunoInput | ParceriaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput> | ProgressoAlunoCreateWithoutAlunoInput[] | ProgressoAlunoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAlunoInput | ProgressoAlunoCreateOrConnectWithoutAlunoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutAlunoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: ProgressoAlunoCreateManyAlunoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutAlunoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutAlunoInput | ProgressoAlunoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput> | AlunoTurmaCreateWithoutAlunoInput[] | AlunoTurmaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutAlunoInput | AlunoTurmaCreateOrConnectWithoutAlunoInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AlunoTurmaCreateManyAlunoInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput | AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutAlunoInput | AlunoTurmaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutPlanoInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPlanoInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPlanoInput | UsuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPlanoInput | UsuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPlanoInput | UsuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput> | UsuarioCreateWithoutPlanoInput[] | UsuarioUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPlanoInput | UsuarioCreateOrConnectWithoutPlanoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPlanoInput | UsuarioUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: UsuarioCreateManyPlanoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPlanoInput | UsuarioUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPlanoInput | UsuarioUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ModuloCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type ModuloUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ModuloUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type ModuloUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutTurmasInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    connect?: CursoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutTurmaInput = {
    create?: XOR<UsuarioCreateWithoutTurmaInput, UsuarioUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutTurmasInput = {
    create?: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput> | UsuarioCreateWithoutTurmasInput[] | UsuarioUncheckedCreateWithoutTurmasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasInput | UsuarioCreateOrConnectWithoutTurmasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AlunoTurmaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutTurmasInput = {
    create?: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput> | UsuarioCreateWithoutTurmasInput[] | UsuarioUncheckedCreateWithoutTurmasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasInput | UsuarioCreateOrConnectWithoutTurmasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    upsert?: CursoUpsertWithoutTurmasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmasInput, CursoUpdateWithoutTurmasInput>, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutTurmaNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurmaInput, UsuarioUncheckedCreateWithoutTurmaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmaInput
    upsert?: UsuarioUpsertWithoutTurmaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTurmaInput, UsuarioUpdateWithoutTurmaInput>, UsuarioUncheckedUpdateWithoutTurmaInput>
  }

  export type UsuarioUpdateManyWithoutTurmasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput> | UsuarioCreateWithoutTurmasInput[] | UsuarioUncheckedCreateWithoutTurmasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasInput | UsuarioCreateOrConnectWithoutTurmasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutTurmasInput | UsuarioUpsertWithWhereUniqueWithoutTurmasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutTurmasInput | UsuarioUpdateWithWhereUniqueWithoutTurmasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutTurmasInput | UsuarioUpdateManyWithWhereWithoutTurmasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AlunoTurmaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutTurmaInput | AlunoTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutTurmasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput> | UsuarioCreateWithoutTurmasInput[] | UsuarioUncheckedCreateWithoutTurmasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurmasInput | UsuarioCreateOrConnectWithoutTurmasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutTurmasInput | UsuarioUpsertWithWhereUniqueWithoutTurmasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutTurmasInput | UsuarioUpdateWithWhereUniqueWithoutTurmasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutTurmasInput | UsuarioUpdateManyWithWhereWithoutTurmasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput> | AlunoTurmaCreateWithoutTurmaInput[] | AlunoTurmaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoTurmaCreateOrConnectWithoutTurmaInput | AlunoTurmaCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoTurmaCreateManyTurmaInputEnvelope
    set?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    disconnect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    delete?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    connect?: AlunoTurmaWhereUniqueInput | AlunoTurmaWhereUniqueInput[]
    update?: AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput | AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoTurmaUpdateManyWithWhereWithoutTurmaInput | AlunoTurmaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAlunoTurmaInput = {
    create?: XOR<UsuarioCreateWithoutAlunoTurmaInput, UsuarioUncheckedCreateWithoutAlunoTurmaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlunoTurmaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutAlunoTurmaInput = {
    create?: XOR<TurmaCreateWithoutAlunoTurmaInput, TurmaUncheckedCreateWithoutAlunoTurmaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunoTurmaInput
    connect?: TurmaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAlunoTurmaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAlunoTurmaInput, UsuarioUncheckedCreateWithoutAlunoTurmaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAlunoTurmaInput
    upsert?: UsuarioUpsertWithoutAlunoTurmaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAlunoTurmaInput, UsuarioUpdateWithoutAlunoTurmaInput>, UsuarioUncheckedUpdateWithoutAlunoTurmaInput>
  }

  export type TurmaUpdateOneRequiredWithoutAlunoTurmaNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunoTurmaInput, TurmaUncheckedCreateWithoutAlunoTurmaInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunoTurmaInput
    upsert?: TurmaUpsertWithoutAlunoTurmaInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutAlunoTurmaInput, TurmaUpdateWithoutAlunoTurmaInput>, TurmaUncheckedUpdateWithoutAlunoTurmaInput>
  }

  export type CursoCreateNestedOneWithoutModulosInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    connect?: CursoWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutModuloInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ApostilaCreateNestedManyWithoutModuloInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ApostilaUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutModulosNestedInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    upsert?: CursoUpsertWithoutModulosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutModulosInput, CursoUpdateWithoutModulosInput>, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type VideoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuloInput | VideoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuloInput | VideoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuloInput | VideoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ApostilaUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    upsert?: ApostilaUpsertWithWhereUniqueWithoutModuloInput | ApostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    set?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    disconnect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    delete?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    update?: ApostilaUpdateWithWhereUniqueWithoutModuloInput | ApostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ApostilaUpdateManyWithWhereWithoutModuloInput | ApostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput> | VideoCreateWithoutModuloInput[] | VideoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuloInput | VideoCreateOrConnectWithoutModuloInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuloInput | VideoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: VideoCreateManyModuloInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuloInput | VideoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuloInput | VideoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ApostilaUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput> | ApostilaCreateWithoutModuloInput[] | ApostilaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ApostilaCreateOrConnectWithoutModuloInput | ApostilaCreateOrConnectWithoutModuloInput[]
    upsert?: ApostilaUpsertWithWhereUniqueWithoutModuloInput | ApostilaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ApostilaCreateManyModuloInputEnvelope
    set?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    disconnect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    delete?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    connect?: ApostilaWhereUniqueInput | ApostilaWhereUniqueInput[]
    update?: ApostilaUpdateWithWhereUniqueWithoutModuloInput | ApostilaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ApostilaUpdateManyWithWhereWithoutModuloInput | ApostilaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutVideosInput = {
    create?: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutVideosInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoAlunoCreateNestedManyWithoutVideoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput> | ProgressoAlunoCreateWithoutVideoInput[] | ProgressoAlunoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutVideoInput | ProgressoAlunoCreateOrConnectWithoutVideoInput[]
    createMany?: ProgressoAlunoCreateManyVideoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ProgressoAlunoUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput> | ProgressoAlunoCreateWithoutVideoInput[] | ProgressoAlunoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutVideoInput | ProgressoAlunoCreateOrConnectWithoutVideoInput[]
    createMany?: ProgressoAlunoCreateManyVideoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutVideosInput
    upsert?: ModuloUpsertWithoutVideosInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutVideosInput, ModuloUpdateWithoutVideosInput>, ModuloUncheckedUpdateWithoutVideosInput>
  }

  export type ProgressoAlunoUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput> | ProgressoAlunoCreateWithoutVideoInput[] | ProgressoAlunoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutVideoInput | ProgressoAlunoCreateOrConnectWithoutVideoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutVideoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ProgressoAlunoCreateManyVideoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutVideoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutVideoInput | ProgressoAlunoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput> | ProgressoAlunoCreateWithoutVideoInput[] | ProgressoAlunoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutVideoInput | ProgressoAlunoCreateOrConnectWithoutVideoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutVideoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ProgressoAlunoCreateManyVideoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutVideoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutVideoInput | ProgressoAlunoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutApostilasInput = {
    create?: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutApostilasInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoAlunoCreateNestedManyWithoutApostilaInput = {
    create?: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput> | ProgressoAlunoCreateWithoutApostilaInput[] | ProgressoAlunoUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutApostilaInput | ProgressoAlunoCreateOrConnectWithoutApostilaInput[]
    createMany?: ProgressoAlunoCreateManyApostilaInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ProgressoAlunoUncheckedCreateNestedManyWithoutApostilaInput = {
    create?: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput> | ProgressoAlunoCreateWithoutApostilaInput[] | ProgressoAlunoUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutApostilaInput | ProgressoAlunoCreateOrConnectWithoutApostilaInput[]
    createMany?: ProgressoAlunoCreateManyApostilaInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutApostilasNestedInput = {
    create?: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutApostilasInput
    upsert?: ModuloUpsertWithoutApostilasInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutApostilasInput, ModuloUpdateWithoutApostilasInput>, ModuloUncheckedUpdateWithoutApostilasInput>
  }

  export type ProgressoAlunoUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput> | ProgressoAlunoCreateWithoutApostilaInput[] | ProgressoAlunoUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutApostilaInput | ProgressoAlunoCreateOrConnectWithoutApostilaInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutApostilaInput | ProgressoAlunoUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: ProgressoAlunoCreateManyApostilaInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutApostilaInput | ProgressoAlunoUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutApostilaInput | ProgressoAlunoUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutApostilaNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput> | ProgressoAlunoCreateWithoutApostilaInput[] | ProgressoAlunoUncheckedCreateWithoutApostilaInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutApostilaInput | ProgressoAlunoCreateOrConnectWithoutApostilaInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutApostilaInput | ProgressoAlunoUpsertWithWhereUniqueWithoutApostilaInput[]
    createMany?: ProgressoAlunoCreateManyApostilaInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutApostilaInput | ProgressoAlunoUpdateWithWhereUniqueWithoutApostilaInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutApostilaInput | ProgressoAlunoUpdateManyWithWhereWithoutApostilaInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoAlunoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAlunoCreateWithoutAvaliacaoInput[] | ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput | ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ProgressoAlunoCreateManyAvaliacaoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ProgressoAlunoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAlunoCreateWithoutAvaliacaoInput[] | ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput | ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ProgressoAlunoCreateManyAvaliacaoInputEnvelope
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    upsert?: ModuloUpsertWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutAvaliacoesInput, ModuloUpdateWithoutAvaliacoesInput>, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ProgressoAlunoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAlunoCreateWithoutAvaliacaoInput[] | ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput | ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutAvaliacaoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ProgressoAlunoCreateManyAvaliacaoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutAvaliacaoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutAvaliacaoInput | ProgressoAlunoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput> | ProgressoAlunoCreateWithoutAvaliacaoInput[] | ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput | ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ProgressoAlunoUpsertWithWhereUniqueWithoutAvaliacaoInput | ProgressoAlunoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ProgressoAlunoCreateManyAvaliacaoInputEnvelope
    set?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    disconnect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    delete?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    connect?: ProgressoAlunoWhereUniqueInput | ProgressoAlunoWhereUniqueInput[]
    update?: ProgressoAlunoUpdateWithWhereUniqueWithoutAvaliacaoInput | ProgressoAlunoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ProgressoAlunoUpdateManyWithWhereWithoutAvaliacaoInput | ProgressoAlunoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProgressoInput = {
    create?: XOR<UsuarioCreateWithoutProgressoInput, UsuarioUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutProgressoInput = {
    create?: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutProgressoInput
    connect?: VideoWhereUniqueInput
  }

  export type ApostilaCreateNestedOneWithoutProgressoInput = {
    create?: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: ApostilaCreateOrConnectWithoutProgressoInput
    connect?: ApostilaWhereUniqueInput
  }

  export type AvaliacaoCreateNestedOneWithoutProgressoInput = {
    create?: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutProgressoInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UsuarioUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgressoInput, UsuarioUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressoInput
    upsert?: UsuarioUpsertWithoutProgressoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgressoInput, UsuarioUpdateWithoutProgressoInput>, UsuarioUncheckedUpdateWithoutProgressoInput>
  }

  export type VideoUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: VideoCreateOrConnectWithoutProgressoInput
    upsert?: VideoUpsertWithoutProgressoInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutProgressoInput, VideoUpdateWithoutProgressoInput>, VideoUncheckedUpdateWithoutProgressoInput>
  }

  export type ApostilaUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: ApostilaCreateOrConnectWithoutProgressoInput
    upsert?: ApostilaUpsertWithoutProgressoInput
    connect?: ApostilaWhereUniqueInput
    update?: XOR<XOR<ApostilaUpdateToOneWithWhereWithoutProgressoInput, ApostilaUpdateWithoutProgressoInput>, ApostilaUncheckedUpdateWithoutProgressoInput>
  }

  export type AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutProgressoInput
    upsert?: AvaliacaoUpsertWithoutProgressoInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutProgressoInput, AvaliacaoUpdateWithoutProgressoInput>, AvaliacaoUncheckedUpdateWithoutProgressoInput>
  }

  export type UsuarioCreateNestedOneWithoutParceriasInput = {
    create?: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParceriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutParceriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParceriasInput
    upsert?: UsuarioUpsertWithoutParceriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParceriasInput, UsuarioUpdateWithoutParceriasInput>, UsuarioUncheckedUpdateWithoutParceriasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[]
    notIn?: $Enums.TipoUsuario[]
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PlanoCreateWithoutUsuariosInput = {
    nome: string
    descricao?: string | null
  }

  export type PlanoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type PlanoCreateOrConnectWithoutUsuariosInput = {
    where: PlanoWhereUniqueInput
    create: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
  }

  export type TurmaCreateWithoutAlunosInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: UsuarioCreateNestedOneWithoutTurmaInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type ParceriaCreateWithoutAlunoInput = {
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type ParceriaUncheckedCreateWithoutAlunoInput = {
    id?: number
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type ParceriaCreateOrConnectWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    create: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput>
  }

  export type ParceriaCreateManyAlunoInputEnvelope = {
    data: ParceriaCreateManyAlunoInput | ParceriaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type ProgressoAlunoCreateWithoutAlunoInput = {
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    video: VideoCreateNestedOneWithoutProgressoInput
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAlunoUncheckedCreateWithoutAlunoInput = {
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoCreateOrConnectWithoutAlunoInput = {
    where: ProgressoAlunoWhereUniqueInput
    create: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoAlunoCreateManyAlunoInputEnvelope = {
    data: ProgressoAlunoCreateManyAlunoInput | ProgressoAlunoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaCreateWithoutProfessorInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    alunos?: UsuarioCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome: string
    cursoId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunos?: UsuarioUncheckedCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaCreateManyProfessorInputEnvelope = {
    data: TurmaCreateManyProfessorInput | TurmaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type AlunoTurmaCreateWithoutAlunoInput = {
    turma: TurmaCreateNestedOneWithoutAlunoTurmaInput
  }

  export type AlunoTurmaUncheckedCreateWithoutAlunoInput = {
    turmaId: number
  }

  export type AlunoTurmaCreateOrConnectWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    create: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput>
  }

  export type AlunoTurmaCreateManyAlunoInputEnvelope = {
    data: AlunoTurmaCreateManyAlunoInput | AlunoTurmaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type PlanoUpsertWithoutUsuariosInput = {
    update: XOR<PlanoUpdateWithoutUsuariosInput, PlanoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PlanoCreateWithoutUsuariosInput, PlanoUncheckedCreateWithoutUsuariosInput>
    where?: PlanoWhereInput
  }

  export type PlanoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PlanoWhereInput
    data: XOR<PlanoUpdateWithoutUsuariosInput, PlanoUncheckedUpdateWithoutUsuariosInput>
  }

  export type PlanoUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TurmaUpsertWithWhereUniqueWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateManyWithWhereWithoutAlunosInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutAlunosInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    id?: IntFilter<"Turma"> | number
    nome?: StringFilter<"Turma"> | string
    cursoId?: IntFilter<"Turma"> | number
    professorId?: IntFilter<"Turma"> | number
    dataInicio?: DateTimeFilter<"Turma"> | Date | string
    dataFim?: DateTimeFilter<"Turma"> | Date | string
  }

  export type ParceriaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    update: XOR<ParceriaUpdateWithoutAlunoInput, ParceriaUncheckedUpdateWithoutAlunoInput>
    create: XOR<ParceriaCreateWithoutAlunoInput, ParceriaUncheckedCreateWithoutAlunoInput>
  }

  export type ParceriaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ParceriaWhereUniqueInput
    data: XOR<ParceriaUpdateWithoutAlunoInput, ParceriaUncheckedUpdateWithoutAlunoInput>
  }

  export type ParceriaUpdateManyWithWhereWithoutAlunoInput = {
    where: ParceriaScalarWhereInput
    data: XOR<ParceriaUpdateManyMutationInput, ParceriaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ParceriaScalarWhereInput = {
    AND?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
    OR?: ParceriaScalarWhereInput[]
    NOT?: ParceriaScalarWhereInput | ParceriaScalarWhereInput[]
    id?: IntFilter<"Parceria"> | number
    alunoId?: IntFilter<"Parceria"> | number
    descricaoProjeto?: StringFilter<"Parceria"> | string
    percentualPlataforma?: DecimalFilter<"Parceria"> | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFilter<"Parceria"> | Date | string
    contratoUrl?: StringFilter<"Parceria"> | string
  }

  export type ProgressoAlunoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoAlunoWhereUniqueInput
    update: XOR<ProgressoAlunoUpdateWithoutAlunoInput, ProgressoAlunoUncheckedUpdateWithoutAlunoInput>
    create: XOR<ProgressoAlunoCreateWithoutAlunoInput, ProgressoAlunoUncheckedCreateWithoutAlunoInput>
  }

  export type ProgressoAlunoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: ProgressoAlunoWhereUniqueInput
    data: XOR<ProgressoAlunoUpdateWithoutAlunoInput, ProgressoAlunoUncheckedUpdateWithoutAlunoInput>
  }

  export type ProgressoAlunoUpdateManyWithWhereWithoutAlunoInput = {
    where: ProgressoAlunoScalarWhereInput
    data: XOR<ProgressoAlunoUpdateManyMutationInput, ProgressoAlunoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type ProgressoAlunoScalarWhereInput = {
    AND?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
    OR?: ProgressoAlunoScalarWhereInput[]
    NOT?: ProgressoAlunoScalarWhereInput | ProgressoAlunoScalarWhereInput[]
    alunoId?: IntFilter<"ProgressoAluno"> | number
    videoId?: IntFilter<"ProgressoAluno"> | number
    apostilaId?: IntFilter<"ProgressoAluno"> | number
    avaliacaoId?: IntFilter<"ProgressoAluno"> | number
    progressoVideo?: IntFilter<"ProgressoAluno"> | number
    baixouApostila?: BoolFilter<"ProgressoAluno"> | boolean
    notaAvaliacao?: DecimalFilter<"ProgressoAluno"> | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFilter<"ProgressoAluno"> | Date | string
  }

  export type TurmaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
  }

  export type TurmaUpdateManyWithWhereWithoutProfessorInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type AlunoTurmaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    update: XOR<AlunoTurmaUpdateWithoutAlunoInput, AlunoTurmaUncheckedUpdateWithoutAlunoInput>
    create: XOR<AlunoTurmaCreateWithoutAlunoInput, AlunoTurmaUncheckedCreateWithoutAlunoInput>
  }

  export type AlunoTurmaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AlunoTurmaWhereUniqueInput
    data: XOR<AlunoTurmaUpdateWithoutAlunoInput, AlunoTurmaUncheckedUpdateWithoutAlunoInput>
  }

  export type AlunoTurmaUpdateManyWithWhereWithoutAlunoInput = {
    where: AlunoTurmaScalarWhereInput
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AlunoTurmaScalarWhereInput = {
    AND?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
    OR?: AlunoTurmaScalarWhereInput[]
    NOT?: AlunoTurmaScalarWhereInput | AlunoTurmaScalarWhereInput[]
    alunoId?: IntFilter<"AlunoTurma"> | number
    turmaId?: IntFilter<"AlunoTurma"> | number
  }

  export type UsuarioCreateWithoutPlanoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput>
  }

  export type UsuarioCreateManyPlanoInputEnvelope = {
    data: UsuarioCreateManyPlanoInput | UsuarioCreateManyPlanoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPlanoInput, UsuarioUncheckedUpdateWithoutPlanoInput>
    create: XOR<UsuarioCreateWithoutPlanoInput, UsuarioUncheckedCreateWithoutPlanoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPlanoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPlanoInput, UsuarioUncheckedUpdateWithoutPlanoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPlanoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPlanoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    planoId?: IntNullableFilter<"Usuario"> | number | null
  }

  export type TurmaCreateWithoutCursoInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    professor: UsuarioCreateNestedOneWithoutTurmaInput
    alunos?: UsuarioCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    id?: number
    nome: string
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunos?: UsuarioUncheckedCreateNestedManyWithoutTurmasInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloCreateWithoutCursoInput = {
    titulo: string
    ordem: number
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutCursoInput = {
    id?: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloCreateManyCursoInputEnvelope = {
    data: ModuloCreateManyCursoInput | ModuloCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type ModuloUpsertWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    update: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloUpdateWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    data: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
  }

  export type ModuloUpdateManyWithWhereWithoutCursoInput = {
    where: ModuloScalarWhereInput
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyWithoutCursoInput>
  }

  export type ModuloScalarWhereInput = {
    AND?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    OR?: ModuloScalarWhereInput[]
    NOT?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
  }

  export type CursoCreateWithoutTurmasInput = {
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    modulos?: ModuloCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTurmasInput = {
    id?: number
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTurmasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
  }

  export type UsuarioCreateWithoutTurmaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutTurmaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutTurmaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTurmaInput, UsuarioUncheckedCreateWithoutTurmaInput>
  }

  export type UsuarioCreateWithoutTurmasInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutTurmasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutTurmasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput>
  }

  export type AlunoTurmaCreateWithoutTurmaInput = {
    aluno: UsuarioCreateNestedOneWithoutAlunoTurmaInput
  }

  export type AlunoTurmaUncheckedCreateWithoutTurmaInput = {
    alunoId: number
  }

  export type AlunoTurmaCreateOrConnectWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    create: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoTurmaCreateManyTurmaInputEnvelope = {
    data: AlunoTurmaCreateManyTurmaInput | AlunoTurmaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutTurmasInput = {
    update: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type CursoUpdateWithoutTurmasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioUpsertWithoutTurmaInput = {
    update: XOR<UsuarioUpdateWithoutTurmaInput, UsuarioUncheckedUpdateWithoutTurmaInput>
    create: XOR<UsuarioCreateWithoutTurmaInput, UsuarioUncheckedCreateWithoutTurmaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTurmaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTurmaInput, UsuarioUncheckedUpdateWithoutTurmaInput>
  }

  export type UsuarioUpdateWithoutTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutTurmasInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutTurmasInput, UsuarioUncheckedUpdateWithoutTurmasInput>
    create: XOR<UsuarioCreateWithoutTurmasInput, UsuarioUncheckedCreateWithoutTurmasInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutTurmasInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutTurmasInput, UsuarioUncheckedUpdateWithoutTurmasInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutTurmasInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutTurmasInput>
  }

  export type AlunoTurmaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    update: XOR<AlunoTurmaUpdateWithoutTurmaInput, AlunoTurmaUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoTurmaCreateWithoutTurmaInput, AlunoTurmaUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoTurmaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoTurmaWhereUniqueInput
    data: XOR<AlunoTurmaUpdateWithoutTurmaInput, AlunoTurmaUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoTurmaUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoTurmaScalarWhereInput
    data: XOR<AlunoTurmaUpdateManyMutationInput, AlunoTurmaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type UsuarioCreateWithoutAlunoTurmaInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
  }

  export type UsuarioUncheckedCreateWithoutAlunoTurmaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type UsuarioCreateOrConnectWithoutAlunoTurmaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAlunoTurmaInput, UsuarioUncheckedCreateWithoutAlunoTurmaInput>
  }

  export type TurmaCreateWithoutAlunoTurmaInput = {
    nome: string
    dataInicio: Date | string
    dataFim: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: UsuarioCreateNestedOneWithoutTurmaInput
    alunos?: UsuarioCreateNestedManyWithoutTurmasInput
  }

  export type TurmaUncheckedCreateWithoutAlunoTurmaInput = {
    id?: number
    nome: string
    cursoId: number
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
    alunos?: UsuarioUncheckedCreateNestedManyWithoutTurmasInput
  }

  export type TurmaCreateOrConnectWithoutAlunoTurmaInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunoTurmaInput, TurmaUncheckedCreateWithoutAlunoTurmaInput>
  }

  export type UsuarioUpsertWithoutAlunoTurmaInput = {
    update: XOR<UsuarioUpdateWithoutAlunoTurmaInput, UsuarioUncheckedUpdateWithoutAlunoTurmaInput>
    create: XOR<UsuarioCreateWithoutAlunoTurmaInput, UsuarioUncheckedCreateWithoutAlunoTurmaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAlunoTurmaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAlunoTurmaInput, UsuarioUncheckedUpdateWithoutAlunoTurmaInput>
  }

  export type UsuarioUpdateWithoutAlunoTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAlunoTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type TurmaUpsertWithoutAlunoTurmaInput = {
    update: XOR<TurmaUpdateWithoutAlunoTurmaInput, TurmaUncheckedUpdateWithoutAlunoTurmaInput>
    create: XOR<TurmaCreateWithoutAlunoTurmaInput, TurmaUncheckedCreateWithoutAlunoTurmaInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutAlunoTurmaInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutAlunoTurmaInput, TurmaUncheckedUpdateWithoutAlunoTurmaInput>
  }

  export type TurmaUpdateWithoutAlunoTurmaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: UsuarioUpdateOneRequiredWithoutTurmaNestedInput
    alunos?: UsuarioUpdateManyWithoutTurmasNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunoTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: UsuarioUncheckedUpdateManyWithoutTurmasNestedInput
  }

  export type CursoCreateWithoutModulosInput = {
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutModulosInput = {
    id?: number
    titulo: string
    descricao: string
    categoria: string
    cargaHoraria: number
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutModulosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
  }

  export type VideoCreateWithoutModuloInput = {
    titulo: string
    urlVideo: string
    duracao: number
    progresso?: ProgressoAlunoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    urlVideo: string
    duracao: number
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutModuloInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput>
  }

  export type VideoCreateManyModuloInputEnvelope = {
    data: VideoCreateManyModuloInput | VideoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type ApostilaCreateWithoutModuloInput = {
    titulo: string
    arquivoUrl: string
    progresso?: ProgressoAlunoCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    arquivoUrl: string
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutApostilaInput
  }

  export type ApostilaCreateOrConnectWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    create: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput>
  }

  export type ApostilaCreateManyModuloInputEnvelope = {
    data: ApostilaCreateManyModuloInput | ApostilaCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutModuloInput = {
    titulo: string
    descricao: string
    progresso?: ProgressoAlunoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    descricao: string
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoCreateManyModuloInputEnvelope = {
    data: AvaliacaoCreateManyModuloInput | AvaliacaoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutModulosInput = {
    update: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutModulosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type CursoUpdateWithoutModulosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutModulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutModuloInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutModuloInput, VideoUncheckedUpdateWithoutModuloInput>
    create: XOR<VideoCreateWithoutModuloInput, VideoUncheckedCreateWithoutModuloInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutModuloInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutModuloInput, VideoUncheckedUpdateWithoutModuloInput>
  }

  export type VideoUpdateManyWithWhereWithoutModuloInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutModuloInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    moduloId?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    urlVideo?: StringFilter<"Video"> | string
    duracao?: IntFilter<"Video"> | number
  }

  export type ApostilaUpsertWithWhereUniqueWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    update: XOR<ApostilaUpdateWithoutModuloInput, ApostilaUncheckedUpdateWithoutModuloInput>
    create: XOR<ApostilaCreateWithoutModuloInput, ApostilaUncheckedCreateWithoutModuloInput>
  }

  export type ApostilaUpdateWithWhereUniqueWithoutModuloInput = {
    where: ApostilaWhereUniqueInput
    data: XOR<ApostilaUpdateWithoutModuloInput, ApostilaUncheckedUpdateWithoutModuloInput>
  }

  export type ApostilaUpdateManyWithWhereWithoutModuloInput = {
    where: ApostilaScalarWhereInput
    data: XOR<ApostilaUpdateManyMutationInput, ApostilaUncheckedUpdateManyWithoutModuloInput>
  }

  export type ApostilaScalarWhereInput = {
    AND?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
    OR?: ApostilaScalarWhereInput[]
    NOT?: ApostilaScalarWhereInput | ApostilaScalarWhereInput[]
    id?: IntFilter<"Apostila"> | number
    moduloId?: IntFilter<"Apostila"> | number
    titulo?: StringFilter<"Apostila"> | string
    arquivoUrl?: StringFilter<"Apostila"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutModuloInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutModuloInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    moduloId?: IntFilter<"Avaliacao"> | number
    titulo?: StringFilter<"Avaliacao"> | string
    descricao?: StringFilter<"Avaliacao"> | string
  }

  export type ModuloCreateWithoutVideosInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutVideosInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutVideosInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
  }

  export type ProgressoAlunoCreateWithoutVideoInput = {
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    aluno: UsuarioCreateNestedOneWithoutProgressoInput
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAlunoUncheckedCreateWithoutVideoInput = {
    alunoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoCreateOrConnectWithoutVideoInput = {
    where: ProgressoAlunoWhereUniqueInput
    create: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput>
  }

  export type ProgressoAlunoCreateManyVideoInputEnvelope = {
    data: ProgressoAlunoCreateManyVideoInput | ProgressoAlunoCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutVideosInput = {
    update: XOR<ModuloUpdateWithoutVideosInput, ModuloUncheckedUpdateWithoutVideosInput>
    create: XOR<ModuloCreateWithoutVideosInput, ModuloUncheckedCreateWithoutVideosInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutVideosInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutVideosInput, ModuloUncheckedUpdateWithoutVideosInput>
  }

  export type ModuloUpdateWithoutVideosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoAlunoUpsertWithWhereUniqueWithoutVideoInput = {
    where: ProgressoAlunoWhereUniqueInput
    update: XOR<ProgressoAlunoUpdateWithoutVideoInput, ProgressoAlunoUncheckedUpdateWithoutVideoInput>
    create: XOR<ProgressoAlunoCreateWithoutVideoInput, ProgressoAlunoUncheckedCreateWithoutVideoInput>
  }

  export type ProgressoAlunoUpdateWithWhereUniqueWithoutVideoInput = {
    where: ProgressoAlunoWhereUniqueInput
    data: XOR<ProgressoAlunoUpdateWithoutVideoInput, ProgressoAlunoUncheckedUpdateWithoutVideoInput>
  }

  export type ProgressoAlunoUpdateManyWithWhereWithoutVideoInput = {
    where: ProgressoAlunoScalarWhereInput
    data: XOR<ProgressoAlunoUpdateManyMutationInput, ProgressoAlunoUncheckedUpdateManyWithoutVideoInput>
  }

  export type ModuloCreateWithoutApostilasInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutApostilasInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutApostilasInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
  }

  export type ProgressoAlunoCreateWithoutApostilaInput = {
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    aluno: UsuarioCreateNestedOneWithoutProgressoInput
    video: VideoCreateNestedOneWithoutProgressoInput
    avaliacao: AvaliacaoCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAlunoUncheckedCreateWithoutApostilaInput = {
    alunoId: number
    videoId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoCreateOrConnectWithoutApostilaInput = {
    where: ProgressoAlunoWhereUniqueInput
    create: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput>
  }

  export type ProgressoAlunoCreateManyApostilaInputEnvelope = {
    data: ProgressoAlunoCreateManyApostilaInput | ProgressoAlunoCreateManyApostilaInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutApostilasInput = {
    update: XOR<ModuloUpdateWithoutApostilasInput, ModuloUncheckedUpdateWithoutApostilasInput>
    create: XOR<ModuloCreateWithoutApostilasInput, ModuloUncheckedCreateWithoutApostilasInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutApostilasInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutApostilasInput, ModuloUncheckedUpdateWithoutApostilasInput>
  }

  export type ModuloUpdateWithoutApostilasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutApostilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoAlunoUpsertWithWhereUniqueWithoutApostilaInput = {
    where: ProgressoAlunoWhereUniqueInput
    update: XOR<ProgressoAlunoUpdateWithoutApostilaInput, ProgressoAlunoUncheckedUpdateWithoutApostilaInput>
    create: XOR<ProgressoAlunoCreateWithoutApostilaInput, ProgressoAlunoUncheckedCreateWithoutApostilaInput>
  }

  export type ProgressoAlunoUpdateWithWhereUniqueWithoutApostilaInput = {
    where: ProgressoAlunoWhereUniqueInput
    data: XOR<ProgressoAlunoUpdateWithoutApostilaInput, ProgressoAlunoUncheckedUpdateWithoutApostilaInput>
  }

  export type ProgressoAlunoUpdateManyWithWhereWithoutApostilaInput = {
    where: ProgressoAlunoScalarWhereInput
    data: XOR<ProgressoAlunoUpdateManyMutationInput, ProgressoAlunoUncheckedUpdateManyWithoutApostilaInput>
  }

  export type ModuloCreateWithoutAvaliacoesInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    videos?: VideoCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    videos?: VideoUncheckedCreateNestedManyWithoutModuloInput
    apostilas?: ApostilaUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutAvaliacoesInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
  }

  export type ProgressoAlunoCreateWithoutAvaliacaoInput = {
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
    aluno: UsuarioCreateNestedOneWithoutProgressoInput
    video: VideoCreateNestedOneWithoutProgressoInput
    apostila: ApostilaCreateNestedOneWithoutProgressoInput
  }

  export type ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput = {
    alunoId: number
    videoId: number
    apostilaId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoCreateOrConnectWithoutAvaliacaoInput = {
    where: ProgressoAlunoWhereUniqueInput
    create: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ProgressoAlunoCreateManyAvaliacaoInputEnvelope = {
    data: ProgressoAlunoCreateManyAvaliacaoInput | ProgressoAlunoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutAvaliacoesInput = {
    update: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ModuloUpdateWithoutAvaliacoesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ProgressoAlunoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: ProgressoAlunoWhereUniqueInput
    update: XOR<ProgressoAlunoUpdateWithoutAvaliacaoInput, ProgressoAlunoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ProgressoAlunoCreateWithoutAvaliacaoInput, ProgressoAlunoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ProgressoAlunoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: ProgressoAlunoWhereUniqueInput
    data: XOR<ProgressoAlunoUpdateWithoutAvaliacaoInput, ProgressoAlunoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ProgressoAlunoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: ProgressoAlunoScalarWhereInput
    data: XOR<ProgressoAlunoUpdateManyMutationInput, ProgressoAlunoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type UsuarioCreateWithoutProgressoInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutProgressoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    parcerias?: ParceriaUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutProgressoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgressoInput, UsuarioUncheckedCreateWithoutProgressoInput>
  }

  export type VideoCreateWithoutProgressoInput = {
    titulo: string
    urlVideo: string
    duracao: number
    modulo: ModuloCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type VideoCreateOrConnectWithoutProgressoInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
  }

  export type ApostilaCreateWithoutProgressoInput = {
    titulo: string
    arquivoUrl: string
    modulo: ModuloCreateNestedOneWithoutApostilasInput
  }

  export type ApostilaUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    arquivoUrl: string
  }

  export type ApostilaCreateOrConnectWithoutProgressoInput = {
    where: ApostilaWhereUniqueInput
    create: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
  }

  export type AvaliacaoCreateWithoutProgressoInput = {
    titulo: string
    descricao: string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutProgressoInput = {
    id?: number
    moduloId: number
    titulo: string
    descricao: string
  }

  export type AvaliacaoCreateOrConnectWithoutProgressoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
  }

  export type UsuarioUpsertWithoutProgressoInput = {
    update: XOR<UsuarioUpdateWithoutProgressoInput, UsuarioUncheckedUpdateWithoutProgressoInput>
    create: XOR<UsuarioCreateWithoutProgressoInput, UsuarioUncheckedCreateWithoutProgressoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgressoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgressoInput, UsuarioUncheckedUpdateWithoutProgressoInput>
  }

  export type UsuarioUpdateWithoutProgressoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type VideoUpsertWithoutProgressoInput = {
    update: XOR<VideoUpdateWithoutProgressoInput, VideoUncheckedUpdateWithoutProgressoInput>
    create: XOR<VideoCreateWithoutProgressoInput, VideoUncheckedCreateWithoutProgressoInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutProgressoInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutProgressoInput, VideoUncheckedUpdateWithoutProgressoInput>
  }

  export type VideoUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type ApostilaUpsertWithoutProgressoInput = {
    update: XOR<ApostilaUpdateWithoutProgressoInput, ApostilaUncheckedUpdateWithoutProgressoInput>
    create: XOR<ApostilaCreateWithoutProgressoInput, ApostilaUncheckedCreateWithoutProgressoInput>
    where?: ApostilaWhereInput
  }

  export type ApostilaUpdateToOneWithWhereWithoutProgressoInput = {
    where?: ApostilaWhereInput
    data: XOR<ApostilaUpdateWithoutProgressoInput, ApostilaUncheckedUpdateWithoutProgressoInput>
  }

  export type ApostilaUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutApostilasNestedInput
  }

  export type ApostilaUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpsertWithoutProgressoInput = {
    update: XOR<AvaliacaoUpdateWithoutProgressoInput, AvaliacaoUncheckedUpdateWithoutProgressoInput>
    create: XOR<AvaliacaoCreateWithoutProgressoInput, AvaliacaoUncheckedCreateWithoutProgressoInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutProgressoInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutProgressoInput, AvaliacaoUncheckedUpdateWithoutProgressoInput>
  }

  export type AvaliacaoUpdateWithoutProgressoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutProgressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutParceriasInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    plano?: PlanoCreateNestedOneWithoutUsuariosInput
    turmas?: TurmaCreateNestedManyWithoutAlunosInput
    progresso?: ProgressoAlunoCreateNestedManyWithoutAlunoInput
    Turma?: TurmaCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioUncheckedCreateWithoutParceriasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
    planoId?: number | null
    turmas?: TurmaUncheckedCreateNestedManyWithoutAlunosInput
    progresso?: ProgressoAlunoUncheckedCreateNestedManyWithoutAlunoInput
    Turma?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
    AlunoTurma?: AlunoTurmaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UsuarioCreateOrConnectWithoutParceriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
  }

  export type UsuarioUpsertWithoutParceriasInput = {
    update: XOR<UsuarioUpdateWithoutParceriasInput, UsuarioUncheckedUpdateWithoutParceriasInput>
    create: XOR<UsuarioCreateWithoutParceriasInput, UsuarioUncheckedCreateWithoutParceriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParceriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParceriasInput, UsuarioUncheckedUpdateWithoutParceriasInput>
  }

  export type UsuarioUpdateWithoutParceriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParceriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type ParceriaCreateManyAlunoInput = {
    id?: number
    descricaoProjeto: string
    percentualPlataforma: Decimal | DecimalJsLike | number | string
    dataAssinatura: Date | string
    contratoUrl: string
  }

  export type ProgressoAlunoCreateManyAlunoInput = {
    videoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type TurmaCreateManyProfessorInput = {
    id?: number
    nome: string
    cursoId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type AlunoTurmaCreateManyAlunoInput = {
    turmaId: number
  }

  export type TurmaUpdateWithoutAlunosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: UsuarioUpdateOneRequiredWithoutTurmaNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutAlunosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParceriaUpdateWithoutAlunoInput = {
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParceriaUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ParceriaUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricaoProjeto?: StringFieldUpdateOperationsInput | string
    percentualPlataforma?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataAssinatura?: DateTimeFieldUpdateOperationsInput | Date | string
    contratoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAlunoUpdateWithoutAlunoInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAlunoUncheckedUpdateWithoutAlunoInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutAlunoInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: UsuarioUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: UsuarioUncheckedUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoTurmaUpdateWithoutAlunoInput = {
    turma?: TurmaUpdateOneRequiredWithoutAlunoTurmaNestedInput
  }

  export type AlunoTurmaUncheckedUpdateWithoutAlunoInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutAlunoInput = {
    turmaId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyPlanoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.TipoUsuario
    dataCadastro?: Date | string
  }

  export type UsuarioUpdateWithoutPlanoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutAlunosNestedInput
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaCreateManyCursoInput = {
    id?: number
    nome: string
    professorId: number
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type ModuloCreateManyCursoInput = {
    id?: number
    titulo: string
    ordem: number
  }

  export type TurmaUpdateWithoutCursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: UsuarioUpdateOneRequiredWithoutTurmaNestedInput
    alunos?: UsuarioUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: UsuarioUncheckedUpdateManyWithoutTurmasNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuloUpdateWithoutCursoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutModuloNestedInput
    apostilas?: ApostilaUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaCreateManyTurmaInput = {
    alunoId: number
  }

  export type UsuarioUpdateWithoutTurmasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneWithoutUsuariosNestedInput
    parcerias?: ParceriaUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
    parcerias?: ParceriaUncheckedUpdateManyWithoutAlunoNestedInput
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAlunoNestedInput
    Turma?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
    AlunoTurma?: AlunoTurmaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutTurmasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    planoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlunoTurmaUpdateWithoutTurmaInput = {
    aluno?: UsuarioUpdateOneRequiredWithoutAlunoTurmaNestedInput
  }

  export type AlunoTurmaUncheckedUpdateWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoTurmaUncheckedUpdateManyWithoutTurmaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyModuloInput = {
    id?: number
    titulo: string
    urlVideo: string
    duracao: number
  }

  export type ApostilaCreateManyModuloInput = {
    id?: number
    titulo: string
    arquivoUrl: string
  }

  export type AvaliacaoCreateManyModuloInput = {
    id?: number
    titulo: string
    descricao: string
  }

  export type VideoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoAlunoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    urlVideo?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
  }

  export type ApostilaUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutApostilaNestedInput
  }

  export type ApostilaUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    arquivoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    progresso?: ProgressoAlunoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAlunoCreateManyVideoInput = {
    alunoId: number
    apostilaId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoUpdateWithoutVideoInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoNestedInput
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAlunoUncheckedUpdateWithoutVideoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutVideoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoCreateManyApostilaInput = {
    alunoId: number
    videoId: number
    avaliacaoId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoUpdateWithoutApostilaInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoNestedInput
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAlunoUncheckedUpdateWithoutApostilaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutApostilaInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    avaliacaoId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoCreateManyAvaliacaoInput = {
    alunoId: number
    videoId: number
    apostilaId: number
    progressoVideo: number
    baixouApostila: boolean
    notaAvaliacao: Decimal | DecimalJsLike | number | string
    dataUltimaInteracao: Date | string
  }

  export type ProgressoAlunoUpdateWithoutAvaliacaoInput = {
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: UsuarioUpdateOneRequiredWithoutProgressoNestedInput
    video?: VideoUpdateOneRequiredWithoutProgressoNestedInput
    apostila?: ApostilaUpdateOneRequiredWithoutProgressoNestedInput
  }

  export type ProgressoAlunoUncheckedUpdateWithoutAvaliacaoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoAlunoUncheckedUpdateManyWithoutAvaliacaoInput = {
    alunoId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    apostilaId?: IntFieldUpdateOperationsInput | number
    progressoVideo?: IntFieldUpdateOperationsInput | number
    baixouApostila?: BoolFieldUpdateOperationsInput | boolean
    notaAvaliacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataUltimaInteracao?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
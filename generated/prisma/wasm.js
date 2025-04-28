
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  tipo: 'tipo',
  dataCadastro: 'dataCadastro',
  planoId: 'planoId'
};

exports.Prisma.PlanoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao'
};

exports.Prisma.CursoScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  descricao: 'descricao',
  categoria: 'categoria',
  cargaHoraria: 'cargaHoraria'
};

exports.Prisma.TurmaScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  cursoId: 'cursoId',
  professorId: 'professorId',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim'
};

exports.Prisma.AlunoTurmaScalarFieldEnum = {
  alunoId: 'alunoId',
  turmaId: 'turmaId'
};

exports.Prisma.ModuloScalarFieldEnum = {
  id: 'id',
  cursoId: 'cursoId',
  titulo: 'titulo',
  ordem: 'ordem'
};

exports.Prisma.VideoScalarFieldEnum = {
  id: 'id',
  moduloId: 'moduloId',
  titulo: 'titulo',
  urlVideo: 'urlVideo',
  duracao: 'duracao'
};

exports.Prisma.ApostilaScalarFieldEnum = {
  id: 'id',
  moduloId: 'moduloId',
  titulo: 'titulo',
  arquivoUrl: 'arquivoUrl'
};

exports.Prisma.AvaliacaoScalarFieldEnum = {
  id: 'id',
  moduloId: 'moduloId',
  titulo: 'titulo',
  descricao: 'descricao'
};

exports.Prisma.ProgressoAlunoScalarFieldEnum = {
  alunoId: 'alunoId',
  videoId: 'videoId',
  apostilaId: 'apostilaId',
  avaliacaoId: 'avaliacaoId',
  progressoVideo: 'progressoVideo',
  baixouApostila: 'baixouApostila',
  notaAvaliacao: 'notaAvaliacao',
  dataUltimaInteracao: 'dataUltimaInteracao'
};

exports.Prisma.ParceriaScalarFieldEnum = {
  id: 'id',
  alunoId: 'alunoId',
  descricaoProjeto: 'descricaoProjeto',
  percentualPlataforma: 'percentualPlataforma',
  dataAssinatura: 'dataAssinatura',
  contratoUrl: 'contratoUrl'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsuarioOrderByRelevanceFieldEnum = {
  nome: 'nome',
  email: 'email',
  senha: 'senha'
};

exports.Prisma.PlanoOrderByRelevanceFieldEnum = {
  nome: 'nome',
  descricao: 'descricao'
};

exports.Prisma.CursoOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  descricao: 'descricao',
  categoria: 'categoria'
};

exports.Prisma.TurmaOrderByRelevanceFieldEnum = {
  nome: 'nome'
};

exports.Prisma.ModuloOrderByRelevanceFieldEnum = {
  titulo: 'titulo'
};

exports.Prisma.VideoOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  urlVideo: 'urlVideo'
};

exports.Prisma.ApostilaOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  arquivoUrl: 'arquivoUrl'
};

exports.Prisma.AvaliacaoOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  descricao: 'descricao'
};

exports.Prisma.ParceriaOrderByRelevanceFieldEnum = {
  descricaoProjeto: 'descricaoProjeto',
  contratoUrl: 'contratoUrl'
};
exports.TipoUsuario = exports.$Enums.TipoUsuario = {
  aluno: 'aluno',
  professor: 'professor',
  admin: 'admin'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

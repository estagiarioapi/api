import { Module } from '@nestjs/common';
import { ConversationService } from '../core/integrations/conversation.service';
import { UserService } from '../core/integrations/user.service';
import { ReplyService } from '../core/replyes/reply.service';
import { ContratosAgrariosService } from './contratos/agrario/contratos.agrarios.service';
import { ContratosCivisService } from './contratos/civil/contratos.civis.service';
import { ContratosCulturaisService } from './contratos/cultural/contratos.culturais.service';
import { ContratosEmpresariaisService } from './contratos/empresarial/contratos.empresariais.service';
import { FluxoContratoService } from './contratos/fluxo.contratos.service';
import { ContratosImobiliariosService } from './contratos/imobiliario/contratos.imobiliarios.service';
import { ContratosInstrumentosAdvocaticiosService } from './contratos/instrumentosAdvocacia/contratos.instrumentos.service';
import { FluxoDocumentoService } from './documentos/fluxo.documento.service';
import { PeticaoInicialAdministrativoService } from './pecas/direitos/administrativo/peticao.inicial.administrativo.service';
import { PeticaoIntermediariaAdministrativoService } from './pecas/direitos/administrativo/peticao.intermed.administrativo.service';
import { RecursosAdministrativoService } from './pecas/direitos/administrativo/recurso.administrativo.service';
import { PeticaoIncialCivilService } from './pecas/direitos/civil/peticao.inicial.civil.service';
import { PeticaoIntermediariaCivilService } from './pecas/direitos/civil/peticao.intermed.civil.service';
import { RecursosCivilService } from './pecas/direitos/civil/recurso.civil.service';
import { PeticaoInicialConstitucionalService } from './pecas/direitos/constitucional/peticao.inicial.constitucional.service';
import { PeticaoIntermedConstitucionalService } from './pecas/direitos/constitucional/peticao.intermed.constitucional.service';
import { RecursosConstitucionalService } from './pecas/direitos/constitucional/recurso.constitucional.service';
import { PeticaoInicialEmpresarialService } from './pecas/direitos/empresarial/peticao.inicial.empresarial.service';
import { PeticaoIntermediariaEmpresarialService } from './pecas/direitos/empresarial/peticao.intermed.empresarial.service';
import { RecursosEmpresarialService } from './pecas/direitos/empresarial/recurso.empresarial.service';
import { PecasDireitosService } from './pecas/direitos/pecas.direitos.service';
import { PeticaoInicialPenalService } from './pecas/direitos/penal/peticao.inicial.penal.service';
import { PeticaoIntermediariaPenalService } from './pecas/direitos/penal/peticao.intermed.penal.service';
import { RecursosPenalService } from './pecas/direitos/penal/recurso.penal.service';
import { PeticaoInicialPrevidenciarioService } from './pecas/direitos/previdenciario/peticao.inicial.previdenciario.service';
import { PeticaoIntermediariaPrevidenciarioService } from './pecas/direitos/previdenciario/peticao.intermed.previdenciario.service';
import { RecursosPrevidenciarioService } from './pecas/direitos/previdenciario/recurso.previdenciario.service';
import { PeticaoInicialTrabalhoService } from './pecas/direitos/trabalho/peticao.inicial.trabalho.service';
import { PeticaoIntermediariaTrabalhoService } from './pecas/direitos/trabalho/peticao.intermed.trabalho.service';
import { RecursosTrabalhoService } from './pecas/direitos/trabalho/recurso.trabalho.service';
import { PeticaoInicialTributarioService } from './pecas/direitos/tributario/peticao.inicial.tributario.service';
import { PeticaoIntermediariaTributarioService } from './pecas/direitos/tributario/peticao.intermed.tributario.service';
import { RecursosTributariosService } from './pecas/direitos/tributario/recurso.tributario.service';
import { FluxoDireitoPecaService } from './pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from './pecas/menus/inicial/fluxo.peticao.inicial.service';
import { PeticaoIntermediariaService } from './pecas/menus/intermediaria/fluxo.peticao.intermed.service';
import { RecursoService } from './pecas/menus/recurso/fluxo.recurso.service';
import { MenuService } from './menu.service';
import { ThreadService } from 'src/thread/thread.service';

@Module({
  providers: [
    MenuService,
    FluxoDireitoPecaService,
    FluxoContratoService,
    PeticaoInicialService,
    PeticaoIntermediariaService,
    RecursoService,
    PeticaoIncialCivilService,
    PeticaoInicialConstitucionalService,
    PeticaoInicialEmpresarialService,
    PeticaoInicialAdministrativoService,
    PeticaoInicialPenalService,
    PeticaoInicialPrevidenciarioService,
    PeticaoInicialTrabalhoService,
    PeticaoInicialTributarioService,
    PeticaoIntermediariaCivilService,
    PeticaoIntermedConstitucionalService,
    PeticaoIntermediariaEmpresarialService,
    PeticaoIntermediariaAdministrativoService,
    PeticaoIntermediariaPenalService,
    PeticaoIntermediariaPrevidenciarioService,
    PeticaoIntermediariaTrabalhoService,
    PeticaoIntermediariaTributarioService,
    RecursosCivilService,
    RecursosConstitucionalService,
    RecursosEmpresarialService,
    RecursosAdministrativoService,
    RecursosPenalService,
    RecursosPrevidenciarioService,
    RecursosTrabalhoService,
    RecursosTributariosService,
    PecasDireitosService,
    UserService,
    ConversationService,
    ReplyService,
    ContratosAgrariosService,
    ContratosCivisService,
    ContratosCulturaisService,
    ContratosEmpresariaisService,
    ContratosImobiliariosService,
    ContratosInstrumentosAdvocaticiosService,
    FluxoDocumentoService,
    ThreadService
  ],
  controllers: [],
})
export class FluxoModule { }

import { Module } from '@nestjs/common';
import { FluxoDireitoPecaService } from 'src/menu/pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from 'src/menu/pecas/menus/inicial/fluxo.peticao.inicial.service';
import { RecursoService } from 'src/menu/pecas/menus/recurso/fluxo.recurso.service';
import { ConversationService } from '../core/integrations/conversation.service';
import { UserService } from '../core/integrations/user.service';
import { ReplyService } from '../core/replyes/reply.service';
import { ContratosAgrariosService } from '../menu/contratos/agrario/contratos.agrarios.service';
import { ContratosCivisService } from '../menu/contratos/civil/contratos.civis.service';
import { ContratosCulturaisService } from '../menu/contratos/cultural/contratos.culturais.service';
import { ContratosEmpresariaisService } from '../menu/contratos/empresarial/contratos.empresariais.service';
import { FluxoContratoService } from '../menu/contratos/fluxo.contratos.service';
import { ContratosImobiliariosService } from '../menu/contratos/imobiliario/contratos.imobiliarios.service';
import { ContratosInstrumentosAdvocaticiosService } from '../menu/contratos/instrumentosAdvocacia/contratos.instrumentos.service';
import { MenuService } from '../menu/menu.service';
import { PeticaoInicialAdministrativoService } from '../menu/pecas/direitos/administrativo/peticao.inicial.administrativo.service';
import { PeticaoIntermediariaAdministrativoService } from '../menu/pecas/direitos/administrativo/peticao.intermed.administrativo.service';
import { RecursosAdministrativoService } from '../menu/pecas/direitos/administrativo/recurso.administrativo.service';
import { PeticaoIncialCivilService } from '../menu/pecas/direitos/civil/peticao.inicial.civil.service';
import { PeticaoIntermediariaCivilService } from '../menu/pecas/direitos/civil/peticao.intermed.civil.service';
import { RecursosCivilService } from '../menu/pecas/direitos/civil/recurso.civil.service';
import { PeticaoInicialConstitucionalService } from '../menu/pecas/direitos/constitucional/peticao.inicial.constitucional.service';
import { PeticaoIntermedConstitucionalService } from '../menu/pecas/direitos/constitucional/peticao.intermed.constitucional.service';
import { RecursosConstitucionalService } from '../menu/pecas/direitos/constitucional/recurso.constitucional.service';
import { PeticaoInicialEmpresarialService } from '../menu/pecas/direitos/empresarial/peticao.inicial.empresarial.service';
import { PeticaoIntermediariaEmpresarialService } from '../menu/pecas/direitos/empresarial/peticao.intermed.empresarial.service';
import { RecursosEmpresarialService } from '../menu/pecas/direitos/empresarial/recurso.empresarial.service';
import { PecasDireitosService } from '../menu/pecas/direitos/pecas.direitos.service';
import { PeticaoInicialPenalService } from '../menu/pecas/direitos/penal/peticao.inicial.penal.service';
import { PeticaoIntermediariaPenalService } from '../menu/pecas/direitos/penal/peticao.intermed.penal.service';
import { RecursosPenalService } from '../menu/pecas/direitos/penal/recurso.penal.service';
import { PeticaoInicialPrevidenciarioService } from '../menu/pecas/direitos/previdenciario/peticao.inicial.previdenciario.service';
import { PeticaoIntermediariaPrevidenciarioService } from '../menu/pecas/direitos/previdenciario/peticao.intermed.previdenciario.service';
import { RecursosPrevidenciarioService } from '../menu/pecas/direitos/previdenciario/recurso.previdenciario.service';
import { PeticaoInicialTrabalhoService } from '../menu/pecas/direitos/trabalho/peticao.inicial.trabalho.service';
import { PeticaoIntermediariaTrabalhoService } from '../menu/pecas/direitos/trabalho/peticao.intermed.trabalho.service';
import { RecursosTrabalhoService } from '../menu/pecas/direitos/trabalho/recurso.trabalho.service';
import { PeticaoInicialTributarioService } from '../menu/pecas/direitos/tributario/peticao.inicial.tributario.service';
import { PeticaoIntermediariaTributarioService } from '../menu/pecas/direitos/tributario/peticao.intermed.tributario.service';
import { RecursosTributariosService } from '../menu/pecas/direitos/tributario/recurso.tributario.service';
import { PeticaoIntermediariaService } from '../menu/pecas/menus/intermediaria/fluxo.peticao.intermed.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { FluxoDocumentoService } from 'src/menu/documentos/fluxo.documento.service';
import { ThreadService } from 'src/thread/thread.service';
import { DocumentoService } from 'src/menu/documentos/documentos.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [
    WebhookService,
    MenuService,
    FluxoContratoService,
    FluxoDireitoPecaService,
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
    ThreadService,
    DocumentoService
  ],
})
export class WebhookModule { }

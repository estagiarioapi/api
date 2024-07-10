import { Module } from '@nestjs/common';
import { FluxoDireitoPecaService } from 'src/fluxo/pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from 'src/fluxo/pecas/menus/inicial/fluxo.peticao.inicial.service';
import { RecursoService } from 'src/fluxo/pecas/menus/recurso/fluxo.recurso.service';
import { ConversationService } from '../core/integrations/conversation.service';
import { UserService } from '../core/integrations/user.service';
import { ReplyService } from '../core/replyes/reply.service';
import { ContratosAgrariosService } from '../fluxo/contratos/agrario/contratos.agrarios.service';
import { ContratosCivisService } from '../fluxo/contratos/civil/contratos.civis.service';
import { ContratosCulturaisService } from '../fluxo/contratos/cultural/contratos.culturais.service';
import { ContratosEmpresariaisService } from '../fluxo/contratos/empresarial/contratos.empresariais.service';
import { FluxoContratoService } from '../fluxo/contratos/fluxo.contratos.service';
import { ContratosImobiliariosService } from '../fluxo/contratos/imobiliario/contratos.imobiliarios.service';
import { ContratosInstrumentosAdvocaticiosService } from '../fluxo/contratos/instrumentosAdvocacia/contratos.instrumentos.service';
import { FluxoService } from '../fluxo/fluxo.service';
import { PeticaoInicialAdministrativoService } from '../fluxo/pecas/direitos/administrativo/peticao.inicial.administrativo.service';
import { PeticaoIntermediariaAdministrativoService } from '../fluxo/pecas/direitos/administrativo/peticao.intermed.administrativo.service';
import { RecursosAdministrativoService } from '../fluxo/pecas/direitos/administrativo/recurso.administrativo.service';
import { PeticaoIncialCivilService } from '../fluxo/pecas/direitos/civil/peticao.inicial.civil.service';
import { PeticaoIntermediariaCivilService } from '../fluxo/pecas/direitos/civil/peticao.intermed.civil.service';
import { RecursosCivilService } from '../fluxo/pecas/direitos/civil/recurso.civil.service';
import { PeticaoInicialConstitucionalService } from '../fluxo/pecas/direitos/constitucional/peticao.inicial.constitucional.service';
import { PeticaoIntermedConstitucionalService } from '../fluxo/pecas/direitos/constitucional/peticao.intermed.constitucional.service';
import { RecursosConstitucionalService } from '../fluxo/pecas/direitos/constitucional/recurso.constitucional.service';
import { PeticaoInicialEmpresarialService } from '../fluxo/pecas/direitos/empresarial/peticao.inicial.empresarial.service';
import { PeticaoIntermediariaEmpresarialService } from '../fluxo/pecas/direitos/empresarial/peticao.intermed.empresarial.service';
import { RecursosEmpresarialService } from '../fluxo/pecas/direitos/empresarial/recurso.empresarial.service';
import { PecasDireitosService } from '../fluxo/pecas/direitos/pecas.direitos.service';
import { PeticaoInicialPenalService } from '../fluxo/pecas/direitos/penal/peticao.inicial.penal.service';
import { PeticaoIntermediariaPenalService } from '../fluxo/pecas/direitos/penal/peticao.intermed.penal.service';
import { RecursosPenalService } from '../fluxo/pecas/direitos/penal/recurso.penal.service';
import { PeticaoInicialPrevidenciarioService } from '../fluxo/pecas/direitos/previdenciario/peticao.inicial.previdenciario.service';
import { PeticaoIntermediariaPrevidenciarioService } from '../fluxo/pecas/direitos/previdenciario/peticao.intermed.previdenciario.service';
import { RecursosPrevidenciarioService } from '../fluxo/pecas/direitos/previdenciario/recurso.previdenciario.service';
import { PeticaoInicialTrabalhoService } from '../fluxo/pecas/direitos/trabalho/peticao.inicial.trabalho.service';
import { PeticaoIntermediariaTrabalhoService } from '../fluxo/pecas/direitos/trabalho/peticao.intermed.trabalho.service';
import { RecursosTrabalhoService } from '../fluxo/pecas/direitos/trabalho/recurso.trabalho.service';
import { PeticaoInicialTributarioService } from '../fluxo/pecas/direitos/tributario/peticao.inicial.tributario.service';
import { PeticaoIntermediariaTributarioService } from '../fluxo/pecas/direitos/tributario/peticao.intermed.tributario.service';
import { RecursosTributariosService } from '../fluxo/pecas/direitos/tributario/recurso.tributario.service';
import { PeticaoIntermediariaService } from '../fluxo/pecas/menus/intermediaria/fluxo.peticao.intermed.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { FluxoDocumentoService } from 'src/fluxo/documentos/fluxo.documento.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [
    WebhookService,
    FluxoService,
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
  ],
})
export class WebhookModule {}

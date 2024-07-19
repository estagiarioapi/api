import { Injectable } from '@nestjs/common';
import { PeticaoInicialAdministrativoService } from './administrativo/peticao.inicial.administrativo.service';
import { PeticaoIntermediariaAdministrativoService } from './administrativo/peticao.intermed.administrativo.service';
import { RecursosAdministrativoService } from './administrativo/recurso.administrativo.service';
import { PeticaoIncialCivilService } from './civil/peticao.inicial.civil.service';
import { PeticaoIntermediariaCivilService } from './civil/peticao.intermed.civil.service';
import { RecursosCivilService } from './civil/recurso.civil.service';
import { PeticaoInicialConstitucionalService } from './constitucional/peticao.inicial.constitucional.service';
import { PeticaoIntermedConstitucionalService } from './constitucional/peticao.intermed.constitucional.service';
import { RecursosConstitucionalService } from './constitucional/recurso.constitucional.service';
import { PeticaoInicialEmpresarialService } from './empresarial/peticao.inicial.empresarial.service';
import { PeticaoIntermediariaEmpresarialService } from './empresarial/peticao.intermed.empresarial.service';
import { RecursosEmpresarialService } from './empresarial/recurso.empresarial.service';
import { PeticaoInicialPenalService } from './penal/peticao.inicial.penal.service';
import { PeticaoIntermediariaPenalService } from './penal/peticao.intermed.penal.service';
import { RecursosPenalService } from './penal/recurso.penal.service';
import { PeticaoInicialPrevidenciarioService } from './previdenciario/peticao.inicial.previdenciario.service';
import { PeticaoIntermediariaPrevidenciarioService } from './previdenciario/peticao.intermed.previdenciario.service';
import { RecursosPrevidenciarioService } from './previdenciario/recurso.previdenciario.service';
import { PeticaoInicialTrabalhoService } from './trabalho/peticao.inicial.trabalho.service';
import { PeticaoIntermediariaTrabalhoService } from './trabalho/peticao.intermed.trabalho.service';
import { RecursosTrabalhoService } from './trabalho/recurso.trabalho.service';
import { PeticaoInicialTributarioService } from './tributario/peticao.inicial.tributario.service';
import { PeticaoIntermediariaTributarioService } from './tributario/peticao.intermed.tributario.service';
import { RecursosTributariosService } from './tributario/recurso.tributario.service';

@Injectable()
export class PecasDireitosService {
  constructor(
    private inicialCivil: PeticaoIncialCivilService,
    private inicialConstitucional: PeticaoInicialConstitucionalService,
    private inicialEmpresarial: PeticaoInicialEmpresarialService,
    private inicialAdministrativo: PeticaoInicialAdministrativoService,
    private inicialPenal: PeticaoInicialPenalService,
    private inicialPrevidenciario: PeticaoInicialPrevidenciarioService,
    private inicialTrabalho: PeticaoInicialTrabalhoService,
    private inicialTributario: PeticaoInicialTributarioService,
    private intermedCivil: PeticaoIntermediariaCivilService,
    private intermedConstitucional: PeticaoIntermedConstitucionalService,
    private intermedEmpresarial: PeticaoIntermediariaEmpresarialService,
    private intermedAdministrativo: PeticaoIntermediariaAdministrativoService,
    private intermedPenal: PeticaoIntermediariaPenalService,
    private intermedPrevidenciario: PeticaoIntermediariaPrevidenciarioService,
    private intermedTrabalho: PeticaoIntermediariaTrabalhoService,
    private intermedTributario: PeticaoIntermediariaTributarioService,
    private recursoCivil: RecursosCivilService,
    private recursoConstitucional: RecursosConstitucionalService,
    private recursoEmpresarial: RecursosEmpresarialService,
    private recursoAdministrativo: RecursosAdministrativoService,
    private recursoPenal: RecursosPenalService,
    private recursoPrevidenciario: RecursosPrevidenciarioService,
    private recursoTrabalho: RecursosTrabalhoService,
    private recursoTributario: RecursosTributariosService,
  ) {}
  async sendPeticaoInicial(phoneNumber: string, menuId: string) {
    switch (menuId) {
      case '85':
        return this.inicialCivil.sendAcaoDeAlimentos(phoneNumber);
      case '86':
        return this.inicialCivil.sendAcaoIndenizatoria(phoneNumber);
      case '87':
        return this.inicialCivil.sendAcaoMonitoria(phoneNumber);
      case '88':
        return this.inicialCivil.sendAntecipacaoDeTutela(phoneNumber);
      case '89':
        return this.inicialCivil.sendExecPorQuantia(phoneNumber);
      case '90':
        return this.inicialCivil.sendAcaoDeDespejo(phoneNumber);
      case '91':
        return this.inicialCivil.sendAcaoDeCobrança(phoneNumber);
      case '92':
        return this.inicialCivil.sendDeclaratoriaInexistenciaDebito(
          phoneNumber,
        );
      case '93':
        return this.inicialCivil.sendObrigacaoFazer(phoneNumber);
      case '94':
        return this.inicialCivil.sendPeticaoInicial(phoneNumber);
      case '95':
        return this.inicialEmpresarial.sendExecPorQuantiaCerta(phoneNumber);
      case '96':
        return this.inicialEmpresarial.sendDissolucaoParcial(phoneNumber);
      case '97':
        return this.inicialEmpresarial.sendAcaoRenovatoria(phoneNumber);
      case '98':
        return this.inicialEmpresarial.sendResolucaoDeSociedade(phoneNumber);
      case '99':
        return this.inicialEmpresarial.sendAcaoMonitoria(phoneNumber);
      case '100':
        return this.inicialEmpresarial.sendObrigacaoDeNaoFazer(phoneNumber);
      case '101':
        return this.inicialEmpresarial.sendPeticaoInicial(phoneNumber);
      case '102':
        return this.inicialEmpresarial.sendAcaoRestituicao(phoneNumber);
      case '103':
        return this.inicialEmpresarial.sendAcaoRevocatoria(phoneNumber);
      case '104':
        return this.inicialPenal.sendQueixaCrime(phoneNumber);
      case '105':
        return this.inicialPenal.sendHabeasCorpus(phoneNumber);
      case '106':
        return this.inicialPenal.sendRevisaoCriminal(phoneNumber);
      case '107':
        return this.inicialPenal.sendRelaxamentoDePrisao(phoneNumber);
      case '108':
        return this.inicialConstitucional.sendMandadoDeSeguranca(phoneNumber);
      case '109':
        return this.inicialConstitucional.sendAcaoPopular(phoneNumber);
      case '110':
        return this.inicialConstitucional.sendMandadoInjuncaoColetivo(
          phoneNumber,
        );
      case '111':
        return this.inicialConstitucional.sendAcaoCivilPublica(phoneNumber);
      case '112':
        return this.inicialConstitucional.sendHabeasData(phoneNumber);
      case '113':
        return this.inicialConstitucional.sendMandadoDeSegurançaColetivo(
          phoneNumber,
        );
      case '114':
        return this.inicialConstitucional.sendReclamacaoConstitucional(
          phoneNumber,
        );
      case '115':
        return this.inicialTrabalho.sendReclamatoriaTrabalhista(phoneNumber);
      case '116':
        return this.inicialTrabalho.sendConsignacaoPagamento(phoneNumber);
      case '117':
        return this.inicialTrabalho.sendPeticaoHomologAcordoTrabalhista(
          phoneNumber,
        );
      case '118':
        return this.inicialTrabalho.sendMandadoDeSeguranca(phoneNumber);
      case '119':
        return this.inicialTributario.sendMandadoDeSeguranca(phoneNumber);
      case '120':
        return this.inicialTributario.sendRepeticaoDeIndebito(phoneNumber);
      case '121':
        return this.inicialTributario.sendAcaoAnulatoria(phoneNumber);
      case '122':
        return this.inicialTributario.sendExcecaoDePreExecutividade(
          phoneNumber,
        );
      case '123':
        return this.inicialTributario.sendInexistenciaRelacaoJuridica(
          phoneNumber,
        );
      case '124':
        return this.inicialTributario.sendRepeticaoDeIndebito(phoneNumber);
      case '125':
        return this.inicialTributario.sendEmbargosExecucaoFiscal(phoneNumber);
      case '126':
        return this.inicialAdministrativo.sendAcaoOrdinaria(phoneNumber);
      case '127':
        return this.inicialAdministrativo.sendMandadoDeSeguranca(phoneNumber);
      case '128':
        return this.inicialAdministrativo.sendAcaoPopular(phoneNumber);
      case '129':
        return this.inicialAdministrativo.sendAcaoAnulatoria(phoneNumber);
      case '130':
        return this.inicialAdministrativo.sendAcaoCivilPublica(phoneNumber);
      case '131':
        return this.inicialAdministrativo.sendAcaoResponsabilidadeCivil(
          phoneNumber,
        );
      case '132':
        return this.inicialAdministrativo.sendAcaoDesapropriacaoIndireta(
          phoneNumber,
        );
      case '133':
        return this.inicialPrevidenciario.sendConcessaoAposentadoriaSeguradoEspecial(
          phoneNumber,
        );
      case '134':
        return this.inicialPrevidenciario.sendConcessaoAposentadoriaEspecial(
          phoneNumber,
        );
      case '135':
        return this.inicialPrevidenciario.sendConcessaoAposentadoriaPorIdade(
          phoneNumber,
        );
      case '136':
        return this.inicialPrevidenciario.sendConversaoTempoDeServicoEspecial(
          phoneNumber,
        );
      case '137':
        return this.inicialPrevidenciario.sendAposentadoriaPorInvalidez(
          phoneNumber,
        );
      case '138':
        return this.inicialPrevidenciario.sendConcessaoAuxilioDoenca(
          phoneNumber,
        );
      case '139':
        return this.inicialPrevidenciario.sendAmparoSocial(phoneNumber);
      case '140':
        return this.inicialPrevidenciario.sendConcessaoSalarioMaternidade(
          phoneNumber,
        );
      case '141':
        return this.inicialPrevidenciario.sendConcessaoAuxilioAcidente(
          phoneNumber,
        );
      default:
        console.log(`MenuId ${menuId} não possui ação associada.`);
    }
  }

  async sendPeticaoIntermediaria(phoneNumber: string, menuId: string) {
    switch (menuId) {
      case '142':
        return this.intermedCivil.sendEmbargosExecucao(phoneNumber);
      case '143':
        return this.intermedCivil.sendEmbargosDeTerceiro(phoneNumber);
      case '144':
        return this.intermedCivil.sendContestacao(phoneNumber);
      case '145':
        return this.intermedCivil.sendImpugnacaoContestacao(phoneNumber);
      case '146':
        return this.intermedCivil.sendContraEmbargosDeclaracao(phoneNumber);
      case '147':
        return this.intermedCivil.sendContraApelacao(phoneNumber);
      case '148':
        return this.intermedCivil.sendContraAgravoInstrumento(phoneNumber);
      case '149':
        return this.intermedCivil.sendIncidenteDesconPersonaJuridica(
          phoneNumber,
        );
      case '150':
        return this.intermedCivil.sendAlegacoesFinais(phoneNumber);
      case '151':
        return this.intermedEmpresarial.sendContestacao(phoneNumber);
      case '152':
        return this.intermedEmpresarial.sendImpugnacaoRelacaoDeCredores(
          phoneNumber,
        );
      case '153':
        return this.intermedEmpresarial.sendEmbargosExecucao(phoneNumber);
      case '154':
        return this.intermedEmpresarial.sendEmbargosDeTerceiro(phoneNumber);
      case '155':
        return this.intermedEmpresarial.sendImpugnacaoContestacao(phoneNumber);
      case '156':
        return this.intermedEmpresarial.sendContraEmbargoDeclaracao(
          phoneNumber,
        );
      case '157':
        return this.intermedEmpresarial.sendContraApelacao(phoneNumber);
      case '158':
        return this.intermedEmpresarial.sendContraAgravoInstrumento(
          phoneNumber,
        );
      case '159':
        return this.intermedEmpresarial.sendAlegacoesFinais(phoneNumber);
      case '160':
        return this.intermedEmpresarial.sendDesconsideracaoPersonaJuridica(
          phoneNumber,
        );
      case '161':
        return this.intermedPenal.sendRepostaAcusacao(phoneNumber);
      case '162':
        return this.intermedPenal.sendMemoriais(phoneNumber);
      case '163':
        return this.intermedConstitucional.sendContestacao(phoneNumber);
      case '164':
        return this.intermedConstitucional.sendImpugnacaoContestacao(
          phoneNumber,
        );
      case '165':
        return this.intermedConstitucional.sendContraEmbargosDeclaracao(
          phoneNumber,
        );
      case '166':
        return this.intermedConstitucional.sendContraApelacao(phoneNumber);
      case '167':
        return this.intermedConstitucional.sendContraAgravoInstrumento(
          phoneNumber,
        );
      case '168':
        return this.intermedConstitucional.sendAlegacoesFinais(phoneNumber);
      case '169':
        return this.intermedTrabalho.sendContestacao(phoneNumber);
      case '170':
        return this.intermedTrabalho.sendReconvencao(phoneNumber);
      case '171':
        return this.intermedTrabalho.sendContraRecursoOrdinario(phoneNumber);
      case '172':
        return this.intermedTrabalho.sendEmbargosExecucao(phoneNumber);
      case '173':
        return this.intermedTrabalho.sendReplica(phoneNumber);
      case '174':
        return this.intermedTrabalho.sendContraRecursoDeRevista(phoneNumber);
      case '175':
        return this.intermedTrabalho.sendAlegacoesFinais(phoneNumber);
      case '176':
        return this.intermedTributario.sendContestacao(phoneNumber);
      case '177':
        return this.intermedTributario.sendImpugnacaoContestacao(phoneNumber);
      case '178':
        return this.intermedTributario.sendContraEmbargosDeDeclaracao(
          phoneNumber,
        );
      case '179':
        return this.intermedTributario.sendContraApelacao(phoneNumber);
      case '180':
        return this.intermedTributario.sendAlegacoesFinais(phoneNumber);
      case '181':
        return this.intermedTributario.sendContraAgravoDeInstrumento(
          phoneNumber,
        );
      case '182':
        return this.intermedAdministrativo.sendContestacao(phoneNumber);
      case '183':
        return this.intermedAdministrativo.sendImpugnacaoContestacao(
          phoneNumber,
        );
      case '184':
        return this.intermedAdministrativo.sendContraEmbargosDeclaracao(
          phoneNumber,
        );
      case '185':
        return this.intermedAdministrativo.sendContraApelacao(phoneNumber);
      case '186':
        return this.intermedAdministrativo.sendContraAgravoInstrumento(
          phoneNumber,
        );
      case '187':
        return this.intermedAdministrativo.sendAlegacoesFinais(phoneNumber);
      case '188':
        return this.intermedPrevidenciario.sendContestacao(phoneNumber);
      case '189':
        return this.intermedPrevidenciario.sendImpugContestacao(phoneNumber);
      case '190':
        return this.intermedPrevidenciario.sendContraEmbargosDeclaracao(
          phoneNumber,
        );
      case '191':
        return this.intermedPrevidenciario.sendContraApelacao(phoneNumber);
      case '192':
        return this.intermedPrevidenciario.sendContraAgravoInstrumento(
          phoneNumber,
        );
      case '193':
        return this.intermedPrevidenciario.sendAlegacoesFinais(phoneNumber);
      default:
        console.log(`MenuId ${menuId} não possui ação associada.`);
    }
  }

  async sendRecurso(phoneNumber: string, menuId: string) {
    switch (menuId) {
      case '194':
        return this.recursoCivil.sendApelacao(phoneNumber);
      case '195':
        return this.recursoCivil.sendAgravoInstrumento(phoneNumber);
      case '196':
        return this.recursoCivil.sendAgravoInterno(phoneNumber);
      case '197':
        return this.recursoCivil.sendEmbargosDeDeclaracao(phoneNumber);
      case '198':
        return this.recursoCivil.sendRecursoOrdinario(phoneNumber);
      case '199':
        return this.recursoCivil.sendRecursoEspecial(phoneNumber);
      case '200':
        return this.recursoCivil.sendRecursoExtraordinario(phoneNumber);
      case '201':
        return this.recursoCivil.sendAgravoRecuroEspecialExtraordinario(
          phoneNumber,
        );
      case '202':
        return this.recursoCivil.sendEmbargosDivergencia(phoneNumber);
      case '203':
        return this.recursoEmpresarial.sendApelacao(phoneNumber);
      case '204':
        return this.recursoEmpresarial.sendAgravoDeInstrumento(phoneNumber);
      case '205':
        return this.recursoEmpresarial.sendAgravoInterno(phoneNumber);
      case '206':
        return this.recursoEmpresarial.sendEmbargosDeDeclaracao(phoneNumber);
      case '207':
        return this.recursoEmpresarial.sendRecursoExtraordinario(phoneNumber);
      case '208':
        return this.recursoEmpresarial.sendRecursoOrdinario(phoneNumber);
      case '209':
        return this.recursoEmpresarial.sendAgravoRecursoEspecialExtraordinario(
          phoneNumber,
        );
      case '210':
        return this.recursoPenal.sendApelacao(phoneNumber);
      case '211':
        return this.recursoPenal.sendRecursoSentidoEstrito(phoneNumber);
      case '212':
        return this.recursoPenal.sendAgravoEmExecucao(phoneNumber);
      case '213':
        return this.recursoPenal.sendRecursoOrdinarioConstitucional(
          phoneNumber,
        );
      case '214':
        return this.recursoPenal.sendRecursoEspecial(phoneNumber);
      case '215':
        return this.recursoPenal.sendRecursoExtraordinario(phoneNumber);
      case '216':
        return this.recursoPenal.sendCartaTestemunhavel(phoneNumber);
      case '217':
        return this.recursoPenal.sendEmbargosDeDeclaracao(phoneNumber);
      case '218':
        return this.recursoPenal.sendEmbargosInfringentes(phoneNumber);
      case '219':
        return this.recursoPenal.sendContraAoRecursoApelacao(phoneNumber);
      case '220':
        return this.recursoConstitucional.sendApelacao(phoneNumber);
      case '221':
        return this.recursoConstitucional.sendAgravoInstrumento(phoneNumber);
      case '222':
        return this.recursoConstitucional.sendAgravoInterno(phoneNumber);
      case '223':
        return this.recursoConstitucional.sendEmbargosDeclaracao(phoneNumber);
      case '224':
        return this.recursoConstitucional.sendRecursoOrdinario(phoneNumber);
      case '225':
        return this.recursoConstitucional.sendRecursoEspecial(phoneNumber);
      case '226':
        return this.recursoConstitucional.sendRecursoExtraordinario(
          phoneNumber,
        );
      case '227':
        return this.recursoConstitucional.sendAgravoRecursoEspecialExtraordinario(
          phoneNumber,
        );
      case '228':
        return this.recursoConstitucional.sendEmbargosDivergencia(phoneNumber);
      case '229':
        return this.recursoTrabalho.sendRecursoOrdinario(phoneNumber);
      case '230':
        return this.recursoTrabalho.sendAgravoPeticao(phoneNumber);
      case '231':
        return this.recursoTrabalho.sendAgravoDeInstrumento(phoneNumber);
      case '232':
        return this.recursoTrabalho.sendRecursoRevista(phoneNumber);
      case '233':
        return this.recursoTributario.sendApelacao(phoneNumber);
      case '234':
        return this.recursoTributario.sendAgravoInstrumento(phoneNumber);
      case '235':
        return this.recursoTributario.sendAgravoInterno(phoneNumber);
      case '236':
        return this.recursoTributario.sendEmbargosDeDeclaracao(phoneNumber);
      case '237':
        return this.recursoTributario.sendRecursoOrdinario(phoneNumber);
      case '238':
        return this.recursoTributario.sendRecursoEspecial(phoneNumber);
      case '239':
        return this.recursoTributario.sendRecursoExtraordinario(phoneNumber);
      case '240':
        return this.recursoTributario.sendAgravoRecursoEspecialExtraordinario(
          phoneNumber,
        );
      case '241':
        return this.recursoTributario.sendEmbargosDivergencia(phoneNumber);
      case '242':
        return this.recursoAdministrativo.sendApelacao(phoneNumber);
      case '243':
        return this.recursoAdministrativo.sendRecursoOrdinario(phoneNumber);
      case '244':
        return this.recursoAdministrativo.sendAgravoInstrumento(phoneNumber);
      case '245':
        return this.recursoAdministrativo.sendAgravoInterno(phoneNumber);
      case '246':
        return this.recursoAdministrativo.sendRecursoExtraordinario(
          phoneNumber,
        );
      case '247':
        return this.recursoAdministrativo.sendRecursoEspecialExtraordinario(
          phoneNumber,
        );
      case '248':
        return this.recursoAdministrativo.sendRecursoEspecial(phoneNumber);
      case '249':
        return this.recursoPrevidenciario.sendApelacao(phoneNumber);
      case '250':
        return this.recursoPrevidenciario.sendAgravoInstrumento(phoneNumber);
      case '251':
        return this.recursoPrevidenciario.sendAgravoInterno(phoneNumber);
      case '252':
        return this.recursoPrevidenciario.sendEmbargosDeclaracao(phoneNumber);
      case '253':
        return this.recursoPrevidenciario.sendRecursoOrdinario(phoneNumber);
      case '254':
        return this.recursoPrevidenciario.sendRecursoEspecial(phoneNumber);
      case '255':
        return this.recursoPrevidenciario.sendRecursoExtraordinario(
          phoneNumber,
        );
      case '256':
        return this.recursoPrevidenciario.sendAgravoRecursoEspecialExtraordinario(
          phoneNumber,
        );
      case '257':
        return this.recursoPrevidenciario.sendEmbargosDivergencia(phoneNumber);
      default:
        console.log(`MenuId ${menuId} não possui ação associada.`);
        break;
    }
  }
}

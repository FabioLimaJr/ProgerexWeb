program ProgerexWeb;

uses
  FastMM4,
  IWRtlFix,
  IWJclStackTrace,
  IWJclDebug,
  IWStartHSys,
  uFrmPadrao in '..\Source\Padrao\uFrmPadrao.pas' {FrmPadrao: TIWAppForm},
  uServerController in '..\Source\Controller\uServerController.pas' {IWServerController: TIWServerControllerBase},
  uUserSessionUnit in '..\Source\Controller\uUserSessionUnit.pas' {IWUserSession: TIWUserSessionBase},
  uFrmLogin in '..\Source\Page\uFrmLogin.pas' {FrmLogin: TIWAppForm},
  Template.Litam in '..\Library\Template.Litam.pas',
  SweetAlert2 in '..\Library\SweetAlert2.pas',
  uFrmIndex in '..\Source\Page\uFrmIndex.pas' {FrmIndex: TIWAppForm},
  ProgerexConfig in '..\Library\ProgerexConfig.pas';

{$R *.res}

begin
  TIWStartHSys.Execute(True);
end.

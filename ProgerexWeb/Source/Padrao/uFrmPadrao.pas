unit uFrmPadrao;

interface

uses
  Classes, SysUtils, IWAppForm, IWApplication, IWColor, IWTypes, IWVCLComponent,
  IWBaseLayoutComponent, IWBaseContainerLayout, IWContainerLayout,
  IWTemplateProcessorHTML, Template.Litam, SweetAlert2, ProgerexConfig,
  uServerController;

type
  TFrmPadrao = class(TIWAppForm)
    TPS: TIWTemplateProcessorHTML;
    procedure TPSUnknownTag(const AName: string; var VValue: string);
    procedure IWAppFormCreate(Sender: TObject);
  public
  end;

implementation

{$R *.dfm}




procedure TFrmPadrao.IWAppFormCreate(Sender: TObject);
begin
  if self.Name = 'FrmLogin' then
  begin
    TPS.MasterTemplate := '';
    TPS.Templates.Default := 'app/' + Self.Name + '.html';
  end
  else
  begin
    TPS.MasterTemplate := 'app/master.html';
    TPS.Templates.Default := 'app/' + Self.Name + '.html';
  end;

end;

procedure TFrmPadrao.TPSUnknownTag(const AName: string; var VValue: string);
begin
  if AName = 'appname' then
    VValue := AppName;

  if AName = 'version' then
    VValue := version;

  if AName = 'softhouse' then
    VValue := SoftHouse;

  if AName = 'usuariologado' then
    VValue := UserSession.UsuarioLogado;

  if AName = 'head' then
    if self.Name = 'FrmLogin' then
      VValue := GetHeadLogin + GetLibCssSweetAlert2
    else
      VValue := GetHead;

  if AName = 'footer' then
    if self.Name = 'FrmLogin' then
      VValue := GetFooterLogin + GetJsSweetAlert2
    else
      VValue := GetFooter;

  if AName = 'title' then
    VValue := Self.Title;


end;

end.

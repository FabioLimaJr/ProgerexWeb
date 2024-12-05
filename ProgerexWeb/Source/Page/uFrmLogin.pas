unit uFrmLogin;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, uFrmPadrao, IWCompButton, IWVCLBaseControl, IWBaseControl, IWBaseHTMLControl, IWControl, IWCompEdit,
  IWVCLComponent, IWBaseLayoutComponent, IWBaseContainerLayout,
  IWContainerLayout, IWTemplateProcessorHTML, IWHTMLTag, SweetAlert2, uFrmIndex,
  uServerController;

type
  TFrmLogin = class(TFrmPadrao)
    edtUsuario: TIWEdit;
    BTNLOGIN: TIWButton;
    edtSenha: TIWEdit;
    BTNRECUPERAR: TIWButton;
    procedure edtUsuarioHTMLTag(ASender: TObject; ATag: TIWHTMLTag);
    procedure edtSenhaHTMLTag(ASender: TObject; ATag: TIWHTMLTag);
    procedure BTNLOGINAsyncClick(Sender: TObject; EventParams: TStringList);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmLogin: TFrmLogin;

implementation

{$R *.dfm}

procedure TFrmLogin.edtUsuarioHTMLTag(ASender: TObject; ATag: TIWHTMLTag);
begin
  inherited;
  atag.add('placeholder="Informe seu Usuário');
end;

procedure TFrmLogin.BTNLOGINAsyncClick(Sender: TObject; EventParams: TStringList);
begin
  inherited;
   //WebApplication.ShowMessage('CLICOU NO LOGIN');

   if edtUsuario.Text = '' then
   begin
    WebApplication.CallBackResponse.AddJavaScriptToExecute(swalError('Erro!', 'Usuário não informado!' + edtUsuario.Text));
    Exit;
   end;

   if edtSenha.Text = '' then
   begin
    WebApplication.CallBackResponse.AddJavaScriptToExecute(swalError('Erro!', 'Informe sua senha!'));
    Exit;
   end;

   UserSession.UsuarioLogado := 'Fábio Lima';
   UserSession.CodUsuario := 1;
   UserSession.EmailUsuario := 'fabiodelima.jr@gmail.com';

   FrmIndex := TFrmIndex.Create(self);
   FrmIndex.Show;
end;

procedure TFrmLogin.edtSenhaHTMLTag(ASender: TObject; ATag: TIWHTMLTag);
begin
  inherited;
  atag.add('placeholder="***********"');
end;

initialization
  TFrmLogin.SetAsMainForm;

end.

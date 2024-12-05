unit uUserSessionUnit;

{
  This is a DataModule where you can add components or declare fields that are specific to 
  ONE user. Instead of creating global variables, it is better to use this datamodule. You can then
  access the it using UserSession.
}
interface

uses
  IWUserSessionBase, SysUtils, Classes;

type
  TIWUserSession = class(TIWUserSessionBase)
  private
  FCodUsuario: LongInt;
  FUsuarioLogado: String;
  FEmailUsuario: String;
  procedure SetEmailUsuario(const Value: String);
  procedure SetUsuarioLogado(const Value: String);
  procedure SetCodUsuario(const Value: LongInt);
    { Private declarations }
  public

    property CodUsuario: LongInt read FCodUsuario write SetCodUsuario;
    property UsuarioLogado: String read FUsuarioLogado write SetUsuarioLogado;
    property EmailUsuario: String read FEmailUsuario write SetEmailUsuario;
  end;

implementation

{$R *.dfm}

procedure TIWUserSession.SetEmailUsuario(const Value: string);
begin
  FEmailUsuario := Value;
end;

procedure TIWUserSession.SetUsuarioLogado(const Value: string);
begin
  FUsuarioLogado := Value;
end;

procedure TIWUserSession.SetCodUsuario(const Value: LongInt);
begin
  FCodUsuario := Value;
end;




end.
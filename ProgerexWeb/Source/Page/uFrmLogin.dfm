inherited FrmLogin: TFrmLogin
  Width = 674
  Height = 337
  Title = 'Login'
  ExplicitWidth = 674
  ExplicitHeight = 337
  DesignLeft = 2
  DesignTop = 2
  object edtUsuario: TIWEdit [0]
    Left = 40
    Top = 80
    Width = 361
    Height = 32
    Css = 'form-control'
    StyleRenderOptions.RenderBorder = False
    FriendlyName = 'edtUsuario'
    SubmitOnAsyncEvent = True
  end
  object BTNLOGIN: TIWButton [1]
    Left = 120
    Top = 216
    Width = 120
    Height = 30
    Caption = 'BTNLOGIN'
    Color = clBtnFace
    FriendlyName = 'BTNLOGIN'
    OnAsyncClick = BTNLOGINAsyncClick
  end
  object edtSenha: TIWEdit [2]
    Left = 40
    Top = 152
    Width = 361
    Height = 32
    OnHTMLTag = edtSenhaHTMLTag
    Css = 'form-control'
    StyleRenderOptions.RenderBorder = False
    FriendlyName = 'edtSenha'
    SubmitOnAsyncEvent = True
    DataType = stPassword
  end
  object BTNRECUPERAR: TIWButton [3]
    Left = 281
    Top = 216
    Width = 120
    Height = 30
    Caption = 'BTNRECUPERAR'
    Color = clBtnFace
    FriendlyName = 'BTNRECUPERAR'
  end
end

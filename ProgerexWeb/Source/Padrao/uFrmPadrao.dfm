object FrmPadrao: TFrmPadrao
  Left = 0
  Top = 0
  Width = 555
  Height = 400
  RenderInvisibleControls = True
  AllowPageAccess = True
  ConnectionMode = cmAny
  OnCreate = IWAppFormCreate
  Background.Fixed = False
  LayoutMgr = TPS
  HandleTabs = False
  LeftToRight = True
  LockUntilLoaded = True
  LockOnSubmit = True
  ShowHint = True
  DesignLeft = 8
  DesignTop = 8
  object TPS: TIWTemplateProcessorHTML
    MasterFormTag = False
    TagType = ttIntraWeb
    OnUnknownTag = TPSUnknownTag
    RenderStyles = False
    Left = 488
    Top = 32
  end
end

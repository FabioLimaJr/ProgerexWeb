object IWServerController: TIWServerController
  OldCreateOrder = False
  AppName = 'MyApp'
  Description = 'My IntraWeb Application'
  DisplayName = 'IntraWeb Application'
  Port = 80
  Version = '15.4.0'
  OnNewSession = IWServerControllerBaseNewSession
  Height = 310
  Width = 342
end

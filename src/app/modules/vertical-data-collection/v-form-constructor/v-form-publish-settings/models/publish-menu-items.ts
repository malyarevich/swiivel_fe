export abstract class PublishMenuItems {
  public static conditions = 'conditions';
  public static settings = 'settings';
  public static automation = 'automation';
  public static redirect = 'redirect';
  public static titles = {
    conditions: 'Conditions Review',
    settings: 'Publish Settings',
    automation: 'Automation',
    redirect: 'Redirect Pages',
  };
  public static stateSub = {
    settings: {
      types: {
        online: "online",
        pdf: "pdf",
      },
      names: {
        online: "Online form",
        pdf: "PDF form",
      },
    },
  };
}
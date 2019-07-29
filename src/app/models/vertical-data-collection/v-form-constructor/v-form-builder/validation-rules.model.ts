export class ValidationRulesModel {

  public static shortTextValidators = [
    {label: 'Alphabetic', value: 'alpha'},
    {label: 'Alpha Numeric', value: 'alpha_num'},
    {label: 'Alpha Numeric Dash', value: 'alpha_dash'},
    {label: 'Email', value: 'email'},
    {label: 'Numeric', value: 'numeric'},
    {label: 'String', value: 'string'},
    {label: 'URL', value: 'url'},
  ];

  public static longTextValidators = [
    {label: 'Alphabetic', value: 'alpha'},
    {label: 'Alpha Numeric', value: 'alpha_num'},
    {label: 'Alpha Numeric Dash', value: 'alpha_dash'},
    {label: 'Email', value: 'email'},
    {label: 'Numeric', value: 'numeric'},
    {label: 'String', value: 'string'},
    {label: 'URL', value: 'url'},
  ];
  public static numberTextValidators = [
    {label: 'Numeric', value: 'numeric'},
  ];

  public static multipleOptionsValidators = [
  ];

  public static dropDownListValidators = [
    {label: 'In', value: 'in'},
  ];

  public static dateTimeValidators = [
    {label: 'Data', value: 'data'},
  ];

  public static timeValidators = [
    {label: 'Time', value: 'time'},
  ];

  public static emailValidators = [
    {label: 'Email', value: 'email'},
  ];

  public static phoneNumberValidators = [
    {label: 'Phone Number', value: 'phone_number'},
  ];

  public static hebrewDateValidators = [
    {label: 'Data', value: 'data'},
  ];

  public static labelValidators = [
    {label: 'Alphabetic', value: 'alpha'},
    {label: 'Alpha Numeric', value: 'alpha_num'},
    {label: 'Alpha Numeric Dash', value: 'alpha_dash'},
    {label: 'Numeric', value: 'numeric'},
    {label: 'String', value: 'string'},
  ];

  public static emptyLineValidators = [
  ];
}
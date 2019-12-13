export class SimulationData {
  messageType: string;
  path: string;
  searchKeyword: string;
  productName: string;
  isDefault: string;
  partnerId: string;
  contentType: string;
  payload: string;
  searchValue: string;
  fileName: string;

  constructor(messageType: string,
    path: string,
    searchKeyword: string,
    productName: string,
    isDefault: string,
    partnerId: string,
    contentType: string,
    payload: string,
    searchValue: string,
    fileName: string)
    {
    this.messageType = messageType;
    this.path = path;
    this.searchKeyword = searchKeyword;
    this.productName = productName;
    this.partnerId = partnerId;
    this.contentType = contentType;
    this.payload = payload;
    this.isDefault = isDefault;
    this.searchValue = searchValue;
    this.fileName = fileName;
  }
}

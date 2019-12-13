import {Component, Input, OnInit} from '@angular/core';
import {ConfigParams} from "../model/configParams";
import {ProductServiceService} from "../service/product-service.service";
import { ActivatedRoute, Router } from '@angular/router';
import {HttpHeaders} from "@angular/common/http";
import {SimulationData} from "../model/simulationData";

@Component({
  selector: 'app-config-parameters',
  templateUrl: './config-parameters.component.html',
  styleUrls: ['./config-parameters.component.scss']
})
export class ConfigParametersComponent implements  OnInit{

  @Input() loadConfigParams: ConfigParams;
  fileToUpload: File = null;
  isDefault: string = "false";
  searchValue: string;
  searchKeyValue: string;
  path: string;
  partnerId: string;
  result: string;
  contentType: string;
  fileName: string;
  stimulationobj: SimulationData;
  disabledProperty: string = "";
  defaultCheckbox: string = "";
  fileLabelName: string = "No file Choosen";
  simulationDataList: SimulationData[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService) {
  }

  ngOnInit(){}

  onFileChange(files: FileList) {
    if (files.length > 1) {

      return false;
    }
    this.fileToUpload = files.item(0);
    this.fileLabelName = this.fileToUpload.name;
  }

  import(): void {
    this.fileName = this.fileToUpload.name
    this.contentType = this.fileToUpload.name.split(".")[1];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.result = fileReader.result.toString();
      this.constructJson();
    }
    fileReader.readAsText(this.fileToUpload);

  }

  getCheckBoxValue(event) {
    console.log(this.defaultCheckbox);
    if (this.defaultCheckbox) {
      this.disabledProperty = "disabled";
    } else {
      this.disabledProperty = "";
    }
    this.isDefault = this.defaultCheckbox ? "true": "false";
  }
  getSearchValue(event) {
    this.searchValue = event.target.value;
  }

  getSearchKeyValue(event) {
    this.searchKeyValue = event.target.value;
  }
  getPatnerKeyValue(event) {
    this.partnerId = event.target.value;
  }

  getPathValue(event) {
    this.path = event.target.value;
  }

  constructJson () {
    this.stimulationobj = new SimulationData(
      this.loadConfigParams.messageType,
      this.path,
      this.searchKeyValue,
      this.loadConfigParams.productName,
      this.isDefault,
      this.partnerId,
      this.contentType,
      this.result,
      this.searchValue,
      this.fileName);
    this.productService.save(this.stimulationobj).subscribe( configData => {
       console.log(configData);
  });
  }
}
